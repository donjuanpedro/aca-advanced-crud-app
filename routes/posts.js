const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const PostModel = require('../models/PostModel.js');
const PostsController = require('../controllers/PostsController.js');
// TODO: Add your routes to the route here.

router.get('/', PostsController.list);

router.get('/:id', PostsController.show);

router.get('/:id/edit', PostsController.edit);

router.post('/', PostsController.create);

router.put('/:id', PostsController.update);

router.delete('/:id', PostsController.remove);

module.exports = router;
