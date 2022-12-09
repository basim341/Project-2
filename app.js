const http = require('http');
const express = require(`express`)
const hostname = '127.0.0.1';
const app = express()
const path = require('path')
const port = 80;
app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('view engine', 'pug') 
app.set('Views', path.join(__dirname, 'Views'))
app.set('Views', './Views')

// app.use(express.static(`Views`))




// GET REQUESTS
app.get('/', (req, res) => {
  res.render(`homepage.pug`)
})

// app.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// }); 
app.listen( process.env.PORT || 80, ()=> console.log(`server is running successfully 341`));
