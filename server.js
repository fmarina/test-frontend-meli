require("dotenv").config();
const express = require("express");
const cors = require("cors");

const productRoutes = require("./server/routes/product");

const PORT = process.env.PORT || 3003;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api", productRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
