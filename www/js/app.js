// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
    'ionic',
    'starter.controllers',
    'starter.services',
    'starter.notifications',
    'starter.home',
    'starter.settings'
  ]
)

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  /*
  * Notifications
  *
  */

  .state('tab.notifications', {
    url: '/notifications',
    views: {
      'tab-notifications': {
        templateUrl: 'templates/notifications/index.html',
        controller: 'notifications.IndexCtrl'
      }
    }
  })

  /*
  * Settings
  *
  */

  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/settings/index.html',
        controller: 'settings.IndexCtrl'
      }
    }
  })

  /*
  * Home
  *
  */

  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/home/index.html',
        controller: 'home.IndexCtrl'
      }
    }
  })

  .state('tab.categories', {
    url: '/categories',
    views: {
      'tab-home': {
        templateUrl: 'templates/home/products/categories.html',
        controller: 'CategoriesCtrl'
      }
    }
  })

  .state('tab.items', {
    url: '/items/:categoryId',
    views: {
      'tab-home': {
        templateUrl: 'templates/home/products/items.html',
        controller: 'ItemsCtrl'
      }
    }
  })

  .state('tab.item', {
    url: '/items/:categoryId/:itemId',
    views: {
      'tab-home': {
        templateUrl: 'templates/home/products/item.html',
        controller: 'ItemCtrl'
      }
    }
  })

  /*
  * Billing home
  *
  */

  .state('tab.billing', {
    url: '/billing',
    views: {
      'tab-home': {
        templateUrl: 'templates/home/billings/index.html',
        controller: 'billings.IndexCtrl'
      }
    }
  })

  /*
  * Billing daily breakup
  *
  */

  .state('tab.billing_dialy', {
    url: '/billing/daily',
    views: {
      'tab-home': {
        templateUrl: 'templates/home/billings/daily.html',
        controller: 'billings.DailyCtrl'
      }
    }
  })

  // Each tab has its own nav history stack:

  // .state('tab.dash', {
  //   url: '/dash',
  //   views: {
  //     'tab-dash': {
  //       templateUrl: 'templates/tab-dash.html',
  //       controller: 'DashCtrl'
  //     }
  //   }
  // })

  // .state('tab.chats', {
  //     url: '/chats',
  //     views: {
  //       'tab-chats': {
  //         templateUrl: 'templates/tab-chats.html',
  //         controller: 'ChatsCtrl'
  //       }
  //     }
  //   })
  //   .state('tab.chat-detail', {
  //     url: '/chats/:chatId',
  //     views: {
  //       'tab-chats': {
  //         templateUrl: 'templates/chat-detail.html',
  //         controller: 'ChatDetailCtrl'
  //       }
  //     }
  //   })

  // .state('tab.account', {
  //   url: '/account',
  //   views: {
  //     'tab-account': {
  //       templateUrl: 'templates/tab-account.html',
  //       controller: 'AccountCtrl'
  //     }
  //   }
  // });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/home');

})

.config(function ($ionicConfigProvider) {

  $ionicConfigProvider.tabs.position('bottom');

  $ionicConfigProvider.tabs.style('standard');

  $ionicConfigProvider.navBar.alignTitle('center');

})

.config(function (localStorageServiceProvider) {
  localStorageServiceProvider
    .setPrefix('app');
});
