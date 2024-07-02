const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = 8099;


const userSchema = new mongoose.Schema({
  username: String,
  password: String,

});

const User = mongoose.model("User", userSchema);

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/custresponses", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
let a = fs.readFileSync("signin.html");
res.send(a.toString());
});

app.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
  // Check if the user exists in the database
  const existingUser = await User.findOne({ username });

  if (!existingUser) {
    return res.status(404).send("User not found.");
  }

  // Check if the password matches
  if (existingUser.password !== password) {
    return res.status(401).send("Incorrect password.");
  }

  // User authenticated successfully
  return res.status(200).send("Login successful!");
} catch (error) {
  console.error("Error during login:", error);
  return res.status(500).send("Error during login.");
}
});

app.listen(port, () => {
console.log("App running on port: ",port);
});