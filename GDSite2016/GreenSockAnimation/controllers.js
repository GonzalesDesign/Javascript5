/**
 * Created by Odee on 10/28/15.
 */
(function () {
    'use strict';
    var obj1 = { user: "Odee", age: 6, country: "Philippines" };
    var obj2 = { user: "John", age: 2, country: "Philippines" };
    var obj3 = { user: "Joy", age: 38, country: "Philippines" };
    var obj4 = { u1: obj1, u2: obj2, u3: obj3 };
    document.write("<p class='clasTest'>" + obj1.user + " and " + obj2.user + " are the sons of " + obj3.user + "<br />" + "</p>");
    var aFilipinasMural = ["FilipinasMural-01.jpg", "FilipinasMural-02.jpg", "FilipinasMural-03.jpg", "FilipinasMural-04.jpg", "FilipinasMural-05.jpg", "FilipinasMural-06.jpg"];
    for (var i = 0; i < aFilipinasMural.length; i++) {
        document.write("<div><img src=images/filipinas/" + aFilipinasMural[i] + " style='width:100%;'/></div>");
    }
    /*--- GSAP Animation ---*/
    var tMx = TweenMax;
    var easeSine = Sine.easeOut;
    var easeBounce = Bounce.easeOut;
    var easeElastic = Elastic.easeOut;
    var animTym = 4;
    //TweenMax.to(".bimmers", 6, {left:400});
    var bImage = $("#imgId"); //document.getElementById("bimmers");
    //tMx.to(bImage, animTym, {left:400});
    //tMx.to(bImage, animTym, {css:{ position:"relative", x : "100%", y : 0, zIndex : 0}, ease:easeBounce});
    //tMx.to(bImage, animTym, {css:{ position:"fixed", left : 600, top : 400}, ease:easeBounce});
    /*--- Event Handling ---*/
    function addListeners() {
        document.getElementById('mybtn').addEventListener("click", btn1func);
        document.getElementById('mybtn2').addEventListener("mouseover", btn2func);
        function slideMe(elem, pos) {
            tMx.to(elem, animTym, { css: { position: "relative", x: pos, y: 0, zIndex: 0 }, ease: easeBounce });
        }
        function btn1func() {
            /*alert(this.id+" : mouse-click makes script run");*/
            /*tMx.to(bImage, animTym, {css:{ position:"relative", x : "100%", y : 0, zIndex : 0}, ease:easeBounce});*/
            slideMe(bImage, "100%");
        }
        function btn2func() {
            /*alert(this.id+" : mouse-over makes script run");*/
            /*tMx.to(bImage, animTym, {css:{ position:"relative", x : "0%", y : 0, zIndex : 0}, ease:easeBounce});*/
            slideMe(bImage, "0%");
        }
    }
    window.addEventListener("load", addListeners);
    /*--- Generate Lorem Ipsum ---*/
    var ipsum = "The quick brown fox jumps over the lazy dog. ";
    var ipsum2 = new Array();
    for (var i = 0; i < 40; i++) {
        if (i % 10 == 0 && i > 1) {
            document.write("<br /> <br />");
        }
        //ipsum2 = document.write(ipsum);
        //document.getElementById("results").innerHTML = "<h4>" + ipsum + "/" + ipsum + "/" + "</h4>";
        //document.write("Element " +i+ " contains: " +ipsum2[i]+ "<br />");
        ipsum2[ipsum2.length] = ipsum;
        //console.log("ipsum2: ", ipsum2);
        document.getElementById("results").innerHTML = "<h3>" + ipsum2 + "</h3>";
    }
    var aParkourImages = ["parkour-1.jpg", "parkour-2.jpg", "parkour-3.jpg", "parkour-4.jpg", "parkour-5.jpg", "parkour-6.jpg"];
    for (var i = 0; i < aParkourImages.length; i++) {
        /*console.log("img src=images/parkour/"+aParkourImages[i]);
        document.getElementById("imgResults").innerHTML = "<div><img src=images/parkour/" + aParkourImages[i] + " style='width:100%;'/></div>";
        console.log("<div><img src=images/parkour/" + aParkourImages[i] + " style='width:100%;'/>"+"</div>")*/
        document.write("<div><img src=images/parkour/" + aParkourImages[i] + " style='width:100%;'/></div>");
    }
    //document.getElementById("results").innerHTML = ipsum2;
}());
//# sourceMappingURL=controllers.js.map