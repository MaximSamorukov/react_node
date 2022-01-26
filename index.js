const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there and here'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`I'm starting at port ${PORT}`);
});