const express = require("express");

const db = require("./db/db-connection");
const GetActive = require("./controllers/GetActive");
const AddItem = require("./controllers/AddItem");
const DeleteItem = require("./controllers/DeleteItem");
const ModifyItemActivity = require("./controllers/ModifyItemActivity");
const PopulateDB = require("./db/PopulateDB");

const cors = require("cors");

const port = process.env.PORT || "3001";

const app = express();

app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors());

app.get("/GetActive", (req, res) => {
  GetActive.handleGetActive(req, res, db);
});

app.post("/AddItem", (req, res) => {
  AddItem.handleAddItem(req, res, db);
});

app.put("/ModifyItemActivity", (req, res) => {
  ModifyItemActivity.handleModifyItemActivity(req, res, db);
});

app.delete("/DeleteItem", (req, res) => {
  DeleteItem.handleDeleteItem(req, res, db);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  PopulateDB.PopulateDBHandler(db);
});
