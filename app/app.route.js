Portfolio.config(function ($stateProvider, $urlRouterProvider){    
    $urlRouterProvider.otherwise('/introduce');

    $stateProvider
    .state('introduce', {
        url: '/introduce',
        templateUrl: 'views/introduce.html'
    })
    .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'views/portfolio.html'
    })
    .state('blog', {
        url: '/blog',        
        templateUrl: 'views/blog.html'        
    })    
});

