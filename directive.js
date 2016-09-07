// 5) Directive


wetherApp.directive("wtherAppDirective" , function(){
	
	   return {
		     
			   templateUrl: "wetherirectiveTemplate/weDirectiveTemplate.html",
			   scope:{
				       
					   wetherDetail : "=",
					   converToCal : "&",
					   convertToDate:"&",
					   dateFormText:"@"
				   
				   }
			   
		   
		    
			 }
	
	
	});
