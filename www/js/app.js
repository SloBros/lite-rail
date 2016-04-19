// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular

.module('starter', [
    'ionic',
    'starter.controllers',
    'starter.services'
])
.run(run)
.config(config)
.constant('DB_CONFIG', {
    name: 'DB',
    tables: [
      {
            name: 'documents',
            columns: [
                {name: 'id', type: 'integer primary key'},
                {name: 'title', type: 'text'},
                {name: 'keywords', type: 'text'},
                {name: 'version', type: 'integer'},
                {name: 'release_date', type: 'text'},
                {name: 'filename', type: 'text'},
                {name: 'context', type: 'text'}
            ]
        }
    ]
})
;

function run($ionicPlatform , $rootScope, $timeout, DB) {
  $ionicPlatform.ready(function() {
    // Insert Run Methods Here
  });
}

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })
    //--------------------------------------
    .state('app.dashboard', {
      url: '/dashboard',
      views: {
        'menuContent': {
          templateUrl: 'templates/dashboard.html',
          controller: 'DashCtrl'
        }
      },
      authStatus: true
    });

  // If none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dashboard');
}
