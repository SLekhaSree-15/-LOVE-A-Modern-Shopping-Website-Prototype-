const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');
const multer = require('multer');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true,
}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});
const upload = multer({ storage });

async function openDb() {
  return open({
    filename: './db/products.db',
    driver: sqlite3.Database
  });
}

// Middleware to init cart if not present
app.use((req, res, next) => {
  if (!req.session.cart) req.session.cart = [];
  res.locals.cartCount = req.session.cart.reduce((sum, item) => sum + item.quantity, 0);
  next();
});

// HOME - list all products
app.get('/', async (req, res) => {
  const db = await openDb();
  const products = await db.all('SELECT * FROM products');
  const user = req.session.user || 'Guest';
  res.render('index', { user, products, cartCount: res.locals.cartCount });
});

// PRODUCTS by category
app.get('/products/:category', async (req, res) => {
  const db = await openDb();
  const category = req.params.category;
  const products = await db.all('SELECT * FROM products WHERE category = ?', category);
  const user = req.session.user || 'Guest';
  res.render('products', { products, category, user, cartCount: res.locals.cartCount });
});

// ADD TO CART
app.post('/cart/add', async (req, res) => {
  const productId = parseInt(req.body.productId);

  if (!req.session.cart) req.session.cart = [];

  try {
    const db = await openDb();
    const product = await db.get('SELECT * FROM products WHERE id = ?', productId);

    if (!product) {
      return res.json({ success: false, message: 'Product not found' });
    }

    const existing = req.session.cart.find(item => item.id === productId);
    if (existing) {
      existing.quantity += 1;
    } else {
      req.session.cart.push({ ...product, quantity: 1 });
    }

    const cartCount = req.session.cart.reduce((sum, item) => sum + item.quantity, 0);
    res.json({ success: true, cartCount });
  } catch (err) {
    console.error(err);
    res.json({ success: false, message: 'Server error' });
  }
});




// VIEW CART
app.get('/cart', (req, res) => {
  const cart = req.session.cart || [];
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const user = req.session.user || 'Guest';
  res.render('cart', { cart, total,user });
});


// REMOVE from cart
app.post('/cart/remove', (req, res) => {
  const productId = req.body.productId;
  if (!req.session.cart) return res.redirect('/cart');

  req.session.cart = req.session.cart.filter(item => item.id !== productId);
  res.redirect('/cart');
});


// CHECKOUT
app.post('/checkout', (req, res) => {
  req.session.cart = [];
  res.send('Thank you for your purchase! Your cart has been cleared.');
});

// LOGIN and LOGOUT
app.get('/login', (req, res) => {
  res.render('login');
});
app.post('/login', (req, res) => {
  req.session.user = req.body.username || 'Guest';
  res.redirect('/');
});
app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
});

// UPLOAD product form
app.get('/upload', (req, res) => {
  res.render('upload', { message: null });
});

// HANDLE product upload
app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const { name, price, category } = req.body;
    if (!req.file) return res.render('upload', { message: 'Please upload an image.' });
    if (!name || !price || !category) return res.render('upload', { message: 'Please fill all fields.' });

    const imagePath = '/uploads/' + req.file.filename;
    const db = await openDb();
    await db.run(
      'INSERT INTO products (name, price, category, image) VALUES (?, ?, ?, ?)',
      [name, price, category, imagePath]
    );
    res.render('upload', { message: 'Product uploaded successfully!' });
  } catch (error) {
    console.error(error);
    res.render('upload', { message: 'Error uploading product.' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
