//2) controller

wetherApp.controller("homeController", ["$scope" ,  "cityService" , "$routeParams", function($scope , cityService,$routeParams){
	
	   $scope.cityName = cityService.cName;
	   $scope.$watch("cityName" , function(){
			 cityService.cName = $scope.cityName;
			// console.log("watched");
		   });
	
	}]);
	
	
wetherApp.controller("forCastController" , ["$scope" ,  "cityService" , "$resource", "$routeParams" , function($scope , cityService,$resource , $routeParams){
	 $scope.cityName = cityService.cName;
	
	 $scope.$watch("cityName" , function(){
		 cityService.cName = $scope.cityName;
		 });
		 
	$scope.noRes =  $routeParams.resNo || '2'; 	 
		 
	 $scope.weatherApi = $resource("http://api.openweathermap.org/data/2.5/forecast/daily" , {callback:"JSON_CALLBACK"} , {get:{method:"JSONP"}}); 
					
	 $scope.weatherResult = $scope.weatherApi.get({q:$scope.cityName , cnt:$scope.noRes  , appid:"9d87bd38bc542ec79dcdaa4a5eaf6ec2"})	
	 
	 console.log($scope.weatherResult);	
	 
	 // convertting your temprature to kelvin to celcius
	 // fourmula T(°C) = T(K) - 273.15
	 
	 
	 $scope.convertKelvinToCelcius = function(k){
		 return k - 273.15;  
		 }
		
	 $scope.convertDate = function(d){
		 return new Date(d*1000);
		 }	 
	
	}]);	
		