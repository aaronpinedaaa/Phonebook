angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('aaronPinedaContact', {
    url: '/page1',
    templateUrl: 'templates/aaronPinedaContact.html',
    controller: 'aaronPinedaContactCtrl'
  })

  .state('allen', {
    url: '/page2',
    templateUrl: 'templates/allen.html',
    controller: 'allenCtrl'
  })

  .state('christian', {
    url: '/page3',
    templateUrl: 'templates/christian.html',
    controller: 'christianCtrl'
  })

  .state('jeno', {
    url: '/page4',
    templateUrl: 'templates/jeno.html',
    controller: 'jenoCtrl'
  })

  .state('joao', {
    url: '/page5',
    templateUrl: 'templates/joao.html',
    controller: 'joaoCtrl'
  })

  .state('lois', {
    url: '/page6',
    templateUrl: 'templates/lois.html',
    controller: 'loisCtrl'
  })

  .state('rafael', {
    url: '/page7',
    templateUrl: 'templates/rafael.html',
    controller: 'rafaelCtrl'
  })

  .state('myNumber', {
    url: '/page8',
    templateUrl: 'templates/myNumber.html',
    controller: 'myNumberCtrl'
  })

  .state('create', {
    url: '/page9',
    templateUrl: 'templates/create.html',
    controller: 'createCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});