const express = require('express');
const router = express.Router();
const cookieController = require('../controllers/cookieController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.get('/', authMiddleware, cookieController.getCookies);
router.post('/', authMiddleware, cookieController.createCookie);
router.delete('/:id', authMiddleware, cookieController.deleteCookie);

module.exports = router;
