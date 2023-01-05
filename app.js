const http = require('http');
const express = require(`express`)
const hostname = '127.0.0.1';
const app = express()
const path = require('path')
const port = 80;
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/content', express.static(path.join(__dirname, 'content')))
// app.use(express.static('Static'));
// app.set('view engine', 'pug') 
app.set('views', path.join(__dirname, 'views'))
app.use('/static', express.static(path.join(__dirname, 'Static')))

// GET REQUESTS 
app.get('/', (req, res) => {
  res.render(`homepage.html`)
})
app.get(`/applynow`, (req, res) => {
  res.render(`applynow.html`)
 })
app.get(`/bonuscontent`) , (req, res) => {
  res.render(`bonuscontent.html`)
}
app.get(`/ourteam`) , (req, res) => {
  res.render(`ourteam.html`)
}


//  Use this code to test the app on LOCALHOST
// app.listen(port, hostname, () => {
  // console.log(`Server running at http://${hostname}:${port}/`);
// }); 


// Use this code when DEPLOYING the app
app.listen( process.env.PORT || 80, ()=> console.log(`server is running successfully `));
  