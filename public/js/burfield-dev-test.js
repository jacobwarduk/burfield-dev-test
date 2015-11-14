var app = angular.module('burfield-dev-test', ['ui.router', 'ui.bootstrap', 'angularUtils.directives.dirPagination']);

// Service for clients
app.factory('clients', ['$http', function($http) {

  // Initialising the clients object
  var c = {
    clients: []
  };

  // Method to retrieve all clients
  c.getAll = function() {
    return $http.get('/clients').success(function(data) {
      angular.copy(data, c.clients);
    });
  };

  // Method to retreive a single client
  c.get = function(id) {
    return $http.get('/clients/' + id).then(function(res) {
      return res.data;
    });
  };

  return c; // Returning the clients object
}]);


// Service for gallery
app.factory('gallery', ['$http', function($http) {

  // Initialising the gallery object
  var g = {
    gallery: []
  };

  // Method to retrieve all gallery items
  g.getAll = function() {
    return $http.get('/gallery').success(function(data) {
      angular.copy(data, g.gallery);
    });
  };

  // Method to retreive a single client
  g.get = function(id) {
    return $http.get('/gallery/' + id).then(function(res) {
      return res.data;
    });
  };

  return g; // Returning the clients object
}]);


// Service for services
app.factory('services', ['$http', function($http) {

  // Initialising the services object
  var s = {
    services: []
  };

  // Method to retrieve all services
  s.getAll = function() {
    return $http.get('/services').success(function(data) {
      angular.copy(data, s.services);
    });
  };

  // Method to retreive a single client
  s.get = function(id) {
    return $http.get('/services/' + id).then(function(res) {
      return res.data;
    });
  };

  return s; // Returning the clients object
}]);


// Service for team members
app.factory('team', ['$http', function($http) {

  // Initialising the clients object
  var t = {
    team: []
  };

  // Method to retrieve all clients
  t.getAll = function() {
    return $http.get('/team').success(function(data) {
      angular.copy(data, t.team);
    });
  };

  // Method to retreive a single client
  t.get = function(id) {
    return $http.get('/team/' + id).then(function(res) {
      return res.data;
    });
  };

  return t; // Returning the clients object
}]);

// Service for blog posts
app.factory('posts', ['$http', function($http, auth) {

  // Initialising the posts object
  var p = {
    posts: []   // Posts array
  };

  // Method to retrieve all posts
  p.getAll = function() {
    return $http.get('/posts').success(function(data){
      angular.copy(data, p.posts);
    });
  };

  // Method to retrieve a single post
  p.get = function(id) {
    return $http.get('/posts/' + id).then(function(res) {
      return res.data;
    });
  };

  return p;   // Returning posts object
}]);




// Main controller
app.controller('MainCtrl', [
  '$scope',
  'clients',
  'gallery',
  'services',
  'team',
  'posts',
  function($scope, clients, gallery, services, team, posts) {
    $scope.clients = clients.clients;
    $scope.gallery = gallery.gallery;
    $scope.services = services.services;
    $scope.team = team.team;
    $scope.posts = posts.posts;
  }
]);



// App config
app.config([
  '$stateProvider',
  '$urlRouterProvider',
  '$locationProvider',
  function($stateProvider, $urlRouterProvider, $locationProvider) {

    // URL routing for home page
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl',
        resolve: {
          clientPromise: ['clients', function(clients) {
            return clients.getAll();
          }],
          galleryPromise: ['gallery', function(gallery) {
            return gallery.getAll();
          }],
          servicePromise: ['services', function(services) {
            return services.getAll();
          }],
          teamPromise: ['team', function(team) {
            return team.getAll();
          }],
          postPromise: ['posts', function(posts) {
            return posts.getAll();
          }]
        }
      });


    // Redirecting to home page
    $urlRouterProvider.otherwise('home');

    // Use the HTML5 history API (removing # from URLs)
    // if (window.history && window.history.pushState) {
    //   $locationProvider.html5Mode(true);
    // }

    // $locationProvider.hashPrefix('!');

  }
]);
