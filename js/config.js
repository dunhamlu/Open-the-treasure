	function config($stateProvider,$urlRouterProvider,$ocLazyLoadProvider){
		$urlRouterProvider.otherwise('/home/list')
		$stateProvider
			.state('home',{
				url : '/home',
				templateUrl : 'views/content.html'
			})
			.state('home.index',{
				url : "/index",
				templateUrl : "views/index.html",
				controller : 'index',
				data : {'title':'index','arr':[1,2,3,4,5]},
				resolve: {
	                loadPlugin: function ($ocLazyLoad) { 
	                    return $ocLazyLoad.load([
	                        {	
	                            files: ['css/style.css']
	                        }
	                    ]);
	                }
            	}
			})
			.state('home.list',{
				url : "/list",
				templateUrl : "views/list.html",
				controller : 'list',
				data : {'title':'list','arr':[1,2,3,4,5]},
				resolve: {
	                loadPlugin: function ($ocLazyLoad) {
	                    return $ocLazyLoad.load([
	                        {	
	                            files: ['css/style.css']
	                        }
	                    ]);
	                }
            	}
			})
			.state('home.user',{
				url : "/user",
				templateUrl : "views/user.html",
				controller : 'user',
				data : {'title':'user','arr':[1,2,3,4,5]}
			})
			.state('home.product',{
				url : "/product",
				templateUrl : "views/product.html",
				controller : 'product',
				data : {'title':'product','arr':[1,2,3,4,5]}
			})
	}
	angular.module('app')
		   .config(config)

	//index

	//list

	//user

	//product