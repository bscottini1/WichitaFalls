const http = require("http");
const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
const Sequelize = require("sequelize");

//Connecting to mySQL db:
const sequelize = new Sequelize("wichitafalls", "root", "root2222", {
    host: "localhost",
    dialect: "mysql"
});


//Testing mySQL connection:
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


app.use(express.json());

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./Public/index.html"));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))   