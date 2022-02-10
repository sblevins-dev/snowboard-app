const express = require('express');
const router = express.Router();
const { getProducts, setProducts, deleteProduct, updateProduct } = require('../controllers/productController')

router.route('/').get(getProducts).post(setProducts);
router.route('/:id').delete(deleteProduct).put(updateProduct)

module.exports = router;