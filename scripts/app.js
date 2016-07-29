(function(){
  var app = angular.module('storeApplication',['store-directives']);
  app.controller('StoreController', ['$http',function($http){
    var store = this;
    store.products = [];
    $http.get('/data/store-products.json').success(function(data){
      store.products = data;
    });
  }]);

  app.controller('ReviewController', function(){
    this.review = {};
    this.addReview = function(products){
      this.review.createdOn = Date.now();
      products.reviews.push(this.review);
      this.review = {};
    };
  });
})();
