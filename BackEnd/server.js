// // const express = require('express');
// // const path = require('path');
// // const app = require('./src/app');
// // require('dotenv').config();

// // const PORT = 3000;

// // // ✅ Serve frontend files from public folder
// // app.use(express.static(path.join(__dirname, 'public')));

// // // ✅ Optional home route
// // app.get('/', (req, res) => {
// //   res.sendFile(path.join(__dirname, 'public/index.html'));
// // });

// // // ✅ Start the server
// // app.listen(PORT, () => {
// //   console.log(`✅ Server is running on http://localhost:${PORT}`);
// // });


// const express = require('express');
// const path = require('path');
// const app = require('./src/app');
// require('dotenv').config();

// const PORT = 3000;

// // ✅ Set EJS as the view engine
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// // ✅ Serve public static files
// app.use(express.static(path.join(__dirname, 'public')));

// // ✅ Render EJS at root route
// app.get('/', (req, res) => {
//   res.render('index');
// });

// app.listen(PORT, () => {
//   console.log(`✅ Server is running on http://localhost:${PORT}`);
// });
const express = require('express');
const path = require('path');
const app = require('./src/app'); // ✅ Correct path

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static assets (e.g., images, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route for homepage
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
