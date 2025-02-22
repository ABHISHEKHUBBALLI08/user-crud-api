const express = require('express');
const { createUser, getUsers, getUserById, updateUser, deleteUser, generateUserBio } = require('../controllers/userController');

const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/:id/generate-bio', generateUserBio);

module.exports = router;
