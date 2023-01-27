const express = require("express");
const cors = require("cors");


const app = express();
app.use(cors());
app.use(express.static("static"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const con = require("../backend/config");



app.post("/signup", async (req, res) => {
  console.log("POST: SignUp");
  console.log(req.body);
  const { firstName, lastName, email, password } = req.body;

  try {
    con.query(
      "INSERT INTO users (firstname, lastname, email, password, role) values (?, ?, ?, ?, ?)",
      [firstName, lastName, email, password, "user"],
      (err, result, fields) => {
        if (err) {
          console.log("error");
          return res.status(400).send;
        }
        return res.status(201).json({ mes: "New User add" });
      }
    );
  } catch (error) {
    console.log("error");
    return res.status(500).send;
  }

});




app.listen(3000, () => {
  console.log("Start Backend Server Port 3000");
});
