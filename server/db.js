const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(
      process.env.DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      mongoose.set("strictQuery", false)
    );
    console.log("Database Connection Established");
  } catch (e) {
    console.log(e);
  }
};

module.exports = connection;
