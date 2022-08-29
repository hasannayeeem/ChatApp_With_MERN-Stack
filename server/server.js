const express = require("express");
const app = express();
const { chats } = require("./data/data");
const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors');
const connectDB = require('./config/db');


// middleware
app.use(cors())
app.use(express.json())

// env variables
const USERNAME = process.env.DB_USERNAME
const PASSWORD = process.env.DB_PASSWORD
connectDB(USERNAME, PASSWORD)

app.get("/", (req, res) => {
    res.send("API is running..");
  });


app.get("/api/chat", (req, res) => {
    res.send(chats);
  });

  app.get("/api/chat/:id", (req, res) => {
    const singleChat = chats.find((c)=> c._id === req.params.id);
    res.send(singleChat);
  });


const PORT = process.env.PORT || 5100;

const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`)
);