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
})();
