const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to My Online Store Backend');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
