const http = require('http');
const express = require(`express`)
const hostname = '127.0.0.1';
const port = 80;
const app = express()
const path = require('path')
// app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'pug') 
app.set('views', path.join(__dirname, 'views'))
app.set('views', './views')






// GET REQUESTS
app.get('/', (req, res) => {
  res.render(`homepage.pug`)
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});