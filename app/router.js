 
var app = angular.module("app", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/page1/index.html"
    })
    .when("/page2", {
          templateUrl : "app/page2/index.html",
           controller : "page2Controller"
    });
    
});
 