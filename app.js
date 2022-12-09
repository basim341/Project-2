const http = require('http');
const express = require(`express`)
const hostname = '127.0.0.1';
const app = express()
const path = require('path')
const port = 80;
app.use('/static', express.static(path.join(__dirname, 'public')))
// app.set('view engine', 'pug') 
app.set('views', path.join(__dirname, 'views'))
app.set('views', './views')

// app.use(express.static(`Views`))

 


// GET REQUESTS 
app.get('/', (req, res) => {
  res.render(`homepage.html`)
})
app.get(`/aboutus`, (req, res) => {
  res.render(`aboutus.html`)
 })

// app.listen(port, hostname, () => {
  // console.log(`Server running at http://${hostname}:${port}/`);
// }); 
app.listen( process.env.PORT || 80, ()=> console.log(`server is running successfully `));
  