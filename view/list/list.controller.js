(function() {
  "use strict";

  angular
    .module("app")
    .controller("ListController", ListController);

  function ListController($scope) {
    $scope.pageTitle = "Classic Book List";
    $scope.books = [
      { title: "The Hobbit", author: "J.R.R. Tolkien" },
      { title: "Animal Farm", author: "George Orwell" },
      { title: "A Christmas Carol", author: "Charles Dickens" },
      { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
      { title: "To Kill a Mockingbird", author: "Harper Lee" }
    ];

        $scope.hiddenBooks = [];
        
    $scope.hideShowBook = function(book) {
      if ($scope.hiddenBooks.includes(book)){
        let target = $scope.hiddenBooks.indexOf(book);
        $scope.hiddenBooks.splice(target, 1); 
      }else{
        $scope.hiddenBooks.push(book);
      }
        return $scope.hiddenBooks
      }

}


}());
