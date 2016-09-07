// 3)route

wetherApp.config(function($routeProvider){
	
	    $routeProvider
		
		.when("/" ,{
			
			 templateUrl:"weatherforcastApp-Pages/home.htm",
			 controller: "homeController"
			
			})	
			
         .when("/forecast" ,{
			 
			  templateUrl: "weatherforcastApp-Pages/weather.htm",
			  controller: "forCastController"
			 
			 })
			 
		.when("/forecast/:resNo" ,{
			 
			  templateUrl: "weatherforcastApp-Pages/weather.htm",
			  controller: "forCastController"
			 
			 });
	
	});