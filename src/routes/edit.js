var express = require('express');
var router = express.Router();
var editController = require ('../controllers/editController.js')

/*Editar producto*/
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

router.get('/:id', editController.editar)
router.post('/:id', editController.update)


module.exports = router