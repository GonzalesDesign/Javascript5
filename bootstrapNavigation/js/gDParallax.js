// JQuery has to be declared first before the following scripts can be excecuted.
		$(document).ready(function() {
			console.log("JavaScript")
			//------------------------( On load, refresh go to the top )------------------------//
			// window.scrollTo(0, 0);
			/* affix the navbar after scroll below header */
			// $('#nav').affix({
			// 	offset: {
			// 		top: $('header').height()-$('#nav').height()
			// 	}
			// });	

			/* highlight the top nav as scrolling occurs */
			// $('body').scrollspy({ target: '#nav' })

			/* smooth scrolling for scroll to top */
			// $('.scroll-top').click(function(){
			// 	$('body,html').animate({scrollTop:0},1000);
			// })

			/* smooth scrolling for nav sections */
			// $('#nav .navbar-nav li>a').click(function(){
			// 	var link = $(this).attr('href');
			// 	var posi = $(link).offset().top;
			// 	$('body,html').animate({scrollTop:posi},700);
			// });
			//------------( GSAP VARS: Using Greensock animation engine. Load js in html. )------------//
			var tMx = TweenMax;
			var tLmx = new TimelineMax({});
			var easeSine = Sine.easeOut;
			var animTym = 1;
			// var navBar = document.getElementById("introBlockID");
			var navBar = document.getElementById("navX");
			//var sectionID01 = document.getElementById("sectionBirdcage");
			// var sectionID01 = document.getElementById( 'sectionBirdcage' ).getElementsByClassName( 'firstClass' );
			var sectionID01 = $("#sectionBirdcage")
			sectionID01.css({"position" : "fixed"}); //, "top" : 768 + "px"
			// var s2ScrnTopPos = sectionID01.position().top;
			var logo = $("#logoID");
			console.log("navBar: " + navBar);
			console.log("sectionID01: " + sectionID01);
			TweenMax.to(logo, 12, { rotation : (360*3)});
			// TweenMax.to(sectionID01, 12, { top : 400});
			function parallax(){
				var scrollAmount = $(window).scrollTop()*2.5;
				console.log("s2ScrnTopPos: " + s2ScrnTopPos);
				console.log("scrollAmount: " + scrollAmount);

				if(scrollAmount >= 0 && scrollAmount <= 100){
					// TweenMax.to(logo, 12, { rotation : (360*3)});
					//console.log("scrollAmount2: " + scrollAmount);
					tMx.to(navBar, animTym, {css:{ top : 100}, ease:easeSine});
					TweenMax.to(sectionID01, animTym, { top : 10});

				} else if (scrollAmount >= 100 && scrollAmount <= 200)
					// console.log("sectionID01: " + sectionID01 + " "+ navBar);
					tMx.to(navBar, animTym, {css:{ top : 10}, ease:easeSine});
					// tMx.to(sectionID01, 2, {css:{ top : 10}, ease:easeSine});
					TweenMax.to(sectionID01, animTym, { top : -scrollAmount});
					var s2ScrnTopPos = sectionID01.position().top;
					console.log("s2ScrnTopPos: " + s2ScrnTopPos);
					console.log(""); console.log(""); console.log("");
					// TweenMax.to(logo, 12, { top : 600, rotation : -(360*3)});

			}
			window.addEventListener("scroll", parallax, false);
		});