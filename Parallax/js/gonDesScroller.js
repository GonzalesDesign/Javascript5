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
			var introBlockID = $("#introBlockID");
				introBlockID.css({"position" : "relative"});
			var introBlockIDHeight = introBlockID.height();//$("#introBlockID").height();
				// console.log("introBlockIDHeight: " + introBlockIDHeight);

			var sectionWelcome = $("#sectionWelcome");
				sectionWelcome.css({"position" : "relative"});
			var sectionPortfolio = $("#sectionPortfolio");
				sectionPortfolio.css({"position" : "relative"});
			var sectionBirdcage = $("#sectionBirdcage");
				sectionBirdcage.css({"position" : "relative"});
			var sectionFooter = $("#sectionFooter");
				sectionFooter.css({"position" : "relative"});
			

			var allSectionsHeight = introBlockID.height() + sectionWelcome.height() + sectionPortfolio.height() + sectionBirdcage.height() + sectionFooter.height() ;
				// console.log("allSectionsHeight: " + allSectionsHeight);
			var winHeight = $(window).height(); //Viewport Height
				console.log("winHeight: " + winHeight);

			var containerHt_winHeight = allSectionsHeight/winHeight *5;
				console.log("containerHt_winHeight: " + containerHt_winHeight);



			var logo = $("#logoID");
				// TweenMax.to(logo, 12, { rotation : (360*3)});



			var scrollAmount;
			var scrollWindow;
			function parallax(){
				scrollWindow = $(window).scrollTop();
				scrollAmount = $(window).scrollTop() /containerHt_winHeight; //*.1;

				console.log("scrollWindow: " + scrollWindow);
				console.log("scrollAmount: " + scrollAmount);
				// var scrollAmount = scrollWindow // /2;
				// scrollAmount = (scrollAmount +100);
				// 
				var introBlockIDTop = introBlockID.position().top;
				// console.log("introBlockIDTop: " + introBlockIDTop);
				var sectionBirdcageTop = sectionBirdcage.position().top;
				// console.log("sectionBirdcageTop: " + sectionBirdcageTop);

					
				if(scrollAmount >= 0 && scrollAmount <= 10){
					tMx.to(navBar, animTym, {css:{ top : 100}, ease:easeSine});
					tMx.to(introBlockID, animTym, {css:{ top : -scrollAmount}, ease:easeSine});
					tMx.to(sectionWelcome, animTym, {css:{ top : - (scrollAmount)}, ease:easeSine});
					tMx.to(sectionPortfolio, animTym, {css:{ top : - scrollAmount}, ease:easeSine});
					tMx.to(sectionBirdcage, animTym, {css:{ top : - scrollAmount}, ease:easeSine});

				} else if(scrollAmount >= 10){
					tMx.to(navBar, animTym, {css:{ top : 10}, ease:easeSine});
					tMx.to([introBlockID, sectionPortfolio, sectionBirdcage], animTym, {css:{ top : -scrollAmount}, ease:easeSine});
					tMx.to(sectionWelcome, animTym, {css:{ top : 100}, ease:easeSine});
					// tMx.to(sectionPortfolio, animTym, {css:{ top : - scrollAmount}, ease:easeSine});
					// tMx.to(sectionBirdcage, animTym, {css:{ top : - scrollAmount}, ease:easeSine});
				 } //else if(scrollAmount >= 1301){
				// 	console.log("End Scrolls")
				// 	// tMx.to([introBlockID, sectionWelcome, sectionPortfolio, sectionBirdcage], animTym, {css:{ top : scrollAmount}, ease:easeSine});
				// }

			// 	if(scrollAmount >= 0 && scrollAmount <= introBlockIDHeight){
			// 		// TweenMax.to(logo, 12, { rotation : (360*3)});
			// 		//console.log("scrollAmount2: " + scrollAmount);
			// 		tMx.to(navBar, animTym, {css:{ top : 100}, ease:easeSine});
			// 		tMx.to(introBlockID, animTym, {css:{ top : -scrollAmount}, ease:easeSine});
			// 		tMx.to(sectionWelcome, animTym, {css:{ top : - scrollAmount}, ease:easeSine});
			// 		tMx.to(sectionPortfolio, animTym, {css:{ top : - scrollAmount}, ease:easeSine});
			// 		tMx.to(sectionBirdcage, animTym, {css:{ top : - scrollAmount}, ease:easeSine});
			// 		// tMx.to(navBar, animTym, { top : 100}, ease:easeSine});
			// 		// tMx.to(introBlockID, animTym, { top : -scrollAmount}, ease:easeSine});
			// 		// tMx.to(sectionWelcome, animTym, { top : 768 -scrollAmount}, ease:easeSine});
			// 		// tMx.to(sectionPortfolio, animTym, { top : (768 *2)-scrollAmount)}, ease:easeSine});
			// 		// tMx.to(sectionBirdcage, animTym, { top : (768 *3)-scrollAmount}, ease:easeSine});

			// 	} else if (scrollAmount >= introBlockIDHeight && scrollAmount <= 1400)
			// 		// console.log("sectionID01: " + sectionID01 + " "+ navBar);
			// 		tMx.to(navBar, animTym, {css:{ top : 10}, ease:easeSine});
			// 		// tMx.to(sectionID01, 2, {css:{ top : 10}, ease:easeSine});
			// 		// TweenMax.to(sectionID01, animTym, { top : -scrollAmount});
			// 		// var s2ScrnTopPos = sectionID01.position().top;
			// 		// console.log("s2ScrnTopPos: " + s2ScrnTopPos);
			// 		// console.log(""); console.log(""); console.log("");
			// 		// TweenMax.to(logo, 12, { top : 600, rotation : -(360*3)});

			 }
			window.addEventListener("scroll", parallax, false);
		});
