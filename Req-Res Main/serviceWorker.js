const express = require("express");
const app = express();
const port = 3000;
const products = require("./product.json");
app.listen(port, () => {
  console.log(`app litening on port ${port}`);
});

// app.get("/product", (req, res) => {
//   res.json(products);
// });

app.get("/product/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((product) => product.id === productId);
  if (!product) {
    res.status(404).send("Something went wrong");
  }
  res.json(product);
});

app.get("/product", (req, res) => {
  const count = parseInt(req.query.count);
  const offset = parseInt(req.query.offset);
  count > 0 && offset > 0
    ? res.json(products.slice(offset, offset + count))
    : res.json(products);
});
