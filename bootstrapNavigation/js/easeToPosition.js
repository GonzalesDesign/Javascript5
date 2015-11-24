$(document).ready(function() {
	console.log("JavaScript")
	var easeToPosition = $(function() {
		var _tym = 2000;
		console.log("_tym:" +  _tym);
		// this.getTime = function(){
			// return _tym;
			$("a").click(function(){
				var elemID = $(this.hash);
				if(elemID === undefined){
					console.log("elemID:" +  elemID);
					//do nothing! Only hash present
				} else {
					$("html, body").animate({ 
					scrollTop: elemID.position().top}, _tym, "easeOutExpo");
				};
			});
		// }	
	});
});

// var easeMe = new easeTo();