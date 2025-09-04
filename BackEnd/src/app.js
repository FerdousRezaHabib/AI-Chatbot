// const express = require('express');
// const app = express();
// const aiRoutes = require('./routes/ai.routes');

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

// app.use('/ai', aiRoutes);
// module.exports = app;

// src/app.js
// const express = require('express');
// const aiRoutes = require('./routes/ai.routes');

// const app = express();

// // parse JSON bodies
// app.use(express.json());

// // mount your AI router
// app.use('/api/ai', aiRoutes);

// module.exports = app;
const express = require('express');
const aiRoutes = require('./routes/ai.routes');

const app = express();

app.use(express.json()); // for parsing JSON body
app.use('/api/ai', aiRoutes); // API route

module.exports = app;

