(function() {
  "use strict";

  angular
    .module("app")
    .controller("LoginController", LoginController);
   
  function LoginController($scope, $location) {
    $scope.login = function() {
      $location.path("list");
    };
  }
}());
