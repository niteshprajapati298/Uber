const http = require("http");
const app = require("./app");
const port = process.env.PORT || 3000
const connectDB = require("./config/database")




const server = http.createServer(app);


connectDB()
  .then(() => {
    console.log("Database connection established...");
    server.listen(port, () => {
      console.log(`Server is successfully listening on port ${port}...`);
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!");
  });