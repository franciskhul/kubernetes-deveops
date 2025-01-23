const crypto = require("crypto");

// Generate a random string on startup
const randomString = crypto.randomUUID();

// Function to log the string with a timestamp every 5 seconds
function logRandomString() {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp}: ${randomString}`);
}
// first output
logRandomString();
// Output the random string every 5 seconds
setInterval(logRandomString, 5000);
