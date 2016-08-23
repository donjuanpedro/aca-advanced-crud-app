const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const PostModel = require('../models/PostModel.js');
const PostFormController = require('../controllers/PostFormController.js');
// TODO: Add your routes to the route here.

router.get('/', PostFormController.list);

router.get('/:id', PostFormController.show);

router.post('/', PostFormController.create);

router.put('/:id', PostFormController.update);

router.delete('/:id', PostFormController.remove);



module.exports = router;
