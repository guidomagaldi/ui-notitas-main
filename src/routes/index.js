var express = require('express');
var router = express.Router();
var indexController = require ('../controllers/indexController.js')
var editController = require ('../controllers/editController.js')

/* GET home page. */
router.get('/', indexController.inicio);
router.post('/', indexController.create)

router.post('/delete/:id', indexController.delete)



module.exports = router;
