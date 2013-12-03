(function(){
	var escreset = function(e){
		var changeEvt = function(){
			var chge = document.createEvent('Event');
			chge.initEvent('change',true,true);
			document.forms[0].dispatchEvent(chge);
		}
		
		if( document.forms ){
			switch(e.keyCode){
			 	case 27:
			 		document.forms[0].reset();
			 		break;
			 
			 	case 13:
			 		changeEvt();
			 		break;	
			}
			
		} 	
	}
	window.addEventListener('keydown', escreset, false);
	
})();