const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');

async function seed() {
  const db = await open({
    filename: path.join(__dirname, 'db', 'products.db'),
    driver: sqlite3.Database
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      image TEXT,
      price REAL,
      category TEXT,
      gender TEXT,
      availability TEXT
    )
  `);

  await db.exec('DELETE FROM products');

const products = [
  // CLOTHING (20)
  { name: 'Classic White Tee', image: 'https://images.unsplash.com/photo-1618354691261-b1df2e5524c1?auto=format&fit=crop&w=400&q=80', price: 19.99, category: 'clothing', gender: 'men', availability: 'In Stock' },
  { name: 'Floral Summer Dress', image: 'https://images.unsplash.com/photo-1593032465171-c39c93c7768f?auto=format&fit=crop&w=400&q=80', price: 39.99, category: 'clothing', gender: 'women', availability: 'In Stock' },
  { name: 'Black Leather Jacket', image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=400&q=80', price: 89.99, category: 'clothing', gender: 'unisex', availability: 'In Stock' },
  { name: 'Blue Denim Jeans', image: 'https://images.unsplash.com/photo-1583003031923-5b84ec17a496?auto=format&fit=crop&w=400&q=80', price: 44.99, category: 'clothing', gender: 'men', availability: 'In Stock' },
  { name: 'Casual Hoodie', image: 'https://images.unsplash.com/photo-1602810318737-2bfa521a70a6?auto=format&fit=crop&w=400&q=80', price: 29.99, category: 'clothing', gender: 'unisex', availability: 'In Stock' },
  { name: 'Striped Shirt', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80', price: 25.99, category: 'clothing', gender: 'men', availability: 'In Stock' },
  { name: 'Summer Shorts', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80', price: 19.99, category: 'clothing', gender: 'women', availability: 'In Stock' },
  { name: 'Elegant Blouse', image: 'https://images.unsplash.com/photo-1520975918310-39035b7b00f8?auto=format&fit=crop&w=400&q=80', price: 35.99, category: 'clothing', gender: 'women', availability: 'In Stock' },
  { name: 'Winter Coat', image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=400&q=80', price: 120.00, category: 'clothing', gender: 'unisex', availability: 'In Stock' },
  { name: 'Yoga Pants', image: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c7c9?auto=format&fit=crop&w=400&q=80', price: 29.99, category: 'clothing', gender: 'women', availability: 'In Stock' },
  { name: 'Denim Jacket', image: 'https://images.unsplash.com/photo-1520975918357-407c0bfe8be4?auto=format&fit=crop&w=400&q=80', price: 59.99, category: 'clothing', gender: 'men', availability: 'In Stock' },
  { name: 'Chic Skirt', image: 'https://images.unsplash.com/photo-1541099649087-269edb7e0e4f?auto=format&fit=crop&w=400&q=80', price: 32.99, category: 'clothing', gender: 'women', availability: 'In Stock' },
  { name: 'Graphic Tee', image: 'https://images.unsplash.com/photo-1503342217505-1a3c45a62c2b?auto=format&fit=crop&w=400&q=80', price: 15.99, category: 'clothing', gender: 'men', availability: 'In Stock' },
  { name: 'Casual Blazer', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80', price: 75.99, category: 'clothing', gender: 'unisex', availability: 'In Stock' },
  { name: 'Striped Dress', image: 'https://images.unsplash.com/photo-1494572337058-b3ca67895dc1?auto=format&fit=crop&w=400&q=80', price: 45.99, category: 'clothing', gender: 'women', availability: 'In Stock' },
  { name: 'Sport Shorts', image: 'https://images.unsplash.com/photo-1503342217505-3b5d45a0621b?auto=format&fit=crop&w=400&q=80', price: 21.99, category: 'clothing', gender: 'men', availability: 'In Stock' },
  { name: 'Lightweight Scarf', image: 'https://images.unsplash.com/photo-1551385970-cf549b9f8f6f?auto=format&fit=crop&w=400&q=80', price: 12.99, category: 'clothing', gender: 'women', availability: 'In Stock' },
  { name: 'Long Sleeve Shirt', image: 'https://images.unsplash.com/photo-1542068829-1115f7259450?auto=format&fit=crop&w=400&q=80', price: 27.99, category: 'clothing', gender: 'men', availability: 'In Stock' },
  { name: 'Trench Coat', image: 'https://images.unsplash.com/photo-1556905055-7b4b6cf362d1?auto=format&fit=crop&w=400&q=80', price: 110.00, category: 'clothing', gender: 'unisex', availability: 'In Stock' },

  // SNEAKERS (20)
  { name: 'White Running Sneakers', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80', price: 69.99, category: 'sneakers', gender: 'men', availability: 'In Stock' },
  { name: 'Pink Athletic Sneakers', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80', price: 74.99, category: 'sneakers', gender: 'women', availability: 'In Stock' },
  { name: 'Black High-top Sneakers', image: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=400&q=80', price: 89.99, category: 'sneakers', gender: 'men', availability: 'In Stock' },
  { name: 'Blue Casual Sneakers', image: 'https://images.unsplash.com/photo-1531966662500-5aa3d55d8f43?auto=format&fit=crop&w=400&q=80', price: 65.99, category: 'sneakers', gender: 'unisex', availability: 'In Stock' },
  { name: 'Gray Running Shoes', image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=400&q=80', price: 59.99, category: 'sneakers', gender: 'men', availability: 'In Stock' },
  { name: 'White Slip-On Sneakers', image: 'https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=400&q=80', price: 49.99, category: 'sneakers', gender: 'women', availability: 'In Stock' },
  { name: 'Red Running Sneakers', image: 'https://images.unsplash.com/photo-1525186402429-8f8ec47c9721?auto=format&fit=crop&w=400&q=80', price: 72.99, category: 'sneakers', gender: 'men', availability: 'In Stock' },
  { name: 'Black Casual Sneakers', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80', price: 67.99, category: 'sneakers', gender: 'women', availability: 'In Stock' },
  { name: 'Gray Trail Sneakers', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80', price: 79.99, category: 'sneakers', gender: 'unisex', availability: 'In Stock' },
  { name: 'Blue Slip-On Sneakers', image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=400&q=80', price: 55.99, category: 'sneakers', gender: 'women', availability: 'In Stock' },
  { name: 'Sporty White Sneakers', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80', price: 69.99, category: 'sneakers', gender: 'men', availability: 'In Stock' },
  { name: 'Classic Black Sneakers', image: 'https://images.unsplash.com/photo-1519741495767-2b2f5c83abec?auto=format&fit=crop&w=400&q=80', price: 64.99, category: 'sneakers', gender: 'unisex', availability: 'In Stock' },
  { name: 'Pink Casual Sneakers', image: 'https://images.unsplash.com/photo-1525186402429-8f8ec47c9721?auto=format&fit=crop&w=400&q=80', price: 58.99, category: 'sneakers', gender: 'women', availability: 'In Stock' },
  { name: 'Green Running Sneakers', image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=400&q=80', price: 70.99, category: 'sneakers', gender: 'men', availability: 'In Stock' },
  { name: 'Black Trail Sneakers', image: 'https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=400&q=80', price: 85.99, category: 'sneakers', gender: 'unisex', availability: 'In Stock' },
  { name: 'White Sport Sneakers', image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=400&q=80', price: 73.99, category: 'sneakers', gender: 'women', availability: 'In Stock' },
  { name: 'Blue Running Sneakers', image: 'https://images.unsplash.com/photo-1531966662500-5aa3d55d8f43?auto=format&fit=crop&w=400&q=80', price: 69.99, category: 'sneakers', gender: 'men', availability: 'In Stock' },
  { name: 'Gray Slip-On Sneakers', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80', price: 54.99, category: 'sneakers', gender: 'women', availability: 'In Stock' },
  { name: 'Red Casual Sneakers', image: 'https://images.unsplash.com/photo-1519741495767-2b2f5c83abec?auto=format&fit=crop&w=400&q=80', price: 60.99, category: 'sneakers', gender: 'men', availability: 'In Stock' },

  // ELECTRONICS (20)
  { name: 'Smartphone X', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80', price: 699.99, category: 'electronics', gender: 'unisex', availability: 'In Stock' },
  { name: 'Wireless Headphones', image: 'https://images.unsplash.com/photo-1585386959984-a4155224b692?auto=format&fit=crop&w=400&q=80', price: 129.99, category: 'electronics', gender: 'unisex', availability: 'In Stock' },
  { name: 'Gaming Laptop', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', price: 999.99, category: 'electronics', gender: 'unisex', availability: 'In Stock' },
  { name: 'Smartwatch 2.0', image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=400&q=80', price: 199.99, category: 'electronics', gender: 'unisex', availability: 'In Stock' },
  { name: 'Bluetooth Speaker', image: 'https://images.unsplash.com/photo-1555617117-08d1fbbf4c5f?auto=format&fit=crop&w=400&q=80', price: 49.99, category: 'electronics', gender: 'unisex', availability: 'In Stock' },
  { name: '4K LED TV', image: 'https://images.unsplash.com/photo-1510557880182-3cc54b817b24?auto=format&fit=crop&w=400&q=80', price: 799.99, category: 'electronics', gender: 'unisex', availability: 'In Stock' },
  { name: 'Digital Camera', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', price: 349.99, category: 'electronics', gender: 'unisex', availability: 'In Stock' },
  { name: 'VR Headset', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=400&q=80', price: 299.99, category: 'electronics', gender: 'unisex', availability: 'In Stock' },
  { name: 'Fitness Tracker', image: 'https://images.unsplash.com/photo-1523475496153-3d6cc1e73f78?auto=format&fit=crop&w=400&q=80', price: 99.99, category: 'electronics', gender: 'unisex', availability: 'In Stock' },
  { name: 'Wireless Mouse', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', price: 24.99, category: 'electronics', gender: 'unisex', availability: 'In Stock' },
  { name: 'Mechanical Keyboard', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80', price: 89.99, category: 'electronics', gender: 'unisex', availability: 'In Stock' },
  { name: 'Portable Charger', image: 'https://images.unsplash.com/photo-1523265906063-87ef78505b27?auto=format&fit=crop&w=400&q=80', price: 19.99, category: 'electronics', gender: 'unisex', availability: 'In Stock' },
  { name: 'Smart Home Hub', image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=400&q=80', price: 149.99, category: 'electronics', gender: 'unisex', availability: 'In Stock' },
  { name: 'Drone Pro', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', price: 499.99, category: 'electronics', gender: 'unisex', availability: 'In Stock' },
  { name: 'Smart Thermostat', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80', price: 199.99, category: 'electronics', gender: 'unisex', availability: 'In Stock' },
  { name: 'Action Camera', image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=400&q=80', price: 249.99, category: 'electronics', gender: 'unisex', availability: 'In Stock' },
  { name: 'E-Reader', image: 'https://images.unsplash.com/photo-1525186402429-8f8ec47c9721?auto=format&fit=crop&w=400&q=80', price: 129.99, category: 'electronics', gender: 'unisex', availability: 'In Stock' },
  { name: 'Noise Cancelling Earbuds', image: 'https://images.unsplash.com/photo-1547023526-9ca9a16b311a?auto=format&fit=crop&w=400&q=80', price: 99.99, category: 'electronics', gender: 'unisex', availability: 'In Stock' },
  { name: 'Laptop Stand', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80', price: 29.99, category: 'electronics', gender: 'unisex', availability: 'In Stock' },
  { name: 'Smart Light Bulb', image: 'https://images.unsplash.com/photo-1525186402429-8f8ec47c9721?auto=format&fit=crop&w=400&q=80', price: 14.99, category: 'electronics', gender: 'unisex', availability: 'In Stock' },

  // ACCESSORIES (20)
  { name: 'Leather Wallet', image: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c7c9?auto=format&fit=crop&w=400&q=80', price: 49.99, category: 'accessories', gender: 'men', availability: 'In Stock' },
  { name: 'Gold Necklace', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80', price: 199.99, category: 'accessories', gender: 'women', availability: 'In Stock' },
  { name: 'Sunglasses', image: 'https://images.unsplash.com/photo-1525186402429-8f8ec47c9721?auto=format&fit=crop&w=400&q=80', price: 79.99, category: 'accessories', gender: 'unisex', availability: 'In Stock' },
  { name: 'Leather Belt', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=400&q=80', price: 35.99, category: 'accessories', gender: 'men', availability: 'In Stock' },
  { name: 'Silver Bracelet', image: 'https://images.unsplash.com/photo-1531966662500-5aa3d55d8f43?auto=format&fit=crop&w=400&q=80', price: 59.99, category: 'accessories', gender: 'women', availability: 'In Stock' },
  { name: 'Watch', image: 'https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=400&q=80', price: 149.99, category: 'accessories', gender: 'unisex', availability: 'In Stock' },
  { name: 'Silk Scarf', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80', price: 29.99, category: 'accessories', gender: 'women', availability: 'In Stock' },
  { name: 'Backpack', image: 'https://images.unsplash.com/photo-1541099649087-269edb7e0e4f?auto=format&fit=crop&w=400&q=80', price: 89.99, category: 'accessories', gender: 'unisex', availability: 'In Stock' },
  { name: 'Tie', image: 'https://images.unsplash.com/photo-1542068829-1115f7259450?auto=format&fit=crop&w=400&q=80', price: 19.99, category: 'accessories', gender: 'men', availability: 'In Stock' },
  { name: 'Earrings', image: 'https://images.unsplash.com/photo-1551385970-cf549b9f8f6f?auto=format&fit=crop&w=400&q=80', price: 39.99, category: 'accessories', gender: 'women', availability: 'In Stock' },
  { name: 'Keychain', image: 'https://images.unsplash.com/photo-1503342217505-1a3c45a62c2b?auto=format&fit=crop&w=400&q=80', price: 9.99, category: 'accessories', gender: 'unisex', availability: 'In Stock' },
  { name: 'Hat', image: 'https://images.unsplash.com/photo-1520975918310-39035b7b00f8?auto=format&fit=crop&w=400&q=80', price: 24.99, category: 'accessories', gender: 'unisex', availability: 'In Stock' },
  { name: 'Socks Pack', image: 'https://images.unsplash.com/photo-1525186402429-8f8ec47c9721?auto=format&fit=crop&w=400&q=80', price: 12.99, category: 'accessories', gender: 'unisex', availability: 'In Stock' },
  { name: 'Wallet Chain', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80', price: 14.99, category: 'accessories', gender: 'men', availability: 'In Stock' },
  { name: 'Makeup Bag', image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=400&q=80', price: 39.99, category: 'accessories', gender: 'women', availability: 'In Stock' },
  { name: 'Bracelet Set', image: 'https://images.unsplash.com/photo-1593032465171-c39c93c7768f?auto=format&fit=crop&w=400&q=80', price: 29.99, category: 'accessories', gender: 'women', availability: 'In Stock' },
  { name: 'Phone Case', image: 'https://images.unsplash.com/photo-1525186402429-8f8ec47c9721?auto=format&fit=crop&w=400&q=80', price: 15.99, category: 'accessories', gender: 'unisex', availability: 'In Stock' },
  { name: 'Sunglasses Case', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80', price: 11.99, category: 'accessories', gender: 'unisex', availability: 'In Stock' },
  { name: 'Wallet Organizer', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80', price: 21.99, category: 'accessories', gender: 'men', availability: 'In Stock' },

  // GROCERY (20)
  { name: 'Olive Oil', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', price: 12.99, category: 'grocery', gender: 'unisex', availability: 'In Stock' },
  { name: 'Organic Honey', image: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=400&q=80', price: 8.99, category: 'grocery', gender: 'unisex', availability: 'In Stock' },
  { name: 'Almonds', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', price: 10.99, category: 'grocery', gender: 'unisex', availability: 'In Stock' },
  { name: 'Brown Rice', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80', price: 4.99, category: 'grocery', gender: 'unisex', availability: 'In Stock' },
  { name: 'Organic Coffee Beans', image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=400&q=80', price: 14.99, category: 'grocery', gender: 'unisex', availability: 'In Stock' },
  { name: 'Pasta', image: 'https://images.unsplash.com/photo-1525186402429-8f8ec47c9721?auto=format&fit=crop&w=400&q=80', price: 3.99, category: 'grocery', gender: 'unisex', availability: 'In Stock' },
  { name: 'Tomato Sauce', image: 'https://images.unsplash.com/photo-1506812574058-fc75fa93fead?auto=format&fit=crop&w=400&q=80', price: 2.99, category: 'grocery', gender: 'unisex', availability: 'In Stock' },
  { name: 'Fresh Apples', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80', price: 1.49, category: 'grocery', gender: 'unisex', availability: 'In Stock' },
  { name: 'Bananas', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80', price: 0.99, category: 'grocery', gender: 'unisex', availability: 'In Stock' },
  { name: 'Whole Wheat Bread', image: 'https://images.unsplash.com/photo-1520975918310-39035b7b00f8?auto=format&fit=crop&w=400&q=80', price: 2.49, category: 'grocery', gender: 'unisex', availability: 'In Stock' },
  { name: 'Cheddar Cheese', image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=400&q=80', price: 4.99, category: 'grocery', gender: 'unisex', availability: 'In Stock' },
  { name: 'Fresh Milk', image: 'https://images.unsplash.com/photo-1525186402429-8f8ec47c9721?auto=format&fit=crop&w=400&q=80', price: 1.29, category: 'grocery', gender: 'unisex', availability: 'In Stock' },
  { name: 'Eggs (Dozen)', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80', price: 2.99, category: 'grocery', gender: 'unisex', availability: 'In Stock' },
  { name: 'Butter', image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&w=400&q=80', price: 3.49, category: 'grocery', gender: 'unisex', availability: 'In Stock' },
  { name: 'Yogurt', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&w=400&q=80', price: 2.49, category: 'grocery', gender: 'unisex', availability: 'In Stock' },
  { name: 'Orange Juice', image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&w=400&q=80', price: 3.99, category: 'grocery', gender: 'unisex', availability: 'In Stock' },
  { name: 'Cereal', image: 'https://images.unsplash.com/photo-1525186402429-8f8ec47c9721?auto=format&w=400&q=80', price: 4.49, category: 'grocery', gender: 'unisex', availability: 'In Stock' },
  { name: 'Peanut Butter', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&w=400&q=80', price: 5.99, category: 'grocery', gender: 'unisex', availability: 'In Stock' },
  { name: 'Granola Bars', image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&w=400&q=80', price: 6.99, category: 'grocery', gender: 'unisex', availability: 'In Stock' },
  { name: 'Chocolate Chips', image: 'https://images.unsplash.com/photo-1525186402429-8f8ec47c9721?auto=format&w=400&q=80', price: 3.99, category: 'grocery', gender: 'unisex', availability: 'In Stock' },
];

// Export this data so you can import into your project files
module.exports = products;





  for (const product of products) {
    await db.run(
      `INSERT INTO products (name, image, price, category, gender, availability)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [product.name, product.image, product.price, product.category, product.gender, product.availability]
    );
  }

  console.log('✅ Products inserted into the database!');

  await db.close();
}

seed().catch(err => {
  console.error(err);
});
