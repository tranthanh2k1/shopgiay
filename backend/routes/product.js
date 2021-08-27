import express from 'express';
import { isAdmin, isAuth, requireSignin } from '../controllers/auth.js';
import { list, create, update, productById, read, remove, photo, listBySearch, listRelated, listCategories } from '../controllers/products.js';
import { userById } from '../controllers/user.js';

const router = express.Router();

router.get("/products/related/:productId", listRelated);
router.get("/products/categories", listCategories);
router.post('/products/search', listBySearch);
router.get('/product/photo/:productId', photo);

router.get('/products', list);
router.post('/product', create);
router.get("/product/:productId", read);
router.put('/product/:productId', update);
router.delete('/product/:productId', remove);

router.param('productId', productById);
router.param('userId', userById);

module.exports = router;