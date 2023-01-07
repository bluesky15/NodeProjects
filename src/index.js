const express = require("express");
bodyParser = require("body-parser");
morgan = require("morgan");
jwt = require("jsonwebtoken");
config = require("../configuration/config");

const ProtectedRoutes = express.Router();

const app = express();
const port = process.env.PORT || 3001;

app.use("/api", ProtectedRoutes);
//set secret
app.set("Secret", config.secret);

// use morgan to log requests to the console
app.use(morgan("dev"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send(`Hello world  app is running on http://localhost:${port}/`);
});

app.post("/authenticate", (req, res) => {
  if (req.body.username === "lalit") {
    if (req.body.password === 123) {
      const payload = {
        check: true,
      };

      var token = jwt.sign(payload, app.get("Secret"), {
        expiresIn: "24h", // expires in 24 hours
      });

      res.json({
        message: "authenticated",
        token: token,
      });
    } else {
      res.json({ message: "please check your password !" });
    }
  } else {
    res.json({ message: "user not found !" });
  }
});

ProtectedRoutes.use((req, res, next) => {
  // check header for the token
  var token = req.headers["access-token"];

  // decode token
  if (token) {
    // verifies secret and checks if the token is expired
    jwt.verify(token, app.get("Secret"), (err, decoded) => {
      if (err) {
        return res.json({ message: "invalid token" });
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;
        next();
      }
    });
  } else {
    // if there is no token

    res.send({
      message: "No token provided.",
    });
  }
});

ProtectedRoutes.get('/getAllProducts',(req,res)=>{
  let products = [
      {
          id: 1,
          name:"cheese"
      },
      {
         id: 2,
         name:"carottes"
     }
  ]
 
  res.json(products)
 
 })

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
