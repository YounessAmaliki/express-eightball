const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const localStorage = require('node-localStorage');

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000');
});

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));


app.get('/', (req, res) => {
   res.redirect('/ask')
})


app.get('/ask', (req, res) => {
   res.render('ask.ejs', {})
})

app.post('/ask', (req, res) => {
 var query = { name: req.body.name }
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}
 
localStorage.setItem('myFirstKey', 'myFirstValue');
console.log(localStorage.getItem('myFirstKey'));
       res.render('answer.ejs', { product: result[0] })

})


