// JQuery has to be declared first before the following scripts can be excecuted.

/*TO DO LISTS: Nov 20 2015
* Div section views:
* On each div section, find the height so you can use it to trigger the else if statement in parallax function
* For instance the div section is different when on desktop and on mobile.
* You should be able to display all of readable content before the next div section scroll on top of it
* Read the position of the next div section. When it reached the bottom part of the window speed it up and slow down the previous div section
*
* */

		$(document).ready(function() {
			console.log("JavaScript");
      console.log("Responsive Parallax Project by GonzalesDesign @ RLGonzales.com");
			//-----( On load, refresh go to the top )-----//
			window.scrollTo(0, 0);
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

      /*Test anchor link*/
     /* function fAnchorLink(){
        "use strict";
        window.scrollTo(0, 950);
      }*/

			/* smooth scrolling for nav sections */
			// $('#nav .navbar-nav li>a').click(function(){
			// 	var link = $(this).attr('href');
			// 	var posi = $(link).offset().top;
			// 	$('body,html').animate({scrollTop:posi},700);
			// });
			//-----( GSAP VARS: Using Greensock animation engine. Load js in html. )-----//
			var tMx = TweenMax;
			var tLmx = new TimelineMax({});
			var easeSine = Sine.easeOut;
			var animTym = 1.5;

      tMx.ticker.addEventListener("tick", fScrollToTarget);
      /*function fTickerTest(){
        "use strict";
        console.log("fTickerTest");
        //---------===( Remove Event Listener TICK )===---------//
        fRemoveEvntListnr(fTickerTest);
      };*/
      var yOffst = window.pageYOffset;
      var currentTarget = 1080;
      function fScrollToTarget(event) {
        if (yOffst < currentTarget) { //yOffst, scrollAmount
          window.scrollTo(0, currentTarget); //window.scrollTo( x, y);
        } else if (yOffst >= currentTarget) {
          window.scrollTo(0, currentTarget); //Changed scroll to scrollTo
        }
        fRemoveEvntListnr(fScrollToTarget);
      };
      //-------------( FUNCTION: REMOVE EVENT LISTENER )-------------//
      var j = 0;
      function fRemoveEvntListnr(myFunct){
        j++;
        if( j > 60){
          j = 0;
          tMx.ticker.removeEventListener("tick", myFunct);
        }
      }


			var testBoxID = $("#testBoxID") //$("#testBoxID");
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

      var origamiBlue = $("#origamiBlueId");
      origamiBlue.css({"left" : "100px"});
      var origamiBlueOrigXPos = origamiBlue.position().left; //sectionBirdcage.position().top
      console.log("origamiBlueOrigXPos: " + origamiBlueOrigXPos);
      /*origamiBlue.css({"position" : "fixed", "width":"25%"});*/
			
			var testBoxIDHt = testBoxID.height();
				console.log("testBoxIDHt: " + testBoxIDHt);
      //tMx.to(testBoxID, animTym, {css:{ top : -200, left: 0}, ease:easeSine});

			var allSectionsHeight = introBlockID.height() + sectionWelcome.height() + sectionPortfolio.height() + sectionBirdcage.height() + sectionFooter.height() ;
				console.log("allSectionsHeight: " + allSectionsHeight);
			var winHeight = $(window).height(); //Viewport Height
				console.log("winHeight: " + winHeight);

			var logo = $("#logoID");
				// TweenMax.to(logo, 12, { rotation : (360*3)});

			var scrollAmount;
			var scrollWindow;

      /*-----===| Parallax |===-----
          Function for the window.addEventListener('scroll'...)
          The functionality is triggered through an if()... statement based on scrollTop().

       |====================---------*/
      function parallax(){
				var containerHt_winHeight = (testBoxIDHt/winHeight) *.5;
				// console.log("containerHt_winHeight: " + containerHt_winHeight);

				scrollWindow = $(window).scrollTop();
				// scrollAmount = Math.round($(window).scrollTop() /containerHt_winHeight); //*.1;
				scrollAmount = Math.round(scrollWindow/containerHt_winHeight);

				console.log("scrollWindow: " + scrollWindow);
				//console.log("scrollAmount: " + scrollAmount);
				// var scrollAmount = scrollWindow // /2;
				// scrollAmount = (scrollAmount +100);
				// var introBlockIDTop = introBlockID.position().top;
				// console.log("introBlockIDTop: " + introBlockIDTop);
				// var sectionBirdcageTop = sectionBirdcage.position().top;
				// console.log("sectionBirdcageTop: " + sectionBirdcageTop);

				var testBoxIDTop = testBoxID.position().top;
					// console.log("testBoxIDTop: " + testBoxIDTop);

        origamiBlueOrigXPos = origamiBlue.position().left;
        tMx.to(origamiBlue, animTym, {css:{ left : (scrollAmount *5), zIndex : 20}, ease:easeSine});
        console.log("origamiBlueOrigXPos: " + origamiBlueOrigXPos);

				if(scrollAmount >= 0 && scrollAmount <= 50){
					tMx.to(navBar, animTym, {css:{ top : 100}, ease:easeSine});
        } else if(scrollAmount >= 51 && scrollAmount <= 100){
          tMx.to(navBar, animTym, {css:{ top : 10}, ease:easeSine});
          //tMx.to(testBoxID, animTym, {css:{ top : -scrollAmount}, ease:easeSine});
          // tMx.to(introBlockID, animTym, {css:{ top : -scrollAmount}, ease:easeSine});
          tMx.to(sectionWelcome, animTym, {css:{ top : - (scrollAmount)}, ease:easeSine});
          tMx.to(sectionPortfolio, animTym, {css:{ top : - scrollAmount}, ease:easeSine});
          // tMx.to(sectionBirdcage, animTym, {css:{ top : - scrollAmount}, ease:easeSine});
        } else if(scrollAmount >= 101 && scrollAmount <= 200){
					//tMx.to(navBar, animTym, {css:{ top : 10}, ease:easeSine});
				  // 	tMx.to(testBoxID, animTym, {css:{ top : -scrollAmount}, ease:easeSine});
				  // 	// tMx.to([introBlockID, sectionWelcome, sectionPortfolio, sectionBirdcage], animTym, {css:{ top : -scrollAmount}, ease:easeSine});
				  tMx.to(sectionWelcome, animTym, {css:{ top : - (scrollAmount *1)}, ease:easeSine});
          tMx.to(sectionPortfolio, animTym, {css:{ top : - (scrollAmount *1)}, ease:easeSine});
				  // 	// tMx.to(sectionPortfolio, animTym, {css:{ top : - scrollAmount}, ease:easeSine});
				  // 	// tMx.to(sectionBirdcage, animTym, {css:{ top : - scrollAmount}, ease:easeSine});
				}  else if(scrollAmount >= 201) {
          tMx.to(navBar, animTym, {css: {top: 10}, ease: easeSine});
          tMx.to(sectionWelcome, animTym, {css:{ top : - (scrollAmount)}, ease:easeSine});
          tMx.to(sectionPortfolio, animTym, {css:{ top : - (scrollAmount *2)}, ease:easeSine});
          tMx.to([sectionBirdcage, sectionFooter], animTym, {css:{ top : -scrollAmount *2}, ease:easeSine});
        }


				// else if(scrollAmount >= 31 && scrollAmount <= 50){
				// 	tMx.to(testBoxID, animTym, {css:{ top : -scrollAmount}, ease:easeSine});
				// }
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

			 };


      var contentHeight = sectionWelcome.height();/*sectionWelcome.offsetHeight;*/
      console.log("sectionWelcome contentHeight: ",contentHeight);

      var yOffset = window.pageYOffset;
      console.log("yOffset: ",yOffset);

      var yIh = yOffset + window.innerHeight;
      console.log("yIh: ",yIh);
      console.log("window.innerHeight: ",window.innerHeight);


      var xOffset = window.pageXOffset;
      console.log("xOffset: ",xOffset);
      var xIh = xOffset + window.innerWidth;
      console.log("xIh: ",xIh);
      console.log("window.innerWidth: ",window.innerWidth);

      function resizeWindow(){
        contentHeight = sectionWelcome.height();/*sectionWelcome.offsetHeight;*/
        console.log("sectionWelcome contentHeight: ",contentHeight);

        xOffset = window.pageXOffset;
        console.log("xOffset: ",xOffset);
        xIh = xOffset + window.innerWidth;
        console.log("xIh: ",xIh);
        //console.log("yIh: ",yIh);
      };

      window.addEventListener('scroll', parallax);
      window.addEventListener('resize', resizeWindow);

			/*window.addEventListener("scroll", parallax, false);*/
		});
