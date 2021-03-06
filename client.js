const net = require("net");
const { IP, PORT } = require("./constants");

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //handle event for connection
  conn.on("connect", () => {
    console.log(`Successfully connected to game server`);
    //send name to the server
    conn.write("Name: DEC");
    // Movement
  });

  // Listen for data
  conn.on("data", (data) => {
    console.log("Message from client: ", data);
  });

  return conn;
};

module.exports = { connect };
