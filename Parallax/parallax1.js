/**
 * Created by Odee on 11/17/15.
 */
(function () {
  'use strict';
  var tMx = TweenMax;

  /*Showing and Hiding images*/
  function setImageVisible(id, visible) {
    var img = document.getElementById(id);
    img.style.visibility = (visible ? 'visible' : 'hidden');
  };

  var yPos, image, image2, scrollAmount,
      content, origBirdRed, origBirdBluePurple,
      bgImg1Id;

  bgImg1Id = document.getElementById('bgImg1Id');

  var contentHeight = bgImg1Id.offsetHeight;
  console.log("contentHeight: ",contentHeight);

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



  bgImg1Id.style.backgroundSize = "100% 100%";
  //bgImg1Id.style.backgroundPosition = "50% 10%"

  function fBgImg(){
    //bgImg1Id.style.backgroundPosition = "0% 100%"
    var divWidth = "100%";
    var divHeight = "100%"; //1000;
    tMx.to(bgImg1Id, 4, {css:{/*height:divHeight, width:divWidth*/
      /*backgroundPosition: "center",*//*"50px 100px",*/
      backgroundSize: "50% 50%"}});
  };
  fBgImg();
  //window.setTimeout(fBgImg, 1000);


  /*origBirdBluePurple = document.getElementById('origBird3');*/
  origBirdBluePurple = $("#origBird3");
  //origBirdBluePurple.style.left = window.pageXOffset * (-1.5 + 'px');
  tMx.to(origBirdBluePurple, 0, {css:{ position:"fixed", x : -200, y : 200, scale:1, zIndex : 20}});

  function parallax() {
    yPos = window.pageYOffset;
    image = document.getElementById('image');
    image2 = document.getElementById('image2');
    content = document.getElementById('content');
    origBirdRed = document.getElementById('origBird4');


    image.style.top = yPos * (-1.5 + 'px');
    image2.style.top = yPos * (-1.5 + 'px');

    scrollAmount = $(window).scrollTop() * 5;
    console.log("scrollAmount: ", scrollAmount);
    //image.style.top = scrollAmount;//$(window).scrollTop()*2.5;
    tMx.to(content, 1, {css: {top: -scrollAmount, opacity: .9}});



    tMx.to(origBirdRed, 1, {css: {top: -(scrollAmount *.5), opacity: .9}});
    tMx.to(origBirdBluePurple, 1, {css: {position:"fixed", x: scrollAmount/4, ys: (scrollAmount *.6), opacity: .9}});

    if (scrollAmount >= 11000) {
      setImageVisible('image', true);
    } else {
      setImageVisible('image', true);
    }

  }

  function resizeWindow(){
    xOffset = window.pageXOffset;
    console.log("xOffset: ",xOffset);
    xIh = xOffset + window.innerWidth;
    console.log("xIh: ",xIh);
    //console.log("yIh: ",yIh);
  };

  window.addEventListener('scroll', parallax);
  window.addEventListener('resize', resizeWindow);
}());
