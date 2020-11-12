var express = require('express');
var router = express.Router();

const messages = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
];

/* GET Home Page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages: messages, title: 'MINI MESSAGE BOARD', header: 'List of Messages' });
});

/* GET New Message Page. Show the page. */
router.get('/new', function(req, res, next) {
  res.render('form', { title: 'MINI MESSAGE BOARD', header: 'New Message Page' });
});

/* POST Handle new message post/submission */
router.post('/new', function(req, res, next) {
  let content = req.body;
  let text = content.text;
  let user = content.user;
  let new_message =
  {
    text: text,
    user: user,
    added: new Date()
  }
  messages.push(new_message);
  res.redirect('/');
});

module.exports = router;
