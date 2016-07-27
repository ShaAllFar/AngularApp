(function(){
  var app = angular.module('storeApplication',[]);
  app.controller('StoreController', function(){
    this.products = shirts;
  });
  app.controller('TabController', function(){
    this.tab = 1;
    this.setTab = function(value){
      this.tab = value;
    };
    this.isSet = function(value){
      return this.tab === value;
    };
  });
  app.controller('ReviewController', function(){
    this.review = {};
    this.addReview = function(products){
      console.log(this.review);
      products.reviews.push(this.review);
      this.review = {};
    };
  });
  var shirts = [
    {
      name: 'Red Shirt',
      size: 'L',
      price: '19.99',
      canPurchase: false,
      soldOut: false,
      image: 'images/red.jpg',
      description: 'A red shirt',
      reviews: [
        {
          stars: 1,
          body: 'soft as can be',
          author: 'guy@email.com',
          createdOn: 1397490980837
        }
      ]
    },
    {
      name: 'Blue Shirt',
      size: 'L',
      price: '29.99',
      canPurchase: false,
      soldOut: false,
      image: 'images/blue.jpg',
      description: 'A blue shirt',
      reviews: [
        {
          stars: 1,
          body: 'soft as can be',
          author: 'guy@email.com',
          createdOn: 1397490980837
        }
      ]
    },
    {
      name: 'Yellow Shirt',
      size: 'L',
      price: '14.99',
      canPurchase: false,
      soldOut: false,
      image: 'images/yellow.jpg',
      description: 'A yellow shirt',
      reviews: [
        {
          stars: 1,
          body: 'fits very nicely',
          author: 'guy@email.com',
          createdOn: 1397490980837
        }
      ]
    }
  ];
})();
