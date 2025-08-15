require("dotenv").config({ override: true });
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//initial route 
app.get('/', (req, res) => {
    res.send(req.body)
})

app.get('/Sign-up', (req, res) => {
    res.send(req.body)
})

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
