import express from 'express';

import { isAdmin, isAuth, requireSignin } from '../controllers/auth';
import { categoryById, create, list, read, remove, update, categoryPage } from '../controllers/category';
import { userById } from '../controllers/user';

const router = express.Router();

router.get('/categories', list);
router.post('/category', create);
router.get('/category/:categoryId', read);
router.put('/category/:categoryId', update);
router.delete('/category/:categoryId', remove);
router.get('/categoryPage/:categoryId', categoryPage);

router.param('categoryId', categoryById);
router.param('userId', userById);

module.exports = router;
