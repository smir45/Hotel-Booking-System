const express = require('express');
const router = express.Router();
const { findAll, createUser, findUser, updateUser } = require('../controllers/user')

router.get('/', findAll);
router.post('/', createUser);
router.get('/:id', findUser);
router.put('/:id', updateUser);







module.exports = router;