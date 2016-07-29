(function(){
  var app = angular.module('store-directives',[]);
  app.directive('productDescription',function(){
    return{
      restrict: 'E',
      templateUrl: 'product-description.html'
    };
  });

  app.directive('productTabs', function(){
    return{
      restrict: 'E',
      templateUrl: 'product-tabs.html',
      controller: function(){
        this.tab = 1;
        this.setTab = function(value){
          this.tab = value;
        };
        this.isSet = function(value){
          return this.tab === value;
        };
      },
      controllerAs: 'tab'
    };
  });
  app.directive('productReviews',function(){
    return{
      restrict:'E',
      templateUrl: 'product-reviews.html',
      controller: function(){
        this.review = {};
        this.addReview = function(products){
          this.review.createdOn = Date.now();
          products.reviews.push(this.review);
          this.review = {};
        };
      },
      controllerAs: 'reviewCtrl'
    };
  });
})();
