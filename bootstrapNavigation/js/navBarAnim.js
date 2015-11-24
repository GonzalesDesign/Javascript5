$(document).ready(function() {
	console.log("JavaScript")
	//------------( GSAP VARS: Using Greensock animation engine. Load js in html. )------------//
	var tMx = TweenMax;
	var tLmx = new TimelineMax({});
	var easeSine = Sine.easeOut;
	var animTym = 1;
	var navBar = $("#navX");
	// var navBar = document.getElementById("introBlockID");
	// var navBar = document.getElementById("navX");
		// console.log("navBar: " + navBar);
	var winWidth = $(window).width(); //Viewport Width
		console.log("winWidth: " + winWidth);
	var logoTopPos;
	// NavBar vertical position on different screen sizes.
	if(winWidth <= 480){
		logoTopPos = 50;
	} else if(winWidth >= 481 && winWidth <= 768){
		logoTopPos = 40;
	} else {
		logoTopPos = 100;
	}

	
	function parallax(){
		// scrollWindow = $(window).scrollTop();
		var scrollAmount = $(window).scrollTop(); // /containerHt_winHeight; //*.1;
		// console.log("scrollWindow: " + scrollWindow);
		// console.log("scrollAmount: " + scrollAmount);
		// var navBar = $("#navX");
			// console.log("navBar: " + navBar);
		var navBarTopPos = navBar.position().top;
			console.log("navBarTopPos: " + navBarTopPos);
		if(scrollAmount >= 0 && scrollAmount <= 10){
			tMx.to(navBar, animTym, {css:{ top : logoTopPos}, ease:easeSine});
		} else if(scrollAmount >= 10){
			tMx.to(navBar, animTym, {css:{ top : 10}, ease:easeSine});
		 }
	 }
	window.addEventListener("scroll", parallax, false);
});