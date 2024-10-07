const dotenv = require("dotenv");
dotenv.config();

const http = require("http");
const mongodb = require("mongodb");
const connectionString = process.env.MONGO_URL;

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log("Error on connection MongoDB");
    else {
      console.log("MongoDB connection succed");
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = process.env.PORT || 8003;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on PORT: ${PORT}, http://localhost${PORT}`
        );
      });
    }
  }
);
