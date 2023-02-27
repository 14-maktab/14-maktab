const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const exhbs = require("express-handlebars");
const mongoose = require("mongoose");

const indexRouter = require("./routes/index");
const aboutRouter = require("./routes/about");
const adminRouter = require("./routes/admin");
const adminMaqolaRouter = require("./routes/maqola");
const clientMaqolaRouter = require("./routes/clientMaqolaRead");
const maqolalarRouter = require("./routes/maqolalar");
const yutuqlarRouter = require("./routes/yutuqlar");
const yutuqRouter = require("./routes/yutuq");
const variables = require("./middleware/variables");
const authRouter = require("./routes/auth");
const session = require("express-session");
const MongoStore = require("connect-mongodb-session")(session);
const URI =
  "mongodb+srv://saidkarimov014:azik2008@cluster0.5bpehxg.mongodb.net/14maktab";

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exhbs.engine({
    layoutsDir: path.join(__dirname, "views/layouts"),
    defaultLayout: "main",
    extname: "hbs",
    partialsDir: [path.join(__dirname, "views/partials")],
    runtimeOptions: {
      allowProtoMethodsByDefault: true,
      allowProtoPropertiesByDefault: true,
    },
  })
);

require("./helper/db")();

// mongoose.connect(process.env.MONGO_URL)
// const url = process.env.MONGO_URL
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const store = new MongoStore({
  uri: URI,
  collection: "session",
});

app.use(
  session({
    resave: false,
    secret: "secret_key",
    saveUninitialized: false,
    store,
  })
);
app.use(variables);

app.use("/", indexRouter);
app.use("/yutuqlar", yutuqlarRouter);
app.use("/about", aboutRouter);
app.use("/14admin", adminRouter);
app.use("/14admin/maqola", adminMaqolaRouter);
app.use("/14admin/yutuq", yutuqRouter);
app.use("/maqolaKo'rish", clientMaqolaRouter);
app.use("/maqolalar", maqolalarRouter);
app.use("/14auth", authRouter);

app.use("/auth", express.static(path.join(__dirname, "public")));
app.use("/auth:any", express.static(path.join(__dirname, "public")));
app.use("/public", express.static("images"));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
