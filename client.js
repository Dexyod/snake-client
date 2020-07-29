const net = require("net");

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //handle event for connection
  conn.on("connect", () => {
    console.log(`Successfully connected to game server`);
  });

  //send name to the server
  conn.write("Name: DEC");

  // Listen for data
  conn.on("data", (data) => {
    console.log("Message from client: ", data);
  });

  return conn;
};

module.exports = { connect };
