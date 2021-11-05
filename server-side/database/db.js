const mongoose = require("mongoose");
const MONGO_URL = "mongodb+srv://david:david@cluster0.axzcq.mongodb.net/asd";
const Client = require("../models/Client");
class Controller {
  constructor() {
    this.connect();
  }
  async connect() {
    try {
      await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
      });
      console.info("Connect to DB");
    } catch (err) {
      console.error(err);
    }
  }
  addClient(res, data) {
    Client.create(data, (err, newUser) => {
      if (err) throw err;
      res.json({
        status: 200,
        message: "Created",
        user: newUser,
      });
    });
  }
  login(res, data) {
    Client.findOne(
      {
        $and: [{ email: data.email }, { parola: data.parola }],
      },
      (err, user) => {
        if (err) throw err;
        res.json({
          status: 200,
          message: "ok",
          user,
        });
      }
    );
  }
  updateClient(res, id, data) {
    User.updateOne(
      {
        _id: id,
      },
      data,
      (err, updateUser) => {
        if (err) throw err;
        res.json({
          status: 200,
          message: "Updated",
          user: updateUser,
        });
      }
    );
  }
  getClient(res, id) {
    Client.findOne(
      {
        _id: id,
      },
      (err, user) => {
        if (err) throw err;
        res.json({
          status: 200,
          message: "ok",
          user,
        });
      }
    );
  }
  getClienti(res) {
    User.find(
      (err, users) => {
        if (err) throw err;
        res.json({
          status: 200,
          message: "ok",
          users,
        });
      }
    );
  }
  deleteClienti(res, id) {
    User.deleteOne(
      {
        _id: id,
      },
      (err) => {
        if (err) throw err;
        res.json({
          status: 200,
          message: "Deleted",
        });
      }
    );
  } 
}
exports.db = new Controller();
