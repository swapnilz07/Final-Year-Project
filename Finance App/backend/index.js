const express = require("express");
const boom = require("express-boom");
const bcrypt = require("bcrypt")
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
app.use(boom())

// connection to database server
mongoose.connect(
  "mongodb://127.0.0.1:27017/MyAppData",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("DB connected");
    } else {
      console.log("error");
    }
  }
);

//Creating Schema
const myschema = new mongoose.Schema(
  {
    loan_name: { type: String },
    loan_data: { type: Array },
  },
  { strict: false }
);

//Giving collection name associated with the schema.
const monmodel = mongoose.model("loan_data", myschema);

//post request to database
app.post("/post", async (req, res) => {
  console.log("We are inside a post request function");

  const data = new monmodel(req.body);

  const val = await data.save();
  res.json(val);
});

// const ObjectId = new ObjectId
app.get("/get", async (req, res) => {
  try {
    let filters = JSON.parse(req.query.filters) || {};
    let data = await monmodel.find(filters).lean();
    res.json(data?.at(0));
  } catch (error) {
    console.log("err", error);
  }
});
//put request to database updation and addition of loan data
app.put("/bank-data/:id", async (req, res) => {
  let id = req.params.id;
  let data = await monmodel.findById(id);
  if (!data) boom.badRequest("load data not found");
  await monmodel.updateOne({ _id: id }, { $addToSet: { loan_data: req.body } });
  res.json("data updated succesfully");
});

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  contact_number: String,
  email: { type: String, unique: true },
  password: String,
});

const User = new mongoose.model("User", userSchema);

// This is login api
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.boom.notFound("Invalid data");
    }
    const user = await User.findOne({ email: email });
    if (!user) res.boom.badRequest("User Not Found");
    const varifyUSer = await bcrypt.compare(password, user.password);
    if (!varifyUSer) res.boom.badRequest("Invalid creditials");
    res.status(200).send("Registration Success");
  } catch (error) {
    res.boom.badRequest(error);
  }
});

app.post("/register", async (req, res) => {
  console.log("we are in register api");
  try {
    const { fname, lname, contact, email, password } = req.body;
    if (!fname || !lname || !contact || !email || !password) {
      res.boom.notFound("Invalid data");
    }
    const user = await User.findOne({ email: email });
    if (user) res.boom.badRequest("User Already Rigistered");

    const regiterUser = new User({
      firstname: fname,
      lastname: lname,
      contact_number: contact,
      email: email,
      password: password,
    });

    //hash user password
    const salt = await bcrypt.genSalt(10);
    regiterUser.password = await bcrypt.hash(password, salt);
    await regiterUser.save();
    return res.status(200).json({ msg: "User signin successfully" });
  } catch (error) {
    console.log("error", error);
    res.boom.badRequest(error);
  }
});

app.listen(2022, () => {
  console.log("Server statted at port : 2022");
});


