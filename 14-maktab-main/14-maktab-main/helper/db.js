// const mongoose = require('mongoose')

// module.exports= async () => {
//     try {
//         // await mongoose.connect(URI);

//         mongoose.set('strictQuery', false)
//         require('dotenv').config();
//         // await mongoose.connect(process.env.MONGO_URL);
//         mongoose.connect(process.env.MONGO_URL, {
//             useNewUrlParser: "true",
//         })
//         const db = mongoose.connection
//         db.on("error", err => {
//             console.log("err", err)
//         })
//         db.on("connected", (err, res) => {
//             console.log("MongoDB success connected")
//         })
//     } catch (error) {
//         console.log(error);
//     }
// };

// O'xshadi
// const mongoose = require("mongoose");

// module.exports = async () => {
//   try {
//     mongoose.set("strictQuery", false);
//     await mongoose.connect(
//       "mongodb+srv://saidkarimov014:azik2008@cluster0.5bpehxg.mongodb.net/14maktab",
//       {
//         useNewUrlParser: "true",
//         useUnifiedTopology: "true",
//       }
//     );

//     const db = mongoose.connection;

//     db.on("error", (err) => {
//       console.log("err", err);
//     });
//     db.on("connected", (err, res) => {
//       console.log("Mongoose is connected");
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

const mongoose = require("mongoose");
const URI =
  "mongodb+srv://saidkarimov014:azik2008@cluster0.5bpehxg.mongodb.net/14maktab";

module.exports = async () => {
  try {
    mongoose.set("strictQuery", false);
    require("dotenv").config();
    // await mongoose.connect(URI);
    await mongoose.connect(URI);

    const db = mongoose.connection;

    db.on("error", console.error.bind(console, "Console error"));
    db.once("open", function () {
      console.log("MongoDB success connected");
    });
  } catch (error) {
    console.log(error);
  }
};
