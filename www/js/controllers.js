angular.module('starter.controllers', [])
.controller('AppCtrl', AppCtrl)
.controller('DashCtrl', DashCtrl)
.controller('DocumentCtrl', DocumentCtrl)
;

function AppCtrl($scope, $ionicModal, $ionicPopover, $timeout,  $location, $ionicPopup) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $location.path('/app/dashboard');
}

function DashCtrl($scope, $stateParams , Profiles) {
  $scope.profiles = Profiles.all();
}

function DocumentCtrl($scope, Document) {
    $scope.documents = [];
    $scope.document = null;
    // Get all the documents
    Document.all().then(function(documents){
        $scope.documents = documents;
    });
    // Get one document, example with id = 2
    Document.getById(2).then(function(document) {
        $scope.document = document;
    });
};