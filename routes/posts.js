const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const PostModel = require('../models/PostModel.js')

// TODO: Add your routes to the route here.
// Hint: Don't for get to export it!
router.get('/', function(req, res, next) {
  PostModel.find((err, posts) => {
    res.render('posts.ejs', { posts });
  });
});

router.post('/', function(req, res, next) {
  const post = new PostModel({
    author: req.body.author,
    body: req.body.body,
    date: req.body.date
  });
  post.save((err, post) => {
    res.redirect('/');
  });
});

module.exports = router;
