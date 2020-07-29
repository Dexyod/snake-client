/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on("data", handleUserInput);
  stdin.resume();
  return stdin;
};

const handleUserInput = (key) => {
  (key) => {
    if (key === "\u0003") {
      process.exit();
    }
    process.stdout.write(key);
  };
};

module.exports = { setupInput };
