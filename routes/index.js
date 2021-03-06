var express = require('express');
var passport = require('passport');
var jwt = require('express-jwt');
var mongoose = require('mongoose');

var Twitter = require('twitter');

var router = express.Router();

var Client = mongoose.model('Client');
var Comment = mongoose.model('Comment');
var Gallery = mongoose.model('Gallery');
var Post = mongoose.model('Post');
var Service = mongoose.model('Service');
var Team = mongoose.model('Team');

// Creating new Twiiter client
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

var tweet = {};

// Getting latest tweet
client.get('/statuses/user_timeline.json?screen_name=BurfieldCreativ&count=1', function(err, tweets, res) {
  if (err) {
    throw err;
  }
  tweet.id = tweets[0].id;
  tweet.text = tweets[0].text;
  tweet.time = tweets[0].created_at;
  tweet.link = 'https://twitter.com/' + tweets[0].user.screen_name;
  console.log(tweets);
})

// Route to return all clients
router.get('/clients', function(req, res, next) {
  Client.find(function(err, clients) {
    if (err) {
      return next(err);
    }
    res.json(clients);
  });
});

// Route to return all comments for a post
router.get('/posts/:post/comments', function(req, res, next) {
  Comment.find(function(err, comments) {
    if (err) {
      return next(err);
    }
    res.json(comments);
  });
});

// Route to return all gallery items
router.get('/gallery', function(req, res, next) {
  Gallery.find(function(err, images) {
    if (err) {
      return next(err);
    }
    res.json(images);
  });
});

// Route to return all blog posts
router.get('/posts', function(req, res, next) {
  Post.find(function(err, posts) {
    if (err) {
      return next(err);
    }
    res.json(posts);
  });
});

// Route to return all services
router.get('/services', function(req, res, next) {
  Service.find(function(err, services) {
    if (err) {
      return next(err);
    }
    res.json(services);
  });
});

// Route to return all team members
router.get('/team', function(req, res, next) {
  Team.find(function(err, members) {
    if (err) {
      return next(err);
    }
    res.json(members);
  });
});

// Route to return a single client
router.get('/clients/:client', function(req, res, next) {
  if (err) {
    return next(err);
  }
  res.json(req.client);
});

// Route to return a single gallery item
router.get('/gallery/:gallery', function(req, res, next) {
  if (err) {
    return next(err);
  }
  res.json(req.gallery);
});

// Route to return a single blog post with comments
router.get('/posts/:post', function(req, res, next) {
  req.post.populate('comments', function(err, post) {
    if (err) {
      return next(err);
    }
    res.json(req.post);
  });
});

// Route to return a single service
router.get('/services/:service', function(req, res, next) {
  if (err) {
    return next(err);
  }
  res.json(req.service);
});

// Route to return a single team member
router.get('/team/:member', function(req, res, next) {
  if (err) {
    return next(err);
  }
  res.json(req.member);
});


// Route to add a new client
router.post('/clients', function(req, res, next) {
  var client = new Client(req.body);

  client.save(function(err, client) {
    if (err) {
      return next(err);
    }
    res.json(client);
  });
});

// Route to add new blog post comment
router.post('/posts/:post/comments', function(req, res, next) {
  var comment = new Comment(req.body);

  comment.post = req.post;

  comment.save(function(err, comment) {
    if (err) {
        return next(err);
    }
    req.post.comments.push(comment);
    req.post.save(function(err, post) {
      if (err) {
        return next(err);
      }
      res.json(comment);
    });
  });
});

// Route to add new gallery item
router.post('/gallery', function(req, res, next) {
  var item = new Gallery(req.body);

  item.save(function(err, item) {
    if (err) {
      return next(err);
    }
    res.json(item);
  });
});

// Route to add a new blog post
router.post('/posts', function(req, res, next) {
  var post = new Post(req.body);

  post.save(function(err, post) {
    if (err) {
      return next(err);
    }
    res.json(post);
  });
});

// Route to add a new service
router.post('/services', function(req, res, next) {
  var service = new Service(req.body);

  service.save(function(err, service) {
    if (err) {
      return next(err);
    }
    res.json(service);
  });
});

// Route to add new team member
router.post('/team', function(req, res, next) {
  var member = new Team(req.body);

  member.save(function(err, member) {
    if (err) {
      return next(err);
    }
    res.json(member);
  });
});



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Bath Digital Web Design',
    description: 'We work with businesses all over the world, from the USA to Sweden, through to the heart of Somerset. Our heart, however, belongs to Bath. We’re located just twenty minutes from Bath city centre and work with clients from all over the city and surrounding area. Looking to invest in stylish, forward-thinking web design?',
    tweet: tweet
  });
});

module.exports = router;
