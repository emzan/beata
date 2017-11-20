angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('beataTe', {
    url: '/page5',
    templateUrl: 'templates/beataTe.html',
    controller: 'beataTeCtrl'
  })

  .state('yourMenuOrEvent', {
    url: '/page15',
    templateUrl: 'templates/yourMenuOrEvent.html',
    controller: 'yourMenuOrEventCtrl'
  })

  .state('page29', {
    url: '/page29',
    templateUrl: 'templates/page29.html',
    controller: 'page29Ctrl'
  })

  .state('aboutBeataTe', {
    url: '/page9',
    templateUrl: 'templates/aboutBeataTe.html',
    controller: 'aboutBeataTeCtrl'
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('ourMenu', {
    url: '/page23',
    templateUrl: 'templates/ourMenu.html',
    controller: 'ourMenuCtrl'
  })

  .state('events', {
    url: '/page26',
    templateUrl: 'templates/events.html',
    controller: 'eventsCtrl'
  })

  .state('page10', {
    url: '/page10',
    templateUrl: 'templates/page10.html',
    controller: 'page10Ctrl'
  })

  .state('myEvent', {
    url: '/page28',
	params: {
		name: "",
		phone: "",
		event: "",
		food: ""		
},
    templateUrl: 'templates/myEvent.html',
    controller: 'myEventCtrl'
  })

  .state('page11', {
    url: '/page11',
	params: {
		name: "",
		phone: "",
		event: "",
		food: ""		
},
    templateUrl: 'templates/page11.html',
    controller: 'page11Ctrl'
  })

$urlRouterProvider.otherwise('/page5')


});