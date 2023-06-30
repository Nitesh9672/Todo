const express = require("express");
const app = express();
const CORS = require("cors");
const mongoose = require("mongoose");
const PORT = 3333;
app.use(CORS());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/taskitems", require("./routes/items"));
app.use("/taskitem", require("./routes/item"));
app.use("/deleteTask", require("./routes/deleteitem"));

mongoose.connect("mongodb://127.0.0.1:27017/todo").then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
