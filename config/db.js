const mongoose = require("mongoose");

/**
* Establishes a connection to MongoDB using mongoose
* @example
* sync()
* MongoDB connected database_host:port
* @returns {void} Does not return any value.
* @description
*   - It reads the MongoDB connection URI from the environment variables.
*   - It logs the hostname of the MongoDB server once the connection is successful.
*   - In case of an error, it logs the error and exits the process with status code 1.
*   - This function is asynchronous.
*/
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
