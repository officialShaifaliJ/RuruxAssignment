const express = require("express");
const cors = require('cors');
const { connection } = require("./db");
const routes = require("./route");
const app = express();

app.use(cors()); 
app.use(express.json());
app.use('/ruruxapi', routes);


const PORT = process.env.PORT || 8080;
app.listen(PORT, async () => {
  try {
    // await mongoose.connect("mongodb://127.0.0.1:27017/");
    await connection;
    console.log("connected to mongo <================================================");
  } catch (err) {
    console.log(err);
    console.log("Not able to connect port");
  }
});
