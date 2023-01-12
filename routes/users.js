const express = require('express');
const router = express.Router();

const usersController=require('../controller/users_controller');

router.get('/profile/:id',usersController.profile);
router.get('/register',usersController.register);
router.get('/logIn',usersController.logIn);
router.post('/creat',usersController.creat);
router.post('/creatSession',usersController.creatSession)
router.get('/log-out',usersController.destroySession);

module.exports= router;