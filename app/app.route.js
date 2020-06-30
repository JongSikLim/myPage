Portfolio.config(function ($stateProvider, $urlRouterProvider){    
    $urlRouterProvider.otherwise('/PROFILE');

    $stateProvider
    .state('PROFILE', {
        url: '/PROFILE',
        templateUrl: 'views/introduce.html'
    })
    .state('PORTFOLIO', {
        url: '/PORTFOLIO',
        templateUrl: 'views/portfolio.html'
    })
    .state('BLOG', {
        url: '/BLOG',        
        templateUrl: 'views/blog.html'        
    })    
});

