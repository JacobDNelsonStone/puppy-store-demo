const express = require('express');
const path = require('path');
const api = require('./api');  

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static('client'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', api);

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'client/homepage.html'))
);



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

