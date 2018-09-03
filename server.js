const express = require('express');
const app = express();
const bodyParser = require('body-parser');
/*const localStorage = require('node-localStorage');*/

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on port 3000');
});

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));


app.get('/', (req, res) => {
   res.redirect('/ask')
})


app.get('/ask', (req, res) => {
   res.render('ask.ejs', {})
   console.log(localStorage.getItem('answers'));
})

app.post('/ask', (req, res) => {
var question = { question: req.body.question }
if (localStorage.getItem(question) =! null) return localStorage.getItem(question);
  else 
  localStorage.setItem('answers', 'It is certain','It is decidedly so','Without a doubt','Yes definitely','You may rely on it','As I see it, yes','Most likely');
  var answer = localStorage.getItem('answers');
  localStorage.getItem(answer,question);
  res.render('answer.ejs', { question: answer[0] })


})


