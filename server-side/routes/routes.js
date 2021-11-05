const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const { db } = require("../database/db");

app.post("/api/users", (req, res) => {
    let data = req.body;
    db.addUser(res, data);
  });
app.post("/api/login", (req, res) => {
    let data = req.body;
    db.login(res, data);
  });

  app.put("/api/users/:id", (req, res) => {
    let { id } = req.params;
    let data = req.body;
    db.updateUser(res, id, data);
  });
  app.get("/api/users/:id", (req, res) => {
    let { id } = req.params;
    db.getUser(res, id);
  });
  app.get("/api/users", (req, res) => {
    db.getUsers(res);
  });
  app.delete("/api/users/:id", (req, res) => {
    let { id } = req.params;
    db.deleteUser(res, id);
  }); 
exports.app = app;