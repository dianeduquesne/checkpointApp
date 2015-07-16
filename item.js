var ItemsApp = angular.module("ItemsApp", []);



var PostsCtrl = ItemsApp.controller("PostsCtrl",
function($scope, $http) { // test to load the file data.json unsuccessful
	$http.defaults.headers.common["X-Custom-Header"]= "Angular.js";
	$http.get('data.json').
	success(function(data, status, headers, config) {
		$scope.posts = data;
	});
});


var MainCtrl = ItemsApp.controller("MainCtrl",
[
  '$scope',


  function($scope){


    var formulaire = $scope.itemForm;
    var connect = $scope.loginForm;
    $scope.username="";
    $scope.password="";
    $scope.myVar = false;
    $scope.connected = false;
    $scope.var= {};

    $scope.intervals = [
              { i: 1, name: '5' },
              { i: 2, name: '10' },
              { i: 3, name: '30' },
              { i: 4, name: '60' },
              { i: 5, name: '180' },
              { i: 6, name: '360' },
              { i: 7, name: '1440' } ];


    items = $scope.items = []; //creation of a table where the checkpoints will be saved

    $scope.connect = function() {

        if (username.value == "Diane" && password.value =="metadot")
        {
          $scope.connected= !$scope.connected;
          alert ('you are connected!');
        }

      else { alert (username);}
    };

    $scope.logout = function(){
      $scope.connected=!$scope.connected;
    }

    var uid = 1;

    $scope.addItem = function() {

          if($scope.newItem.id == null) {
              $scope.newItem.id = uid++;
              items.push($scope.newItem);//adding the items in the array
          } else {
          for(i in items) {
              if(items[i].id == $scope.newItem.id) {
                  items[i] = $scope.newItem;
              }
          }
          }

          $scope.newItem = {};
      }


      $scope.delete = function(id) {

          for(i in items) {
              if(items[i].id == id) {//looking for the item which has the good id
                  items.splice(i,1);
                  $scope.newItem = {};
              }
          }

      }

      $scope.viewmore = function(id) {
        $scope.myVar = !$scope.myVar;
        for(i in items)
        {if(items[i].id == id)
        $scope.var=items[i];}

      }


      $scope.edit = function(id) {
          for(i in items) {
              if(items[i].id == id) {
                  $scope.newItem = angular.copy(items[i]);//to edit the item
              }
          }
      }

  }])
