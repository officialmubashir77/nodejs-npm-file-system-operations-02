const http = require('http');

// Define the server
const server = http.createServer((req, res) => {
  // Set response HTTP headers
  res.writeHead(200, { 'Content-Type': 'application/json' });

  // Create the response object
  const response = {
    message: 'Hello, World!',
    timestamp: new Date().toISOString()
  };

  // Send the response as JSON
  res.end(JSON.stringify(response));
});


// Start the server on port 3000
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});