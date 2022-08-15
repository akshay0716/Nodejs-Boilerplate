const mongoose = require("mongoose");

const connectDBFunction = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   serverApi: ServerApiVersion.v1,
    });
    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDBFunction;
