(function() {
  "use strict";

  angular
    .module("app")
    .config(function($routeProvider) {
      $routeProvider
        .when("/", {
          templateUrl: "view/login/login.html",
          controller: "LoginController"
        })
        .when("/list", {
          templateUrl: "view/list/list.html",
          controller: "ListController"
        })
        .otherwise({
          redirectTo: "/"
        });
    });

}());
