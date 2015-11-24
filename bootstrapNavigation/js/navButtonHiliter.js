// Not working!
$(document).ready(function () {
        //your code here
        $('#main-navbar').on('show.bs.dropdown', function () {
                console.log("Say something 2.");
        })
});





function fBtnStatesOn(elem){
        //elem.getSymbolElement().css({"cursor": "pointer", opacity : 1 });
        elem.getSymbolElement().css({opacity : 1 });
}
function fBtnStatesOff(elem){
        //elem.getSymbolElement().css({opacity : .5 });
        var curElem = document.getElementById(elem);
        curElem
}

 //function fClickedBtnStatesOff(elem){ elem.getSymbolElement().hide(); }

var currentID = 0;
var currentSelectedButton;
var aBtns = new Array("section-testimonials", "section-features","section-gallery","section-contact");
 function fHiliteMenuBtn(){ //-----(Hilites button at the current (window.scrollTo())position )
        /*
        currentID = document.getElementById("main-navbar");
        console.log("currentID: "+currentID);
        currentSelectedButton = symbolInTheArray;
        //console.log("fHiliteMenuBtn: currentID:",currentID);
        */
        //-----(Turn off all buttons)
        
        for(var i = 0; i<aBtns.length; i++){
                //fBtnStatesOff(aBtns[i]); // Grey other buttons
                //sym.$(btnText).html("");
                console.log("i: "+i);
        }
        
        console.log("aBtns[0]: "+aBtns[0]);
         /*
        fBtnStatesOn(aBtns[currentID]); //-----(Turn on current button only)
        //sym.$(btnText).html(aMenuTitles[symbolInTheArray.getVariable("id")]);//  show the html text

        var btnElem = document.getElementById("main-navbar");
        
        fShowMenuText(btnElem, symbolInTheArray);

        var btnText = sym.getSymbol(btnElem).$("btnText");
         if(winWidth < 1000){ //If the browser window is smaller than 1k
            sym.$(btnText).html("");
            } else {
        		sym.$(btnText).html(aMenuTitles[symbolInTheArray.getVariable("id")]);//  show the html text
            }
            */
};
fHiliteMenuBtn();