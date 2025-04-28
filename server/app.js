const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 1738;

const sequelize = require("./db");
const AuthRoutes = require("./Routes/AuthRoutes");

const corsOptions = {
  origin: ["https://localhost:5173", "http://localhost:5173", "*"],
  optionsSuccessStatus: 200,
  credentials: true,
  exposedHeaders: ["csrfToken"],
};

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 200,
});

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'"],
        objectSrc: ["'none'"],
        connectSrc: ["'self'"],
        mediaSrc: ["'self'"],
        fontSrc: ["'self'"],
      },
    },
  })
);

app.use(limiter);
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

app.use("/auth", AuthRoutes);

app.listen(PORT, () => {
  sequelize.sync({ alter: true }).then(() => {
    console.log("Database synced");
  });
  console.log(`Server is running on port ${PORT}`);
});
