const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const {port} = require("./config/env");

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
