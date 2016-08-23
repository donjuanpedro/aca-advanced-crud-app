// TODO: Add your controller logic here.
var PostModel = require('../models/PostModel.js');

module.exports = {
  list: function (req, res) {
    PostModel.find(function (err, postSingle) {
      res.render('post_view.ejs', { postSingle });
    });
  },


  show: function (req, res) {
    var id = req.params.id;
    PostModel.findOne({_id: id}, function (err, post) {
      return res.json(post);
    });
  },


  create: function (req, res) {
    const post = new PostModel({
      author: req.body.author,
      body: req.body.body,
      date: req.body.date
    });
    post.save((err, post) => {
      res.redirect('/');
    });
  },


  update: function (req, res) {
    var id = req.params.id;
    PostModel.findOne({_id: id}, function (err, post) {
      post.body = req.body.body;

      post.save(function (err, post) {
        return res.json(post);
      });
    });
  },


  remove: function (req, res) {
    var id = req.params.id;
    PostModel.findByIdAndRemove(id, function (err, post) {
      return res.json(post);
    });
  }
};
