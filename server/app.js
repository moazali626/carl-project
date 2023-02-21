const express = require("express");
const app = express();
const connection = require("./db");
const User = require("./models/Register");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const verifyToken = require("./middleware/auth");
var cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

connection();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Running...");
});

app.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const isDuplicate = await User.findOne({ email });

    if (isDuplicate) {
      return res.send({ message: "User is already registered", status: 409 });
    }

    const encryptedPass = await bcrypt.hash(password, 10);

    const newUser = new User({
      email,
      password: encryptedPass,
    });

    const user = await newUser.save();

    if (user) {
      res.send({
        data: user,
        message: "User has been registered successfully",
        status: 201,
      });
    }
  } catch (e) {
    res.send({
      message: "Internal Server Error",
      status: 500,
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      const isValidPass = await bcrypt.compare(password, user.password);
      if (isValidPass) {
        const payload = { email: user.email };

        const secretKey = process.env.JWT_SECRET;
        const token = jwt.sign(payload, secretKey, { expiresIn: "24h" });
        user.token = token;
        user.save();

        res.send({
          data: { token, email: user.email },
          message: "Auth Successful",
          status: 200,
        });
      } else {
        res.send({ data: [], message: "Wrong Password", status: 401 });
      }
    } else {
      res.send({ data: [], message: "No User Found", status: 404 });
    }
    res.send();
  } catch (e) {
    res.send({ data: [], message: "Internal Server Error", status: 500 });
  }
});

app.post("/is-valid-user", async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      res.send({
        data: { email: user.email, name: user.name },
        message: "User found",
        status: 200,
      });
    } else {
      res.send({ data: [], message: "No user found", status: 404 });
    }
    res.send();
  } catch (e) {
    res.send({ message: "Internal Server Error", status: 500 });
  }
});

app.post("/get-all-users", verifyToken, async (req, res) => {
  try {
    const allUsers = await User.find({}, "email createdAt");
    if (allUsers && allUsers.length > 0) {
      res.send({
        data: allUsers,
        message: "All users fetched successfully",
        status: 200,
      });
    }
  } catch (e) {
    res.send({ message: "Internal Server Error", code: 500 });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
