import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import products from "./data/products.js";

const app = express();
const port = 4001;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/products", (req, res) => {
  res.json({
    data: products,
  });
});

app.get("/product/view/:id", (req, res) => {
  const productId = +req.params.id;
  const hasFound = products.find((post) => post.id === productId);

  if (!hasFound) {
    return res.status(404).json({
      message: `Product ${productId} not found`,
    });
  }

  const product = products.filter((product) => product.id === productId);

  return res.json({
    data: product[0],
  });
});

app.post("/products", (req, res) => {
  let newProductId;
  let latestProductId = products[products.length - 1]?.id;

  if (latestProductId) {
    newProductId = latestProductId + 1;
  } else {
    newProductId = 1;
  }

  products.push({
    id: newProductId,
    ...req.body,
  });

  return res.json({
    message: "Product has been created.",
  });
});

app.put("/product/edit/:id", (req, res) => {
  const updatedProduct = req.body;
  const productId = +req.params.id;

  const hasFound = products.find((product) => product.id === productId);

  if (!hasFound) {
    return res.status(404).json({
      message: `Product ${productId} not found`,
    });
  }

  const productIndex = products.findIndex((post) => {
    return post.id === +productId;
  });

  products[productIndex] = {
    id: productId,
    ...updatedProduct,
  };

  return res.json({
    message: `Product ${productId} has been updated.`,
  });
});

app.delete("/products/:id", (req, res) => {
  const productId = +req.params.id;

  const hasFound = products.find((product) => product.id === productId);

  if (!hasFound) {
    return res.status(404).json({
      message: `Product ${productId} not found`,
    });
  }

  products = products.filter((product) => {
    return productId !== product.id;
  });

  return res.json({
    message: `Product ${productId} has been deleted.`,
  });
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});