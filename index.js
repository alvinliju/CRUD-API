const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const app = express();
const uri =
  "mongodb+srv://notalvinn:bV4RCyJx8QAXhlEX@backenddb.qbhldig.mongodb.net/?retryWrites=true&w=majority";
const productRoute = require("./routes/product.route");
const {
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("./controllers/product.controller");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.get("/", (req, res) => {
  res.send("Hello world");
});

//product page
app.use("/api/products", productRoute);
//creates new products (create api)
app.post("/api/products/create", createProduct);

//finds one element in the db by id(read api)
app.get("/api/products/:id", getProduct);

//update a product(update api)
app.put("/api/products/:id", updateProduct);

//delete a product
app.delete("/api/products/:id", deleteProduct);

mongoose
  .connect(
    "mongodb+srv://notalvinn:bV4RCyJx8QAXhlEX@backenddb.qbhldig.mongodb.net/Node-API?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to database");
    app.listen(3000, () => {
      console.log("server started");
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
