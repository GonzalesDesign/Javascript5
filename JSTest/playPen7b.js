/****************************************
 * Adobe Edge Animate Composition Actions
 * Copyright © 2015 Gonzales Design
 * RLGonzales.com
 * rolandolloyd@gmail.com
 * Responsive Parallax Project

 ****************************************/
(function($, Edge, compId){
  var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes
  //Edge symbol: 'stage'
  (function(symbolName) {
    Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
      //------------------------( CENTERING STAGE )------------------------//
      //$("#Stage").css("margin", "auto");
      console.log("Responsive Parallax Project by GonzalesDesign @ RLGonzales.com");
      console.log("February 20, 2015: 16:9 Screen Ratio. Full screen images.");
      //------------------------( On load, refresh go to the top )------------------------//
      window.scrollTo(0, 0);
      //------------( GSAP VARS: Using Greensock animation engine. Load in html. )------------//
      var tMx = TweenMax;
      var tLmx = new TimelineMax({});
      var easeSine = Sine.easeOut;
      var animTym = 1;
      //------------( DOCUMENT  BROWSER VIEWPORT   SCREEN   DIMENSIONS )------------//

      var stageHeight = $("#Stage").height(); //Stage height
      var stageWidth = $("#Stage").width(); //Stage width
      var winWidth = $(window).width(); //Viewport Width
      var winHeight = $(window).height(); //Viewport Height

      //------------( MeasurementVars )------------//
      var yOffst;
      var scrollAmount = $(window).scrollTop();
      var staticScrnHeight = 768;
      var travelHeight = staticScrnHeight/2;//384;
      //console.log("travelHeight:",travelHeight);

      //--------( AudioController)-------//
      //-----( Actual audio is assigned in Animate timeline using the built in audio controller. Autoplay, Preload Audio)-----//
      var audioBtn = $(sym.createChildSymbol("audioController", "Stage").getSymbolElement());
      //audioBtn.bind ("mouseover",function(){fBtnStatesOn(audioBtn)});
      //audioBtn.bind ("mouseout",function(){fBtnStatesOff(audioBtn)});
      audioBtn.css({"cursor": "pointer"});
      //tMx.to(audioBtn, 0, {css:{ position:"fixed", x : 20, y : 500, zIndex : 150}});

      //--------( LoadMainScreenOnStage )-------//
      var mS = $(sym.createChildSymbol("mainScreen", "Stage").getSymbolElement());
      tMx.to(mS, 1, {css:{ position:"fixed", x : 0, y : 0}, ease:easeSine});

      //--------( CreateMainTitleInsideMainScreen )-------//
      //var sT = $(sym.createChildSymbol("s1Title", "Stage").getSymbolElement()); // Create on stage
      var sT = $(sym.createChildSymbol("s1Title", mS).getSymbolElement()); //Playpen Title and Background
      tMx.to(sT, 0, {css:{ position:"fixed", x : 0, y : 0, zIndex : 1}});
      var sTPlaypen = sym.getSymbol(sT).$("PlaypenLogo");
      var mB = $(sym.createChildSymbol("dynBtns", "Stage").getSymbolElement()); //mB: menuButtons. dynBtns is a transparent square symbol
      //var sB = $(sym.createChildSymbol("siteBackground", "Stage").getSymbolElement());
      //tMx.to(sB, 0, {css:{ position:"fixed", x : 0, y : staticScrnHeight, zIndex : 200}});

      //--------( TransformFunctionForDiffBrowsers )-------//
      function fTransform(elem, valXY, scale){
        $(elem).css({
          "transform-origin" : valXY,
          "-webkit-transform-origin" : valXY,
          "-ms-transform-origin" : valXY,
          "-moz-transform-origin" : valXY,

          "transform" : "scale("+ scale + ") ",
          "-webkit-transform" : "scale("+ scale + ") ",
          "-ms-transform" : "scale("+ scale + ") ",
          "-moz-transform" : "scale("+ scale + ") "
        });
      }
      //------------------------( BackgroundOnTop: Stays at the bottom of the screen size. Act as a divider between screens. )------------------------//
      //-----( Background Image: Duplicate and distributes by rows and columns )-----//
      var rows = 8; //Duplicate in the vertical position by this much
      var columns = 20; //Duplicate in the horizontal position by this much
      //var jj = 0;
      var horLinesXSpaces;
      var horLinesYSpaces;
      var topBackgrndYPos = 500;
      var rectContainer = $(sym.createChildSymbol("rectContainer", "Stage").getSymbolElement());
      for (var ix = 0; ix < rows; ix++) {
        for (var jx = 0; jx < columns; jx++) {
          horLinesXSpaces = jx * 100 + 0 +"px";
          horLinesYSpaces = ix * 100 + 0; +"px"
          var topBGDivider = $(sym.createChildSymbol("bgSquares2", rectContainer).getSymbolElement());
          topBGDivider.css({"left" : horLinesXSpaces, "top" : horLinesYSpaces});
        }
      };
      //-----( BackgroundColorAndGradation )-----//
      var colrSqrContainer = $(sym.createChildSymbol("colorSquareContainer", rectContainer).getSymbolElement());  //Rectangle class=rect
      colrSqrContainer.css({zIndex : -10}); //Goes underneath the horLines

      var colrSqrRectGrad = sym.getSymbol(colrSqrContainer).$("RectGrad"); //RectGrad div inside colorSquareContainer symbol
      var colrSqrRectangle = sym.getSymbol(colrSqrContainer).$("Rectangle"); //Rectangle is the div inside colorSquareContainer symbol

      //---------===( Function fScrnResize: Viewport Resize )===---------//
      var currentScrollPos;
      var resPerc = 1; //-----==( Resize Percentage. Default @ 1 for 100% )=-----
      var mBYPosRes;
      //var topBackgrndYPos;
      function fScrnResize(){
        stageHeight = $("#Stage").height();
        winWidth = $(window).width(); //Viewport Width
        winHeight = $(window).height(); //Viewport Height

        //---------===( currentScrollPos is use to trigger a refresh )===---------//
        //---Without this trigger the resize event doesn't trigger automatically when the scroll is > 0
        currentScrollPos = $(window).scrollTop();
        window.scrollTo( 0, currentScrollPos + 1); //Changed scroll to scrollTo

        //---------===( RESIZE PERCENTAGE CALCULATION )===---------//
        resPerc = winWidth/stageWidth * 1; //Viewport width/ Stage width * 100% = Resize Percentage;
        topBackgrndYPos = staticScrnHeight*resPerc; //Calculates the dynamic y position of the dark higher background
        //tMx.to(bgContainer, 0, {css:{ position:"fixed", x : 0, y : topBackgrndYPos, scaleX : winWidth, zIndex : 200}});
        rectContainer.css({"position" : "fixed", "left" : 0, "top" : topBackgrndYPos, zIndex : 200}); //rectContainer symbol, holds the background image
        tMx.to(colrSqrRectGrad, 0, {width:winWidth, height:winHeight-topBackgrndYPos});
        tMx.to(colrSqrRectangle, 0, {width:winWidth, height:winHeight, backgroundColor:"#0080ff", opacity:.75}); // colorSquareContainer symbol, flat background //backgroundColor:"#000000",

        if(winWidth < 750){
          tMx.to(audioBtn, 1, {css:{ position:"fixed", x : -20, y : topBackgrndYPos-(150*resPerc), scale:.65, opacity:.75, zIndex : 150}});//Positioning the audio controller based on the window size.
        } else {
          tMx.to(audioBtn, 1, {css:{ position:"fixed", x : 20, y : topBackgrndYPos-(100*resPerc), scale:1, opacity:.75, zIndex : 150}});//Positioning the audio controller based on the window size.
        }

        //-----( Dynamically resize and position menu buttons on browser resized )-----
        var fullMenuHeightRes = btnCount * 20 + 200; //Menu button height
        mBYPosRes = winHeight - fullMenuHeightRes; //Menu button vertical position

        //-----( Logic for browser width. If smaller than 100%, menuButtons will be at 100% else 150% )-----//
        if(resPerc <= 1){
          tMx.to(mB, 1, {css:{ scale: 1}, ease:easeSine});
        } else {
          tMx.to(mB, 1, {css:{ scale: 1.5}, ease:easeSine});
        }

        fTransform(mS, "0 0", resPerc);
      }

      //---------===( On Load: Invoke Resize Function )===---------//
      fScrnResize();
      //------------------------( Bind onResize. Excecutes everytime the window is resized. )------------------------//
      var resizeTimer;
      $( window ).resize(function() {
        //---------===( Dynamic: Invoke Resize Function )===---------//
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(fScrnResize, 100);
        //console.log("resizeTimer:",resizeTimer);
        //resizeTimer = setTimeout(scaleStage, 100);
        console.log("resizeFunction")
      });
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      //------------( Y POSITIONS: Travel Heights Generator )------------//
      var aYPos = new Array();
      for(var yP=0; yP<60; yP++){
        var yPos = travelHeight * yP;
        console.log("yPos#",  yP, " : ", yPos);
        aYPos[aYPos.length] = yPos;
      }
      //------------( TRAVEL HEIGHTS VARS)------------//
      //---tH1 = 1: Represents 1  in aYPos array like aYPos[tH1].  tH2 = tH1 + 2, meaning the tH1 + 2 = aYPos[3]
      //---Changing the number will automatically adjust the subsequent values.
      //--- Example usage: (scrollAmount >= aYPos[tH1] && scrollAmount <= aYPos[tH2])
      var tH1 = 1;
      var tH2 = tH1 + 2;
      var tH3 = tH2 + 2;
      var tH4 = tH3 + 1;
      var tH5 = tH4 + 11;
      var tH6 = tH5 + 2;
      var tH7 = tH6 + 13;
      var tH8 = tH7 + 2;
      var tH9 = tH8 + 5;
      var tH10 = tH9 + 2;
      var tH11 = tH10 + 1;
      var tH12 = tH11 + 1;
      var tH13 = tH12 + 2;
      var tH14 = tH13 + 2;
      var tH15 = tH14 + 2;
      var tH16 = tH15 + 2;
      var tH17 = tH16 + 4;
      //var tH18 = tH17 + 2;
      //var tH19 = tH18 + 2;
      //var tH20 = tH19 + 2;

      console.log("tH1:",  tH1, tH2, tH3, tH4, tH5, tH6);
      //------------------------( SCREENS_VARIABLES )------------------------//
      var s1 = sym.getSymbol(mS).$("s1");
      var s1Desc = sym.getSymbol(s1).$("s1Description");
      var s2 = sym.getSymbol(mS).$("s2");
      var s3 = sym.getSymbol(mS).$("s3");
      var s4 = sym.getSymbol(mS).$("s4");
      var s5 = sym.getSymbol(mS).$("s5");
      var s6 = sym.getSymbol(mS).$("s6");
      var fiveYrsAgo = sym.getSymbol(s6).$("fiveYrsAgo");
      var thankYou = sym.getSymbol(s6).$("thankYou");
      s1.css({"position" : "absolute", "left" : 0 + "px", "top" : 0 + "px"});
      // s1Desc.css({"position" : "absolute", "left" : 0 + "px", "top" : -450 + "px"});
      s1Desc.css({"position" : "absolute", "left" : 0 + "px", "top" : -450 + "px"});
      s2.css({"position" : "absolute", "left" : 0 + "px", "top" : 768 + "px"});
      s3.css({"position" : "absolute", "left" : 0 + "px", "top" : 1536 + "px"});
      var s3a = sym.getSymbol(s3).$("s3a"); //Init s3a symbol inside s3 (parent) symbol
      var s3Txt = sym.getSymbol(s3).$("s3Txt");
      var s3Title = sym.getSymbol(s3Txt).$("s3Title");
      var s3Descript = sym.getSymbol(s3Txt).$("s3Descript");
      var s3b = sym.getSymbol(s3).$("s3b");
      var s3c = sym.getSymbol(s3).$("s3c");
      var s3d = sym.getSymbol(s3).$("s3d");
      var s3e = sym.getSymbol(s3).$("s3e");
      var s3f = sym.getSymbol(s3).$("s3f");
      var s3g = sym.getSymbol(s3).$("s3g");
      var darkBG = sym.getSymbol(s3).$("darkBG"); //As a background color for text readability. Optional.
      tMx.to(darkBG, 0, {css:{ alpha : 0}, ease:easeSine});

      s4.css({"position" : "absolute", "left" : 0 + "px", "top" : 2304 + "px"});
      var s4a = sym.getSymbol(s4).$("s4a");
      var s4Title = sym.getSymbol(s4a).$("s4Title");
      var s4Descript = sym.getSymbol(s4a).$("s4Descript");
      var s4b = sym.getSymbol(s4).$("crib-04");
      var s4c = sym.getSymbol(s4).$("s4c");
      var s4d = sym.getSymbol(s4).$("s4d");

      s5.css({"position" : "absolute", "left" : 0 + "px", "top" : 3072 + "px"});
      var s5ClipCrib03b = sym.getSymbol(s5).$("crib-03b");
      var clipLeft = "1800px"; //Diff of 300px
      var clipRight = "1500px";
      tMx.to(s5ClipCrib03b, 0, {css:{clip:"rect(0px,"+ clipLeft + ", 768px," + clipRight+")"}});
      var rectClipShadow = sym.getSymbol(s5).$("rectClipShadow"); //rectCutHidden s3Cut1Symbl
      rectClipShadow.css({"position" : "absolute", "left" : 1500 + "px", "top" : 0 + "px"});
      tMx.to(rectClipShadow, 0, {boxShadow:"0px 0px 50px rgba(0, 0, 0, 0.75)"});
      var s5Txt = sym.getSymbol(s5).$("s5Txt");
      var s5Title = sym.getSymbol(s5Txt).$("s5Title");
      var s5Descript = sym.getSymbol(s5Txt).$("s5Descript");

      s6.css({"position" : "absolute", "left" : 0 + "px", "top" : 3840 + "px"});
      var s6a = sym.getSymbol(s6).$("crib-24");
      var s6b = sym.getSymbol(s6).$("crib-25");
      var s6c = sym.getSymbol(s6).$("crib-26");
      var s6d = sym.getSymbol(s6).$("crib-27");
      //tMx.to([fiveYrsAgo, thankYou], 0, {css:{ alpha : .75}, ease:easeSine});
      var y5Title = sym.getSymbol(fiveYrsAgo).$("y5Title");
      var y5Descript = sym.getSymbol(fiveYrsAgo).$("y5Descript");
      tMx.to([y5Title, y5Descript], 0, {css:{ y:-50}, ease:easeSine}); //Repositioning Year Five title and description relative to where it was


      thankYou.css({"position" : "absolute", "left" : 0 + "px", "top" : 768 + "px"});
      var tYTitle = sym.getSymbol(thankYou).$("tYTitle");
      var tYDescript = sym.getSymbol(thankYou).$("tYDescript");
      tMx.to([tYTitle, tYDescript], 0, {css:{ y:-50}, ease:easeSine}); //Repositioning Thank You title and description relative to where it was

      var logoFB = sym.getSymbol(thankYou).$("logoFB");
      //-------------( Function: Link opens another window )-------------//
      function fLinkToFB(elem){
        //window.open("https://www.facebook.com/photo.php?fbid=10202572123520852&set=a.3994964349056.171954.1129351423&type=1&theater", "_blank");
        window.open("https://www.facebook.com/RLloydGonzalesDesign", "_blank");
      }
      //-------------( Arrow Cursor changed to Pointer )-------------//
      //sym.$(logoFB).css("cursor", "pointer");
      //logoFB.css({"cursor": "pointer","position" : "absolute", "top" : "-300px"});
      logoFB.css({"cursor": "pointer"});
      //-------------( Binding Button )-------------//
      logoFB.bind ("click",function(){fLinkToFB(logoFB);});

      var logoGD = sym.getSymbol(thankYou).$("logoGD");
      //-------------( Function: Link opens self )-------------//
      function fLinkToRLG(elem){
        window.open("http://www.RLGonzales.com", "_self");
      }
      //-------------( Arrow Cursor changed to Pointer )-------------//
      sym.$(logoGD).css('cursor', 'pointer');
      //-------------( Binding Button )-------------//
      logoGD.bind ("click",function(){fLinkToRLG(logoGD);});
      ///////////////////////////////////////////////////////////////////

      //------------( LoadMainMenu_Buttons )------------//
      //---------===( Parent )===---------//
      // var mB = $(sym.createChildSymbol("dynBtns", "Stage").getSymbolElement()); //Load menu buttons on Stage
      //mB.css({"position" : "fixed", "left" : "0px", "top" : "40px", "height":"100px", "width":"100px", zIndex:10}); // opacity : .5,
      var mBScale = 1;
      tMx.to(mB, 0, {css:{ position:"fixed", x : 0, y : 0, scale:mBScale, zIndex:10}, ease:easeSine});

      //------------( BookmarksButtonBars )------------//
      var currentTarget;
      var aBtns = new Array();
      var aMenuTitles = new Array("HOME", "JOINERIES", "MAHOGANY", "TESTING", "RE-USABILITY", "THANK YOU");
      //var aBookmarkPos = [0, 4223, 8832, 13223, 16120];
      var aBookmarkPos = [0, 1690, 3532, 5836, 6452, 7836];
      var btnCount = aMenuTitles.length;
      //---------===( Menu Buttons )===---------//
      for(var i=0; i<aMenuTitles.length; i++){
        //---------===( Create mB children buttons )===---------//
        var mB2 = sym.createChildSymbol("btn", mB); //btn is the symbol with circle, circleBtn, textButton symbols in it
        sym.$(mB2).css({opacity : 1 }); //Set children button's opacity
        //---------===( Assign ID )===---------//
        //mB2.setVariable("id", i);
        var btnID = mB2.setVariable("id", i);
        //console.log("btnID: "+btnID + i);
        aBtns[aBtns.length] = mB2; //----Push children to aBtns array
        //console.log("aBtns[i]:"+aBtns[i]);
      }

      //--------( FUNCTION: ADD EVENT LISTENER TICK )-------//
      function fAddEvntListnr(currentTarget){
        //---------===( Add Event Listener TICK )===---------//
        TweenMax.ticker.addEventListener("tick", fScrollToTarget);
        //console.log("currentTarget:",currentTarget);
        function fScrollToTarget(event) {
          if(yOffst < currentTarget){ //yOffst, scrollAmount
            window.scrollTo( 0, currentTarget); //window.scrollTo( x, y);
          } else if(yOffst >= currentTarget){
            window.scrollTo( 0, currentTarget ); //Changed scroll to scrollTo
          }
          //console.log("TweenMax.ticker");
          //---------===( Remove Event Listener TICK )===---------//
          fRemoveEvntListnr(fScrollToTarget);
        }
      }
      //-------------( FUNCTION: REMOVE EVENT LISTENER )-------------//
      var j = 0;
      function fRemoveEvntListnr(myFunct){
        j++;
        if( j > 60){
          j = 0;
          TweenMax.ticker.removeEventListener("tick", myFunct);
        }
      }

      //------------------------( CLICK FUNCTION )------------------------//
      var currentSelectedButton;
      function fLoadNewSet(elem, symbolInTheArray){
        currentSelectedButton = symbolInTheArray;
        //console.log("currentSelectedButton:",currentSelectedButton);
        yOffst = window.pageYOffset;
        //console.log("yOffstB:",yOffst);
        fAddEvntListnr(aBookmarkPos[symbolInTheArray.getVariable("id")]); //Load the corresponding aBookmarkPos array index
        //console.log("aBookmarkPos[symbolInTheArray:"+symbolInTheArray);
        var circle = sym.getSymbol(elem).$("circle"); //
        circle.css({"background-color":"#00beff", opacity:1 }); //fd5317  FF9933 00beff
      }

      function fBtnStatesOn(elem){
        //elem.getSymbolElement().css({"cursor": "pointer", opacity : 1 });
        elem.getSymbolElement().css({opacity : 1 });
      }
      function fBtnStatesOff(elem){
        elem.getSymbolElement().css({opacity : .5 });
      }

      function fHiliteMenuBtn(symbolInTheArray){ //-----(Hilites button at the current (window.scrollTo())position )
        currentImage = symbolInTheArray.getVariable("id");
        currentSelectedButton = symbolInTheArray;
        //console.log("fHiliteMenuBtn: currentImage:",currentImage);

        //-----(Turn off all buttons)
        for(var i = 0; i<aBtns.length; i++){
          fBtnStatesOff(aBtns[i]); // Grey other buttons
          //sym.$(btnText).html("");
        }
        fBtnStatesOn(aBtns[currentImage]); //-----(Turn on current button only)
        //sym.$(btnText).html(aMenuTitles[symbolInTheArray.getVariable("id")]);//  show the html text

        var btnElem = $(symbolInTheArray.getSymbolElement());
        fShowMenuText(btnElem, symbolInTheArray);

        var btnText = sym.getSymbol(btnElem).$("btnText");
        if(winWidth < 1000){ //If the browser window is smaller than 1k
          sym.$(btnText).html("");
        } else {
          sym.$(btnText).html(aMenuTitles[symbolInTheArray.getVariable("id")]);//  show the html text
        }
      };

      function fShowMenuText(elem, symbolInTheArray){
        var btnText = sym.getSymbol(elem).$("btnText");
        //var menuElement = $(symbolInTheArray.getSymbolElement());
        sym.$(btnText).html(aMenuTitles[symbolInTheArray.getVariable("id")]);//  show the html text
      }

      //------------------------( BindingButtons )------------------------//
      $.each(aBtns, function( count, symbolInTheArray ){
        //currentSelectedButton = symbolInTheArray;
        //---------===( jQuery Reference to each of the symbol inside the array )===---------//
        var menuElement = $(symbolInTheArray.getSymbolElement());

        //---------===( Change cursor & Positioning children )===---------//
        menuElement.css({"cursor": "pointer","position" : "absolute", "left" : "40px", "top" : count * 20 + 50 + "px"});
        //---------===( Button Bindings )===---------//
        menuElement.bind ("click",function(){fLoadNewSet(menuElement, symbolInTheArray)});//symbolInTheArray);});
        menuElement.bind ("mouseover",function(){fButtonElem(menuElement, symbolInTheArray, false)});
        menuElement.bind ("mouseout",function(){fButtonElem(menuElement, symbolInTheArray, true)});
        //console.log("menuElement"+menuElement);
        //console.log("symbolInTheArray"+symbolInTheArray);
      });

      //-----( Menu buttons vertical position )-----//
      var mBHeight = $(mB).height(); //Getting the width of the vertical border
      var fullMenuHeight = btnCount * 20 + 250; //fullMenuHeight, is used to minus from the stage total height for menu positioning
      //console.log("fullMenuHeight: " + fullMenuHeight);
      var mBYPos = winHeight - fullMenuHeight;
      //tMx.to(mB, 1, {css:{ position:"fixed", x : 0, y : mBYPos, scale:mBScale, zIndex:10}, ease:easeSine}); //Menu buttons scaling //40

      //------------------------( RollOut_RollOver )------------------------//
      var rO = true; //RollOut is true
      function fButtonElem(elem, symbolInTheArray, rO){
        var btnText = sym.getSymbol(elem).$("btnText");
        //btnText.css({opacity:alfaVal });
        var circleBtn = sym.getSymbol(elem).$("circleBtn");
        circleBtn.css({opacity:.5 });
        if(rO == true){ //onRollOut
          if(winWidth < 1000){ //If the browser window is smaller than 1k then don't display menu text except when rolled over.
            sym.$(btnText).html("");
          } else {
            sym.$(btnText).html(aMenuTitles[symbolInTheArray.getVariable("id")]);//  show the html text
          }
          //-----(Turn off all buttons)
          for(var i = 0; i<aBtns.length; i++){
            fBtnStatesOff(aBtns[i]);
          }
          //Keep selected button at opacity 1
          fBtnStatesOn(currentSelectedButton); //-----(Turn on current button only)
        } else { //onRollOver
          sym.$(btnText).html(aMenuTitles[symbolInTheArray.getVariable("id")]);//  show the html text
          fBtnStatesOn(symbolInTheArray); //-----(Turn on current button only)
        }
      }

      //--------------------====( These vars are used to convert static values to dynamic ones based on the stageSizePercent )====--------------------//
      var stageSizePercnt =100;
      var  dynNum350 = 350/(100/stageSizePercnt);
      var  dynNum387 = 387/(100/stageSizePercnt);
      var  dynNum5500 = 5500/(100/stageSizePercnt);
      var  dynNum5700 = 5700/(100/stageSizePercnt);
      var  dynNum6020 = 6020/(100/stageSizePercnt);
      var  dynNum6500 = 6500/(100/stageSizePercnt);
      var  dynNum7100 = 7100/(100/stageSizePercnt);
      var  dynNum7400 = 7400/(100/stageSizePercnt);
      console.log("----------dynNum350:",dynNum350);
      console.log("----------dynNum7400:",dynNum7400);

      //-----(Find out where the screen's top is in relation to the main stage and use that value to scroll to when you clicked a button)
      var mSTopPos = $(mS).scrollTop();
      //var s2ScrnTopPos = $(s2).scrollTop(); //s2.scrollTop;
      //var s2P = sym.getSymbol(mS).$("s2"); ;
      var s2ScrnTopPos = s2.position().top;
      //console.log("mSTopPos: " + mSTopPos);
      //console.log("s2ScrnTopPos: " + s2ScrnTopPos);
      //var bdrWidth = $(bdrLft).width(); //Getting the width of the vertical border
      ////////////////////////////////////////////////////////////////////////////////SCROLL TRIGGER START
      //$(document).scroll(function(e){
      /*var scrollAmount = $(window).scrollTop();*/
      var yOffst2;
      function parallax(){
        yOffst2 = window.pageYOffset/10;
        yOffst3 = window.pageYOffset/1;
        scrollAmount = $(window).scrollTop()*2.5;
        var yPosNeg100 = (-100 - scrollAmount);
        var yPosNeg384 = (-384 - scrollAmount);
        //--------( Logic for the scrolling symbols and elements )-------//
        //--------------------====( screen 1 )====--------------------//
        if(scrollAmount >= 0 && scrollAmount <= aYPos[tH1]){
          console.log("------Screen 1: Section HOME");
          //console.log("aYPos[1]:", aYPos[tH1] );
          fHiliteMenuBtn(aBtns[0]); //Hilites the section's or screen's corresponding menu button
          //tMx.to(s1Desc, animTym, {css:{ top : ((aYPos[1] - scrollAmount)- dynNum350 )}, ease:easeSine}); //Description going down //350
          tMx.to(sTPlaypen, animTym, {css:{ position:"fixed", x : 0, y : 0, scale:1, zIndex : 1}});
          tMx.to(s1Desc, animTym, {css:{ top :  ((aYPos[1] - scrollAmount)- dynNum350 )}, ease:easeSine});
          //tMx.to(scrllDwnIcn, animTym, {css:{ top: 640- scrollAmount}, ease:easeSine});
          tMx.to(s2, animTym, {css:{ top : aYPos[2]}, ease:easeSine});
          tMx.to(s3, animTym, {css:{ top : aYPos[4]}, ease:easeSine}); //Keep s3 still in Y Position 1536
          tMx.to(darkBG, animTym + 1, {css:{ alpha : 0}, ease:easeSine});
          tMx.to([s3a, s3Txt, s3b, s3c, s3d, s3e, s3f, s3g], animTym, {css:{ left: stageWidth}, ease:easeSine}); //Group these screens and keep them to the right :1366
          tMx.to(s4, animTym, {css:{ top : aYPos[6]}, ease:easeSine}); //Keep s4 still in Y Position 2304
          tMx.to([s4a, s4b, s4c, s4d], animTym, {css:{ left: stageWidth}, ease:easeSine}); //Mahogany screen stay all the way to the right
          tMx.to(s5, animTym, {css:{ top : aYPos[8]}, ease:easeSine}); //Keep s5 still in Y Position 3072
          tMx.to(s6, animTym, {css:{ top : aYPos[10]}, ease:easeSine}); //Keep s6 still in Y Position 3840
          tMx.to(fiveYrsAgo, 0, {css:{ top : aYPos[12]}, ease:easeSine}); //4000
          //--------------------====( screen 2 )====--------------------//
          //} else if (scrollAmount >= travelHeight && scrollAmount <= travelHeight*3){
        } else if (scrollAmount >= aYPos[tH1] && scrollAmount <= aYPos[tH2]){
          console.log("------Screen 2");
          //console.log("aYPos[tH2]:", aYPos[tH2], "travelHeight*3:",travelHeight*3 );
          //tMx.to(sT, animTym, {css:{ position:"fixed", x : 0, y : -50, scale:.7, zIndex : 1}});
          tMx.to(sTPlaypen, animTym, {css:{ position:"fixed", x : 0, y : -50, scale:.7, zIndex : 1}}); //Make Playpen logo smaller

          tMx.to(s1Desc, animTym, {css:{ top : yPosNeg100}, ease:easeSine}); //Description going up
          tMx.to(s2, animTym, {css:{ top : (aYPos[3] - scrollAmount)}, ease:easeSine}); //s2 moves up yPos1152
          tMx.to(s3, animTym, {css:{ left: 0, top : (aYPos[5] - scrollAmount)}, ease:easeSine}); //s3 moving up yPos1920
          tMx.to(darkBG, animTym + 1, {css:{ alpha : 0}, ease:easeSine});
          tMx.to([s3a, s3Txt, s3b, s3c, s3d, s3e, s3f, s3g], animTym, {css:{ left: stageWidth}, ease:easeSine}); //Group these screens and keep them to the right :1366
          tMx.to(s4, animTym, {css:{ top : (aYPos[7] - scrollAmount)}, ease:easeSine}); //s4 moves up yPos2688
          tMx.to(s5, animTym, {css:{ top : (aYPos[9] - scrollAmount)}, ease:easeSine}); //s5 moves up yPos3456
          tMx.to(s6, animTym, {css:{ top : (aYPos[11] - scrollAmount)}, ease:easeSine}); //s6 moves up yPos4224

          //--------------------====( screen 3 )====--------------------//
          //} else if (scrollAmount >= travelHeight*3 && scrollAmount <= travelHeight*5){
        } else if (scrollAmount >= aYPos[tH2] && scrollAmount <= aYPos[tH3]){
          //console.log("------Screen 3: JOINERIES");
          //console.log("aYPos[tH3]:", aYPos[tH3], "travelHeight*5:",travelHeight*5 );

          tMx.to(s2, animTym, {css:{ top : 0}, ease:easeSine}); //s2 pause
          tMx.to(s3, animTym, {css:{ top : (aYPos[5] - scrollAmount)}, ease:easeSine}); //s3 moves up yPos1920
          tMx.to(darkBG, animTym + 1, {css:{ alpha : 0}, ease:easeSine});
          tMx.to([s3a, s3Txt, s3b, s3c, s3d, s3e, s3f, s3g], animTym, {css:{ left: stageWidth}, ease:easeSine}); //Group these screens and keep them to the right :1366
          //console.log("------stageWidth:",stageWidth);
          tMx.to(s4, animTym, {css:{ top : (aYPos[7] - scrollAmount)}, ease:easeSine}); //s4 moves up yPos2688
          tMx.to(s5, animTym, {css:{ top : (aYPos[9] - scrollAmount)}, ease:easeSine}); //yPos3456
          tMx.to(s6, animTym, {css:{ top : (aYPos[11] - scrollAmount)}, ease:easeSine}); //yPos4224

          //--------------------====( screen 3a )====--------------------//
          //} else if (scrollAmount >= travelHeight*5 && scrollAmount <= travelHeight*6){
        } else if (scrollAmount >= aYPos[tH3] && scrollAmount <= aYPos[tH4]){
          //console.log("------Screen 3a");
          //console.log("aYPos[tH4]:", aYPos[tH4], "travelHeight*6:",travelHeight*6 );
          tMx.to([s2, s3], animTym, {css:{ top : 0}, ease:easeSine}); // pause

          tMx.to(darkBG, animTym + 1, {css:{ alpha : 0}, ease:easeSine});
          tMx.to([s3a, s3Txt, s3b, s3c, s3d, s3e, s3f, s3g], animTym, {css:{ left: stageWidth}, ease:easeSine}); //Group these screens and keep them to the right :1366
          tMx.to(s4, animTym, {css:{ top : aYPos[2]}, ease:easeSine}); //s4 pause, 768
          tMx.to(s5, animTym, {css:{ top : aYPos[4]}, ease:easeSine}); //1536
          tMx.to(s6, animTym, {css:{ top : aYPos[6]}, ease:easeSine}); //2304
          tMx.to(fiveYrsAgo, 0, {css:{ top : aYPos[8]}, ease:easeSine}); //4000 3072

          //--------------------====( screen 3b )====--------------------//
          //} else if (scrollAmount >= travelHeight*6 && scrollAmount <= travelHeight*17){
        } else if (scrollAmount >= aYPos[tH4] && scrollAmount <= aYPos[tH5]){
          fHiliteMenuBtn(aBtns[1]);
          console.log("------Screen 2: Section JOINERIES");
          //console.log("------Screen 3b");
          //console.log("aYPos[tH5]:", aYPos[tH5], "travelHeight*17:",travelHeight*17 );
          tMx.to(sTPlaypen, animTym, {css:{ position:"fixed", x : 0, y : -50, scale:.7, zIndex : 1}}); //Make Playpen logo smaller
          tMx.to([s2, s3], animTym, {css:{ top : 0}, ease:easeSine}); // pause

          //---====( Screen3 Joineries Elements horizontal scrolling )====---//
          tMx.to(darkBG, animTym + 1, {css:{ alpha : 1}, ease:easeSine});
          tMx.to(s3a, animTym, {css:{ left: (aYPos[11] - scrollAmount)}, ease:easeSine});
          tMx.to(s3Txt, animTym+.25, {css:{ left: (aYPos[11] - scrollAmount)+dynNum387}, ease:easeSine}); //Text box butting to the previous element. Figure out what to change the 387 value so it's dynamic not hard coded
          tMx.to(s3b, animTym + .3, {css:{ left: (dynNum5500 - scrollAmount)}, ease:easeSine}); //Same with the ff position values
          tMx.to(s3c, animTym + .5, {css:{ left: (dynNum5700 - scrollAmount)}, ease:easeSine});
          tMx.to(s3d, animTym + .25, {css:{ left: (dynNum6020 - scrollAmount)}, ease:easeSine});
          tMx.to(s3e, animTym + .5, {css:{ left: (dynNum6500 - scrollAmount)}, ease:easeSine});
          tMx.to(s3f, animTym + .5, {css:{ left: (dynNum7100 - scrollAmount)}, ease:easeSine});
          tMx.to(s3g, animTym + .5, {css:{ left: (7400-scrollAmount)}, ease:easeSine});
          tMx.to(s4, animTym, {css:{ top : aYPos[2]}, ease:easeSine}); //s4 pause
          tMx.to([s4a, s4b, s4c, s4d], animTym, {css:{ left: stageWidth}, ease:easeSine}); //Mahogany screen stay all the way to the right
          tMx.to(s5, animTym, {css:{ top : aYPos[4]}, ease:easeSine}); //s5 pause
          tMx.to(s6, animTym, {css:{ top : aYPos[6]}, ease:easeSine}); //s6 pause
          tMx.to(fiveYrsAgo, 0, {css:{ top : aYPos[8]}, ease:easeSine});

          //--------------------====( screen 3c )====--------------------//
          //} else if (scrollAmount >= travelHeight*17 && scrollAmount <= travelHeight*19){
        } else if (scrollAmount >= aYPos[tH5] && scrollAmount <= aYPos[tH6]){
          //console.log("aYPos[tH6]:", aYPos[tH6], "travelHeight*19:",travelHeight*19 );
          //console.log("------Screen 3c");
          tMx.to([s2, s3], animTym, {css:{ top : 0}, ease:easeSine}); // pause

          tMx.to(s4, animTym, {css:{ top : (aYPos[19] - scrollAmount)}, ease:easeSine}); //s4 moves yPos7296
          tMx.to([s4a, s4b, s4c, s4d], animTym, {css:{ left: stageWidth}, ease:easeSine}); //Mahogany screen stay all the way to the right
          tMx.to(s5, animTym, {css:{ top : (aYPos[21] - scrollAmount)}, ease:easeSine}); //s5 moves yPos8064
          tMx.to(s6, animTym, {css:{ top : (aYPos[23] - scrollAmount)}, ease:easeSine}); //s6 moves yPos8832

          //--------------------====( screen 4 )====--------------------//
          //} else if (scrollAmount >= travelHeight*19 && scrollAmount <= travelHeight*32){
        } else if (scrollAmount >= aYPos[tH6] && scrollAmount <= aYPos[tH7]){
          //console.log("aYPos[tH7]:", aYPos[tH7], "travelHeight*32:",travelHeight*32 );
          //console.log("------Screen 4: MAHOGANY");
          fHiliteMenuBtn(aBtns[2]);
          console.log("------Screen 3: Section MAHOGANY");
          tMx.to(sTPlaypen, animTym, {css:{ position:"fixed", x : 0, y : -50, scale:.7, zIndex : 1}}); //Make Playpen logo smaller
          tMx.to([s2, s3, s4], animTym, {css:{ top : 0}, ease:easeSine}); // pause
          tMx.to(darkBG, animTym + 1, {css:{ alpha : 0}, ease:easeSine});
          //---====( Screen3 Mahogany Elements horizontal scrolling )====---//
          tMx.to(s4a, animTym, {css:{ left: (aYPos[23] - scrollAmount)}, ease:easeSine}); //8832 yPos8832 (aYPos[23] - scrollAmount)
          tMx.to(s4b, animTym + .2, {css:{ left: ((aYPos[26] + 216) - scrollAmount)}, ease:easeSine}); //10200 - 9984 = 216  Needs to convert this to percentage
          tMx.to(s4c, animTym + .6, {css:{ left: ((aYPos[29] +314) - scrollAmount)}, ease:easeSine}); //11450 - 11136 = 314
          tMx.to(s4d, animTym + 1, {css:{ left: ((aYPos[32] +50) - scrollAmount)}, ease:easeSine});  //12190

          tMx.to(s5, animTym, {css:{ top : aYPos[2]}, ease:easeSine});
          tMx.to(s6, animTym, {css:{ top : aYPos[4]}, ease:easeSine});
          tMx.to(fiveYrsAgo, animTym, {css:{ top : aYPos[2]}, ease:easeSine});

          //--------------------====( screen 5a )====--------------------//
          //} else if (scrollAmount >= travelHeight*32 && scrollAmount <= travelHeight*34){
        } else if (scrollAmount >= aYPos[tH7] && scrollAmount <= aYPos[tH8]){
          //console.log("aYPos[tH8]:", aYPos[tH8], "travelHeight*34:",travelHeight*34 );
          //console.log("------Screen 5a: TESTING");
          tMx.to([s2, s3, s4], animTym, {css:{ top : 0}, ease:easeSine}); // pause

          tMx.to(darkBG, animTym + 1, {css:{ alpha : 0}, ease:easeSine});
          tMx.to([s3a, s3Txt, s3b, s3c, s3d, s3e, s3f, s3g], animTym, {css:{ left: -2000}, ease:easeSine});

          tMx.to(s4d, animTym + 1, {css:{ left: 70}, ease:easeSine});
          tMx.to(s5, animTym, {css:{ top : (aYPos[34] - scrollAmount)}, ease:easeSine}); //yPos13056

          clipLeft = stageWidth;//yPos14592 +300;
          clipRight = stageWidth;//yPos14592;
          tMx.to(s5ClipCrib03b, animTym, {css:{clip:"rect(0px,"+ clipLeft + ", " + aYPos[2] + "px," + clipRight+")"}, ease:easeSine}); //Clip rectangle mask

          tMx.to(s5Txt, animTym + .25, {css:{ left: stageWidth}, ease:easeSine});
          tMx.to(s6, animTym, {css:{ top : (aYPos[34] - scrollAmount) + aYPos[2]}, ease:easeSine}); //yPos13056

          //--------------------====( screen 5b )====--------------------//
          //} else if (scrollAmount >= travelHeight*34 && scrollAmount <= travelHeight*39){
        } else if (scrollAmount >= aYPos[tH8] && scrollAmount <= aYPos[tH9]){
          //console.log("aYPos[tH9]:", aYPos[tH9], "travelHeight*39:",travelHeight*39 );
          //console.log("------Screen 5b");
          fHiliteMenuBtn(aBtns[3]);
          console.log("------Screen 4: Section TESTING");
          tMx.to(sTPlaypen, animTym, {css:{ position:"fixed", x : 0, y : -50, scale:.7, zIndex : 1}}); //Make Playpen logo smaller
          tMx.to([s2, s3, s4, s5], animTym, {css:{ top : 0}, ease:easeSine}); // pause


          tMx.to(rectClipShadow, animTym, {css:{ left : (aYPos[38] - scrollAmount), top:0}, ease:easeSine}); //yPos13440
          clipLeft = (aYPos[38] - scrollAmount) +300; //yPos14592 +300;
          clipRight = (aYPos[38] - scrollAmount); //yPos14592;
          tMx.to(s5ClipCrib03b, animTym, {css:{clip:"rect(0px,"+ clipLeft + ", " + aYPos[2] + "px," + clipRight+")"}, ease:easeSine});

          tMx.to(s5Txt, animTym + .25, {css:{ left: 14890 - scrollAmount}, ease:easeSine});
          tMx.to(s6, animTym, {css:{ top : aYPos[2]}, ease:easeSine});
          //tMx.to(fiveYrsAgo, animTym, {css:{ alpha : 0}, ease:easeSine});
          tMx.to(fiveYrsAgo, animTym, {css:{ top : aYPos[2]}, ease:easeSine});
          tMx.to(s6a, animTym, {css:{ top : 0}, ease:easeSine});
          tMx.to(s6b, animTym, {css:{ top : aYPos[2]}, ease:easeSine});
          tMx.to(s6c, animTym, {css:{ top : aYPos[4]}, ease:easeSine});
          tMx.to(s6d, animTym, {css:{ top : aYPos[6]}, ease:easeSine});
          tMx.to(thankYou, animTym, {css:{ top : aYPos[8]}, ease:easeSine});

          //--------------------====( screen 6 )====--------------------//
          //} else if (scrollAmount >= travelHeight*39 && scrollAmount <= travelHeight*41){
        } else if (scrollAmount >= aYPos[tH9] && scrollAmount <= aYPos[tH10]){
          //console.log("aYPos[tH10]:", aYPos[tH10], "travelHeight*41:",travelHeight*41 );
          //console.log("------Screen 6: RE-USABILITY");
          tMx.to([s2, s3, s4, s5, s6a], animTym, {css:{ top : 0}, ease:easeSine}); // pause

          tMx.to(darkBG, animTym + 1, {css:{ alpha : 0}, ease:easeSine});

          tMx.to([s3a, s3Txt, s3b, s3c, s3d, s3e, s3f, s3g], animTym, {css:{ left: stageWidth}, ease:easeSine});

          tMx.to([s4a, s4b, s4c, s4d], animTym, {css:{ left: stageWidth}, ease:easeSine});

          tMx.to(s6, animTym, {css:{ top : (aYPos[41] - scrollAmount)}, ease:easeSine}); // yPos15744
          tMx.to(fiveYrsAgo, animTym, {css:{ top : aYPos[2]}, ease:easeSine});
          //tMx.to(s6a, animTym+1, {css:{ top : 0}, ease:easeSine}); //
          tMx.to(s6b, animTym, {css:{ top : aYPos[2]}, ease:easeSine});
          tMx.to(s6c, animTym, {css:{ top : aYPos[4]}, ease:easeSine});
          tMx.to(s6d, animTym, {css:{ top : aYPos[6]}, ease:easeSine});

          //--------------------====( screen 6a )====--------------------//
          //} else if (scrollAmount >= travelHeight*41 && scrollAmount <= travelHeight*42){
        } else if (scrollAmount >= aYPos[tH10] && scrollAmount <= aYPos[tH11]){
          //console.log("aYPos[tH11]:", aYPos[tH11], "travelHeight*42:",travelHeight*42 );
          console.log("------Screen 6a");
          fHiliteMenuBtn(aBtns[4]);
          tMx.to([s2, s3, s4, s5, s6], animTym, {css:{ top : 0}, ease:easeSine}); // pause
          tMx.to(fiveYrsAgo, animTym, {css:{ top : aYPos[2]}, ease:easeSine});
          tMx.to(s6b, animTym, {css:{ top : aYPos[2]}, ease:easeSine});
          tMx.to(s6c, animTym, {css:{ top : aYPos[4]}, ease:easeSine});
          tMx.to(s6d, animTym, {css:{ top : aYPos[6]}, ease:easeSine});
          tMx.to(thankYou, animTym, {css:{ top : aYPos[8]}, ease:easeSine});

          //--------------------====( screen 6b )====--------------------//
          //} else if (scrollAmount >= travelHeight*42 && scrollAmount <= travelHeight*43){
        } else if (scrollAmount >= aYPos[tH11] && scrollAmount <= aYPos[tH12]){
          //console.log("aYPos[tH12]:", aYPos[tH12], "travelHeight*43:",travelHeight*43 );
          fHiliteMenuBtn(aBtns[4]);
          console.log("------Screen 5: Section RE-USABILITY");
          console.log("------Screen 6b");
          tMx.to(sTPlaypen, animTym, {css:{ position:"fixed", x : 0, y : -50, scale:.7, zIndex : 1}}); //Make Playpen logo smaller
          tMx.to([s2, s3, s4, s5, s6, s6a, fiveYrsAgo], animTym, {css:{ top : 0}, ease:easeSine}); // pause

          tMx.to(s6b, animTym, {css:{ top : aYPos[2]}, ease:easeSine});
          tMx.to(s6c, animTym, {css:{ top : aYPos[4]}, ease:easeSine});
          tMx.to(s6d, animTym, {css:{ top : aYPos[6]}, ease:easeSine});
          tMx.to(thankYou, animTym, {css:{ top : aYPos[8]}, ease:easeSine});

          //--------------------====( screen 6c )====--------------------//
          //} else if (scrollAmount >= travelHeight*43 && scrollAmount <= travelHeight*45){
        } else if (scrollAmount >= aYPos[tH12] && scrollAmount <= aYPos[tH13]){
          //console.log("aYPos[tH13]:", aYPos[tH13], "travelHeight*45:",travelHeight*45 );
          console.log("------Screen 6c");
          tMx.to([s2, s3, s4, s5, s6, s6a, fiveYrsAgo], animTym, {css:{ top : 0}, ease:easeSine}); // pause

          tMx.to(s6b, animTym+1, {css:{ top : (aYPos[45] - scrollAmount)}, ease:easeSine}); //yPos17280
          tMx.to(s6c, animTym + 1, {css:{ top : (aYPos[47] - scrollAmount)}, ease:easeSine}); //yPos18048
          tMx.to(s6d, animTym, {css:{ top : (aYPos[49] - scrollAmount)}, ease:easeSine}); //yPos18816
          tMx.to(thankYou, animTym, {css:{ top : (aYPos[51] - scrollAmount)}, ease:easeSine}); //yPos19584

          //--------------------====( screen 6d )====--------------------//
          //} else if (scrollAmount >= travelHeight*45 && scrollAmount <= travelHeight*47){
        } else if (scrollAmount >= aYPos[tH13] && scrollAmount <= aYPos[tH14]){
          //console.log("aYPos[tH14]:", aYPos[tH14], "travelHeight*47:",travelHeight*47 );
          console.log("------Screen 6d");
          tMx.to([s2, s3, s4, s5, s6, s6a, s6b, fiveYrsAgo], animTym, {css:{ top : 0}, ease:easeSine}); // pause

          tMx.to(s6c, animTym, {css:{ top : (aYPos[47] - scrollAmount)}, ease:easeSine});
          tMx.to(s6d, animTym, {css:{ top : (aYPos[49] - scrollAmount)}, ease:easeSine});
          tMx.to(thankYou, animTym, {css:{ top : (aYPos[51] - scrollAmount)}, ease:easeSine});
          //--------------------====( screen 6e )====--------------------//
          //} else if (scrollAmount >= travelHeight*47 && scrollAmount <= travelHeight*49){
        } else if (scrollAmount >= aYPos[tH14] && scrollAmount <= aYPos[tH15]){
          //console.log("aYPos[tH15]:", aYPos[tH15], "travelHeight*49:",travelHeight*49 );
          console.log("------Screen 6e");
          tMx.to([s2, s3, s4, s5, s6, s6a, s6b, s6c], animTym, {css:{ top : 0}, ease:easeSine}); // pause

          tMx.to(s6d, animTym, {css:{ top : (aYPos[49] - scrollAmount)}, ease:easeSine});
          tMx.to(thankYou, animTym, {css:{ top : (aYPos[51] - scrollAmount)}, ease:easeSine});
          //--------------------====( screen 6f )====--------------------//
          //} else if (scrollAmount >= travelHeight*49 && scrollAmount <= travelHeight*51){
        } else if (scrollAmount >= aYPos[tH15] && scrollAmount <= aYPos[tH16]){
          //console.log("aYPos[tH16]:", aYPos[tH16], "travelHeight*51:",travelHeight*51 );
          console.log("------Screen 6f");

          tMx.to([s2, s3, s4, s5, s6, s6a, s6b, s6c, s6d], animTym, {css:{ top : 0}, ease:easeSine}); // pause

          tMx.to(thankYou, animTym, {css:{ top : (aYPos[51] - scrollAmount)}, ease:easeSine});
          tMx.to(logoFB, animTym, {css:{ top : 870}, ease:easeSine});
          console.log("aYPos[51]- scrollAmount:", aYPos[51]- scrollAmount) //768

          //--------------------====( screen 6G )====--------------------//
          //} else if (scrollAmount >= travelHeight*51 && scrollAmount <= travelHeight*55){
        } else if (scrollAmount >= aYPos[tH16] && scrollAmount <= aYPos[tH17]){
          console.log("aYPos[tH17]:", aYPos[tH17], "travelHeight*55:",travelHeight*55 );
          fHiliteMenuBtn(aBtns[5]);
          console.log("------Screen 5: Section THANK YOU");
          console.log("------Screen 6g");
          tMx.to(sTPlaypen, animTym, {css:{ position:"fixed", x : 0, y : -50, scale:.7, zIndex : 1}}); //Make Playpen logo smaller

          tMx.to([s2, s3, s4, s5, s6, s6a, s6b, s6c, s6d, fiveYrsAgo], animTym, {css:{ top : 0}, ease:easeSine}); // pause

          tMx.to(thankYou, animTym, {css:{ top : 0}, ease:easeSine});
          console.log("winHeight:",winHeight);

          tMx.to(logoFB, animTym, {css:{ top : 550}, ease:easeSine}); //640
          tMx.to(logoGD, animTym, {css:{ top : 680}, ease:easeSine});

          /*
           if(winHeight <= 1200){
           //console.log("winHeight:",winHeight);
           tMx.to(logoFB, animTym, {css:{ top : 550}, ease:easeSine}); //640
           }
           */

        }
      };
      //});
      window.addEventListener("scroll", parallax, false);
      //////////////////////////////////////////////////////////////////////////////////SCROLL TRIGGER END
    });
    //Edge binding end
    Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {

    });

  })("stage");
  //Edge symbol end:'stage'

  //=========================================================

  //Edge symbol: 'mainScreen'
  (function(symbolName) {

    Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
      // insert code to be run when the symbol is created here
      console.log("Main Screen Ready")

    });
    //Edge binding end

  })("mainScreen");
  //Edge symbol end:'mainScreen'

  //=========================================================

  //Edge symbol: 's1'
  (function(symbolName) {

  })("s1");
  //Edge symbol end:'s1'

  //=========================================================

  //Edge symbol: 's1Description'
  (function(symbolName) {

  })("s1Description");
  //Edge symbol end:'s1Description'

  //=========================================================

  //Edge symbol: 'scrollDwnIcon'
  (function(symbolName) {

  })("scrollDwnIcon");
  //Edge symbol end:'scrollDwnIcon'

  //=========================================================

  //Edge symbol: 's2'
  (function(symbolName) {

  })("s2");
  //Edge symbol end:'s2'

  //=========================================================

  //Edge symbol: 's3Txt'
  (function(symbolName) {

  })("s3Txt");
  //Edge symbol end:'s3Txt'

  //=========================================================

  //Edge symbol: 's6'
  (function(symbolName) {

  })("s6");
  //Edge symbol end:'s6'

  //=========================================================

  //Edge symbol: 'thankYou'
  (function(symbolName) {

  })("thankYou");
  //Edge symbol end:'thankYou'

  //=========================================================

  //Edge symbol: 's4'
  (function(symbolName) {

  })("s4");
  //Edge symbol end:'s4'

  //=========================================================

  //Edge symbol: 's5'
  (function(symbolName) {

  })("s5");
  //Edge symbol end:'s5'

  //=========================================================

  //Edge symbol: 's5Txt'
  (function(symbolName) {

  })("s5Txt");
  //Edge symbol end:'s5Txt'

  //=========================================================

  //Edge symbol: 's4a'
  (function(symbolName) {

  })("s4a");
  //Edge symbol end:'s4a'

  //=========================================================

  //Edge symbol: 'fiveYrsAgo'
  (function(symbolName) {

  })("fiveYrsAgo");
  //Edge symbol end:'fiveYrsAgo'

  //=========================================================

  //Edge symbol: 's3'
  (function(symbolName) {

  })("s3");
  //Edge symbol end:'s3'

  //=========================================================

  //Edge symbol: 'redWallBG'
  (function(symbolName) {

  })("redWallBG");
  //Edge symbol end:'redWallBG'

  //=========================================================

  //Edge symbol: 'verticalBorder'
  (function(symbolName) {

  })("verticalBorder");
  //Edge symbol end:'verticalBorder'

  //=========================================================

  //Edge symbol: 'Preloader'
  (function(symbolName) {

  })("Preloader");
  //Edge symbol end:'Preloader'

  //=========================================================

  //Edge symbol: 'btn'
  (function(symbolName) {

  })("btn");
  //Edge symbol end:'btn'

  //=========================================================

  //Edge symbol: 'audioBtn'
  (function(symbolName) {

  })("audioBtn");
  //Edge symbol end:'audioBtn'

  //=========================================================

  //Edge symbol: 'audioController'
  (function(symbolName) {

  })("audioController");
  //Edge symbol end:'audioController'

  //=========================================================

  //Edge symbol: 'rectContainer'
  (function(symbolName) {

  })("rectContainer");
  //Edge symbol end:'rectContainer'

  //=========================================================

  //Edge symbol: 'horLine1Background'
  (function(symbolName) {

  })("horLine1Background");
  //Edge symbol end:'horLine1Background'

  //=========================================================

  //Edge symbol: 'horLines3Background'
  (function(symbolName) {

  })("horLines3Background");
  //Edge symbol end:'horLines3Background'

  //=========================================================

  //Edge symbol: 'audioClassController'
  (function(symbolName) {

  })("audioClassController");
  //Edge symbol end:'audioClassController'

  //=========================================================

  //Edge symbol: 'bgSquares1'
  (function(symbolName) {

  })("bgSquares1");
  //Edge symbol end:'bgSquares1'

  //=========================================================

  //Edge symbol: 'bgSquares2'
  (function(symbolName) {

  })("bgSquares2");
  //Edge symbol end:'bgSquares2'

  //=========================================================

  //Edge symbol: 'horLines4'
  (function(symbolName) {

  })("horLines4");
  //Edge symbol end:'horLines4'

  //=========================================================

  //Edge symbol: 'colorSquareContainer'
  (function(symbolName) {

  })("colorSquareContainer");
  //Edge symbol end:'colorSquareContainer'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "GD_RESPONSIVEPARALLAX");
