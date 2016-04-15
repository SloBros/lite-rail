angular
  .module('starter.controllers', [])
  .controller('AppCtrl', AppCtrl)
  .controller('DashCtrl', DashCtrl)
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

function DashCtrl($scope, $stateParams , Times) {
  $scope.times = Times.all();
}
