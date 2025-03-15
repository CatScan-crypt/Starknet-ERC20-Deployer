const express = require('express');
const app = express();
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

const port = 3001;

require ('./path/configure') (app, {});

require ('./path/deploy') (app, {});


app.get('/upgradeContract', (req, res) => runCommand('upgradeContract', res));
app.get('/verify', (req, res) => runCommand('verify', res));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});