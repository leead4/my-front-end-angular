(function() {
  "use strict";

  angular
    .module("app")
    .controller("ListController", ListController);

  function ListController($scope) {
    $scope.bookIsVisible = true;
    $scope.pageTitle = "Classic Book List";
    $scope.books = [
      { title: "The Hobbit", author: "J.R.R. Tolkien" },
      { title: "Animal Farm", author: "George Orwell" },
      { title: "A Christmas Carol", author: "Charles Dickens" },
      { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
      { title: "To Kill a Mockingbird", author: "Harper Lee" }
    ];
   
  
    $scope.hideThisBook = function(bookcount){
      console.log("hello", bookcount);
      // $scope.bookIsVisible = false;  
    }
  }


}());
