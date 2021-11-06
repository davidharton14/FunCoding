const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(bodyParser.json());
const { db } = require("../database/db");

app.post("/api/clienti", (req, res) => {
    let data = req.body;
    db.addClient(res, data);
  });
app.post("/api/login", (req, res) => {
    let data = req.body;
    db.login(res, data);
  });

  app.put("/api/clienti/:id", (req, res) => {
    let { id } = req.params;
    let data = req.body;
    db.updateClient(res, id, data);
  });
  app.get("/api/clienti/:id", (req, res) => {
    let { id } = req.params;
    db.getClient(res, id);
  });
  app.get("/api/clienti", (req, res) => {
    db.getClient(res);
  });
  app.delete("/api/clienti/:id", (req, res) => {
    let { id } = req.params;
    db.deleteClient(res, id);
  }); 
  app.post("/api/rezervari/:clientId", (req, res) => {
    let data = req.body;
    let { clientId } = req.params;
    data.id_user = clientId;
    db.addRezervare(res, data);
  });
  app.get("/api/rezervari/:clientId", (req, res) => {
    let { clientId } = req.params;
    db.getRezervare(res, clientId);
  });
  app.put("/api/rezervari/:id", (req, res) => {
    let { id } = req.params;
    let data = req.body;
    db.updateRezervare(res, id, data);
  });
  app.delete("/api/rezervari/:id", (req, res) => {
    let { id } = req.params;
    db.deleteRezervare(res, id);
  });
exports.app = app;