var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz' });
});

router.get('/views/quizes/question' , quizController.question);
router.get('/views/quizes/answer' , quizController.answer);

module.exports = router;
