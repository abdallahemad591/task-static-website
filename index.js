const http = require('http');
const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end('<h1>تم النشر بنجاح! 🚀</h1><p>هذا تطبيق Node.js يعمل بشكل آمن.</p>');
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
