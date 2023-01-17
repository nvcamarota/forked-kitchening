var express = require('express');
var router = express.Router();

const {detalleProducto, listado} = require('../controllers/productController');

//users
router.get('/detalleProducto', detalleProducto);
router.get('/listado', listado);

module.exports = router;