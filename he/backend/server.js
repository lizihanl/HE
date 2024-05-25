const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectToDatabase = require('./database');

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to My Online Store Backend');
});

(async () => {
  const db = await connectToDatabase();
  if (db) {
      app.listen(port, () => {
          console.log(`Server is running on port ${port}`);
      });
  }
})();
