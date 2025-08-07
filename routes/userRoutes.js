const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authMiddleware, requireRole } = require('../middleware/authMiddleware');

router.get('/', authMiddleware, requireRole('admin'), userController.getUsers);
router.delete('/:id', authMiddleware, requireRole('admin'), userController.deleteUser);

module.exports = router;
