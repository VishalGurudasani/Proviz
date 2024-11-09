const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/proviz"

const connectToMongo = ()=>{
    mongoose
  .connect(mongoURI)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err.message));
}

module.exports = connectToMongo;
