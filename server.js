const express = require('express');

const apiRoutes = require('./routes/apiroutes');
const htmlRoutes = require('./routes/noteroutes');

const PORT = 4000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/api', apiRoutes)
app.use('/', htmlRoutes)

app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);