const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const PostModel = require('../models/PostModel.js');
const PostViewController = require('../controllers/PostViewController.js');
// TODO: Add your routes to the route here.

router.get('/', PostViewController.list);

router.get('/:id', PostViewController.show);

router.post('/', PostViewController.create);

router.put('/:id', PostViewController.update);

router.delete('/:id', PostViewController.remove);



module.exports = router;
