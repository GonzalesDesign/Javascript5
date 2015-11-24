//WIP
/*------------------•••≈| iStax Template Design: 3Stax Gallery : December 10b, 2009 - |≈•••≈---------------------•••
 • This template is designed for show casing images. Easy customization through its skinnable elements.
 • Compliments blog sites as a full window visual player
 • Free skin sets are downloadable from the ioKonstruct.com site. Custom skins are also available and very reasonably priced. Email me at customSkin@iokonstruct.com for estimate.
 • Questions and requests please email me at kiko@iokonstruct.com
 • Designed and built by: kiko of ioKonstruct.com
 • New York, USA • © iokonstruct 2009
 •••≈------------------•••≈| Enjoy & Thank You! |≈•••≈---------------------•••*/

/********************* THINGS TO DO:
 - Loading bar for the main image. DONE!
 - Hide the image description if caption is not populated: DONE!
 - Put a boolean to choose to show description text or not
 - Automate the column distribution of thumbnails based on the width of the screen
 - A much better design for the Thumbnail Container. Put the option to show actual thumbnails. 50x50 pix default

 New things: Oct. 14, 2009
 - Re-arranged MP3 codes and place at the bottom of the xml complete call. Not sure if it makes any difference.
 - Activate VideoPlayer
 - De-activate MP3Player when VideoPlayer is activated
 - Activate MoreInfo. General information only
 - Automatically center LoadingMessage on any screen size

 MADAMA NGA ARARAMIDEN

 December 20 updates: Gallery8.as, Gallery8.fla, Gallery.xml
 - Colorized loading bar for current image and next image DONE!
 - Sometimes when first loaded, the previous and next image containers tends to show up without content. Made main container and it's children container have thier own visibility command. DONE! TESTING!
 - Thumbnails current image and rollover to an image indicator. DONE! TESTING!

 - Find a way to load all image assets before starting to play a sound.

 May 22, 2010
 - Initial loading message: PreLoaderContainer from Gallery8.swf . Changed addChild(myPreLoadContainer) position= DONE!

 May 25, 2010: Changed to development version Gallery9
 - Added tMoreInfo feature. showInfo, tMoreInfo, sBODY_COPY
 - Make sure to change index.html embed src to Gallery9.swf and IDs. DONE!
 - Also version G9 activates the MoreInfo feature. This feature doesn't work in older xml files. DONE!

 May 26, 2010
 - Add Video features:
 - When video control panel is selected, turn off slide show and sound.
 - Working on video features. Most of the functionalities are done! Design and additional controls to be added.
 - Video selection button slider feature.

 June 3, 2010
 - //•••≈--------------------------------------------•••≈||: myCPHotSpotHorizLine is the horizontal line used for visual indicator for trigerring the CP
 myCPHotSpotHorizLine.alpha = 70;
 - myCPHotSpotHorizLine for "AllImages" container is not working properly. The trigger is a bit too high.

 - Addding SliderEffectsSubClass functionalities are almost done.
 - Sliding video buttons needs mask. DONE!
 - Sliding video buttons trigger to slide buttons needs resolving on layering: SLIDING VID BTNS MOVED TO NEW MC. DONE!

 June 6, 2010:
 - Video slider button: Needs to resolve, problem when moving btn all the way to the left/right, panorama needs to response.

 June 7, 2010:
 - Start moving Video Player to its own subClass

 June 8, 2010:
 - Video Player is now on a seperate sub-class.
 - Re-do MP3 Player, layout and move to its own sub-class.
 - Most of the MP3 module codes are done.

 June 9, 2010
 - Work on the MP3 Player menu list

 June 12, 2010
 - Work on color themes: Working locally. Need to put codes in a seperate sub-class (ColorThemes.as).

 June 13, 2010
 - Working on colorizing mcs using ColorThemes sub-class



 - Find a way to load all image assets before starting to play a sound.


 OPTIMIZATION:
 - Seperate the calls being made only when resizing the screen and take them out of “centerDiplayContainer” method: Almost done! Testing!
 - If you no longer need an event listener, remove it by calling removeEventListener(), or memory problems could result.
 - Clean codes



 VISITING AND UPDATED SOME MINOR CODES: November 28, 2013
 - It's been a while since touching this codes. Miss it!
 - Activated xml external loading  path not local call
 - Repositioned playPauseBtns_mc.y position so it's always in the middle of the main picture frame. Don't know why there's a code for the y position.!???
 - To be used in rlloydgonzales.com to showcase some of my Arts & Crafts projects as well as any Gallery of images I might have and useful for my Portfolio.


 *******************************************************************************************************************/

package {
  //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
  //••••••••••••••••••••••••••••••••••••≈----------------:|     IMPORTS SECTION     |:----------------≈••••••••••••••••••••••••••••••••••••:|•
  //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
import flash.display.Sprite;
import flash.display.MovieClip;
  //import fl.controls.Button;
  //•••≈---------------------------------------------------------•••≈||: Loader
import flash.display.Loader;
import flash.display.LoaderInfo;
  //•••≈---------------------------------------------------------•••≈||: Bitmap
import flash.display.Bitmap;
import flash.display.BitmapData;
import flash.geom.Matrix;
import flash.geom.ColorTransform;
  //•••≈---------------------------------------------------------•••≈||: Sound
import flash.media.Sound;
import flash.media.SoundChannel;
import flash.media.SoundLoaderContext;
import flash.media.SoundTransform;
  //import flash.display.GradientType;
  //import flash.display.Graphics;
  //•••≈---------------------------------------------------------•••≈||: Stage
import flash.events.FullScreenEvent;
import flash.display.Stage;
import flash.display.StageDisplayState;
import flash.display.StageAlign;
import flash.display.StageScaleMode;
import flash.display.DisplayObject;
  //•••≈---------------------------------------------------------•••≈||: Text
import flash.text.TextField;
import flash.text.TextFieldType;
import flash.text.AntiAliasType;
import flash.text.TextFormat;
import flash.text.TextFieldAutoSize;
  //•••≈---------------------------------------------------------•••≈||: Misc
import flash.events.Event;
import flash.events.MouseEvent;
import flash.net.URLRequest;
import flash.net.URLLoader;

import flash.events.ErrorEvent;
import flash.events.IOErrorEvent;
import flash.errors.IOError;
import flash.events.ProgressEvent;
  //import flash.events.*;
import flash.events.AsyncErrorEvent
import flash.events.SecurityErrorEvent
import flash.events.NetStatusEvent
  //•••≈---------------------------------------------------------•••≈||: xml
import flash.xml.XMLDocument;
  //•••≈---------------------------------------------------------•••≈||: Timer
import flash.utils.Timer;
import flash.events.TimerEvent;
  //•••≈---------------------------------------------------------•••≈||: Keyboard
import flash.events.KeyboardEvent;
  //import flash.events.KeyboardEvent.keyCode;

  //import flash.utils.describeType;
  //•••≈---------------------------------------------------------•••≈||: 
  //import flash.utils.*;
  //•••≈---------------------------------------------------------•••≈||: Tweener
import caurina.transitions.Tweener;
  //•••≈---------------------------------------------------------•••≈||: Video Imports
import flash.media.Video;
import flash.net.NetConnection;
import flash.net.NetStream;
import flash.geom.Rectangle;
  //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
  //••••••••••••••••••••••••••••••••••••≈----------------:|     CLASS NAME     |:----------------≈••••••••••••••••••••••••••••••••••••:|•
  //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
  //•••≈-----------------------------------•••≈||: CLASS
  public class Gallery9 extends MovieClip {
    //•••≈-----------------------------------•••≈||:
    //••••••••••••••••••••••••••••••••••••≈----------------:|     PRIVATE VARS SECTION     |:----------------≈••••••••••••••••••••••••••••••••••••:|•
    //•••≈-----------------------------------•••≈||:
    private var imageMainLoader:Loader;
    private var imagePrevLoader:Loader;
    private var imageNextLoader:Loader;
    private var skinCPLoader:Loader;
    //private var imageSiloLoader:Loader;

    private var urlRekws:URLRequest = new URLRequest();
    private var urlPrevRekws:URLRequest = new URLRequest();
    private var urlNextRekws:URLRequest = new URLRequest();
    //private var urlSiloRekws:URLRequest = new URLRequest();
    //•••≈-----------------------------------•••≈||: PROPERTIES: BITMAPS
    private var cBMImage:Bitmap;
    private var pBMImage:Bitmap;
    private var nBMImage:Bitmap;
    private var sBMImage:Bitmap;

    private var dupeImgBM:Bitmap;
    private var dupeImgBMData:BitmapData;
    //private var imgBM:Bitmap;
    private var imgBMData:BitmapData;

    private var dupePrevImgBM:Bitmap;
    private var dupePrevImgBMData:BitmapData;
    private var prevImgBM:Bitmap;
    private var prevImgBMData:BitmapData;

    private var dupeNextImgBM:Bitmap;
    private var dupeNextImgBMData:BitmapData;
    private var nextImgBM:Bitmap;
    private var nextImgBMData:BitmapData;

    //•••≈-----------------------------------•••≈||: Photo description vars
    private var sDESCRIPTION_VERTICALPOSITION:String;
    private var tDescription:TextField;
    private var tImgNum:TextField;
    private var imgNum_mc:MovieClip;
    private var sIMG_NUM:String;
    private var sPRE_IMG_NUM:String;
    private var nCurImgNum:int;
    //•••≈-----------------------------------•••≈||: PROPERTIES: NUMBERS & INTEGERS
    private var currentImage:int = 0;
    private var previousImage:int = currentImage -1;
    private var nextImage:int = currentImage +1;

    //•••≈-----------------------------------•••≈||: Panels Node Type. Manually assigned(faster).
    private var nImagesNodeType:int = 0;
    private var nSkinNodeType:int=1;
    private var nSongNodeType:int=2;
    private var nVideoNodeType:int = 3;
    private var nInfoNodeType:int = 4;
    private var nThumbsNodeType:int = 5;


    private var nSkinSubSectionNode:int;
    private var nSLIDESHOW_DELAY:int;

    private var nImgCount:int;
    private var nSKIN_COUNT:int;

    private var skinNodeLevel:int;
    //private var previousImage:int;
    private var minusNum:int = 0;
    private var plusNum:int;

    private var mainImgYPos:Number;
    private var imgDescriptionYPos:Number;
    private var horImgAvailableHeight:Number;

    private var nMainImgDisplayPerc:Number;
    private var nPrevImgDisplayPerc:Number;
    private var nNextImgDisplayPerc:Number;

    private var intervalID:uint;
    //private var counter:uint = 0;
    private var stopCount:uint = 5;
    private var intervalDuration:Number = 1000;
    private var nTRANSITION_TIME:int = 1;

    //private var nFONT_BOTTOMSPACE:Number = 100;

    private var nHORIZONTAL_HEADPOSITION:Number;
    private var nVERTICAL_HEADPOSITION:Number;
    private var nHORIZONTAL_SUBHEADPOSITION:Number;
    private var nVERTICAL_SUBHEADPOSITION:Number;

    private var nCPButtonsLength:int;

    private var ii:int = 0;

    private var sLOAD_BAR_COLOR:uint;
    private var sLOAD_BAR_ALFA:Number;
    //•••≈-----------------------------------••≈||: SOUND VARS
    private var loadedPercentage:uint;
    private var nSongCount:int;

    private var nSongSubSectionNode:int=0;
    //private var nSkinNodeType:int=1;
    //private var indexNum:int=0;
    private var soundIndexNum:int=0;
    private var songPosition:int;
    private var currSong:Sound;
    private var songChannel:SoundChannel=new SoundChannel;
    private var volumeLevel:Number = 1;
    private var volBarMaskWidth:Number;
    private var targetObject:Object;

    //•••-----------------------------------•••≈||: Sound FLA MCs
    //private var mp3CPanel:MP3_Skin; 
    private var myMP3Player:LoadMP3SubClass;
    private var myMusicControlPanel:MP3_Skin = new MP3_Skin();
    private var dupeSongList:songList;

    private var mp3ScrollingMenu: scrollingSongMenu;

    private var artistImageFPO:ImageFPO;// = new ImageFPO();
    //private var mp3PlayerContainer:MovieClip;
    private var _targetGallery:MovieClip;
    //private var mp3CPanel:MovieClip;
    private var oMP3SongName:Object;
    private var oMP3ArtistName:Object;
    private var oMP3ArtistPix:Object;
    private var mp3CP:MovieClip;
    //•••---------------------------------•••≈||: Sound STRING
    private var sSoundCaption:String;
    private var sSkinPath:String;
    private var sSiloImg:String;
    private var sMP3Path:String;
    private var sMP3ImagesPath:String;

    private var tSongName:TextField;
    private var sMP3Name:String;
    private var sSongName:String;
    private var sArtistName:String;
    private var sArtistPix:String;
    //private var loadMP3ArtistImage:LoadImage2;
    //•••---------------------------------•••≈||: Sound ARRAY
    private var aMP3List:Array=new Array();
    private var aSongName:Array=new Array();
    private var aArtistName:Array=new Array();
    private var aMP3Thumb:Array = new Array();
    private var aDupeList:Array = new Array();

    private var aArtistNameBtn:Array = new Array();
    private var aSongNameBtn:Array = new Array();
    private var aSongButtonHiliter:Array = new Array();
    private var aSongListNameBG:Array = new Array();

    //•••---------------------------------•••≈||: Sound BOOLEAN
    private var songSelected:Boolean=false;
    private var bPlaySoundOff:Boolean;// = true;
    private var sRANDOMIZED:String;
    private var bRANDOMIZED:Boolean;
    private var randomSongIndex:int;

    private var  imageLoader:Loader;
    //

    //•••-------------------------------------------------------------------------------------------------------------------•••≈||: COLOR THEMES VARS
    private var myColorTheme:ColorThemes;
    private var uBUTTON_RECT_ALFA:uint;
    private var shadeColor0:uint;
    private var shadeColor1:uint;
    private var shadeColor4:uint;
    private var shadeColor5:uint;
    //private var aDarkestColorMCs:Array = new Array();
    //private var shadeTheseMC4:MovieClip;

    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: SCALING
    private var displayOffset:int = 50;//To offset the Previous and Next image container from the main image container's edges
    private var nImgLoaderWidth:Number;
    private var nFinalLoaderWidth:Number;
    private var imageWidth:Number;
    private var displayVerticalCenter:Number;
    //•••≈-----------------------------------------------•••≈||: coldArea: Vertical free space for the control panel
    private var coldArea:Number = 100;

    private var cpHeight:Number;// = myGalleryControlPanel.height
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: ARRAY
    private var aImages:Array = new Array();
    private var aCaptions:Array = new Array();
    private var aLoResImages:Array = new Array();

    //private var aCPButtons:Array = new Array(cpButtons.cpBtn_MoreInfo, cpButtons.cpBtn_AllImgs, cpButtons.cpBtn_Audio, cpButtons.cpBtn_PreviousImg, cpButtons.cpBtn_PlayPauseImg, cpButtons.cpBtn_NextImg, cpButtons.cpBtn_FullScreen );
    //private var aImageLoaderWidth:Array = new Array();
    //private var aCPButtons:Array;
    private var aGalleryCPLabels:Array;

    private var aFGSilos:Array = new Array();
    private var aFGSilosYAlignments:Array = new Array();
    private var aFGSiloXAlignmnt:Array = new Array();
    private var aFGSiloStretch:Array = new Array();
    private var aFGSiloHorizAlign:Array = new Array();
    private var aFGSiloVertAlign:Array = new Array();
    private var aFGSiloScale:Array = new Array();
    private var aFGSiloAutoScale:Array = new Array();
    private var aBGSiloAutoScale:Array = new Array();

    private var aBGSilos:Array = new Array();
    private var aBGSilosYAlignments:Array = new Array();
    private var aBGSiloXAlignmnt:Array = new Array();
    private var aBGSiloStretch:Array = new Array();
    private var aBGSiloHorizAlign:Array = new Array();
    private var aBGSiloVertAlign:Array = new Array();
    private var aBGSiloScale:Array = new Array();
    private var aBGSiloAlpha:Array = new Array();
    private var aFGSiloAlpha:Array = new Array();

    private var aSkinLevel:Array = new Array();

    private var aCPBtnNameID:Array = new Array();
    /*private var aCPBtnFunctions:Array = new Array(
     "showInfo", 
     "showVideoPlayer", 
     showMP3Player, 
     "openAllImages", 
     showPreviousImage, 
     pauseAutoPlay, 
     showNextImage, 
     toggleAutoEnlarge, 
     toggleFullScreenView);*/
    private var aCPBtnLabels:Array = new Array();
    private var aCPBtnLabelsToogle:Array = new Array();

    private var aCPBtnImage:Array = new Array();
    private var aCPBtnImageToogle:Array = new Array();

    private var aCPButtons:Array = new Array();
    private var aCPBtnWidth:Array = new Array();
    private var aCPBtnHeight:Array = new Array();

    private var hideThesePanelsArray:Array;// = new Array();//hideInfo (), hideVideoPlayer (), hideMP3Player(), hideAllImages());
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: BOOLEAN
    private var hiliteFlag:Boolean;
    private var bAutoImageEnlarge:Boolean = true;
    private var toggleImagesPausePlay:Boolean;
    private var bCPButtonHidden:Boolean;


    private var bWindowPanelOn:Boolean = false;
    private var bFullScreen:Boolean;
    //private var bMainImageLoaded:Boolean = false;


    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: XML
    private var xmlLoader:URLLoader;
    private var xDoc:XMLDocument;
    private var galleryXML:XML;
    //private var localConnXML = staxXML;
    //private var localConnXML:String = "../annaAquino/xml/Gallery.xml";
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: STRINGS
    private var midResPath:String;
    private var lowResPath:String;
    private var sTHUMBRES_PATH:String;
    private var sImage:String;
    private var sCaption:String;
    private var sTITLE:String
    private var sSUB_TITLE:String;

    private var sSKIN_PATH:String;
    private var sSILONAME:String;
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: MORE INFO
    private var sINFO_TITLE:String;
    private var tInfoTitle:TextField;
    private var sBODY_COPY:String;
    private var tMoreInfo:TextField; //myMoreinfo.moreInfoTxt

    var infoTxtField:TextField = new TextField();

    private var myMoreInfo:moreInfo = new moreInfo();

    private var myInfoBGImage:LoadImage;
    private var myInfoScrollingMask:infoScrollingMask = new infoScrollingMask();
    private var myMoreInfoBody:moreInfoBodyContainer = new moreInfoBodyContainer();

    private var infoPanelSprite:Sprite = new Sprite();

    //private var infoContainerSpriteHeight:Number;

    private var sCOLOR_THEME:String;

    private var myInfoTextColor:uint;

    private var myMoreInfoSlidingText:SliderEffectsSubClassHV;

    private var myInfoVerticalSlider:verticalSlider_MoreInfo = new verticalSlider_MoreInfo();//private var myThumbsVerticalSlider:verticalSlider = new verticalSlider();

    //•••≈----------------------------------•••≈||: Gallery Button Labels
    private var sLABEL_MUSIC:String;
    private var sLABEL_IMAGES:String;
    private var sLABEL_PREVIMAGE:String;
    private var sLABEL_PLAY_PAUSE:String;
    private var sLABEL_NEXTIMG:String;
    private var sLABEL_SCALE:String;
    private var sLABEL_FULLSCREEN:String;

    private var splicedToogleImgPlayPause:Array;
    private var splicedToogleImgAutoEnlarge:Array;
    private var splicedToogleFullScreen:Array;
    //private var sLabel:String;

    private var textLabel:String;

    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: AS
    //private var myMP3Player:MP3_Player;
    private var myColorGrad:GradationColorTransform;
    private var myFGSiloLoader:LoadImage;
    private var myBGSiloLoader:LoadImage;
    private var myFontHeadLoader:LoadSWF_Font;
    private var myFontSubHeadLoader:LoadSWF_Font;
    private var myCPBtnLoader:LoadImage;

    private var myThumbLoader:LoadImage2;

    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: VIDEO VARS
    private var video:Video = new Video();
    private var toggleVideoPausePlay:Boolean;
    private var nDuration:Number;
    private var infoObject:Object;
    private var volumePosition:Number = 1;
    private var oMetaClient:Object = new Object();
    private var nPercent:Number = 0;
    //•••≈-----------------------------------------------------------------------------•••≈||: Video Attach AS file
    //private var myVideo:VidPlayer;
    //•••≈-----------------------------------------------------------------------------•••≈||: Attach MCs from Gallery9.swf
    private var myVideoContainer:videoContainer = new videoContainer();
    private var myVideoSelectBtn:videoSelectionBtn;// = new videoSelectionBtn;
    //•••≈-----------------------------------------------------------------------------•••≈||: Video Strings
    private var sVID_TITLE:String;
    private var sVID_MEDIA:String;
    private var sFLV_PATH:String;
    private var sVIDEO_BG_COLOR:uint;
    private var sVIDEO_BG_ALFA:Number;
    private var sInitialVideoName:String
    private var sVideoPath_Name:String
    private var sVideoName:String;
    //•••≈-----------------------------------------------------------------------------•••≈||: Video Booleans
    private var bVideoPlayerOn:Boolean = false;
    private var videoPlayed:Boolean = false;
    private var bVideoCPWindow1stCall:Boolean = true; //
    //•••≈----------------------------------------------------------------------------•••≈||: Video ARRAY
    private var aVideoList:Array=new Array();
    private var aVideoList2:Array=new Array();
    private var aVideoSelectBtns:Array = new Array();
    //•••≈-----------------------------------------------------------------------------•••≈||: Video Integers/Numbers
    private var vidIndexNum:int = 0;
    //•••≈----------------------------------------------------------------------------•••≈||: Video counts (video.length)
    private var nVideoCount:int;
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: VIDEO SLIDING VARS
    //•••≈------------------------------------------------------------•••≈||: iBUTTON_INDENT: Sliding buttons indentation from left and right of it's mask.
    //private var iBUTTON_INDENT:int;
    //•••≈------------------------------------------------------------•••≈||: LoadImage2: This Class has a 3rd parameter for displaying a pseudo progress anim movieclip. The progress anim is being animated locally (FLA) from where's it's being called.
    private var myVideoButtonIcon:LoadImage2;
    //•••≈------------------------------------------------------------•••≈||: btnHorizontalContainerSprite: New Sprite to hold the button(s) duplicated or not.
    private var btnHorizontalContainerSprite:Sprite = new Sprite();
    private var btnVerticalContainerSprite:Sprite = new Sprite();

    //•••≈------------------------------------------------------------•••≈||: panoWidth: Total width value of all the button(s) for video selection.
    //private var panoWidth:Number = 100;
    //private var panoramicWidth:Number;// = 900;
    //private var panoramicHeight:Number;
    //•••≈------------------------------------------------------------•••≈||: leftRightSpace: Left and right indentation between the pano images and the rectangle mouse bound
    private var leftRightSpace:Number;// = 40/100;
    private var xP:Number;
    private var div:Number
    private var xMouse:Number
    private var nButtonWidthNSpace:int = 0;//100;
    //•••≈------------------------------------------------------------•••≈||: bSliderOn: Boolean to trigger slider when mouse is over or out the slider bound.
    private var bSliderOn:Boolean;// = true;//false;
    //•••≈------------------------------------------------------------•••≈||: nXMouseLeavingSlidrBound: Captured mouseX position upon leaving the slider bound rectangle.
    private var nXMouseLeavingSlidrBound:Number;
    //•••≈------------------------------------------------------------•••≈||: aBtnCount: How many button(s) to process. To be changed with xml value lebgth.
    private var aVideoThumbList:Array = new Array();
    private var aVideoButtons:Array = new Array();
    //private var aBtnCount:Array = new Array(10);
    //•••≈------------------------------------------------------------•••≈||: mySquare: Button. squareMC the exported mc.
    private var mySquare:squareMC;
    private var mySliderBtnsMask:sliderBtnsMask = new sliderBtnsMask();
    private var myPanoramaSlider:panoramaSlider = new panoramaSlider();
    private var myMP3ScrollingMenuMask:scrollingSongMenuMask = new scrollingSongMenuMask();
    private var myMP3VerticalSlider:verticalSlider = new verticalSlider();

    //•••≈-----------------------------------------------------------------------------•••≈||: Video  Player Attach AS file
    private var myVideoPlayer:LoadVideoSubClass;
    //•••≈-----------------------------------------------------------------------------•••≈||: Slider Menu Attach AS file
    private var myVideoSlidingMenu:SliderEffectsSubClassHV;// myVideoSlidingMenu = new SliderEffectsSubClass (myVideoContainer, btnHorizontalContainerSprite, panoWidth);
    private var myMP3SlidingMenu:SliderEffectsSubClassHV;// (scrollType:String, myMainSliderContainer:MovieClip, btnHorizontalContainerSprite:Sprite, panoSize:Number, bSliderOn:Boolean,  edgeIndentSpaces:Number, sliderBtnsMask:MovieClip, panoramaSlider:MovieClip)


    //var myHeadline:LoadSWF_Font = new LoadSWF_Font(FontContainer, "Fonts/Trident.swf", titleText);
    //CurrentImageLoader (targetMC:MovieClip, targetURL:String, textString:String, imageTimer:Timer, transitionTime:Number)
    /*//•••≈-------------------------------------------------------------------------------•••≈||: Loading display container from a Class: TESTING STAGE!
     private var myCurrentImageLoader:CurrentImageLoader;*/
    private var video2MP3TriggerOn = false;
    private var MP3TriggerOn = false;
    private var InfoTriggerOn = false;
    private var allImagesTriggerOn = false;

    private var mp3BtnSelected:Boolean;

    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: MOVIECLIPS: Attach MCs
    private var myMainGallery:MainGallery = new MainGallery();
    private var myGradation:SkinGradationContainer = new SkinGradationContainer();
    private var myDisplayContainer:DisplayContainer = new DisplayContainer();

    private var myGalleryControlPanel:GalleryControlPanel = new GalleryControlPanel();
    //private var myMusicControlPanel:MP3_Skin = new MP3_Skin();
    //private var myGalleryTitle:GalleryTitle = new GalleryTitle();
    private var myFGArkosSilo:SiloContainer = new SiloContainer();
    private var myBGArkosSilo:SiloContainer = new SiloContainer();
    private var myCPHotSpotHorizLine:controlPanelHotSpotBtn = new controlPanelHotSpotBtn();
    private var myFontContainer:FontContainer = new FontContainer();
    private var myCPBtnFPO:ImageFPO
    private var myImgFloatNum:ImgNum_mc = new ImgNum_mc();

    private var myPreloader:Preloader = new Preloader();
    private var myPreLoadContainer:PreLoaderContainer = new PreLoaderContainer();
    //•••≈-------------------------------------------------------------------------------•••≈||: myBGRect: background for all control panels to de-activate background images clicking
    private var myBGRect:BackGroundRectangle = new BackGroundRectangle();

    private var sBUTTON_PATH:String;

    //private var myHeadline:FontHead = new FontHead();
    //private var mySubHead:FontSubHead = new FontSubHead();		
    /*//•••≈-------------------------------------------------------------------------------•••≈||: Loading display container from a Class: TESTING STAGE!
     private var myCurrentImageContainer:DisplayContainer = new DisplayContainer();
     //private var myCurrentImageContainer:ImageContainer_mc = new ImageContainer_mc();*/
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: MOVIECLIPS • OBJECTS: STATIC
    private var tGalleryTitle:TextField;
    private var tGallerySubTitle:TextField;
    private var imgMask:MovieClip;
    private var imgFrame:MovieClip;
    private var imgBG:MovieClip;
    private var displayBG:MovieClip;
    //private var displayContainer:MovieClip;
    //private var galleryDisplay:MovieClip;
    private var galleryTitleM:MovieClip;
    private var currentDisplay:MovieClip;
    private var prevDisplay:MovieClip;
    private var nextDisplay:MovieClip;
    private var mainFPO:MovieClip;
    private var prevFPO:MovieClip;
    private var nextFPO:MovieClip;
    private var siloImage:MovieClip;
    private var mainGalleryBG:MovieClip;

    private var cpButtons:MovieClip;
    private var cpButtonsRectBG:MovieClip;

    //private var snThumbContainer:MovieClip;
    private var prevImgMask:MovieClip;
    private var prevImgFrame:MovieClip;
    private var prevImgBG:MovieClip;
    private var nextImgMask:MovieClip;
    private var nextImgFrame:MovieClip;
    private var nextImgBG:MovieClip;
    private var snSiloContainer:MovieClip;

    private var targetDisplay:Object;
    private var targetButton:Object;


    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Timer
    private var imageTimer:Timer;
    private var prevImageTimer:Timer;
    private var nextImageTimer:Timer;
    //private var switchAutoCurrentImageX:Timer;
    private var imgDisplayDur:int;
    private var loResTimer:Timer;

    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Slider adjuster
    private var infoSliderHtAdjstr:Number;
    private var videoSliderWtAdjstr:Number;
    private var mp3SliderHtAdjstr:Number;

    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: THUMBNAILS		
    private var myThumbsVerticalSlider:verticalSlider = new verticalSlider();
    private var myThumbsSlidingMenu:SliderEffectsSubClassHV;
    private var myThumb:ThumbButton;
    private var myThumbnailsPanel:ThumbnailsPanel = new ThumbnailsPanel();

    private var myFullThumb:fullThumbContainer = new fullThumbContainer();
    private var myFullThumbFrame:LoadFramedImage;//(targetMC:MovieClip, targetURL:String, bDynamicFrame:Boolean, sColorScheme:String, frameWidth:int, frameHeight:int)
    //myFullThumbFrame = new LoadFramedImage(targetMC:MovieClip, targetURL:String, bDynamicFrame:Boolean, sColorScheme:String, frameWidth:int, frameHeight:int)
    private var myThumbsScrollingMenuMask:scrollingThumbnailsMask = new scrollingThumbnailsMask();
    //private var thumbsContainerSpriteHeight:Number;
    private var thumbButtonMC:MovieClip  = new MovieClip();
    private var myThumbBtnOnOverBG:thumbBtnBG = new thumbBtnBG();
    private var myThumbBtnSelectedBG:thumbBtnBG = new thumbBtnBG();
    private var loadFullThumb:LoadImage2;
    //private var thumbButton:MovieClip;
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Slider adjuster
    private var thumbsSliderHtAdjstr:Number;
    //•••≈------------------------------------------------------------•••≈||: btnHorizontalContainerSprite: New Sprite to hold the button(s) duplicated or not.
    private var thumbsPanelSprite:Sprite = new Sprite();

    private var aThumbnails:Array = new Array();
    private var aFullThumbs:Array = new Array();
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Thumbnails GRID
    //var imageCount:int = 120;
    private var xMax:Number;// = 10;
    private var yMax:Number;// = imageCount/xMax;

    //var xCenter:Number;
    //var yCenter:Number;
    private var xDist:int;
    private var yDist:int;
    //var space:Number;
    //private var totalImgAccross:Number = 8;//initial value on load
    //var nMultipliedPgSet:Number;

    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    //••••••••••••••••••••••••••••••••••••≈----------------:|     CONSTRUCTOR     |:----------------≈••••••••••••••••••••••••••••••••••••:|•
    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    //•--------------------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||: CONSTRUCTOR
    public function Gallery9 () {
      /*mainGallery_mc.galleryDisplay_mc.visible = false;
       mainGallery_mc.galleryControlPanel_mc.visible = false;
       mainGallery_mc.galleryTitle_mc.visible = false;*/
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Display containers invisible
      myDisplayContainer.visible = false;
      /*currentDisplay = myDisplayContainer.mainImage_mc;
       prevDisplay = myDisplayContainer.prevImage_mc;
       nextDisplay = myDisplayContainer.nxtImage_mc;*/
      myDisplayContainer.mainImage_mc.visible = false;
      myDisplayContainer.prevImage_mc.visible = false;
      myDisplayContainer.nxtImage_mc.visible = false;

      //myGalleryControlPanel.y = 300//stage.stageHeight// + myGalleryControlPanel.height + 100;
      myGalleryControlPanel.visible = false;
      myMusicControlPanel.visible = false;
      myMoreInfo.visible = false;
      myMoreInfoBody.visible = false;
      myVideoContainer.visible = false;
      myThumbnailsPanel.visible = false;
      myThumbBtnOnOverBG.visible = false;
      myThumbBtnSelectedBG.visible = false;

      //bVideoCPWindow1stCall = true;
      //myGalleryControlPanel.thumbContainer_mc.visible  = false;			
      //addEventListener(Event.ADDED_TO_STAGE);			
      //•••≈-------------------------------------------------------------------------------•••≈||:  cpHeight: Its value use to calculate the position on window resized.
      cpHeight = myGalleryControlPanel.height;

      init ();
      //myProgressLoader.init();
    }
    //•--------------------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||: METHODS
    //
    //•---------------------------------------------------------------------------------------------------------------------•••≈||: INIT
    private function init ():void {
      loadXML ();
      initStage ();
      shortNames ();
    }
    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    //••••••••••••••••••••••••••••••••••••≈----------------:|     SHORT NAMES SECTION     |:----------------≈••••••••••••••••••••••••••••••••••••:|•
    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    //•---------------------------------------------------------------------------------------------------------------------•••≈||:shortNames:  SHORTEN REFERENCE NAMES
    private function shortNames ():void {
      //
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: SHORTEN REFERENCE NAMES: Displays
      currentDisplay = myDisplayContainer.mainImage_mc;
      prevDisplay = myDisplayContainer.prevImage_mc;
      nextDisplay = myDisplayContainer.nxtImage_mc;

      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: SHORTEN REFERENCE NAMES: Main Display MCs
      tDescription = currentDisplay.description_mc.descriptionText;
      tInfoTitle = myMoreInfo.moreInfoTitle.moreInfoHeadline;
      //tMoreInfo = myMoreInfo.moreInfoBody.moreInfoTxt;

      imgNum_mc = myImgFloatNum;
      tImgNum = myImgFloatNum.imgNumTxt;

      imgMask = currentDisplay.imgMask_mc;
      imgFrame = currentDisplay.frame_mc;
      imgBG = currentDisplay.bg_mc;
      mainFPO = currentDisplay.fpo_mc;
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: SHORTEN REFERENCE NAMES: Previous Display MCs
      prevImgMask = prevDisplay.imgMask_mc;
      prevImgFrame = prevDisplay.frame_mc;
      prevImgBG = prevDisplay.bg_mc;
      prevFPO = prevDisplay.fpo_mc;
      //
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: SHORTEN REFERENCE NAMES: Next Display MCs
      nextImgMask = nextDisplay.imgMask_mc;
      nextImgFrame = nextDisplay.frame_mc;
      nextImgBG = nextDisplay.bg_mc;
      nextFPO = nextDisplay.fpo_mc;

      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: SHORTEN REFERENCE NAMES: Menu and Control Panel
      cpButtons = myGalleryControlPanel.cpButtons_mc;
      cpButtonsRectBG = myGalleryControlPanel.cpButtons_mc.cpBG_Rect
    }
    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    //••••••••••••••••••••••••••••••••••••≈----------------:|     XML SECTION     |:----------------≈••••••••••••••••••••••••••••••••••••:|•
    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Load XML
    private function loadXML ():void {
      trace("loadXML")
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: XML LOADER : Local Connection || HTML FlashVars
      xmlLoader = new URLLoader();

      /*
       //----- localConnXML : FOR TESTING ONLY!-----//
       //var localConnXML:String = "../NYC_Motorshow2009/xml/Gallery.xml";
       var localConnXML:String = "../ElNidoPalawan/xml/Gallery.xml";
       //var localConnXML:String = "../MetalBirdcage/xml/Gallery.xml";

       var rekwest:URLRequest = new URLRequest(localConnXML);
       //xmlLoader.load (rekwest);
       try {
       xmlLoader.load(rekwest);
       } catch (error:Error) {
       trace("Unable to load requested document.");
       }
       */

      //-----------USED WITH LOCALCONN AND FLASHVARS! -------//
      xmlLoader.addEventListener (ProgressEvent.PROGRESS, xmlProgress);
      xmlLoader.addEventListener (Event.COMPLETE, xmlComplete);
      xmlLoader.addEventListener (ErrorEvent.ERROR, xmlFailed);



      //----- LOADING XML THRU FLASHVARS ONLY! -----//
      xmlLoader.load(new URLRequest(loaderInfo.parameters.staxXML));

      //-----------USED WITH LOCALCONN AND FLASHVARS! -------//
      xmlLoader.addEventListener (ProgressEvent.PROGRESS, xmlProgress);
      xmlLoader.addEventListener (Event.COMPLETE, xmlComplete);
      xmlLoader.addEventListener (ErrorEvent.ERROR, xmlFailed);


    }
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Load XML: xmlProgress
    private function xmlProgress (p:ProgressEvent):void {
      //trace("xmlProgress");		
    }
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Load XML: xmlFailed
    private function xmlFailed (errorEvent:ErrorEvent):void {
      trace ("XML LOAD FAILED! PLEASE CHECK XML FILE NAME, DIRECTORY LOCATION. ALSO, CHECK FOR VALIDATION");
    }
    //•••≈-------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||: Load XML: xmlComplete :::: XML COMPLETE START
    private function xmlComplete (e:Event):void {
      trace("XML Loaded!")
      xDoc = new XMLDocument();
      xDoc.ignoreWhite = true;
      galleryXML = new XML(xmlLoader.data);
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: xml variables
      nImgCount = galleryXML.section[nImagesNodeType].subSect[0].media.length();
      xDoc.parseXML (galleryXML.toXMLString());
      //trace("xDoc:" + xDoc);
      midResPath = galleryXML.section[nImagesNodeType]. @ MIDRES_PATH;
      lowResPath = galleryXML.section[nImagesNodeType]. @ LOWRES_PATH;
      //trace("lowResPath:" + lowResPath);
      //sTHUMBRES_PATH = galleryXML.section[nImagesNodeType]. @ LOWRES_PATH;
      sTHUMBRES_PATH = galleryXML.section[nThumbsNodeType]. @ THUMBRES_PATH;

      sTITLE = galleryXML.section[nImagesNodeType].subSect[0]. @ TITLE;
      sSUB_TITLE = galleryXML.section[nImagesNodeType].subSect[0]. @ SUB_TITLE;
      nSLIDESHOW_DELAY = galleryXML.section[nImagesNodeType].subSect[0]. @ SLIDESHOW_DELAY;
      nTRANSITION_TIME = galleryXML.section[nImagesNodeType].subSect[0]. @ TRANSITION_TIME;
      sIMG_NUM = galleryXML.section[nImagesNodeType].subSect[0]. @ IMG_NUM;
      sPRE_IMG_NUM = galleryXML.section[nImagesNodeType].subSect[0]. @ PRE_IMG_NUM;
      sSKIN_PATH = galleryXML.section[nSkinNodeType].@ SKIN_PATH;
      //trace("sSKIN_PATH: " + sSKIN_PATH);
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: xml variables: COLOR SCHEME

      sCOLOR_THEME = galleryXML.section[nSkinNodeType].@ COLOR_THEME.toLowerCase();
      trace("sCOLOR_THEME:" + sCOLOR_THEME);
      //•••≈----------------------------------------------------------------•••≈||: Slider minute adjuster
      infoSliderHtAdjstr = galleryXML.section[nInfoNodeType].@ SLIDER_ADJUSTER;
      videoSliderWtAdjstr = galleryXML.section[nVideoNodeType].@ SLIDER_ADJUSTER;
      mp3SliderHtAdjstr = galleryXML.section[nSongNodeType].@ SLIDER_ADJUSTER;

      thumbsSliderHtAdjstr = galleryXML.section[nThumbsNodeType].@ SLIDER_ADJUSTER;

      //iBUTTON_INDENT = galleryXML.section[nVideoNodeType].@ SLIDER_ADJUSTER;
      //leftRightSpace = iBUTTON_INDENT/100;
      //trace("leftRightSpace: " + leftRightSpace);
      //videoSliderWtAdjstr = galleryXML.section[nVideoNodeType].@ SLIDER_ADJUSTER;
      leftRightSpace = videoSliderWtAdjstr/100;//Check this line

      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Add Child(ren)
      addChild(myMainGallery);
      addChild(myPreLoadContainer);
      //addChild(myBGRect);

      //--------------TRY MAKING THESE ARRAY DYNAMICALLY PULL FROM THE XML NODES: <subSect LEVEL_ID="myGradation">....
      /*var iSkinSubNodeCount:int = galleryXML.section[nSkinNodeType].subSect.length();
       //trace("iSkinSubNodeCount :" + iSkinSubNodeCount);

       var aChildren:Array = new Array();
       var sSkinSubNodeID
       for (var iSnc:int = 0; iSnc<iSkinSubNodeCount; iSnc++) {
       sSkinSubNodeID = galleryXML.section[nSkinNodeType].subSect[iSnc]. @ LEVEL_ID;
       aChildren[aChildren.length] = sSkinSubNodeID;
       trace("aChildren :" + aChildren);
       trace("aChildren[iSnc] :" + aChildren[iSnc]);
       }*/

      var aChildren:Array = new Array(myGradation, myBGArkosSilo, myDisplayContainer, myFGArkosSilo, myGalleryControlPanel, myFontContainer);
      for (var cG:int = 0; cG<aChildren.length; cG++) {
        myMainGallery.addChild(aChildren[cG]);
      }

      //myGalleryControlPanel.bgRectFPO.addChild(myBGRect);
      myGalleryControlPanel.addChild(myBGRect);
      myGalleryControlPanel.addChild(myMusicControlPanel);
      myGalleryControlPanel.addChild(myMoreInfo);
      myGalleryControlPanel.addChild(myVideoContainer);
      myGalleryControlPanel.addChild(myThumbnailsPanel);

      myBGRect.alpha = 0;
      myBGRect.visible = false;

      //•••≈--------------------------------------------•••≈||: Load MoreInfo background image
      //loadInfoBGImg();

      //myMainGallery.addChild(myImgFloatNum);			

      /*---------------------| TARGETING SPECIFIC CHILD: BY CONTAINER IT RESIDES IN |---------------------*/
      //FontContainer.scaleX = FontContainer.scaleY = 2;*/			
      //myHeadline:LoadSWF_Font = new LoadSWF_Font(FontContainer, "Fonts/Trident.swf", titleText);

      nSKIN_COUNT = galleryXML.section[nSkinNodeType].subSect.length();
      for (var iSi:int = 0; iSi<nSKIN_COUNT; iSi++) {
        var sLEVEL_ID:String = galleryXML.section[nSkinNodeType].subSect[iSi]. @ LEVEL_ID;
        aSkinLevel[aSkinLevel.length] = sLEVEL_ID;
        //trace("aSkinLevel: " + aSkinLevel);
      }
      myMainGallery.setChildIndex (myMainGallery.getChildByName(aChildren[0].name), aSkinLevel.indexOf("myGradation"));
      //trace("aSkinLevel.indexOf(myGradation): " + (aSkinLevel.indexOf("myGradation")))

      myMainGallery.setChildIndex (myMainGallery.getChildByName(aChildren[1].name), aSkinLevel.indexOf("myBGArkosSilo"));
      //trace("aSkinLevel.indexOf(myBGArkosSilo): " + (aSkinLevel.indexOf("myBGArkosSilo")));

      //myMainGallery.setChildIndex (myMainGallery.getChildByName(aChildren[2].name), aSkinLevel.indexOf("myGalleryTitle"));
      myMainGallery.setChildIndex (myMainGallery.getChildByName(aChildren[2].name), aSkinLevel.indexOf("myDisplayContainer"));
      //trace("aSkinLevel.indexOf(myDisplayContainer): " + (aSkinLevel.indexOf("myDisplayContainer")));

      myMainGallery.setChildIndex (myMainGallery.getChildByName(aChildren[3].name), aSkinLevel.indexOf("myFGArkosSilo"));
      //trace("aSkinLevel.indexOf(myFGArkosSilo): " + (aSkinLevel.indexOf("myFGArkosSilo")));

      //myMainGallery.setChildIndex (myMainGallery.getChildByName(aChildren[4].name), aSkinLevel.indexOf("myImgFloatNum"));
      myMainGallery.setChildIndex (myMainGallery.getChildByName(aChildren[4].name), aSkinLevel.indexOf("myGalleryControlPanel"));
      //trace("aSkinLevel.indexOf(myGalleryControlPanel): " + (aSkinLevel.indexOf("myGalleryControlPanel")));

      myMainGallery.setChildIndex (myMainGallery.getChildByName(aChildren[5].name), aSkinLevel.indexOf("myFontContainer"));
      //trace("aSkinLevel.indexOf(myFontContainer): " + (aSkinLevel.indexOf("myFontContainer")));

      myMainGallery.addChild(myCPHotSpotHorizLine);//Check this line

      //var titleFontBottomSpaceIndx:int = aSkinLevel.indexOf("myFontContainer");
      //trace("titleFontBottomSpaceIndx: " + titleFontBottomSpaceIndx)

      //nFONT_BOTTOMSPACE = galleryXML.section[nSkinNodeType].subSect[titleFontBottomSpaceIndx].skin[0].@ FONT_BOTTOMSPACE; 			
      /*//•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: The following codes controls the layering of the 3 stacking displays by swithching the main display to be in front or at the bottom.
       var displayContIndx:int = aSkinLevel.indexOf("myDisplayContainer");
       var sMAIN_DISPLAY_LEVEL:String = galleryXML.section[nSkinNodeType].subSect[displayContIndx]. @ MAIN_DISPLAY_LEVEL;
       if(sMAIN_DISPLAY_LEVEL == "BOTTOM"){
       var targetDObject1:DisplayObject = myDisplayContainer.getChildByName("mainImage_mc");
       var cIndexNum1:int = myDisplayContainer.getChildIndex(targetDObject1);
       myDisplayContainer.setChildIndex(myDisplayContainer.getChildAt(cIndexNum1), 0);
       } else if(sMAIN_DISPLAY_LEVEL == "TOP"){
       var targetDObject2:DisplayObject = myDisplayContainer.getChildByName("mainImage_mc");
       var cIndexNum2:int = myDisplayContainer.getChildIndex(targetDObject2);
       myDisplayContainer.setChildIndex(myDisplayContainer.getChildAt(cIndexNum2), 2);
       }*/

      //
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Positioning  the Children: Isimpa dagiti ubbing. 
      //centerBG (myGradation);
      centerMe (myDisplayContainer);
      centerBottom (myGalleryControlPanel);
      centerBottom (myCPHotSpotHorizLine);
      //centerMe (myGalleryTitle);
      centerMe (myFontContainer);
      //bottomRightPosition (imgNum_mc);
      //•••≈--------------------------------------------•••≈||: myCPHotSpotHorizLine is the horizontal line used for visual indicator for trigerring the CP
      myCPHotSpotHorizLine.alpha = 0;
      myCPHotSpotHorizLine.height = 1;
      myCPHotSpotHorizLine.width = stage.stageWidth;
      //•••≈--------------------------------------------•••≈||: Hide All Images Gallery CP Method Call
      hideGalleryControlPanel();
      //
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Skin Method Calls
      skinGradation ();
      arkosSkinForeground ();
      arkosSkinBackground ();
      skinGallery ();
      skinControlPanel ();
      //skinGalleryTitle ();
      skinFontContainer ();
      //•••≈--------------------------------------------•••≈||: Gradation background method call
      centerBG (myGradation);
      //•••≈--------------------------------------------•••≈||: rectBGStrechCentering(): Stretching and Centering control panels background
      rectBGStrechCentering()
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Slideshow delay in between images
      imgDisplayDur = nSLIDESHOW_DELAY * 1000;
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Display container Play/Pause FFWD RWND Buttons
      currentDisplay.playPauseBtns_mc.visible = false;
      currentDisplay.playPauseBtns_mc.playBtn_mc.visible = false;
      currentDisplay.playPauseBtns_mc.pauseBtn_mc.visible = true;
      currentDisplay.prevBtn_mc.visible = false;
      currentDisplay.nxtBtn_mc.visible = false;
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Previous Button
      prevDisplay.prevBtn_mc.visible = false;
      prevDisplay.playPauseBtns_mc.visible = false;
      prevDisplay.nxtBtn_mc.visible = false;
      //prevDisplay.x = -(currentDisplay.frame_mc.width/2);
      prevDisplay.description_mc.visible = false;
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Next Button
      nextDisplay.prevBtn_mc.visible = false;
      nextDisplay.playPauseBtns_mc.visible = false;
      nextDisplay.nxtBtn_mc.visible = false;
      //nextDisplay.x = (currentDisplay.frame_mc.width/2);
      nextDisplay.description_mc.visible = false;
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: DISPLAY BUTTONS MOUSE EVENTS: Main Image Display
      currentDisplay.addEventListener (MouseEvent.ROLL_OVER, showPauseBtn);
      currentDisplay.addEventListener (MouseEvent.ROLL_OUT, hidePauseBtn);
      //currentDisplay.swapDepthBtn.addEventListener (MouseEvent.CLICK, swapMainDisplayDepth);
      mainFPO.addEventListener (MouseEvent.CLICK, swapMainDisplayDepth);
      currentDisplay.playPauseBtns_mc.addEventListener (MouseEvent.CLICK, pauseAutoPlay);
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: DISPLAY BUTTONS MOUSE EVENTS: Previous Image Display
      prevDisplay.addEventListener (MouseEvent.ROLL_OVER, showPrevBtn);
      prevDisplay.addEventListener (MouseEvent.ROLL_OUT, hidePrevBtn);
      prevDisplay.addEventListener (MouseEvent.CLICK, showPreviousImage);
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: DISPLAY BUTTONS MOUSE EVENTS: Next Image Display
      nextDisplay.addEventListener (MouseEvent.ROLL_OVER, showNextBtn);
      nextDisplay.addEventListener (MouseEvent.ROLL_OUT, hideNextBtn);
      nextDisplay.addEventListener (MouseEvent.CLICK, showNextImage);

      stage.addEventListener(KeyboardEvent.KEY_DOWN, keyDown_NxtPrevImages);
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Image count loop
      for (var i:int=0; i<nImgCount; i++) {
        //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: PUSH: Media name
        sImage = galleryXML.section[nImagesNodeType].subSect[0].media[i]. @ NAME;
        aImages[aImages.length] = sImage;//instead of using "push". this is 600% faster
        //trace("sImage: " + sImage);
        //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: PUSH: captions
        sCaption = galleryXML.section[nImagesNodeType].subSect[0].media[i]. @ CAPTION;
        aCaptions[aCaptions.length] = sCaption;
      }
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: BUILD THUMBNAILS MENU GRID
      buildThumbnails();
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: New image loaders
      imageMainLoader = new Loader();
      imagePrevLoader = new Loader();
      imageNextLoader = new Loader();
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Main Current Image Container: Current image description
      tDescription.text = sCaption;
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Events Listener for the Main image load:::::::::::::: LOADERS EVENTS
      imageMainLoader.contentLoaderInfo.addEventListener (ProgressEvent.PROGRESS,onMainImgLoadingProgress);
      imageMainLoader.contentLoaderInfo.addEventListener (Event.COMPLETE, onMainImgLoadingComplete);
      imageMainLoader.contentLoaderInfo.addEventListener (ErrorEvent.ERROR,onMainImgLoadingFailed);
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Events Listener for the Previous image load
      imagePrevLoader.contentLoaderInfo.addEventListener (ProgressEvent.PROGRESS,onPrevProgress);
      imagePrevLoader.contentLoaderInfo.addEventListener (Event.COMPLETE, OnPrevComplete);
      imagePrevLoader.contentLoaderInfo.addEventListener (ErrorEvent.ERROR,onPrevFailed);
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Events Listener for the Next image load
      imageNextLoader.contentLoaderInfo.addEventListener (ProgressEvent.PROGRESS,onNextProgress);
      imageNextLoader.contentLoaderInfo.addEventListener (Event.COMPLETE, OnNextComplete);
      imageNextLoader.contentLoaderInfo.addEventListener (ErrorEvent.ERROR,onNextFailed);
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: New Timer Event for auto play
      switchAutoCurrentImage (new TimerEvent(TimerEvent.TIMER));
      imageTimer = new Timer(imgDisplayDur);
      imageTimer.addEventListener (TimerEvent.TIMER, switchAutoCurrentImage);
      centerDiplayContainer()

      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: More Information Container: Gallery information MoreInfo Panel
      sINFO_TITLE = galleryXML.section[nInfoNodeType].infoText[0]. @ TITLE;
      sBODY_COPY = galleryXML.section[nInfoNodeType].infoText[0].body[0];//. @ BODY_COPY;
      //trace("sBODY_COPY: " + sBODY_COPY);
      //var sCDATA_COPY:String = galleryXML.main[0].section[i];

      tInfoTitle.text = sINFO_TITLE;
      //tMoreInfo.text = sBODY_COPY;
      //•••≈-----------------------------------------------------------------•••≈||: More Info scrolling body copy
      scrollingMoreInfo();
      //•••≈--------------------------------------------------------------------------------------------------------------------------------------------•••≈||: Start MP3
      nSongCount=galleryXML.section[nSongNodeType].subSect[nSongSubSectionNode].media.length();
      sMP3Path=galleryXML.section[nSongNodeType].@ MP3_PATH;
      sMP3ImagesPath=galleryXML.section[nSongNodeType].@ MP3_IMAGES_PATH;
      sRANDOMIZED = galleryXML.section[nSongNodeType].@ RANDOMIZED.toLowerCase();
      //trace("sRANDOMIZED: " + sRANDOMIZED);
      //trace("sMP3Path: " + sMP3Path);
      //trace("sMP3ImagesPath: " + sMP3ImagesPath);

      if(sRANDOMIZED == "yes"){
        bRANDOMIZED = true;
        randomSongIndex = Math.random()*(nSongCount);//(this.aMP3List.length-1)):Number;
        soundIndexNum = randomSongIndex;
        //trace("Randomized song soundIndexNum1: " + soundIndexNum);
      }
      if(sRANDOMIZED == "no"){
        bRANDOMIZED = false;
        soundIndexNum = 0;
      }
      var sPlayerTitle:String=galleryXML.section[nSongNodeType].subSect[nSongSubSectionNode].@ TITLE;
      var sPlayerSubTitle:String=galleryXML.section.subSect[nSongSubSectionNode].@ SUB_TITLE;

      myMusicControlPanel.gallerySongListTitle.text = sPlayerTitle;
      //myMP3Player = new LoadMP3SubClass (myMusicControlPanel, sMP3Path, aMP3List, aSongName, aArtistName, aDupeList, soundIndexNum) ;

      for (var iSc:int=0; iSc < nSongCount; iSc++) {
        //•••----------------------------------------------------------------•••≈||: Collects the song names
        sMP3Name = galleryXML.section[nSongNodeType].subSect[nSongSubSectionNode].media[iSc].@ NAME;
        //trace("sMP3Name: " + sMP3Name);
        aMP3List[aMP3List.length]=sMP3Name;
        //•••----------------------------------------------------------------•••≈||: Collects the song display names
        sSongName = galleryXML.section[nSongNodeType].subSect[nSongSubSectionNode].media[iSc].@ DISPLAY_NAME;
        aSongName[aSongName.length]=sSongName;
        //trace("aSongName: " + aSongName);
        //•••----------------------------------------------------------------•••≈||: Collects the artist names
        sArtistName = galleryXML.section[nSongNodeType].subSect[nSongSubSectionNode].media[iSc].@ ARTIST;
        aArtistName[aArtistName.length]=sArtistName;
        //trace("aArtistName: " + aArtistName);
        //•••----------------------------------------------------------------•••≈||: Collects the artist pix
        sArtistPix = galleryXML.section[nSongNodeType].subSect[nSongSubSectionNode].media[iSc].@ MP3_THUMB;
        aMP3Thumb[aMP3Thumb.length]=sArtistPix;
        //trace("aMP3Thumb: " + aMP3Thumb);
        //oMP3ArtistPix = aMP3Thumb[iSc];
        //•••----------------------------------------------------------------•••≈||: Create the mp3 menu list
        dupeSongList = new songList();//myMusicControlPanel.MP3Menu.songList;
        aDupeList[aDupeList.length]=dupeSongList;
        //dupeSongList.y = -100;
        dupeSongList.y = dupeSongList.height * iSc;
        //myMusicControlPanel.MP3Menu.addChild(dupeSongList);
        dupeSongList.songNameMC.songName.text = sSongName;
        dupeSongList.artistNameMC.artistName.text = sArtistName;

        dupeSongList.songListNameHiliter.alpha = 0;
        //dupeSongList.artistName.alpha = .2;

        aArtistNameBtn[aArtistNameBtn.length]=dupeSongList.artistNameMC;
        aSongNameBtn[aSongNameBtn.length]=dupeSongList.songNameMC;
        aSongButtonHiliter[aSongButtonHiliter.length]=dupeSongList.songListNameHiliter;
        aSongListNameBG[aSongListNameBG.length]=dupeSongList.songListNameBG;

        //myMusicControlPanel.MP3Menu.addChild(btnVerticalContainerSprite);
        btnVerticalContainerSprite.addChild(dupeSongList);

        dupeSongList.addEventListener(MouseEvent.MOUSE_OVER,  toggleSongListOverBG);
        dupeSongList.addEventListener(MouseEvent.MOUSE_OUT,  toggleSongListOutBG);
        dupeSongList.addEventListener(MouseEvent.MOUSE_UP,  loadMyMP3);

      }
      myMusicControlPanel.MP3Menu.addChild(btnVerticalContainerSprite);
      myMusicControlPanel.MP3Menu.addChild(myMP3ScrollingMenuMask);
      myMusicControlPanel.MP3Menu.addChild(myMP3VerticalSlider);

      /*if(nSongCount < 7){
       myMP3VerticalSlider.visible = false;
       }*/

      //•••----------------------------------------------------------------•••≈||: Load a new mp3 player from LoadMP3SubClass
      //trace("myMusicControlPanel.artistPix.artistBG: " + myMusicControlPanel.artistPix.artistBG);
      //trace("aMP3Thumb: " + aMP3Thumb)
      myMP3Player = new LoadMP3SubClass (
        myMusicControlPanel,
        sMP3Path,
        sMP3ImagesPath,
        aMP3List,
        aSongName,
        aArtistName,
        artistImageFPO,
        aMP3Thumb,
        aDupeList,
        soundIndexNum,
        bRANDOMIZED,
        randomSongIndex,
        sCOLOR_THEME,
        aArtistNameBtn,
        aSongNameBtn,
        aSongButtonHiliter,
        aSongListNameBG,
        btnVerticalContainerSprite,
        myMP3VerticalSlider
      ) ;

      //•••≈----------------------------------------------------------------•••≈||: Position MP3 Menu list
      myMusicControlPanel.MP3Menu.x = 160;
      myMusicControlPanel.MP3Menu.y = -50;
      //•••----------------------------------------------≈•••|| Horizontal and vertical positions of the selected song in the middle. 
      //btnVerticalContainerSprite.x = -16;//- myMusicControlPanel.MP3Menu.width/2;
      //btnVerticalContainerSprite.y = -btnVerticalContainerSprite.height/2

      myMP3VerticalSlider.x = 103;//myMusicControlPanel.MP3Menu.width;
      myMP3VerticalSlider.y = -25;//myMP3ScrollingMenuMask.y;

      myMP3ScrollingMenuMask.x = 7;
      myMP3ScrollingMenuMask.y = 116;
      //•••----------------------------------------------≈•••|| MouseEvent for: MP3 Play/Pause Buttons
      myMusicControlPanel.playPauseBtn_mc.addEventListener(MouseEvent.MOUSE_UP,  myMP3Player.onPlayPauseRelease);
      myMusicControlPanel.playPauseBtn_mc.addEventListener(MouseEvent.ROLL_OVER,  myMP3Player.onPlayPauseOver);
      myMusicControlPanel.playPauseBtn_mc.addEventListener(MouseEvent.ROLL_OUT,  myMP3Player.onPlayPauseOut);

      //•••----------------------------------------------≈•••|| MouseEvent for: MP3 Previous Button
      myMusicControlPanel.mp3PrevBtn_mc.addEventListener(MouseEvent.MOUSE_UP,  myMP3Player.onPrevSongRelease);
      myMusicControlPanel.mp3PrevBtn_mc.addEventListener(MouseEvent.ROLL_OVER,  myMP3Player.onPrevSongOver);
      myMusicControlPanel.mp3PrevBtn_mc.addEventListener(MouseEvent.ROLL_OUT,  myMP3Player.onPrevSongOut);

      //•••----------------------------------------------≈•••|| MouseEvent for: MP3 Next Button
      myMusicControlPanel.mp3NxtBtn_mc.addEventListener(MouseEvent.MOUSE_UP,  myMP3Player.onNextSongRelease);
      myMusicControlPanel.mp3NxtBtn_mc.addEventListener(MouseEvent.ROLL_OVER,  myMP3Player.onNextSongOver);
      myMusicControlPanel.mp3NxtBtn_mc.addEventListener(MouseEvent.ROLL_OUT,  myMP3Player.onNextSongOut);

      //•••----------------------------------------------≈•••|| MouseEvent for: MP3 Close Button
      myMusicControlPanel.mp3Btn_Close.addEventListener(MouseEvent.ROLL_OVER,  litenSelectedButn);
      myMusicControlPanel.mp3Btn_Close.addEventListener(MouseEvent.ROLL_OUT,  drkenSelectedButn);
      myMusicControlPanel.mp3Btn_Close.addEventListener(MouseEvent.MOUSE_UP,  onClickHideMP3Player);//myMP3Player.onCloseSongRelease);

      //•••----------------------------------------------≈•••|| MouseEvent for: MP3 Volume Control Bar
      myMusicControlPanel.mp3VolumeBar_mc.mp3HotSpotBar.addEventListener(MouseEvent.MOUSE_UP,  myMP3Player.onVolumeRelease);

      //•••--------------------------------------------------------------------------------------------------------------≈•••|| End MP3

      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Video Player Container: FLVs
      sFLV_PATH = galleryXML.section[nVideoNodeType].@ FLV_PATH;
      nVideoCount=galleryXML.section[nVideoNodeType].vidSect[0].video.length();
      sInitialVideoName=galleryXML.section[nVideoNodeType].vidSect[0].video[0].@ NAME;
      //trace("nVideoCount: " + nVideoCount);

      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: LOAD VIDEO FROM LoadVideoSubClass
      //myVideoPlayer = new LoadVideoSubClass (myVideoContainer, sFLV_PATH, aVideoList, myVideoSelectBtn, vidIndexNum, nVideoNodeType, nVideoCount);
      //myVideoPlayer = new LoadVideoSubClass (myVideoContainer, video, aVideoList, myVideoSelectBtn, aVideoButtons, vidIndexNum, nVideoNodeType, nVideoCount);

      //myVideoContainer.videoWindow.addChild(video);

      myVideoPlayer = new LoadVideoSubClass (
        myVideoContainer,
        video,
        sFLV_PATH,
        aVideoList,
        myVideoSelectBtn,
        aVideoButtons,
        vidIndexNum);

      //myVideoContainer.addChild(video);
      //trace("sFLV_PATH:" + sFLV_PATH);
      //trace("myVideoPlayer:" + myVideoPlayer);

      var videoBtnSpacer:int = 4;
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Video loop creates video buttons
      for (var iVc:int=0; iVc < nVideoCount; iVc++) {
        sVideoName = galleryXML.section[nVideoNodeType].vidSect[0].video[iVc].@ NAME;
        aVideoList[aVideoList.length] = sVideoName;
        //trace("aVideoList: " + aVideoList);

        //•••≈------------------------------------------------------------•••≈||: Video slider Effects
        var sVideoThumbName:String=galleryXML.section[nVideoNodeType].vidSect[0].video[iVc].@ VIDEO_THUMB;
        aVideoThumbList[aVideoThumbList.length]=sVideoThumbName;
        //trace("aVideoThumbList: " + aVideoThumbList);
        //•••≈------------------------------------------------------------•••≈||: Create new button(s).
        mySquare = new squareMC();
        //•••≈----------------------------------------------------------------------------•••≈||: Push Video Selection Buttons to an Array
        aVideoButtons[aVideoButtons.length] = mySquare;

        mySquare.x = (mySquare.width + videoBtnSpacer) * iVc;
        mySquare.y = myVideoContainer.sliderBound.y - 50;
        myPanoramaSlider.y = 300;
        //•••≈------------------------------------------------------------•••≈||: mySquare.y Math.random is Temp
        //mySquare.y = Math.random() * 12;
        myVideoContainer.addChild(btnHorizontalContainerSprite);
        btnHorizontalContainerSprite.addChild(mySquare);

        //panoramicWidth = btnHorizontalContainerSprite.width - (nButtonWidthNSpace);
        //panoramicHeight = btnVerticalContainerSprite.height - (nButtonWidthNSpace);

        btnHorizontalContainerSprite.x = - myVideoContainer.sliderBound.width/2;//-(((myVideoContainer.sliderBound.width/2) - mySquare.width) - myVideoContainer.sliderBound.x);

        //•••≈------------------------------------------------------------•••≈||: Load image icon for the sliding video button
        myVideoButtonIcon =  new LoadImage2(mySquare.videoIconImg, sFLV_PATH+aVideoThumbList[iVc], mySquare.loadingAnim);

        /*mySquare.addEventListener (MouseEvent.CLICK, myVideoPlayer.loadVideo);	
         mySquare.addEventListener (MouseEvent.MOUSE_OVER, myVideoPlayer.onVidPlayPauseOver);	
         mySquare.addEventListener (MouseEvent.MOUSE_OUT, myVideoPlayer.onVidPlayPauseOut);	*/
      }

      /*if(nVideoCount < 3){
       myPanoramaSlider.visible = false;
       }*/

      myVideoContainer.addChild(btnHorizontalContainerSprite);
      //btnHorizontalContainerSprite.addChild(mySquare);

      myVideoContainer.addChild(mySliderBtnsMask);
      mySliderBtnsMask.y = 141;
      myVideoContainer.addChild(myPanoramaSlider);

      myVideoContainer.videoBtn_Close.addEventListener(MouseEvent.ROLL_OVER,  litenSelectedButn);
      myVideoContainer.videoBtn_Close.addEventListener(MouseEvent.ROLL_OUT,  drkenSelectedButn);
      myVideoContainer.videoBtn_Close.addEventListener(MouseEvent.MOUSE_UP,  onClickHideVideoPlayer);

      /*myVideoContainer.videoMask.addEventListener (MouseEvent.MOUSE_OVER, showPlayPauseBtn);
       myVideoContainer.videoMask.addEventListener (MouseEvent.MOUSE_OUT, hidePlayPauseBtn);*/

      /*infoSliderHtAdjstr = galleryXML.section[nInfoNodeType].@ SLIDER_ADJUSTER;
       videoSliderWtAdjstr = galleryXML.section[nVideoNodeType].@ SLIDER_ADJUSTER;
       mp3SliderHtAdjstr = galleryXML.section[nSongNodeType].@ SLIDER_ADJUSTER;
       thumbsSliderHtAdjstr = galleryXML.section[nThumbsNodeType].@ SLIDER_ADJUSTER;*/


      myVideoSlidingMenu = new SliderEffectsSubClassHV (
        btnHorizontalContainerSprite,
        btnHorizontalContainerSprite.width,
        videoSliderWtAdjstr,
        mySliderBtnsMask,
        myPanoramaSlider
      );

      myMP3SlidingMenu = new SliderEffectsSubClassHV (
        btnVerticalContainerSprite,
        btnVerticalContainerSprite.height,
        mp3SliderHtAdjstr,
        myMP3ScrollingMenuMask,
        myMP3VerticalSlider
      );

      myThumbsSlidingMenu = new SliderEffectsSubClassHV (
        thumbsPanelSprite,
        thumbsPanelSprite.height,
        thumbsSliderHtAdjstr,
        myThumbsScrollingMenuMask,
        myThumbsVerticalSlider
      );

      myMoreInfoSlidingText = new SliderEffectsSubClassHV (
        myMoreInfo.scrollingText,// infoPanelSprite, 
        myMoreInfo.scrollingText.txtFieldFPO.height,
        infoSliderHtAdjstr,//leftRightSpace, 
        myInfoScrollingMask,
        myInfoVerticalSlider
      );


      myPanoramaSlider.sliderPanoramaButton.addEventListener (MouseEvent.MOUSE_DOWN, videoIconsSliderDown);
      myPanoramaSlider.sliderPanoramaButton.addEventListener (MouseEvent.MOUSE_UP, videoIconsSliderUp);
      //myPanoramaSlider.sliderPanoramaButton.addEventListener (MouseEvent.MOUSE_OUT, videoIconsSliderUp);

      myMP3VerticalSlider.vertSliderButton.addEventListener (MouseEvent.MOUSE_DOWN, onDownMP3MenuSlider);
      myMP3VerticalSlider.vertSliderButton.addEventListener (MouseEvent.MOUSE_UP, onUpMP3MenuSlider);

      //myMP3VerticalSlider.vertDragSliderBar.addEventListener (MouseEvent.MOUSE_DOWN, onUpMP3MenuSlider);
      myMP3VerticalSlider.vertDragSliderBar.addEventListener(MouseEvent.ROLL_OVER,  drkenSelectedItem);
      myMP3VerticalSlider.vertDragSliderBar.addEventListener(MouseEvent.ROLL_OUT,  litenSelectedItem);
      myMP3VerticalSlider.vertDragSliderBar.addEventListener (MouseEvent.MOUSE_UP, onClickMP3VerticalSlider);

      //•••≈----------------------------------------------------------------•••≈||: Assigned color shades for some selected elements
      colorShade0();
      colorShade1();
      colorShade3();
      colorShade4();
      colorShade5();
      colorShade6();

    }
    //∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞≈----------------:| END XML SECTION |:----------------≈∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞∞:|•

    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    //••••••••••••••••••••••••••••••••••••≈----------------:| THUMBNAILS SECTION |:----------------≈••••••••••••••••••••••••••••••••••••:|•
    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    private function buildThumbnails():void{
      //trace("getTimer: " + getTimer())
      //•••≈------------------------------------------------------------------------------------------------------------------≈•••:| Build the menu grid
      //var edgeSpace:int = 200;
      var spacer:int = 4;
      var thumbSizeSquare:int = 80;
      xDist = thumbSizeSquare + spacer;
      yDist = thumbSizeSquare + spacer;
      //var maxScreenWidthDefault:int = 1020;
      xMax = Math.floor((myThumbsScrollingMenuMask.width/xDist));
      //trace("xMax:: " + xMax)
      yMax = nImgCount/xMax;
      //trace ("yMax: " + yMax);
      var ij:int = 0;
      //var hSpace:int = 4;
      //var vSpace:int = 4;


      //var allThumbsHeight:Number;
      myThumbnailsPanel.addChild(thumbsPanelSprite);
      thumbsPanelSprite.addChild(myThumbBtnSelectedBG);
      thumbsPanelSprite.addChild(myThumbBtnOnOverBG);
      //myThumbnailsPanel.addChild(myFullThumb);

      for (var ii:Number = 0; ii<yMax; ii++) {
        for (var jj:Number = 0; jj<xMax; jj++) {
          //•••≈------------------------------------------------≈•••:| Populate thumbnails array
          myThumb = new ThumbButton();
          aThumbnails[aThumbnails.length] = myThumb;
          /*myFullThumb = new fullThumbContainer();
           myFullThumb.y = -210;
           aFullThumbs[aFullThumbs.length] = myFullThumb;*/
          //myThumbnailsPanel.addChild(myFullThumb);
          //thumbImage = myThumb

          //•••≈------------------------------------------------≈•••:| load thumbnail images
          //????myThumbLoader = new LoadImage(myThumb.thumbImgFPO, sTHUMBRES_PATH+aImages[jj]);

          //•••≈------------------------------------------------≈•••:| X and Y distribution
          myThumb.x = xDist * jj;
          myThumb.y = yDist * ii;


          //var center:Number

          //if(jj < 8){
//						
//						//myThumb.y = -40;
//						
//						
//						myThumb.x = xDist * jj;
//						trace("myThumbsScrollingMenuMask.width: " + myThumbsScrollingMenuMask.width);
//						trace("thumbsPanelSprite.width: " + thumbsPanelSprite.width);
//						center = (myThumbsScrollingMenuMask.width - thumbsPanelSprite.width)/2
//						trace("center: " + center);
//						
//						/*var thumbPanelCenter:Number = myThumbsScrollingMenuMask.width/2;//584/2 = 292
//						var thumbBtnsCenter:Number = (xDist * jj)/2; //84 * 7 = 588/2 = 294
//						trace("thumbPanelCenter: " + thumbPanelCenter);
//						trace("thumbBtnsCenter: " + thumbBtnsCenter);
//						trace("myThumb.width * jj: " + ((myThumb.width * jj)/2));
//						
//						spacer = (myThumbsScrollingMenuMask.width - (myThumb.width * jj))/jj; //720 - 560 = 160/jj = 22
//						trace("spacer :" + spacer);
//						myThumb.x = myThumb.width * jj + spacer// + (thumbPanelCenter);// - thumbBtnsCenter);
//						
//						trace("myThumb.x: " + myThumb.x);*/
//					} else {
//						myThumb.x = xDist * jj;
//						
//					}


          thumbButtonMC = myThumb;

          //myThumbnailsPanel.x = center;

          //•••≈------------------------------------------------≈•••:| Thumbnails container
          //thumbButton.x = -(thumbButton.width/2) + (24/2);
          //thumbButton.y = -(thumbButton.height + 20);

          /*myGalleryControlPanel.thumbContainer_mc.thumbBG_mc.width = thumbButton.width + 50;
           myGalleryControlPanel.thumbContainer_mc.thumbBG_mc.height = thumbButton.height + 100;
           myGalleryControlPanel.thumbContainer_mc.thumbBG_mc.x = 0;//-(myGalleryControlPanel.thumbContainer_mc.thumbBG_mc.width/2)*/

          //•••≈------------------------------------------------≈•••:| Thumbnails labels
          ij++;
          myThumb.thumbNum.text = ij.toString();
          //•••≈------------------------------------------------≈•••:| load thumbnail images
          myThumbLoader = new LoadImage2(myThumb.thumbImgFPO, sTHUMBRES_PATH+aImages[ij-1], myThumb.loadingAnim);

          //myThumb.thumbImgFPO.x = -myThumb.width/2
          //myThumb.thumbImgFPO.y = -myThumb.height/2

          //•••≈------------------------------------------------≈•••:| Limiting the duplication process to the maximum image count.
          if (ij < nImgCount+1) {
            //thumbButton.addChild(myThumb);
            //myThumbnailsPanel.addChild(myThumb);

            //myThumbnailsPanel.addChild(thumbsPanelSprite);
            thumbsPanelSprite.addChild(myThumb);
            //trace("thumbsPanelSprite.height: " + thumbsPanelSprite.height)

            //thumbsContainerSpriteHeight = thumbsPanelSprite.height - (nButtonWidthNSpace);
            //trace("thumbsContainerSpriteHeight :" + thumbsContainerSpriteHeight);

            //myThumbnailsPanel.addChild(myThumbsScrollingMenuMask);
            //myThumbnailsPanel.addChild(myThumbsVerticalSlider);
          }
          //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: CONTROL PANEL MENU BUTTONS MOUSE EVENTS: Grid menu selections
          //thumbsContainerSpriteHeight = thumbsPanelSprite.height - (nButtonWidthNSpace);				
          myThumb.addEventListener (MouseEvent.ROLL_OVER, hiliteThumbOnButton);
          myThumb.addEventListener (MouseEvent.ROLL_OUT, hiliteThumbOffButton);
          myThumb.addEventListener (MouseEvent.CLICK, thumbLoadImage);
        }
      }

      myThumbnailsPanel.addChild(myThumbsScrollingMenuMask);
      myThumbnailsPanel.addChild(myThumbsVerticalSlider);

      //var thumbVerticalPosition:Number = (myThumb.height * (yMax -1));//0;//100;
      //trace("thumbVerticalPosition :" + thumbVerticalPosition);



      //thumbsPanelSprite.x = - (myThumbsScrollingMenuMask.width/2);
      //•••≈------------------------------------------------≈•••:|| Positioning of the panel that holds all thumbnails
      /*var thumbVertPos:Number;
       if(yMax > 3){
       //myMP3VerticalSlider.visible =false;
       //btnVerticalContainerSprite.y = - ((34 * 8)/2)
       thumbVertPos = 100;
       } else {
       //myMP3VerticalSlider.visible = true;
       thumbVertPos = this.soundIndexNum * this.aDupeList[0].songListNameBG.height;
       }
       Tweener.addTween (thumbsPanelSprite,{y:-thumbVertPos, time:2,transition:"easeOutQuad"});*/

      thumbsPanelSprite.x = - ((xMax/2) * thumbSizeSquare);//0//- 10;//(myThumbsScrollingMenuMask.width/2);

      //•••≈------------------------------------------------≈•••:|| Initial Y position of the panel that holds all thumbnails
      //thumbsPanelSprite.y = 100;//- (thumbSizeSquare/2);//46;//myThumbsScrollingMenuMask.y - (thumbsPanelSprite.height/2);//- ((thumbsPanelSprite.height/2) + (myThumbsScrollingMenuMask.height/2));

      myThumbsScrollingMenuMask.x = -10;
      myThumbsScrollingMenuMask.y = 45.5;

      //trace("thumbsPanelSprite.height :" + thumbsPanelSprite.height);

      //thumbsContainerSpriteHeight = thumbsPanelSprite.height - (nButtonWidthNSpace);
      //trace("thumbsContainerSpriteHeight :" + thumbsContainerSpriteHeight);
      //trace("thumbsPanelSprite.x: " + thumbsPanelSprite.x)
      myThumbsVerticalSlider.x = 375;
      myThumbsVerticalSlider.y = -75.5;

      //myThumbsSlidingMenu = new SliderEffectsSubClassHV ("verticalScroll", myThumbnailsPanel, thumbsPanelSprite, thumbsContainerSpriteHeight, bSliderOn,  leftRightSpace, myThumbsScrollingMenuMask, myThumbsVerticalSlider);

      myThumbsVerticalSlider.vertSliderButton.addEventListener (MouseEvent.MOUSE_DOWN, onDownThumbsMenuSlider);
      myThumbsVerticalSlider.vertSliderButton.addEventListener (MouseEvent.MOUSE_UP, onUpThumbsMenuSlider);

      myThumbnailsPanel.closeMeBtn.addEventListener(MouseEvent.ROLL_OVER,  litenSelectedButn);
      myThumbnailsPanel.closeMeBtn.addEventListener(MouseEvent.ROLL_OUT,  drkenSelectedButn);
      myThumbnailsPanel.closeMeBtn.addEventListener(MouseEvent.MOUSE_UP,  onClickHideThumbnailsPanel);

      //myGalleryControlPanel.fullThumb.y = - (myGalleryControlPanel.mouseY + 20)//- allThumbsHeight * 2// (myGalleryControlPanel.thumbContainer_mc.button_mc.height);
      //trace("myGalleryControlPanel.fullThumb.y: " + myGalleryControlPanel.fullThumb.y)

      //snThumbContainer.y = snThumbContainer.height;// + 100;
    }
    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    //••••••••••••••••••••••••••••••••••••≈----------------:|     SKIN SECTION     |:----------------≈••••••••••••••••••••••••••••••••••••:|•
    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:

    //•••≈-------------------------------------------------------------------------•••≈||: Load Skin Background Gradation
    private function skinGradation ():void {
      skinNodeLevel = aSkinLevel.indexOf("myGradation");
      nSkinSubSectionNode = skinNodeLevel;
      //trace ("skinNodeLevel:myGradation " + skinNodeLevel);
      //

      //myColorTheme.bgGradColorValues(1, val1, val2, val3);

      //var bBuiltInColorScheme:Boolean = true;
      var sBuiltInColorScheme:String = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[0].@ BUILT_IN_GRAD.toLowerCase();
      var uBGGRAD_ROTATION:uint=galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[0].@ BGGRAD_ROTATION;

      if(sBuiltInColorScheme == "true"){
        myColorTheme = new ColorThemes(myGradation, sCOLOR_THEME, 200, uBGGRAD_ROTATION);
      } else {
        var uBGGRAD_LEFT:uint=galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[0].@ BGGRAD_LEFT;
        var uBGGRAD_MID:uint=galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[0].@ BGGRAD_MID;
        var uBGGRAD_RIGHT:uint=galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[0].@ BGGRAD_RIGHT;
        //•••≈----------------------------------------------------------------------------------------------------------------------------------•••≈||: New GradationColorTransform instance
        myColorGrad = new GradationColorTransform(myGradation, uBGGRAD_LEFT, uBGGRAD_MID, uBGGRAD_RIGHT, uBGGRAD_ROTATION);//, myMainGallery.stage.stageWidth);
      }
    }
    //•••≈-------------------------------------------------------------------------•••≈||: Load Skin Silo 2: Background Appurtenances
    private function arkosSkinBackground ():void {
      skinNodeLevel = aSkinLevel.indexOf("myBGArkosSilo");
      nSkinSubSectionNode = skinNodeLevel;
      var siloCount:int = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin.length();
      //sSKIN_PATH =galleryXML.section[nSkinNodeType].@ SKIN_PATH;
      var siloAlignment:Number;
      for (var i:int = 0; i<siloCount; i++) {
        sSILONAME=galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[i].@ NAME;
        var sSTRETCHABLE:String=galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[i].@ STRETCHABLE;
        var nHORIZONTAL_ALIGNMENT:Number = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[i].@ HORIZONTAL_ALIGNMENT;
        var nVERTICAL_ALIGNMENT:Number = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[i].@ VERTICAL_ALIGNMENT;
        var nSCALE:Number = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[i].@ SCALE;
        var sAUTO_SCALE:String = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[i].@ AUTO_SCALE;
        var nALPHA:Number = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[i].@ ALPHA;

        //trace("nHORIZONTAL_ALIGNMENT: " + nHORIZONTAL_ALIGNMENT);

        aBGSiloStretch[aBGSiloStretch.length] = sSTRETCHABLE;
        //trace("••••------------------------------------|| aBGSiloStretch[aBGSiloStretch.length]: " + (aBGSiloStretch[aBGSiloStretch.length]));
        //trace("••••------------------------------------|| sSTRETCHABLE: " + sSTRETCHABLE);
        aBGSiloHorizAlign[aBGSiloHorizAlign.length] = nHORIZONTAL_ALIGNMENT;
        aBGSiloVertAlign[aBGSiloVertAlign.length] = nVERTICAL_ALIGNMENT;
        aBGSiloScale[aBGSiloScale.length] = nSCALE;
        aBGSiloAutoScale[aFGSiloAutoScale.length] = sAUTO_SCALE;
        aBGSiloAlpha[aBGSiloAlpha.length] = nALPHA;
        //•••≈----------------------------------------------------------------------------------------------------------------------------------•••≈||: Duplicated SiloContainer instances based on the siloCount
        var myBGSilo:SiloContainer = new SiloContainer();
        //trace("myBGSiloWidth: " + myBGSilo.width)
        //•••≈------------------------------------------------------------•••≈||: Push value to an array
        aBGSilos[aBGSilos.length] = myBGSilo;
        myBGArkosSilo.addChild(myBGSilo);
        myBGSiloLoader = new LoadImage(myBGSilo.siloImage_mc, sSKIN_PATH+sSILONAME);
      }
    }
    //•••≈-------------------------------------------------------------------------•••≈||: Load Skin Silo: Foreground Appurtenances
    private function arkosSkinForeground ():void {
      skinNodeLevel = aSkinLevel.indexOf("myFGArkosSilo");
      nSkinSubSectionNode = skinNodeLevel;
      var siloCount:int = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin.length();
      var siloAlignment:Number;
      for (var i:int = 0; i<siloCount; i++) {
        var sSILONAME:String=galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[i].@ NAME;
        //var sALIGNMENT:String=galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[i].@ ALIGNMENT;
        var sSTRETCHABLE:String=galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[i].@ STRETCHABLE;
        var nHORIZONTAL_ALIGNMENT:Number = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[i].@ HORIZONTAL_ALIGNMENT;
        var nVERTICAL_ALIGNMENT:Number = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[i].@ VERTICAL_ALIGNMENT;
        var nSCALE:Number = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[i].@ SCALE;
        var sAUTO_SCALE:String = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[i].@ AUTO_SCALE;
        var nALPHA:Number = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[i].@ ALPHA;
        //aFGSiloXAlignmnt[aFGSiloXAlignmnt.length] = sALIGNMENT;				
        aFGSiloStretch[aFGSiloStretch.length] = sSTRETCHABLE;
        aFGSiloHorizAlign[aFGSiloHorizAlign.length] = nHORIZONTAL_ALIGNMENT;
        aFGSiloVertAlign[aFGSiloVertAlign.length] = nVERTICAL_ALIGNMENT;
        aFGSiloScale[aFGSiloScale.length] = nSCALE;
        aFGSiloAutoScale[aFGSiloAutoScale.length] = sAUTO_SCALE;
        aFGSiloAlpha[aFGSiloAlpha.length] = nALPHA;
        //•••≈-------------------------------------------------------------------------•••≈||: Duplicate SiloContainer instances based on the siloCount
        var myFGSilo:SiloContainer = new SiloContainer();
        aFGSilos[aFGSilos.length] = myFGSilo;
        myFGArkosSilo.addChild(myFGSilo);
        myFGSiloLoader = new LoadImage(myFGSilo.siloImage_mc, sSKIN_PATH+sSILONAME);
      }
    }
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: LOAD SKIN GALLERY DISPLAY
    private function skinGallery ():void {
      trace("••••------------------------------------|| sSTRETCHABLE: Start");
      skinNodeLevel = aSkinLevel.indexOf("myDisplayContainer");
      nSkinSubSectionNode = skinNodeLevel;
      //trace ("skinNodeLevel:myDisplayContainer " + skinNodeLevel);
      //var sDESCRIPTION_VERTICALPOSITION:String 
      sDESCRIPTION_VERTICALPOSITION = galleryXML.section[nSkinNodeType].subSect[skinNodeLevel].skin[0].@ DESCRIPTION_VERTICALPOSITION;
      //trace("sDESCRIPTION_VERTICALPOSITION: " + sDESCRIPTION_VERTICALPOSITION);			
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: The following codes controls the layering of the 3 stacking displays by swithching the main display to be in front or at the bottom.
      //var displayContIndx:int = aSkinLevel.indexOf("myDisplayContainer");
      var sMAIN_DISPLAY_LEVEL:String = galleryXML.section[nSkinNodeType].subSect[skinNodeLevel]. @ MAIN_DISPLAY_LEVEL.toLowerCase();

      //trace("sMAIN_DISPLAY_LEVEL: " + sMAIN_DISPLAY_LEVEL);
      if(sMAIN_DISPLAY_LEVEL == "bottom"){
        var targetDObject1:DisplayObject = myDisplayContainer.getChildByName("mainImage_mc");
        var cIndexNum1:int = myDisplayContainer.getChildIndex(targetDObject1);
        myDisplayContainer.setChildIndex(myDisplayContainer.getChildAt(cIndexNum1), 0);
      } else if(sMAIN_DISPLAY_LEVEL == "top"){
        var targetDObject2:DisplayObject = myDisplayContainer.getChildByName("mainImage_mc");
        //trace("targetDObject2: " + targetDObject2.name);//mainImage_mc
        //trace("myDisplayContainer.getChildByName(mainImage_mc): " + (myDisplayContainer.getChildByName("mainImage_mc")));//[object MovieClip]

        var cIndexNum2:int = myDisplayContainer.getChildIndex(targetDObject2);
        //trace("cIndexNum2: " + (cIndexNum2));//0

        myDisplayContainer.setChildIndex(myDisplayContainer.getChildAt(cIndexNum2), 2);
      }
      trace("••••------------------------------------|| sSTRETCHABLE: End");
    }
    //•••≈-------------------------------------------------------------------------•••≈||: Load Skin Fonts: Headline/SubHead and Loading bar color and alpha xml values
    private function skinFontContainer ():void {
      skinNodeLevel = aSkinLevel.indexOf("myFontContainer");
      nSkinSubSectionNode = skinNodeLevel;
      //•••≈-------------------------------------------------------------------------------•••≈||: Load Head and SubHead Fonts
      var sFONT_PATH:String = galleryXML.section[nSkinNodeType].@ FONT_PATH;
      var sFONT_HEADSTYLE:String = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[0].font[0].@ FONT_STYLE;
      var uFONT_HEADCOLOR:uint = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[0].font[0].@ FONT_COLOR;
      nHORIZONTAL_HEADPOSITION = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[0].font[0].@ HORIZONTAL_POSITION;
      nVERTICAL_HEADPOSITION = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[0].font[0].@ VERTICAL_POSITION;
      var nFONT_HEADSCALE:Number = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[0].font[0].@ FONT_SCALE;
      var sAUTO_HEADSCALE:String = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[0].font[0].@ AUTO_SCALE;
      var nHEAD_ALPHA:Number = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[0].font[0].@ ALPHA;

      var sFONT_SUBHEADSTYLE:String = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[0].font[1].@ FONT_STYLE;
      var uFONT_SUBHEADCOLOR:uint = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[0].font[1].@ FONT_COLOR;
      nHORIZONTAL_SUBHEADPOSITION = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[0].font[1].@ HORIZONTAL_POSITION;
      nVERTICAL_SUBHEADPOSITION = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[0].font[1].@ VERTICAL_POSITION;
      var nFONT_SUBHEADSCALE:Number = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[0].font[1].@ FONT_SCALE;
      var sAUTO_SUBHEADSCALE:String = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[0].font[1].@ AUTO_SCALE;
      var nSUBHEAD_ALPHA:Number = galleryXML.section[nSkinNodeType].subSect[nSkinSubSectionNode].skin[0].font[1].@ ALPHA;

      var nHeadFontScaled:Number;
      var nSubHeadFontScaled:Number;

      nHeadFontScaled = nFONT_HEADSCALE/100;
      nSubHeadFontScaled = nFONT_SUBHEADSCALE/100;

      myFontHeadLoader = new LoadSWF_Font(myFontContainer.fontHead, sFONT_PATH+sFONT_HEADSTYLE, sTITLE, uFONT_HEADCOLOR, nHeadFontScaled, "TRUE", "TRUE");
      myFontSubHeadLoader = new LoadSWF_Font(myFontContainer.fontSubHead, sFONT_PATH+sFONT_SUBHEADSTYLE, sSUB_TITLE, uFONT_SUBHEADCOLOR, nSubHeadFontScaled, "TRUE", "TRUE");

      //-----Static positions
      fontContainerXYPos(myFontContainer.fontHead, nVERTICAL_HEADPOSITION, nHORIZONTAL_HEADPOSITION);
      fontContainerXYPos(myFontContainer.fontSubHead, nVERTICAL_SUBHEADPOSITION, nHORIZONTAL_SUBHEADPOSITION);

      myFontContainer.fontHead.alpha = nHEAD_ALPHA/100;
      myFontContainer.fontSubHead.alpha = nSUBHEAD_ALPHA/100;

      //•••≈-------------------------------------------------------------------------------•••≈||: Load Image Loading Bar Color and its transparency xml values
      sLOAD_BAR_COLOR = galleryXML.section[nSkinNodeType].@ LOAD_BAR_COLOR;
      sLOAD_BAR_ALFA = galleryXML.section[nSkinNodeType].@ LOAD_BAR_ALFA;
    }
    private function fontContainerXYPos(targetMC:MovieClip, nXMLVertValue:Number, nXMLHorValue:Number):void{
      targetMC.y = stage.stageHeight/2 - nXMLVertValue;
      targetMC.x = -(stage.stageWidth/2 - nXMLHorValue);
    }
    //

    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: LOAD SKIN CONTROL_PANEL
    private function skinControlPanel ():void {
      skinNodeLevel = aSkinLevel.indexOf("myGalleryControlPanel");
      //trace("skinNodeLevel:skinControlPanel: " + skinNodeLevel)
      nSkinSubSectionNode = skinNodeLevel;
      sBUTTON_PATH = galleryXML.section[nSkinNodeType].subSect[skinNodeLevel].cpChild[0]. @ BUTTON_PATH;
      //var uBUTTON_RECT_BG:uint = galleryXML.section[nSkinNodeType].subSect[skinNodeLevel].cpChild[0]. @ BUTTON_RECT_BG;
      //var uBUTTON_RECT_ALFA:uint = galleryXML.section[nSkinNodeType].subSect[skinNodeLevel].cpChild[0]. @ BUTTON_RECT_ALFA;

      //colorMe(cpButtonsRectBG, uBUTTON_RECT_BG, uBUTTON_RECT_ALFA/100);

      nCPButtonsLength = galleryXML.section[nSkinNodeType].subSect[skinNodeLevel].cpChild[0].skin.length();

      //•••≈-------------------------------------------------------------------------•••≈||: Load Control Panel Skin: 
      for(var iCi:int = 0; iCi<nCPButtonsLength; iCi++){
        var sBUTTON_NAME_ID:String = galleryXML.section[nSkinNodeType].subSect[skinNodeLevel].cpChild[0].skin[iCi].@ BUTTON_NAME_ID;
        aCPBtnNameID[aCPBtnNameID.length] = sBUTTON_NAME_ID;

        var sBTN_LABEL:String = galleryXML.section[nSkinNodeType].subSect[skinNodeLevel].cpChild[0].skin[iCi].@ LABEL;
        aCPBtnLabels[aCPBtnLabels.length] = sBTN_LABEL;

        var sBTN_LABEL_TOOGLE:String = galleryXML.section[nSkinNodeType].subSect[skinNodeLevel].cpChild[0].skin[iCi].@ LABEL_TOGGLE;
        aCPBtnLabelsToogle[aCPBtnLabelsToogle.length] = sBTN_LABEL_TOOGLE;

        var sBTN_IMAGE:String = galleryXML.section[nSkinNodeType].subSect[skinNodeLevel].cpChild[0].skin[iCi].@ IMAGE;
        aCPBtnImage[aCPBtnImage.length] = sBTN_IMAGE;

        var sBTN_ImageToogle:String = galleryXML.section[nSkinNodeType].subSect[skinNodeLevel].cpChild[0].skin[iCi].@ IMAGE_TOGGLE;
        aCPBtnImageToogle[aCPBtnImageToogle.length] = sBTN_ImageToogle;

        var nBTNWIDTH:Number = galleryXML.section[nSkinNodeType].subSect[skinNodeLevel].cpChild[0].skin[iCi].@ SIZE_W;
        aCPBtnWidth[aCPBtnWidth.length] = nBTNWIDTH;
        //aCPBtnWidth.push(nBTNWIDTH)				

        var nBTNHEIGHT:Number = galleryXML.section[nSkinNodeType].subSect[skinNodeLevel].cpChild[0].skin[iCi].@ SIZE_H;
        aCPBtnHeight[aCPBtnHeight.length] = nBTNHEIGHT;

        myCPBtnFPO = new ImageFPO();
        //var myBtnWidth:Number;				
        aCPButtons[aCPButtons.length] = myCPBtnFPO;

        //•••≈-------------------------------------------------------------------------•••≈||: Load Button icons
        myCPBtnLoader = new LoadImage(myCPBtnFPO, sBUTTON_PATH+sBTN_IMAGE);

        var cpW:int = aCPBtnWidth[iCi];//aCPButtons[iCi].width;
        var addedCPW:int;// = cpW + aCPButtons[iCi].width;				
        addedCPW += aCPBtnWidth[iCi-1];//aCPButtons[iCi].width;
        //trace("addedCPW: " + addedCPW)				
        //cpButtons.addChild(myCPBtnFPO);
        myGalleryControlPanel.cpButtons_mc.btnsContainer_mc.addChild(myCPBtnFPO);
        //myGalleryControlPanel.cpButtons_mc.x = addedCPW;
        aCPButtons[iCi].x = addedCPW;
        //trace("myGalleryControlPanel.cpButtons_mc.width: " + myGalleryControlPanel.cpButtons_mc.width);
        //myGalleryControlPanel.cpButtons_mc.x = -(stage.stageWidth/2 + (myGalleryControlPanel.cpButtons_mc.width/2))
        myGalleryControlPanel.cpButtons_mc.btnsContainer_mc.x = -myGalleryControlPanel.cpButtons_mc.btnsContainer_mc.width/2;

        var index:int = 0;
        index = aCPBtnNameID.indexOf("openAllImages");
        //trace("index: " + index)

        //trace("myCPBtnFPOName: " + myCPBtnFPO.name)
        myCPBtnFPO.addEventListener (MouseEvent.ROLL_OVER, litenCPButn);
        myCPBtnFPO.addEventListener (MouseEvent.ROLL_OUT, drkenCPButn);
        //•••≈-------------------------------------------------------------------------•••≈||: Case statements for method call trigger for showing other media containers. eg: info, video, mp3...
        var btnName:String = aCPBtnNameID[iCi];
        switch(btnName){
          case "showInfo":
            myCPBtnFPO.addEventListener (MouseEvent.CLICK, showInfo);
            break;
          case "showVideoPlayer":
            myCPBtnFPO.addEventListener (MouseEvent.CLICK, showVideoPlayer);
            break;
          case "showMP3Player":
            myCPBtnFPO.addEventListener (MouseEvent.CLICK, showMP3Player);
            break;
          case "openAllImages":
            myCPBtnFPO.addEventListener (MouseEvent.CLICK, openAllImages);
            break;
          case "showPreviousImage":
            myCPBtnFPO.addEventListener (MouseEvent.CLICK, showPreviousImage);
            break;
          case "pauseAutoPlay":
            myCPBtnFPO.addEventListener (MouseEvent.CLICK, pauseAutoPlay);
            //trace("aCPBtnNameID.indexOf(pauseAutoPlay): " + (aCPBtnNameID.indexOf("pauseAutoPlay")));
            break;
          case "showNextImage":
            myCPBtnFPO.addEventListener (MouseEvent.CLICK, showNextImage);
            break;
          case "toggleAutoEnlarge":
            myCPBtnFPO.addEventListener (MouseEvent.CLICK, toggleAutoEnlarge);
            break;
          case "toggleFullScreenView":
            myCPBtnFPO.addEventListener (MouseEvent.CLICK, toggleFullScreenView);
            break;
        }
      };
      stage.addEventListener (MouseEvent.MOUSE_MOVE, trackMousy);
    }

    private function btnXPos():void{
      for(var iXi:int = 0; iXi<nCPButtonsLength; iXi++){
        aCPButtons[iXi+1].x = aCPBtnWidth[iXi];//aCPButtons[iXi].width;//aCPBtnWidth[iXi];//(aCPButtons[iXi].x + aCPBtnWidth[iXi]);				
      }
    }
    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    //••••••••••••••••••••••••••••••••••••≈----------------:|     COLOR SCHEME     |:----------------≈••••••••••••••••••••••••••••••••••••:|•
    ////•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:

    //•••≈------------------------------------------------------------•••≈||: DARKEST SHADE
    private function colorShade0():void{
      var shadeIndex:int = 0;
      myMusicControlPanel.artistPix.artistBG.visible = false;

      var aMCs2Shade:Array = new Array(
        myMusicControlPanel.artistPix.artistBG,
        myMP3VerticalSlider.vertSliderButton.vertSliderButtonBG,

        /* myMusicControlPanel.playPauseBtn_mc.graduatedBtn.btnGrad2,
         myMusicControlPanel.mp3PrevBtn_mc.graduatedBtn.btnGrad2,
         myMusicControlPanel.mp3NxtBtn_mc.graduatedBtn.btnGrad2,

         myVideoContainer.videoWindow.playPauseBtn_mc.graduatedBtn.btnGrad2,*/


        cpButtonsRectBG,
        myInfoVerticalSlider.vertSliderButton.vertSliderButtonBG,
        myPanoramaSlider.sliderPanoramaButton.vertSliderButtonBG,

        /*myVideoContainer.videoBtn_Close.closeBtnBG,
         myMusicControlPanel.mp3Btn_Close.closeBtnBG,

         myThumbnailsPanel.closeMeBtn.closeBtnBG,*/

        //myFullThumb.fullThumbBG,  // myThumbnailsPanel.fullThumb.fullThumbBG,

        myThumbsVerticalSlider.vertSliderButton.vertSliderButtonBG,

        //myMoreInfo.moreInfoBtn_Close.closeBtnBG,
        myMoreInfo.moreInfoTitle,
        myMoreInfo.scrollingText.txtFieldFPO
        // myMoreInfoBody.moreInfoBody
      );
      for (var iDc:int=0; iDc < aMCs2Shade.length; iDc++) {
        var shadeTheseMC4:MovieClip = new MovieClip();
        //shadeTheseMC4 = new MovieClip();
        shadeTheseMC4 = aMCs2Shade[iDc];
        //•••≈------------------------------------------------------------•••≈||: Assign color shade from ColorThemes sub-class
        myColorTheme = new ColorThemes(shadeTheseMC4, sCOLOR_THEME, shadeIndex, 0);
        //trace("sCOLOR_THEME :" + sCOLOR_THEME);
        //trace("shadeIndex :" + shadeIndex);
      }
      //myColorTheme = new ColorThemes(myMoreInfo.scrollingText.txtFieldFPO, sCOLOR_THEME, shadeIndex);
      //•••≈------------------------------------------------------------•••≈||: Specific alpha value from xml 
      skinNodeLevel = aSkinLevel.indexOf("myGalleryControlPanel");
      //trace("skinNodeLevel:colorShade0: " + skinNodeLevel);
      uBUTTON_RECT_ALFA = galleryXML.section[nSkinNodeType].subSect[skinNodeLevel].cpChild[0]. @ BUTTON_RECT_ALFA;
      //trace("uBUTTON_RECT_ALFA:colorShade0: " + uBUTTON_RECT_ALFA);
      cpButtonsRectBG.alpha = uBUTTON_RECT_ALFA/100;
    }
    //•••≈------------------------------------------------------------•••≈||: DARKER SHADE
    private function colorShade1():void{
      var shadeIndex:int = 1;
      var aMCs2Shade:Array = new Array(
        /* myMusicControlPanel.mp3VolumeBar_mc.mp3VolumeBar,								
         myMusicControlPanel.playPauseBtn_mc.graduatedBtn.btnGrad1,
         myMusicControlPanel.mp3PrevBtn_mc.graduatedBtn.btnGrad1,
         myMusicControlPanel.mp3NxtBtn_mc.graduatedBtn.btnGrad1,*/

        //myFullThumb.loadingAnim,
        myMusicControlPanel.artistPix.loadingAnim,

        //myVideoContainer.videoWindow.playPauseBtn_mc.graduatedBtn.btnGrad1,

        //myVideoContainer.videoWindow.playbackVideoBar, 

        myThumbBtnSelectedBG
        //myMusicControlPanel.MP3Menu.songListNameHiliter, //splaybackVideoBarBG,
      );
      for (var iDc:int=0; iDc < aMCs2Shade.length; iDc++) {
        var shadeTheseMC4:MovieClip = new MovieClip();
        //shadeTheseMC4 = new MovieClip();
        shadeTheseMC4 = aMCs2Shade[iDc];
        //•••≈------------------------------------------------------------•••≈||: Assign color shade from ColorThemes sub-class
        myColorTheme = new ColorThemes(shadeTheseMC4, sCOLOR_THEME, shadeIndex, 0);//, shadeColor1);
        //myInfoTextColor = 
        //var testColor = myColorTheme.colorValue(1,2)//, myInfoTextColor);
        //trace("myInfoTextColor: " + myInfoTextColor);
        //trace("testColor: " + testColor);
      }
    }
    //•••≈------------------------------------------------------------•••≈||: BRIGHTEST SHADE
    private function colorShade3():void{
      var shadeIndex:int = 3;
      var aMCs2Shade:Array = new Array(
        myPanoramaSlider.dragSliderBound,
        myThumbBtnOnOverBG

        //myMusicControlPanel.MP3Menu.songListNameBG,
      );

      for (var iDc:int=0; iDc < aMCs2Shade.length; iDc++) {
        var shadeTheseMC4:MovieClip = new MovieClip();
        //shadeTheseMC4 = new MovieClip();
        shadeTheseMC4 = aMCs2Shade[iDc];
        myColorTheme = new ColorThemes(shadeTheseMC4, sCOLOR_THEME, shadeIndex, 0);//, shadeColor4);//, 0x990000);
      }
    }
    //•••≈------------------------------------------------------------•••≈||: LIGHTER SHADE
    private function colorShade4():void{
      var shadeIndex:int = 4;
      var aMCs2Shade:Array = new Array(
        myMP3VerticalSlider.vertDragSliderBar,
        /*myMusicControlPanel.playPauseBtn_mc.graduatedBtn.btnGradBG,
         myMusicControlPanel.mp3PrevBtn_mc.graduatedBtn.btnGradBG,
         myMusicControlPanel.mp3NxtBtn_mc.graduatedBtn.btnGradBG,*/

        //myVideoContainer.videoWindow.playPauseBtn_mc.graduatedBtn.btnGradBG,


        myInfoVerticalSlider.vertDragSliderBar,
        myThumbsVerticalSlider.vertDragSliderBar,
        currentDisplay.progressBar.loadingBar,
        nextDisplay.progressBar.loadingBar
      );
      for (var iDc:int=0; iDc < aMCs2Shade.length; iDc++) {
        var shadeTheseMC4:MovieClip = new MovieClip();
        //shadeTheseMC4 = new MovieClip();
        shadeTheseMC4 = aMCs2Shade[iDc];
        myColorTheme = new ColorThemes(shadeTheseMC4, sCOLOR_THEME, shadeIndex, 0);
      }
    }
    //•••≈------------------------------------------------------------•••≈||: LIGHTEST SHADE
    private function colorShade5():void{
      var shadeIndex:int = 5;
      var aMCs2Shade:Array = new Array(
        myVideoContainer.videoBG,
        myMoreInfo.moreInfoBG,
        myMusicControlPanel.MP3BG
      );
      for (var iDc:int=0; iDc < aMCs2Shade.length; iDc++) {
        var shadeTheseMC4:MovieClip = new MovieClip();
        //shadeTheseMC4 = new MovieClip();
        shadeTheseMC4 = aMCs2Shade[iDc];
        myColorTheme = new ColorThemes(shadeTheseMC4, sCOLOR_THEME, shadeIndex, 0);
      }
    }
    //•••≈------------------------------------------------------------•••≈||: DULLEST SHADE
    private function colorShade6():void{
      var shadeIndex:int = 6;
      var aMCs2Shade:Array = new Array(
        myVideoContainer.videoCloseBar.closeBarBG,
        myThumbnailsPanel.thumbsCloseBar.closeBarBG,
        myMoreInfo.infoCloseBar.closeBarBG,
        myVideoContainer.volumeControl.volumeSoundBar
      );
      for (var iDc:int=0; iDc < aMCs2Shade.length; iDc++) {
        var shadeTheseMC4:MovieClip = new MovieClip();
        //shadeTheseMC4 = new MovieClip();
        shadeTheseMC4 = aMCs2Shade[iDc];
        myColorTheme = new ColorThemes(shadeTheseMC4, sCOLOR_THEME, shadeIndex, 0);//, shadeColor0);//, 0x990000);
      }
    }
    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    //••••••••••••••••••••••••••••••••••••≈----------------:|     IMAGE GALLERY SECTION     |:----------------≈••••••••••••••••••••••••••••••••••••:|•
    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:

    //•••••••••••••••••••••≈----------------:|     MAIN IMAGE     |:----------------≈•••••••••••••••••••••:|•
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Load Main Image: onMainImgLoadingProgress
    private function onMainImgLoadingProgress (p:ProgressEvent):void {
      if(p.bytesLoaded  < p.bytesTotal){
        currentDisplay.progressBar.visible = true;
        //•••≈-------------------------------------------------------------------•••≈||: Progress bar yPosition
        currentDisplay.progressBar.y = (currentDisplay.height/2) -100;//(currentDisplay.height - 20);//0;//currentDisplay.description_mc.y - currentDisplay.description_mc.height;
        myDisplayContainer.mainImage_mc.progressBar.progressBar_mc.scaleX = (p.bytesLoaded/p.bytesTotal);
        imageTimer.stop ();
      } else {
        currentDisplay.progressBar.visible = false;
      }
    }
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Load Main Image: onMainImgLoadingComplete
    private function onMainImgLoadingComplete (e:Event):void {
      myDisplayContainer.visible = true;
      myPreLoadContainer.visible = false;

      currentDisplay.visible = true;
      currentDisplay.progressBar.visible = false;
      //nImgLoaderWidth = imageMainLoader.width;
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: New BitmapData: Current Image
      var imgBM:Bitmap = Bitmap(imageMainLoader.content);
      //trace("imgBM: " + imgBM);
      //-------- new Bitmap data to draw loaded image to it
      var imgBMData:BitmapData = new BitmapData(imageMainLoader.width, imageMainLoader.height);//, false, 0x00565656);//0xffffffff //0xff565656
      //trace("imgBMData: " + imgBMData);
      imgBMData.draw (imgBM, new Matrix());
      //trace("imgBMData: " + imgBMData);
      //var image:Bitmap = new Bitmap(imgBMData);
      cBMImage = new Bitmap(imgBMData);
      //trace("cBMImage: " + cBMImage);
      cBMImage.smoothing = true;
      cBMImage.alpha = 0;
      mainFPO.addChild(cBMImage);
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Paliguan mga bata
      cleanImageContainer (mainFPO);

      centeringDisplayCalculation ();
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Calling centering all mcs
      centerDiplayContainer ();

      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Transition Tweens
      Tweener.addTween (cBMImage,{alpha:1, time:nTRANSITION_TIME,transition:"easeOutExpo"});
      Tweener.addTween (imgMask,{width:cBMImage.width-2,height:cBMImage.height-2,time:1,transition:"easeOutExpo"});
      Tweener.addTween (imgFrame,{width:cBMImage.width+20,height:cBMImage.height+20,time:1,transition:"easeOutExpo"});//easeOutElastic
      Tweener.addTween (imgBG,{width:cBMImage.width,height:cBMImage.height,time:1,transition:"easeOutExpo"});

      /*Tweener.addTween (cBMImage,{alpha:1, time:nTRANSITION_TIME,transition:"easeOutExpo"});
       Tweener.addTween (imgMask,{width:cBMImage.width-2,height:cBMImage.height-2,time:1,transition:"easeOutExpo"});
       Tweener.addTween (imgFrame,{width:cBMImage.width+20,height:cBMImage.height+20,time:1,transition:"easeOutExpo"});//easeOutElastic
       Tweener.addTween (imgBG,{width:cBMImage.width,height:cBMImage.height,time:1,transition:"easeOutExpo"});*/

      cBMImage.x = (mainFPO.x - cBMImage.width)/2 ;
      cBMImage.y = (mainFPO.y-cBMImage.height)/2 ;

      //Tweener.addTween (myDisplayContainer.mainImage_mc.description_mc,{x:cBMImage.x,y:-cBMImage.y-imgDescriptionYPos,time:1,transition:"easeOutExpo"});

      if(sDESCRIPTION_VERTICALPOSITION == "TOP"){
        //currentDisplay.description_mc.y = 
        Tweener.addTween (myDisplayContainer.mainImage_mc.description_mc,{
          x:cBMImage.x,
          y:-(cBMImage.height/2 - (myDisplayContainer.mainImage_mc.description_mc.height/1.4)),
          time:1,
          transition:"easeOutExpo"
        });
      }
      if(sDESCRIPTION_VERTICALPOSITION == "BOTTOM"){
        //currentDisplay.description_mc.y = 
        Tweener.addTween (myDisplayContainer.mainImage_mc.description_mc,{
          x:cBMImage.x,
          y:(cBMImage.height/2 - (myDisplayContainer.mainImage_mc.description_mc.height/1.4)),
          time:1,
          transition:"easeOutExpo"
        });
      }

      Tweener.addTween (prevDisplay,{x:-((cBMImage.width/2)+displayOffset), time:nTRANSITION_TIME,transition:"easeOutExpo"});//easeOutElastic
      Tweener.addTween (nextDisplay,{x:((cBMImage.width/2)+displayOffset), time:nTRANSITION_TIME,transition:"easeOutExpo"});
      //Tweener.addTween (nextDisplay,{x:((imgFrame.width/2)+displayOffset), time:nTRANSITION_TIME,transition:"easeOutExpo"});
      //
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Image Timer: If paused stop everything
      if (toggleImagesPausePlay == true) {
        imageTimer.stop ();
      } else {
        imageTimer.start ();
      }
    }

    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Load Main Image: onMainImgLoadingFailed
    private function onMainImgLoadingFailed (errorEvent:ErrorEvent):void {
      trace ("Image Load Failed");
    }
    //•••••••••••••••••••••≈----------------:|     PREVIOUS IMAGE     |:----------------≈•••••••••••••••••••••:|•
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Load Main Image: OnProgress :::::::::::::: LOADING PREVIOUS IMAGE
    private function onPrevProgress (p:ProgressEvent):void {
      //trace("onPrevProgress");
    }

    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Load Main Image: OnPrevComplete
    private function OnPrevComplete (e:Event):void {
      prevDisplay.progressBar.visible = false;
      prevDisplay.visible = true;

      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: New BitmapData: Current Image
      var imgBM:Bitmap = Bitmap(imagePrevLoader.content);
      //-------- new Bitmap data to draw loaded image to it
      var imgBMData:BitmapData = new BitmapData(imagePrevLoader.width, imagePrevLoader.height, false, 0xffffffff);
      imgBMData.draw (imgBM, new Matrix());
      //var image:Bitmap = new Bitmap(imgBMData);
      pBMImage = new Bitmap(imgBMData);
      pBMImage.smoothing = true;
      imageWidth = pBMImage.width;
      prevFPO.addChild(pBMImage);
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Paliguan mga bata
      cleanImageContainer (prevFPO);
      //trace("prevFPO.numChildren: " + prevFPO.numChildren);

      pBMImage.alpha = 0;

      pBMImage.x = (prevFPO.x - pBMImage.width)/2 ;
      pBMImage.y = (prevFPO.y-pBMImage.height)/2 ;
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Transition Tweens
      Tweener.addTween (pBMImage,{alpha:1, time:nTRANSITION_TIME,transition:"easeOutExpo"});

      Tweener.addTween (prevImgMask,{width:imagePrevLoader.width-2,height:imagePrevLoader.height-2,time:1,transition:"easeOutExpo"});
      Tweener.addTween (prevImgFrame,{width:imagePrevLoader.width+20,height:imagePrevLoader.height+20,time:1,transition:"easeOutExpo"});
      Tweener.addTween (prevImgBG,{width:imagePrevLoader.width,height:imagePrevLoader.height,time:1,transition:"easeOutExpo"});

    }
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Load Main Image: onFailed
    private function onPrevFailed (errorEvent:ErrorEvent):void {
      trace ("Image Load Failed");
    }
    //•••••••••••••••••••••≈----------------:|     NEXT IMAGE     |:----------------≈•••••••••••••••••••••:|•
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Load Main Image: OnProgress :::::::::::::: LOADING NEXT IMAGE
    private function onNextProgress (p:ProgressEvent):void {
      myDisplayContainer.nxtImage_mc.progressBar.progressBar_mc.scaleX = (p.bytesLoaded/p.bytesTotal);
      //•••≈-------------------------------------------------------------------•••≈||: Progress bar yPosition
      nextDisplay.progressBar.visible = true;
      //nextDisplay.progressBar.y = nextDisplay.description_mc.y - nextDisplay.description_mc.height;
      //colorMe(nextDisplay.progressBar.loadingBar, sLOAD_BAR_COLOR, sLOAD_BAR_ALFA/100);
    }
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Load Main Image: OnComplete
    private function OnNextComplete (e:Event):void {
      nextDisplay.progressBar.visible = false;
      nextDisplay.visible = true;
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: New BitmapData: Next Image
      var imgBM:Bitmap = Bitmap(imageNextLoader.content);
      //-------- new Bitmap data to draw loaded image to it
      var imgBMData:BitmapData = new BitmapData(imageNextLoader.width, imageNextLoader.height, false, 0xffffffff);
      imgBMData.draw (imgBM, new Matrix());
      nBMImage = new Bitmap(imgBMData);
      nBMImage.smoothing = true;
      imageWidth = nBMImage.width;
      nextFPO.addChild(nBMImage);
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Paliguan mga bata
      cleanImageContainer (nextFPO);
      //trace("nextFPO.numChildren: " + nextFPO.numChildren);

      nBMImage.alpha = 0;
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Loaded bitmap image x and y position inside the display conatiner
      nBMImage.x = (nextFPO.x - nBMImage.width)/2 ;
      nBMImage.y = (nextFPO.y-nBMImage.height)/2 ;

      //if(bMainImageLoaded == true){				
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Transition Tweens
      Tweener.addTween (nBMImage,{alpha:1, time:nTRANSITION_TIME,transition:"easeOutExpo"});
      Tweener.addTween (nextImgMask,{width:imageNextLoader.width-2,height:imageNextLoader.height-2,time:1,transition:"easeOutExpo"});
      Tweener.addTween (nextImgFrame,{width:imageNextLoader.width+20,height:imageNextLoader.height+20,time:1,transition:"easeOutExpo"});
      Tweener.addTween (nextImgBG,{width:imageNextLoader.width,height:imageNextLoader.height,time:1,transition:"easeOutExpo"});
      nextDisplay.nxtBtn_mc.x = ((nextImgFrame.width/2) - (nextDisplay.nxtBtn_mc.width/2) - 20);
      //}
    }
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Load Main Image: onFailed
    private function onNextFailed (errorEvent:ErrorEvent):void {
      trace ("Image Load Failed");
    }

    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    //••••••••••••••••••••••••••••••••••••≈----------------:|     IMAGE CONTAINERS SECTION     |:----------------≈••••••••••••••••••••••••••••••••••••:|•
    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Shuffle Image :::::::::::::: BITMAP SWITCH IMAGES
    private function switchAutoCurrentImage (e:TimerEvent):void {
      if (currentImage < aImages.length-1) {
        currentImage++;
      } else {
        currentImage = 0;
      }
      //•••≈-------------------------------------------------------------------------------•••≈||: Load Main Image
      urlRekws.url = midResPath + aImages[currentImage];
      imageMainLoader.load (urlRekws);

      showImageNumber();
      tDescription.text =  sPRE_IMG_NUM + nCurImgNum + "   " + aCaptions[currentImage];// + "   ≈   " + aImages[currentImage];
      descriptionShowHide()

      //•••≈-------------------------------------------------------------------------------•••≈||: Load Previous Image
      previousImage = currentImage-1;
      if (previousImage == -1) {
        previousImage = aImages.length -1;
      }
      urlPrevRekws.url = lowResPath + aImages[previousImage];
      imagePrevLoader.load (urlPrevRekws);
      //•••≈-------------------------------------------------------------------------------•••≈||: Load Next Image
      nextImage = currentImage+1;
      if (nextImage == (aImages.length)) {
        nextImage = 0;//aImages.length -1;
      }
      urlNextRekws.url = lowResPath + aImages[nextImage];
      imageNextLoader.load (urlNextRekws);

      //•••≈-------------------------------------------------------------------------------•••≈||: Hilites selected button
      for (var i:int = 0; i< nImgCount; i++) {
        //aThumbnails[i].thumbBG_mc.alpha = 0;
        aThumbnails[i].thumbImgFPO.alpha = 1;
      }
      //•••≈-------------------------------------------------------------------------------•••≈||: Show in thumb preview
      showFullThumb(currentImage);

      aThumbnails[currentImage].thumbImgFPO.alpha = .1;

      /*showFullThumb(currentImage);

       //aThumbnails[currentImage].thumbBG_mc.alpha = .75;

       aThumbnails[currentImage].thumbImgFPO.alpha = .1;
       myThumbBtnSelectedBG.visible = true;
       myThumbBtnSelectedBG.x = aThumbnails[currentImage].x;
       myThumbBtnSelectedBG.y = aThumbnails[currentImage].y;*/

    }

    private function descriptionShowHide():void{
      //currentDisplay.description_mc.descriptionText
      //trace("•••-------------------------------------|| tDescription.text: ");
      //trace("tDescription.text: " + tDescription.text);
      if(aCaptions[currentImage] == ""){
        //currentDisplay.description_mc.visible = false;
        currentDisplay.description_mc.visible = false;
        //editing
      } else {
        currentDisplay.description_mc.visible = true;
      }
    }
    private function showImageNumber():void{
      if(sIMG_NUM == "On"){
        imgNum_mc.visible = true;
        imgNum_mc.alpha = .5
        nCurImgNum = currentImage + 1;
        tImgNum.text = nCurImgNum.toString();
      } else {
        imgNum_mc.visible = false;
        /*nCurImgNum = undefined;
         tImgNum.text = "";*/
      }
    }
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Show Hide and activate Pause/AutoPlay
    private function showPauseBtn (e:MouseEvent):void {
      targetDisplay = e.currentTarget;
      targetDisplay.buttonMode = true;
      targetDisplay.playPauseBtns_mc.visible = true;
      //targetDisplay.playPauseBtns_mc.y = ((targetDisplay.frame_mc.height/2) - (targetDisplay.playPauseBtns_mc.height/2) -400);
    }
    private function hidePauseBtn (e:MouseEvent):void {
      targetDisplay = e.currentTarget;
      targetDisplay.playPauseBtns_mc.visible = false;
    }

    private function swapMainDisplayDepth (e:MouseEvent):void {
      targetDisplay = e.currentTarget;
      //•••≈------------------Move myDisplayContainer on top of all other child of myMainGallery
      myMainGallery.setChildIndex(myDisplayContainer, numChildren +1)
    }

    //•••≈------------------------------------------------≈•••:| Current display Play/Pause
    private function pauseAutoPlay (e:MouseEvent):void {
      targetDisplay = e.currentTarget;
      targetDisplay.buttonMode = true;
      //toggleImagesPausePlay = !toggleImagesPausePlay;
      togglePlayPauseImages (targetDisplay);
      //trace("toggleImagesPausePlay:pauseAutoPlay: "+ toggleImagesPausePlay);
      //trace ("targetDisplay: "+ targetDisplay);
      //trace("toggleImagesPausePlay :" + toggleImagesPausePlay);
      var indxNum:int = aCPBtnNameID.indexOf("pauseAutoPlay");
      var spliced:Array;
      var sToogleLabel:String = aCPBtnLabelsToogle[indxNum];

      //trace("aCPBtnNameID: " + aCPBtnNameID)
      //trace("aCPBtnNameID: " + (aCPBtnNameID.indexOf("pauseAutoPlay")));
      //trace("indxNum: " + indxNum);
      //var spliced:Array;
      //var splicedToogle:Array;
      //var sLabel:String = aCPBtnLabels[indxNum];
      //sLabel = aCPBtnLabels[indxNum];

      //var sToogleLabel:String = aCPBtnLabelsToogle[indxNum];
      //trace("toogleLabel: " + toogleLabel);
      //•••≈-------------------------------------------------------------------------•••≈||: Load Button icons
      if(toggleImagesPausePlay == true){
        /*//trace("myCPBtnLoader.numChildren: " + aCPButtons[indxNum].numChildren);
         if(aCPButtons[indxNum].numChildren > 1){
         aCPButtons[indxNum].removeChildAt (1);
         }

         myCPBtnLoader = new LoadImage(aCPButtons[indxNum], sBUTTON_PATH+aCPBtnImageToogle[indxNum]);*/
        toogleCPButtonsImgs(aCPBtnImageToogle, indxNum);
        //•••≈-------------------------------------------------------------------------•••≈||: Splice the default label and replace with the toogle name 
        splicedToogleImgPlayPause = aCPBtnLabels.splice(indxNum, 1);
        aCPBtnLabels.splice(indxNum, 0, sToogleLabel);

        /*trace("aCPBtnLabels1: " + aCPBtnLabels)
         //spliced = aCPBtnLabelsToogle[indxNum];
         //trace("spliced1 :" + spliced);

         splicedToogle = aCPBtnLabels.splice(indxNum, 1);				

         trace("splicedToogle :" + splicedToogle);
         //sLabel = splicedToogle;

         aCPBtnLabels.splice(indxNum, 0, sToogleLabel)//aCPBtnLabelsToogle[indxNum]);//sToogleLabel);//aCPBtnLabelsToogle[indxNum]);				

         trace("aCPBtnLabels2: " + aCPBtnLabels)*/

        //trace("aCPBtnLabels[indxNum]: " + aCPBtnLabels[indxNum]);

        /*trace("aCPBtnLabels1: " + aCPBtnLabels)

         var someLetters:Array = aCPBtnLabelsToogle.slice(indxNum);
         var firstLetter:String = someLetters.shift();
         aCPBtnLabels.splice(indxNum, 0, firstLetter);
         trace("firstLetter2a: " + firstLetter)
         trace("aCPBtnLabels2: " + aCPBtnLabels)*/

      }else{
        toogleCPButtonsImgs(aCPBtnImage, indxNum);
        /*if(aCPButtons[indxNum].numChildren > 1){
         aCPButtons[indxNum].removeChildAt (1);
         }

         myCPBtnLoader = new LoadImage(aCPButtons[indxNum], sBUTTON_PATH+aCPBtnImage[indxNum]);*/

        //•••≈-------------------------------------------------------------------------•••≈||: Splice the toogle label anme and replace with the spliced name
        spliced = aCPBtnLabels.splice(indxNum, 1);
        aCPBtnLabels.splice(indxNum, 0, splicedToogleImgPlayPause);

        /*trace("aCPBtnLabels3: " + aCPBtnLabels)//same as 2

         spliced = aCPBtnLabels.splice(indxNum, 1);

         trace("splicedToogle2 :" + splicedToogle);
         trace("sLabel :" + sLabel);

         aCPBtnLabels.splice(indxNum, 0, splicedToogle);

         trace("aCPBtnLabels4: " + aCPBtnLabels)*/


        /*trace("aCPBtnLabels3: " + aCPBtnLabels)

         someLetters = aCPBtnLabels.slice(indxNum);//Doesn't work with additional parameter. Fro some reason!
         trace("someLetters: " + someLetters)

         firstLetter = someLetters.shift();
         trace("firstLetter: " + firstLetter)

         aCPBtnLabels.splice(indxNum, 0, firstLetter);
         trace("firstLetter2b: " + firstLetter)
         trace("aCPBtnLabels4: " + aCPBtnLabels)*/

        /*splicedToogle = aCPBtnLabels.splice(indxNum, 1);
         aCPBtnLabels.splice(indxNum, 0, spliced);*/

        /*spliced = aCPBtnLabels.splice(indxNum, 1);
         trace("splicedToogle :" + spliced);
         trace("sLabel :" + sLabel);
         aCPBtnLabels.splice(indxNum, 0, sLabel);*/

        /*splicedToogle = aCPBtnLabelsToogle.splice(indxNum, 1);
         trace("splicedToogle :" + splicedToogle);
         aCPBtnLabels.splice(indxNum, 0, splicedToogle)//aCPBtnLabelsToogle[indxNum]);
         */
        //cpButtons.cpBtn_DescTxt.text = aCPBtnLabels[indxNum];

        //trace("cpButtons.cpBtn_DescTxt.text: " + cpButtons.cpBtn_DescTxt.text);

        //trace("getChildAt(indxNum2): " + (getChildAt(aCPBtnNameID[indxNum]).name))//instance99
      }
      //var splicedToogleElement:Array;


      //splicedToogle = aCPBtnLabels[indxNum];
      //const splicedToogle:Array;// = aCPBtnLabels.splice(indxNum, 1);
      //toogleLabel(toggleImagesPausePlay, splicedToogle, spliced, aCPBtnLabels, sToogleLabel, indxNum);

    }
    /*private function toogleLabel(toogleName:Boolean, splicedToogleElem:Array, splicedElement:Array, aLabel:Array, sToogleLabelElement:String, iIndx:int):void{
     //var splicedToogleElement:Array;// = aLabel[iIndx];			
     if(toogleName == true){	
     splicedToogleElem = aLabel.splice(iIndx, 1);
     aLabel.splice(iIndx, 0, sToogleLabelElement);

     trace("splicedToogleElement1 :" + splicedToogleElem);
     } else {
     splicedElement = aLabel.splice(iIndx, 1);
     aLabel.splice(iIndx, 0, splicedToogleElem);

     trace("splicedToogleElement2 :" + splicedToogleElem);
     }
     }*/

    private function togglePlayPauseImages (mc:Object):void {
      //trace ("toggleImagesPausePlay: "+ toggleImagesPausePlay);
      toggleImagesPausePlay = !toggleImagesPausePlay;
      //trace("toggleImagesPausePlay:togglePlayPauseImages: "+ toggleImagesPausePlay);
      if (toggleImagesPausePlay == true) {
        imageTimer.stop ();
        currentImage = currentImage;
        currentDisplay.playPauseBtns_mc.playBtn_mc.visible = true;
        currentDisplay.playPauseBtns_mc.pauseBtn_mc.visible = false;

      } else {
        imageTimer.start ();
        currentDisplay.playPauseBtns_mc.playBtn_mc.visible = false;
        currentDisplay.playPauseBtns_mc.pauseBtn_mc.visible = true;
        /*cpButtons.cpBtn_PlayPauseImg.playSlide_mc.visible = false;
         cpButtons.cpBtn_PlayPauseImg.pauseSlide_mc.visible = true;*/
      }
    }

    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Show Hide and activate Previous Image Buttons
    private function showPrevBtn (e:MouseEvent):void {
      targetDisplay = e.currentTarget;
      targetDisplay.buttonMode = true;
      targetDisplay.prevBtn_mc.visible = true;
      targetDisplay.prevBtn_mc.x = -((targetDisplay.frame_mc.width/2) - (targetDisplay.prevBtn_mc.width/2) -100);
    }
    private function hidePrevBtn (e:MouseEvent):void {
      targetDisplay = e.currentTarget;
      targetDisplay.prevBtn_mc.visible = false;
    }
    private function showPreviousImage (e:MouseEvent):void {
      targetDisplay = e.currentTarget;
      nextImage = currentImage;
      currentImage--;
      previousImage = currentImage - 1;
      if (currentImage <= -1) {
        currentImage = aImages.length - 1;
      }
      if (previousImage <= -1) {
        previousImage = aImages.length - 1;
      }
      if (nextImage <= -1) {
        nextImage = aImages.length - 1;
      }
      //•••≈-------------------------------------------------------------------------------•••≈||: Load Images
      loadMe ();

      targetDisplay.prevBtn_mc.visible = false;
    }
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Show Hide and activate Next Image Button
    private function showNextBtn (e:MouseEvent):void {
      targetDisplay = e.currentTarget;
      targetDisplay.buttonMode = true;
      targetDisplay.nxtBtn_mc.visible = true;
      targetDisplay.nxtBtn_mc.x = ((targetDisplay.frame_mc.width/2) - (targetDisplay.nxtBtn_mc.width/2) - 100);
    }
    private function hideNextBtn (e:MouseEvent):void {
      targetDisplay = e.currentTarget;
      targetDisplay.nxtBtn_mc.visible = false;
    }
    private function showNextImage (e:MouseEvent):void {
      var targetDisplay:Object = e.currentTarget;
      nextImage++;
      currentImage++;
      previousImage++;
      if (currentImage > aImages.length - 1) {
        currentImage = 0;
      }
      if (previousImage > aImages.length - 1) {
        previousImage = 0;
      }
      if (nextImage > aImages.length - 1) {
        nextImage = 0;
      }
      //targetDisplay.nxtBtn_mc.x = ((targetDisplay.frame_mc.width/2) - (targetDisplay.nxtBtn_mc.width/2) - 20)
      //•••≈-------------------------------------------------------------------------------•••≈||: Load Images
      loadMe ();
      targetDisplay.nxtBtn_mc.visible = false;
    }
    //•••≈-------------------------------------------------------------------------------•••≈||: KEYBOARD Methods
    private function keyDown_NxtPrevImages (event:KeyboardEvent):void {
      trace("keyDownHandler: " + event.keyCode);
      if(event.keyCode == 39){
        //trace("keyDownHandler: " + event.keyCode);
        targetDisplay = event.currentTarget;
        nextImage++;
        currentImage++;
        previousImage++;
        if (currentImage > aImages.length - 1) {
          currentImage = 0;
        }
        if (previousImage > aImages.length - 1) {
          previousImage = 0;
        }
        if (nextImage > aImages.length - 1) {
          nextImage = 0;
        }
        //targetDisplay.nxtBtn_mc.x = ((targetDisplay.frame_mc.width/2) - (targetDisplay.nxtBtn_mc.width/2) - 20)
        //•••≈-------------------------------------------------------------------------------•••≈||: Load Images
        loadMe ();
      }
      if(event.keyCode == 37){
        targetDisplay = event.currentTarget;
        nextImage = currentImage;
        currentImage--;
        previousImage = currentImage - 1;
        if (currentImage <= -1) {
          currentImage = aImages.length - 1;
        }
        if (previousImage <= -1) {
          previousImage = aImages.length - 1;
        }
        if (nextImage <= -1) {
          nextImage = aImages.length - 1;
        }
        //•••≈-------------------------------------------------------------------------------•••≈||: Load Images
        loadMe ();
      }
      // Spacebar = 32 
      if(event.keyCode == 32){
        trace("event.keyCode: " + event.keyCode)
        //targetDisplay = event.currentTarget;
        toggleImgsPlayPause();
        /*if (toggleImagesPausePlay == true) {
         imageTimer.stop ();
         } else {
         imageTimer.start ();
         }*/
      }
    }

    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: ROLL-OVER hilites thumb buttons
    private function hiliteThumbOnButton (e:MouseEvent):void {
      targetButton = e.currentTarget;
      targetButton.buttonMode = true;
      var indxNum:int = aThumbnails.indexOf(e.currentTarget);
      //trace("targetButton.x: " + targetButton.x);
      //trace("targetButton.y: " + targetButton.y);
      //trace("indxNum: hiliteThumb: " + indxNum);
      //targetButton.thumbBG_mc.visible = true;
      targetButton.thumbImgFPO.alpha = .25;
      //targetButton.thumbBG_mc.alpha = 0;

      //targetButton.thumbImgFPO.visible = false;

      myThumbBtnOnOverBG.visible = true;
      myThumbBtnOnOverBG.x = targetButton.x;
      myThumbBtnOnOverBG.y = targetButton.y;

      showFullThumb(indxNum);
    }
    private function hiliteThumbOffButton (e:MouseEvent):void {
      //myGalleryControlPanel.fullThumb.visible = false;
      targetButton = e.currentTarget;
      if (hiliteFlag == true) {
        //•••≈-------------------------------------------------------------------------------•••≈||: ROLL_OUT: Hilites selected button
        for (var i:int = 0; i< nImgCount; i++) {
          //aThumbnails[i].thumbBG_mc.alpha = 0;
          aThumbnails[i].thumbImgFPO.alpha = 1;
          //targetButton.thumbImgFPO.alpha = 1;
        }
        //aThumbnails[currentImage].thumbBG_mc.alpha = .75;
        targetButton.thumbImgFPO.alpha = .1;
      } else {
        //targetButton.thumbBG_mc.alpha = 0;
        targetButton.thumbImgFPO.alpha = 1;
        //targetButton.thumbImgFPO.visible = true;
      }
    }
    private function showFullThumb(indx:int):void{
      var fullLowResImg:String = lowResPath + aImages[indx];
      //var fullThumbMC:MovieClip = new MovieClip();
      //fullThumbMC = lowResPath + aImages[indx];
      //myThumbnailsPanel.fullThumb.fullThumbFPO;//lowResPath + aImages[indx];


      //myFullThumbLoader = new LoadImage2(myThumb.thumbImgFPO, lowResPath+aImages[ij-1], myThumb.loadingAnim);
      //myFullThumb = new fullThumbContainer();
      myThumbnailsPanel.addChild(myFullThumb);
      myFullThumb.y = -210;

      //myThumb.thumbImgFPO
      //loadFullThumb =  new LoadImage2(myFullThumb.fullThumbFPO, fullLowResImg, myFullThumb.loadingAnim);

      myFullThumbFrame = new LoadFramedImage(
        myFullThumb,
        fullLowResImg,
        true,
        sCOLOR_THEME,
        20,
        20
      );

      //myThumb = new ThumbButton();

      //TEST
      //myFullThumb.fullThumbFPO.x += 40;

      //loadFullThumb =  new LoadImage2(myThumbnailsPanel.fullThumb.fullThumbFPO, fullLowResImg, myThumbnailsPanel.fullThumb.loadingAnim);

      //myFullThumb.fullThumbMask.width = myFullThumb.width;
      //myFullThumb.fullThumbMask.height = myFullThumb.height;
      //myFullThumb.fullThumbBG.width = aImages[indx].width + 10;
      //myFullThumb.fullThumbBG.height = aImages[indx].height + 10;
      /*trace("aFullThumbs[indx].width: " + aFullThumbs[indx].width);
       trace("aFullThumbs[indx].height: " + aFullThumbs[indx].height);

       Tweener.addTween (myFullThumb.fullThumbMask,{width:aFullThumbs[indx].width,height:aFullThumbs[indx].height-2,time:1,transition:"easeOutExpo"});
       Tweener.addTween (myFullThumb.fullThumbBG,{width:aFullThumbs[indx].width+10,height:aFullThumbs[indx].height+10,time:1,transition:"easeOutExpo"});*/

      //trace("myFullThumb.width: " + myFullThumb.width);
      //trace("myFullThumb.height: " + myFullThumb.height);

      //myThumbnailsPanel.fullThumb.visible = true;

    }
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: CLICK: thumbLoadImage
    private function thumbLoadImage (e:MouseEvent):void {
      targetButton = e.currentTarget;
      targetButton.buttonMode = true;
      hiliteFlag = true;
      currentImage = aThumbnails.indexOf(e.currentTarget);
      previousImage = currentImage -1;
      nextImage = currentImage +1;
      //•••≈------------------------------------------------≈•••:| Thumbnails container
      //•••≈------------------------------------------------≈•••:| Hide Thumbnails container
      //Tweener.addTween (myGalleryControlPanel.thumbContainer_mc,{y:((myGalleryControlPanel.thumbContainer_mc.height+100)), time:nTRANSITION_TIME,transition:"easeOutExpo"});//easeOutElastic //easeOutExpo
      hideAllImages();
      hideControlPanel();
      hideControlPanelBackground();

      loadMe ();

    }

    private function centerSelectedThumb():void{
      //openAllImages
      //thumbsPanelSprite.y = thumbsPanelSprite.y + 80;

      if(myThumbnailsPanel.visible == true){
        var yMax:Number = thumbsPanelSprite.height;
        var gridDivider:Number = Math.round(currentImage/8);//Find a better calculation
        trace("gridDivider: " + gridDivider);
        var sliderBtnYPos:int = (80 * gridDivider) - 80;
        Tweener.addTween (thumbsPanelSprite,{y:-sliderBtnYPos, time:2,transition:"easeOutQuad"});

        /*trace("myThumbnailsPanel.visible: " + myThumbnailsPanel.visible);
         //move selected thumbnail in the center of the panel.
         var yMax:Number = thumbsPanelSprite.height/7;
         trace("yMax: " + yMax);
         //var thumbVerticalPosition:Number = (thumbsPanelSprite.height * (yMax -1));
         trace("thumbsPanelSprite.height: " + thumbsPanelSprite.height);
         var thumbSliderBarHt:Number = myThumbsVerticalSlider.vertDragSliderBar.height;
         trace("thumbSliderBarHt: " + thumbSliderBarHt);
         var heightDivider:Number = yMax /thumbSliderBarHt;//(thumbsPanelSprite.height - 80)/thumbSliderBarHt;//sliderHeight;
         trace("heightDivider: " + heightDivider);
         var thumbVerticalPosition:Number = currentImage * 80;
         trace("thumbVerticalPosition: " + thumbVerticalPosition);
         var sliderBtnYPos:int = Math.round(thumbVerticalPosition / heightDivider);///this.verticalSlider.height);//this.aDupeList[0].songListNameBG.height);
         trace("sliderBtnYPos: " + sliderBtnYPos);
         Tweener.addTween (thumbsPanelSprite,{y:-sliderBtnYPos, time:2,transition:"easeOutQuad"});*/
      }
    }
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Load Images method
    private function loadMe ():void {
      //trace("from loadMe")
      //•••≈-------------------------------------------------------------------------------•••≈||: Load Main Image
      urlRekws.url = midResPath + aImages[currentImage];
      imageMainLoader.load (urlRekws);
      showImageNumber();
      tDescription.text = sPRE_IMG_NUM + nCurImgNum + "   " + aCaptions[currentImage];// + "   •:::•   " + aImages[currentImage];
      trace("•••≈------------------------------------|| aCaptions[currentImage]: " + (aCaptions[currentImage]));
      trace("tDescription: " + tDescription.text);
      descriptionShowHide();
      //•••≈-------------------------------------------------------------------------------•••≈||: Load Previous Image
      urlPrevRekws.url = lowResPath + aImages[previousImage];
      imagePrevLoader.load (urlPrevRekws);
      //•••≈-------------------------------------------------------------------------------•••≈||: Load Next Image
      urlNextRekws.url = lowResPath + aImages[nextImage];
      imageNextLoader.load (urlNextRekws);
      //•••≈-------------------------------------------------------------------------------•••≈||: Hilites selected button
      /*for (var i:int = 0; i< nImgCount; i++) {
       aThumbnails[i].thumbBG_mc.alpha = 0;
       //aThumbnails[i].thumbImgFPO.alpha = 1;
       }*/
      //aThumbnails[currentImage].thumbBG_mc.alpha = .75;
      /*aThumbnails[currentImage].thumbImgFPO.alpha = .1;
       myThumbBtnSelectedBG.visible = true;
       myThumbBtnSelectedBG.x = aThumbnails[currentImage].x;
       myThumbBtnSelectedBG.y = aThumbnails[currentImage].y;*/
      //trace("aThumbnails[currentImage: " + aThumbnails[currentImage])
      //aThumbnails[currentImage].thumbImgFPO.alpha = .1;

      //•••≈-------------------------------------------------------------------------------•••≈||: Show in thumb preview
      //showFullThumb(currentImage);


    }

    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    //••••••••••••••••••••••••••••••••••••≈----------------:|     CONTROL PANEL SECTION     |:----------------≈••••••••••••••••••••••••••••••••••••:|•
    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:

    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Methods for: CONTROL PANEL BUTTON'S ROLLOVER
    private function litenCPButn (e:MouseEvent):void {
      targetButton = e.currentTarget;
      //trace("targetButtonWidth: "+ targetButton.width);
      var galBtnIndxNum:int = aCPButtons.indexOf(targetButton);

      /*var labelToogle:String// = false;

       aCPBtnLabels[1].labelToogle = "On";
       trace("aCPBtnLabels[1].labelToogle: " + aCPBtnLabels[8].labelToogle)*/;

      if(aCPBtnLabels[galBtnIndxNum] == ""){
        //trace("aCPBtnLabels[galBtnIndxNum]: " + aCPBtnLabels[galBtnIndxNum])
        targetButton.buttonMode = false;
      } else {
        targetButton.buttonMode = true;
        targetButton.alpha = .5;

        cpButtons.cpBtn_DescTxt.text = aCPBtnLabels[galBtnIndxNum];

        /*if(toggleImagesPausePlay == true){
         cpButtons.cpBtn_DescTxt.text = aCPBtnLabels[galBtnIndxNum];
         } else {
         cpButtons.cpBtn_DescTxt.text = aCPBtnLabelsToogle[galBtnIndxNum];
         }*/
      }
    }

    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Methods for: CONTROL PANEL BUTTON'S ROLLOUT
    private function drkenCPButn (e:MouseEvent):void {
      targetButton = e.currentTarget;
      targetButton.buttonMode = true;
      targetButton.alpha = 1;
      cpButtons.cpBtn_DescTxt.text = "";
    }
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Methods for: SHOW/HIDE CONTROL PANEL OUT OF HIDING
    private function trackMousy (e:MouseEvent):void {
      /*targetButton = e.currentTarget;
       targetButton.buttonMode = true;*/
      //•••≈------------------------------------------------•••≈||: This trigger the show/hide of Control Panel
      myCPHotSpotHorizLine.y = stage.stageHeight - 100;

      if (mouseY >= myCPHotSpotHorizLine.y) {
        showControlPanel();
      } else {
        if(bWindowPanelOn == true){
          showControlPanel();
        } else {
          hideControlPanel();
        }
      }
    }
    private function showControlPanel():void{
      myGalleryControlPanel.visible = true;
      Tweener.addTween (myGalleryControlPanel,{y:stage.stageHeight - 50, time:2,transition:"easeOutExpo"});
    }
    private function hideControlPanel():void{
      bWindowPanelOn = false;
      myGalleryControlPanel.visible = false;
      myGalleryControlPanel.y = 3000;
      //Tweener.addTween (myGalleryControlPanel,{y:stage.stageHeight+100, time:.5,transition:"easeOutQuad"});
      //Tweener.addTween (myGalleryControlPanel,{y:300, time:5,transition:"easeOutQuad"});
    }
    private function showControlPanelBackground():void{
      //•••≈------------------------------------------------≈•••:| Show, Center, Stretch background
      myBGRect.visible = true;
      myBGRect.alpha = 1;//.75;
      myBGRect.height = stage.stageHeight;
      //trace("•••-----------------------------------|| showControlPanelBackground()")
      //trace("myBGRectY: " + myBGRect.y);
      //trace("myBGRectHeight: " + myBGRect.height);
    }
    private function hideControlPanelBackground():void{
      //•••≈------------------------------------------------≈•••:| Show, Center, Stretch background
      myBGRect.visible = false;
      myBGRect.alpha = 0;
    }
    private function hideThesePanels():void{
      hideThesePanelsArray = new Array(hideInfo (), hideVideoPlayer (), hideMP3Player(), hideAllImages());
    }
    private function toggleFullScreenView (e:MouseEvent):void {
      targetButton = e.currentTarget;
      targetButton.buttonMode = true;
      targetButton.alpha = 1;
      stage.displayState = stage.displayState == StageDisplayState.NORMAL ? StageDisplayState.FULL_SCREEN : StageDisplayState.NORMAL;
      bFullScreen = !bFullScreen;
      //trace("bFullScreen :" + bFullScreen);

      var indxNum:int = aCPBtnNameID.indexOf("toggleFullScreenView");
      //trace("toggleAutoEnlarge: indxNum: " + indxNum);
      var spliced:Array;
      var sToogleLabel:String = aCPBtnLabelsToogle[indxNum];
      //trace("toggleAutoEnlarge: sToogleLabel: " + sToogleLabel);
      //toogleLabel(bAutoImageEnlarge, spliced, aCPBtnLabels, sToogleLabel, indxNum)
      //•••≈-------------------------------------------------------------------------•••≈||: Load Button icons
      if(bFullScreen == true){
        toogleCPButtonsImgs(aCPBtnImageToogle, indxNum);
        /*if(aCPButtons[indxNum].numChildren > 1){
         aCPButtons[indxNum].removeChildAt (1);
         }
         myCPBtnLoader = new LoadImage(aCPButtons[indxNum], sBUTTON_PATH+aCPBtnImageToogle[indxNum]);*/
        //•••≈-------------------------------------------------------------------------•••≈||: Splice the default label and replace with the toogle name 
        splicedToogleFullScreen = aCPBtnLabels.splice(indxNum, 1);
        //trace("toggleAutoEnlarge: splicedToogleFullScreen: " + splicedToogleFullScreen);
        aCPBtnLabels.splice(indxNum, 0, sToogleLabel);
      }else{
        toogleCPButtonsImgs(aCPBtnImage, indxNum);
        /*if(aCPButtons[indxNum].numChildren > 1){
         aCPButtons[indxNum].removeChildAt (1);
         }
         myCPBtnLoader = new LoadImage(aCPButtons[indxNum], sBUTTON_PATH+aCPBtnImage[indxNum]);*/
        //•••≈-------------------------------------------------------------------------•••≈||: Splice the toogle label anme and replace with the spliced name
        spliced = aCPBtnLabels.splice(indxNum, 1);
        aCPBtnLabels.splice(indxNum, 0, splicedToogleFullScreen);
        //trace("toggleAutoEnlarge: splicedToogleFullScreen: " + splicedToogleFullScreen);
      }
    }
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Toggle the resizing of the main image from enlarged based on screen size and to the original size
    private function toggleAutoEnlarge (e:MouseEvent):void {
      targetDisplay = e.currentTarget;
      targetDisplay.buttonMode = true;
      bAutoImageEnlarge = !bAutoImageEnlarge;
      //trace("bAutoImageEnlarge :" + bAutoImageEnlarge)

      //•••≈-------------------------------------------------------------------------------•••≈||: Adding “ON” and “OFF” indicator to the label
      /*if(bAutoImageEnlarge == true){
       sLABEL_SCALE = sLABEL_SCALE + ": ON";
       } else {
       sLABEL_SCALE = sLABEL_SCALE + ": OFF"
       }*/

      var indxNum:int = aCPBtnNameID.indexOf("toggleAutoEnlarge");
      //trace("toggleAutoEnlarge: indxNum: " + indxNum);
      var spliced:Array;
      var sToogleLabel:String = aCPBtnLabelsToogle[indxNum];
      //trace("toggleAutoEnlarge: sToogleLabel: " + sToogleLabel);
      //toogleLabel(bAutoImageEnlarge, spliced, aCPBtnLabels, sToogleLabel, indxNum)
      //•••≈-------------------------------------------------------------------------•••≈||: Load Button icons
      if(bAutoImageEnlarge == false){
        toogleCPButtonsImgs(aCPBtnImageToogle, indxNum);
        /*if(aCPButtons[indxNum].numChildren > 1){
         aCPButtons[indxNum].removeChildAt (1);
         }
         myCPBtnLoader = new LoadImage(aCPButtons[indxNum], sBUTTON_PATH+aCPBtnImageToogle[indxNum]);*/
        //•••≈-------------------------------------------------------------------------•••≈||: Splice the default label and replace with the toogle name 
        //toogleLabelNames(splicedToogleImgAutoEnlarge, indxNum, sToogleLabel);
        splicedToogleImgAutoEnlarge = aCPBtnLabels.splice(indxNum, 1);
        //trace("toggleAutoEnlarge: splicedToogleImgAutoEnlarge1: " + splicedToogleImgAutoEnlarge);
        aCPBtnLabels.splice(indxNum, 0, sToogleLabel);
      }else{
        toogleCPButtonsImgs(aCPBtnImage, indxNum);
        /*if(aCPButtons[indxNum].numChildren > 1){
         aCPButtons[indxNum].removeChildAt (1);
         }
         myCPBtnLoader = new LoadImage(aCPButtons[indxNum], sBUTTON_PATH+aCPBtnImage[indxNum]);*/
        //•••≈-------------------------------------------------------------------------•••≈||: Splice the toogle label anme and replace with the spliced name
        //var sSpliced:String = splicedToogleImgAutoEnlarge.toString();
        //toogleLabelNames(spliced, indxNum, sSpliced);//.toString());
        spliced = aCPBtnLabels.splice(indxNum, 1);
        aCPBtnLabels.splice(indxNum, 0, splicedToogleImgAutoEnlarge);
        //trace("toggleAutoEnlarge: splicedToogleImgAutoEnlarge2: " + splicedToogleImgAutoEnlarge);
      }

      //•••≈-------------------------------------------------------------------------------•••≈||: Load Images
      loadMe ();
    }

    private function toogleCPButtonsImgs(aBtnImg:Array, iIndx:int):void{
      if(aCPButtons[iIndx].numChildren > 1){
        aCPButtons[iIndx].removeChildAt (1);
      }
      myCPBtnLoader = new LoadImage(aCPButtons[iIndx], sBUTTON_PATH+aBtnImg[iIndx]);
    }
    /*private function toogleLabelNames(aSplicer:Array, iIndx:int, sToogleName:String):void{
     aSplicer = aCPBtnLabels.splice(iIndx, 1);
     trace("aSplicer: " + aSplicer);
     aCPBtnLabels.splice(iIndx, 0, sToogleName);
     }*/

    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    //••••••••••••••••••••••••••••••••••••≈----------------:|     MORE INFO SECTION     |:----------------≈••••••••••••••••••••••••••••••••••••:|•
    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    private function showInfo (e:MouseEvent):void {
      targetButton = e.currentTarget;
      targetButton.buttonMode = true;
      //•••≈------------------------------------------------≈•••:| bWindowPanelOn: True = to let trackMousy not hide the control panel 
      bWindowPanelOn = true;
      //•••≈------------------------------------------------≈•••:| Hide all other panels including itself and call itself back again on the next line
      hideThesePanels();
      //•••≈------------------------------------------------≈•••:| Show More Info Panel
      myMoreInfo.visible = true;

      var panelBGHeight:Number = myMoreInfo.moreInfoBG.height;
      var cpHeight:Number = myGalleryControlPanel.cpButtons_mc.height;
      //•••≈------------------------------------------------≈•••:| Show info container
      Tweener.addTween (myMoreInfo,{
          y:(-((panelBGHeight/2) + (cpHeight/2))),
          time:1,
          transition:"easeOutExpo"
        }
      );
      //•••≈------------------------------------------------≈•••:| Show panel's gradated background
      showControlPanelBackground();

      //•••≈--------------------------------------------•••≈||: Load MoreInfo background image
      loadInfoBGImg();

      imageTimer.stop ();

      //trace("myMoreInfo.scrollingText.height: " + myMoreInfo.scrollingText.height);
      //trace("myInfoScrollingMask.height: " + myInfoScrollingMask.height)
      //•••≈------------------------------------------------•••≈||: Public Function from SliderEffectsSubClassHV 
      myThumbsSlidingMenu.sliderBtnPosition();
      //•••≈------------------------------------------------•••≈||: Show or hide scroll. Hide if there's not enough copy to scroll.
      if(myMoreInfo.scrollingText.height < myInfoScrollingMask.height){
        myInfoVerticalSlider.visible = false;
      }

      /*trace("myMoreInfo.scrollingText.height: " + myMoreInfo.scrollingText.height);
       if(myMoreInfo.scrollingText.height < 400){
       myInfoVerticalSlider.visible = false;
       }*/
    }
    private function hideInfo ():void {
      //•••≈------------------------------------------------≈•••:|| Hide info container
      Tweener.addTween (myMoreInfo,{y:myMoreInfo.height, time:.5,transition:"easeOutQuad"});
      //•••≈------------------------------------------------•••≈||: Handling of images
      if (toggleImagesPausePlay == true) {
        imageTimer.stop ();
      } else {
        imageTimer.start ();
      }
    }
    private function onClickHideMoreInfoPanel(e:MouseEvent):void {
      targetButton = e.currentTarget;
      targetButton.buttonMode = true;
      hideInfo();
      hideControlPanel();
      hideControlPanelBackground()
    }

    private function loadInfoBGImg():void{
      myInfoBGImage = new LoadImage(myMoreInfo.moreInfoImgFPO, sSKIN_PATH+sSILONAME);
      //myMoreInfo.moreInfoImgFPO.scaleX = .5;
      //myMoreInfo.moreInfoImgFPO.scaleY = .5;
      //myMoreInfo.moreInfoImgFPO.x = -(myMoreInfo.moreInfoImgFPO.width/2);
      myMoreInfo.moreInfoImgFPO.y = -(myMoreInfo.moreInfoImgFPO.height)///2);
      //myMoreInfo.moreInfoImgFPO.scaleX = -1;
      /*myInfoBGImage.scaleX = .25;
       myInfoBGImage.scaleY = .25;
       myInfoBGImage.x = -myInfoBGImage.width/2*/
    }



    private function scrollingMoreInfo():void{
      var infoFieldText:String;
      //•••≈------------------------------------------------≈•••:| Show More Info Body
      //myMoreInfoBody.visible = true;

      /*myMoreInfoBody.moreInfoBody.moreInfoTxt.text = sBODY_COPY;

       infoContainerSpriteHeight = infoPanelSprite.height - (nButtonWidthNSpace);	
       trace("infoContainerSpriteHeight: " + infoContainerSpriteHeight);
       trace("infoPanelSprite.height: " + infoPanelSprite.height);*/


      CreateTextField(sBODY_COPY);

      //myMoreInfo.scrollingText.addChild(infoPanelSprite);
      //infoPanelSprite.addChild(myMoreInfoBody);			

      myMoreInfo.scrollingText.txtFieldFPO.addChild(infoTxtField);
      //txtFieldFPO.addChild(label);		
      //myInfoVerticalSlider

      myMoreInfo.addChild(myInfoScrollingMask);
      myMoreInfo.addChild(myInfoVerticalSlider);
      //trace("myMoreInfo.scrollingText.height: " + myMoreInfo.scrollingText.height);
      //trace("myInfoScrollingMask.height: " + myInfoScrollingMask.height)
      /*if(myMoreInfo.scrollingText < 3){
       myPanoramaSlider.visible = false;
       }*/


      //myMoreInfoBody.moreInfoBody.moreInfoTxt.htmlText = sBODY_COPY;



      //infoContainerSpriteHeight = infoPanelSprite.height - (nButtonWidthNSpace);	
      //infoContainerSpriteHeight = myMoreInfo.scrollingText.txtFieldFPO.height - (nButtonWidthNSpace);	
      //trace("infoContainerSpriteHeight: " + infoContainerSpriteHeight);
      //trace("infoPanelSprite.height: " + infoPanelSprite.height);

      /*infoPanelSprite.addChild(myInfoScrollingMask);
       infoPanelSprite.addChild(myInfoVerticalSlider);*/

      //myMoreInfoBody.x = -26.5;
      //myMoreInfoBody.y = 0;//32;

      myInfoScrollingMask.x = -26.5;
      myInfoScrollingMask.y = 30;//32;
      //myInfoScrollingMask.width = 

      myMoreInfo.scrollingText.y = 0;//-174;

      myInfoVerticalSlider.x = 278;
      myInfoVerticalSlider.y = -174;

      //CreateTextField(sBODY_COPY);

      myInfoVerticalSlider.vertSliderButton.addEventListener (MouseEvent.MOUSE_DOWN, onDownMoreInfoSlider);
      myInfoVerticalSlider.vertSliderButton.addEventListener (MouseEvent.MOUSE_UP, onUpMoreInfoSlider);

      myMoreInfo.moreInfoBtn_Close.addEventListener(MouseEvent.ROLL_OVER,  litenSelectedButn);
      myMoreInfo.moreInfoBtn_Close.addEventListener(MouseEvent.ROLL_OUT,  drkenSelectedButn);
      myMoreInfo.moreInfoBtn_Close.addEventListener(MouseEvent.MOUSE_UP,  onClickHideMoreInfoPanel);
    }
    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    //••••••••••••••••••••••••••••••••••••≈----------------:|     TEXT FIELD SECTION     |:----------------≈••••••••••••••••••••••••••••••••••••:|•
    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    private function CreateTextField(infoFieldText:String) {
      configureLabel();
      infoTxtField.htmlText = infoFieldText;
    }

    private function configureLabel():void {
      //infoTxtField = new TextField();
      infoTxtField.autoSize = TextFieldAutoSize.LEFT;
      infoTxtField.background = false;
      infoTxtField.border = false;
      infoTxtField.multiline = true;
      infoTxtField.wordWrap = true;
      infoTxtField.width = 530;
      infoTxtField.height = 300;
      infoTxtField.x = myMoreInfo.moreInfoTitle.x + 5; //-((infoTxtField.width/2));
      infoTxtField.y = - 174;//((infoTxtField.height/2));
      infoTxtField.condenseWhite = true;
      infoTxtField.embedFonts = true;
      infoTxtField.htmlText = "<font face=\"Georgia\" size=\"20\">here <b>is</b> <i>some</i> <b><i>text<i><b></font>";
      //infoTxtField.htmlText = true;
      //infoTxtField.autoSize = TextFieldAutoSize.LEFT;
      infoTxtField.antiAliasType = AntiAliasType.ADVANCED;
      //infoTxtField.htmlText = infoTxtFieldText;

      var txtFormat:TextFormat = new TextFormat();
      txtFormat.font = "Georgia";
      //txtFormat.color = myInfoTextColor;//0xFF0000;
      //myColorTheme2 = new ColorThemes(this.aArtistNameBtn[i], this.sColorScheme, shadeIndex6);
      txtFormat.size = 18;
      txtFormat.underline = false;
      txtFormat.leading = 10
      txtFormat.italic = true;
      infoTxtField.defaultTextFormat = txtFormat;
      //addChild(infoTxtField);
      //infoPanelSprite.addChild(infoTxtField);



    }
    //•••≈------------------------------------------------•••≈||: allImages Buttons Sliding Btn startDrag and stopDrag 
    private function onDownMoreInfoSlider(e:MouseEvent):void{
      var targetObject:Object = e.currentTarget;
      targetObject.buttonMode = true;

      var infoSliderBarHt:Number = myInfoVerticalSlider.vertDragSliderBar.height;
      trace("infoSliderBarHt: " + infoSliderBarHt);
      var rectangle:Rectangle = new Rectangle(0, 0, 0, infoSliderBarHt);

      //var rectangle:Rectangle = new Rectangle(0, -204, 0, 408);
      targetObject.startDrag(true, rectangle);
    }

    private function onUpMoreInfoSlider(e:MouseEvent):void{
      var targetObject:Object = e.currentTarget;
      targetObject.buttonMode = true;
      targetObject.stopDrag();
      //•••≈------------------------------------------------•••≈||: Public Function from SliderEffectsSubClassHV 
      myMoreInfoSlidingText.verticalSlide();
    }
    //myColorTheme.colorValue(1,2)
    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    //••••••••••••••••••••••••••••••••••••≈----------------:|     VIDEO SECTION     |:----------------≈••••••••••••••••••••••••••••••••••••:|•
    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    //•••≈------------------------------------------------------------------------•••≈||: showVideoPlayer: When show video panel is up, pause the ff: sound, images slideshow. 
    private function showVideoPlayer (e:MouseEvent):void {
      targetButton = e.currentTarget;
      targetButton.buttonMode = true;
      //•••≈------------------------------------------------≈•••:| bWindowPanelOn: True = to let trackMousy not hide the control panel 
      bWindowPanelOn = true;
      //•••≈------------------------------------------------≈•••:| Hide all other panels including itself and call itself back again on the next line
      hideThesePanels();
      //•••≈------------------------------------------------≈•••:| Show Video Player Panel
      myVideoContainer.visible = true;
      var panelBGHeight:Number = myVideoContainer.videoBG.height;
      trace("panelBGHeight: " + panelBGHeight);

      var cpHeight:Number = myGalleryControlPanel.cpButtons_mc.height;
      trace("cpHeight: " + cpHeight);

      //•••≈------------------------------------------------≈•••:| Show info container
      Tweener.addTween (myVideoContainer,{
          y:(-((panelBGHeight/2) + (cpHeight/2))),
          time:4,
          transition:"easeOutExpo"
        }
      );

      //•••≈------------------------------------------------≈•••:| Show Video container
      //Tweener.addTween (myVideoContainer,{y:(-((myGalleryControlPanel.cpButtons_mc.height/2)+(myVideoContainer.height/2))), time:1,transition:"easeOutExpo"});

      //•••≈------------------------------------------------≈•••:| Show panel's gradated background
      showControlPanelBackground();

      //•••≈------------------------------------------------≈•••:| Load and play initial video on first enter the video window
      //trace("bVideoCPWindow1stCall: " + bVideoCPWindow1stCall);
      if(bVideoCPWindow1stCall == true){
        //•••≈------------------------------------------------•••≈||: Public Function from LoadVideoSubClass 
        myVideoPlayer.loadInitialVideo (aVideoList[0]);
        bVideoCPWindow1stCall = false;
      }
      //•••≈------------------------------------------------•••≈||: Public Function from LoadVideoSubClass 
      myVideoPlayer.resumeVideo();

      //•••≈------------------------------------------------≈•••:| 
      bVideoPlayerOn = true;
      //•••≈------------------------------------------------≈•••:| Pause slideshow if it's playing, pause if it's paused and pause sound too.
      //togglePlayPauseImages(currentDisplay);
      imageTimer.stop ();
      //pauseSound();			
      //•••≈------------------------------------------------•••≈||: Public Function from LoadMP3SubClass 
      myMP3Player.pauseSound();
      video2MP3TriggerOn = true;
    }
    //•••≈------------------------------------------------------------------------•••≈||: hideVideoPlayer: When video panel is hidden, pause playing video and resume playing the ff: sound, images slideshow except when they're paused before video panel was called
    private function hideVideoPlayer ():void {

      Tweener.addTween (myVideoContainer,{y:myVideoContainer.height, time:.5,transition:"easeOutQuad"});

      //•••≈------------------------------------------------•••≈||: Public Function from LoadVideoSubClass.as 
      myVideoPlayer.pauseVideo();
      //•••≈------------------------------------------------•••≈||: Handling of images
      if (toggleImagesPausePlay == true) {
        imageTimer.stop ();
      } else {
        imageTimer.start ();
      }
      //•••≈------------------------------------------------•••≈||: Continue MP3 Player

      if(video2MP3TriggerOn == true){
        myMP3Player.resumeSound();

        video2MP3TriggerOn = false;
      }
    }
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: VIDEO HANDLERS

    private function myPrivateVideo(e:MouseEvent):void{
      var targetObject:Object = e.currentTarget;
      targetObject.buttonMode = true;
      vidIndexNum = aVideoButtons.indexOf(e.currentTarget);
    }
    //•••≈----------------------------------------------------------------------------•••≈||: VIDEO BUTTONS SLIDER
    //•••≈------------------------------------------------•••≈||: Video Buttons Sliding Btn startDrag and stopDrag 
    private function videoIconsSliderDown(e:MouseEvent):void{
      var targetObject:Object = e.currentTarget;
      targetObject.buttonMode = true;
      //var sliderLine = createRectangle(myVideoContainer.panoramaSlider, 0, 0, 320, 4);			
      //var sliderDragLineX:Number = myVideoContainer.panoramaSlider.x// - (myVideoContainer.width/2);
      //var sliderDragLineY:Number = myVideoContainer.panoramaSlider.y//

      var rectangle:Rectangle = new Rectangle(-215, 0, 430, 0);

      //myVideoContainer.panoramaSlider.addChild(rectangle);
      targetObject.startDrag(true, rectangle);
    }
    private function videoIconsSliderUp(e:MouseEvent):void{
      var targetObject:Object = e.currentTarget;
      targetObject.buttonMode = true;
      targetObject.stopDrag();
      //•••≈------------------------------------------------•••≈||: Public Function from SliderEffectsSubClassHV
      myVideoSlidingMenu.horizontalSlider();
      //myVideoSlidingMenu.verticalSlide();
    }

    private function onClickHideVideoPlayer(e:MouseEvent):void {
      targetButton = e.currentTarget;
      targetButton.buttonMode = true;
      hideVideoPlayer();
      hideControlPanel();
      hideControlPanelBackground()
    }
    /*private function showPlayPauseBtn(e:MouseEvent):void {
     //public function loadPublicVideo (sVideo:String):void {	
     var targetObject:Object = e.currentTarget;
     targetObject.buttonMode = true;
     myVideoContainer.playPauseBtn_mc.visible = true;
     }
     private function hidePlayPauseBtn(e:MouseEvent):void {
     //public function loadPublicVideo (sVideo:String):void {	
     var targetObject:Object = e.currentTarget;
     targetObject.buttonMode = true;
     myVideoContainer.playPauseBtn_mc.visible = false;
     }*/

    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    //••••••••••••••••••••••••••••••••••••≈----------------:|     STAGE DISPLAY SECTION     |:----------------≈••••••••••••••••••••••••••••••••••••:|•
    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Init Stage: Screen Resized Handler
    private function initStage ():void {
      //trace("initStage")
      stage.align = StageAlign.TOP_LEFT;
      stage.scaleMode = StageScaleMode.NO_SCALE;
      stage.addEventListener (Event.RESIZE,resizeHandler);
      //addChild(myPreLoadContainer);
      //addChildAt(myPreLoadContainer, 100);
      myPreLoadContainer.x = stage.stageWidth/2;
      myPreLoadContainer.y = stage.stageHeight/2;
      myPreLoadContainer.preLoaderText.text = "Please wait while loading... Updated: January 17, 2013";
      //trace("Please wait...")
    }

    private function resizeHandler (e:Event):void {
      centerDiplayContainer ();
      hideGalleryControlPanel();
      centerMe (myDisplayContainer);
      centerBG (myGradation);
      //centerBottom (myGalleryControlPanel);
      //centerBottom (myCPHotSpotHorizLine);
      controlPanelCenterBottom ()
      //centerBottom (myGalleryControlPanel);
      //centerBG (myBGRect);
      //centerMe (myBGRect);
      rectBGStrechCentering()

      centerMe (myFontContainer);

      //bottomRightPosition (imgNum_mc);//Large image number display

      /*coldArea = stage.stageHeight - 100;
       myCPHotSpotHorizLine.y = coldArea;*/

      fontContainerXYPos(myFontContainer.fontHead, nVERTICAL_HEADPOSITION, nHORIZONTAL_HEADPOSITION);
      fontContainerXYPos(myFontContainer.fontSubHead, nVERTICAL_SUBHEADPOSITION, nHORIZONTAL_SUBHEADPOSITION);
    }

    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Centering Gallery and Display Containers 
    private function centerDiplayContainer ():void {
      //•••≈----------------------------------------------------•••≈||: Foreground Silos X Y Alignments
      siloAligments(aFGSilos, aFGSiloHorizAlign, aFGSiloVertAlign, aFGSiloStretch, aFGSiloScale, aFGSiloAutoScale, aFGSiloAlpha);

      //•••≈----------------------------------------------------•••≈||: Background Silos X Y Alignments
      siloAligments(aBGSilos, aBGSiloHorizAlign, aBGSiloVertAlign, aBGSiloStretch, aBGSiloScale, aBGSiloAutoScale, aBGSiloAlpha);

      //•••≈----------------------------------------------------•••≈||: Keeping the menu control horizontally center
      myGalleryControlPanel.x = stage.stageWidth/2;
    }

    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Hiding Control Panel 
    private function hideGalleryControlPanel():void{
      //myGalleryControlPanel.y = stage.stageHeight + myGalleryControlPanel.height;
      hideAllImages();
    }
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: AUTO CENTERING AND SCALING OF THE DISPLAY
    private function centeringDisplayCalculation ():void {
      horImgAvailableHeight = stage.stageHeight-100;//(stage.stageHeight - (myGalleryTitle.height +(myGalleryTitle.height/2)));
      //trace("horImgAvailableHeight: " + horImgAvailableHeight)
      var verImgAvailableHeight:Number = stage.stageHeight;
      //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: For automatically enlarging the main image in relation to the screen size if the screen size is larger than 1020 x 740
      if (bAutoImageEnlarge == true) {
        /********** CALCULATION: TAKE THE LOWEST NUMBER BETWEEN TWO VALUES AND APPLYING MATH.ROUND TO THE 2nd DECIMAL
         var hR:Number = stage.stageWidth/cBMImage.width;
         var vR:Number = stage.stageHeight/cBMImage.height;
         trace("hR: " + hR);
         trace("vR: " + vR);
         var percentRatio:Number = (Math.min(hR, vR)*100)/100
         trace("Math.min(hR, vR): " + (Math.min(hR, vR)))
         trace("percentRatio: " + percentRatio)
         var value:Number = int((Math.min(hR, vR))*100)/100;
         trace("value: " + value)
         *********************************************************************************/
        var percentageRatio:Number;
        var stageAvailableDisplayWidth:Number = stage.stageWidth - 200;
        var stageAvailableDisplayHeight:Number = stage.stageHeight - (300 *.75);
        var hR:Number = stageAvailableDisplayWidth/cBMImage.width;
        var vR:Number = stageAvailableDisplayHeight/cBMImage.height;
        percentageRatio = int((Math.min(hR, vR))*100)/100;
        //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Fitting the image in vertical positions
        if (cBMImage.width > cBMImage.height) {//••• horizontal image
          //•••≈-------- Use the shorter available height to center image display
          mainImgYPos = horImgAvailableHeight/2;
          imgDescriptionYPos = 17;
          cBMImage.scaleX = cBMImage.scaleY = percentageRatio;
        }
        if (cBMImage.width < cBMImage.height) {//••• vertical image
          mainImgYPos = stage.stageHeight/2;
          imgDescriptionYPos = 100;
          cBMImage.scaleX = cBMImage.scaleY = percentageRatio + .25;
        }
      } else {
        //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Rendering images at their original sizes
        cBMImage.scaleX = cBMImage.scaleY = 1;
      }
      myDisplayContainer.y = mainImgYPos;//stage.stageHeight/2;//0//-dispVertCtr;
      myDisplayContainer.x = stage.stageWidth/2;
      //trace ("bAutoImageEnlarge: " + bAutoImageEnlarge);
      //currentDisplay
    }

    private function initialCentering():void{
      //•••≈----------------------------------------------------•••≈||: Keeping the Title Container in relatively same positions
      //myGalleryTitle.x = 50;//(stage.stageWidth/2 + myGalleryTitle.width);
      //myGalleryTitle.y = (stage.stageHeight - myGalleryTitle.height);

      /*myFontContainer.x = 0;//stage.stageWidth/2;
       myFontContainer.alpha = .5

       myFontContainer.width = stage.stageWidth;
       //myFontContainer.y = stage.stageHeight - nFONT_BOTTOMSPACE;//(stage.stageHeight - myFontContainer.height);
       trace("myFontContainer.y: " + myFontContainer.y)*/

      /*//var scalingValue:Number = stage.stageWidth/myFontContainer.width;
       myFontContainer.scaleX = myFontContainer.scaleY = stage.stageWidth/myFontContainer.width;//scalingValue;
       trace("myFontContainer.scaleX: " + myFontContainer.scaleX)
       //trace("scalingValue: " + scalingValue)*/
      var autoScaleMultiplier:Number = (stage.stageWidth/1020)//+(aSiloScale[i]/100);
      var screenResizedPercentage:Number = 1 * autoScaleMultiplier;
      //myFontContainer.scaleX = myFontContainer.scaleY = screenResizedPercentage//stage.stageWidth/myFontContainer.width;

      //aSilos[i].scaleX = screenResizedPercentage
      //aSilos[i].scaleY = screenResizedPercentage;
      //trace("screenResizedPercentage: " + screenResizedPercentage);

      //•••≈----------------------------------------------------•••≈||: Gradation coverage
      //myGradation.width = stage.stageWidth;
      //myGradation.height = stage.stageHeight;

      //myGalleryControlPanel.x = stage.stageWidth/2;

    }

    private function siloAligments(aSilos:Array, aSiloHorAlignmnt:Array, aSiloVertAlignmnt:Array, aSiloStretch:Array, aSiloScale:Array, aSiloAutoScale:Array, aSiloAlpha:Array):void{
      //•••≈----------------------------------------------------•••≈||: Foreground Silos X Y Alignments
      var nSiloXAlignment:Number;
      var nSiloYAlignment:Number;
      var nSiloStretchWidth:Number;
      var screenResizedPercentage:Number;
      for (var i:int = 0; i<aSilos.length; i++) {
        //•••≈----------------------------------------------------•••≈||: Dynamic silo images alignment calculation: based on the width of the screen, multiply that with the percentage value from the xml minus the width of the image that was multiplied by the same percentage from xml. There's gonna be an easier formula! Can't think right now i'll get back to it.  :-)
        nSiloXAlignment =  ((stage.stageWidth * (aSiloHorAlignmnt[i]/100)) - (aSilos[i].width * (aSiloHorAlignmnt[i]/100)));
        nSiloYAlignment =  ((stage.stageHeight * (aSiloVertAlignmnt[i]/100)) - (aSilos[i].height * (aSiloVertAlignmnt[i]/100)));
        //•••≈----------------------------------------------------•••≈||: Image scaling
        aSilos[i].scaleX = aSilos[i].scaleY = aSiloScale[i]/100;
        //•••≈----------------------------------------------------•••≈||: Image alpha
        aSilos[i].alpha = aSiloAlpha[i]/100;
        //•••≈----------------------------------------------------•••≈||: Stretchability
        if (aSiloStretch[i] == "TRUE") {
          nSiloStretchWidth = stage.stageWidth;
          aSilos[i].width = nSiloStretchWidth;
        }
        if (aSiloStretch[i] == "FALSE") {
          //aSilos[i].scaleX = 1;
          var siloNoStretch:Number = aSilos[i].width;
          nSiloStretchWidth = siloNoStretch;
          aSilos[i].width = nSiloStretchWidth;
          //trace("siloNoStretch: " + siloNoStretch);
        }
        //•••≈----------------------------------------------------•••≈||: AutoScalability
        if (aSiloAutoScale[i] == "TRUE") {
          var autoScaleMultiplier:Number = (stage.stageHeight/740)//+(aSiloScale[i]/100);
          screenResizedPercentage = (aSiloScale[i]/100)*autoScaleMultiplier;
          aSilos[i].scaleX = aSilos[i].scaleY = screenResizedPercentage;
          //trace("screenResizedPercentage: " + screenResizedPercentage);
        }
        if (aSiloAutoScale[i] == "FALSE") {
          aSilos[i].scaleX = aSilos[i].scaleY = aSiloScale[i]/100;

          //aSilos[i].width = nSiloStretchWidth;

          //var siloNoStretch:Number = aSilos[i].width;
          //nSiloStretchWidth = siloNoStretch;
        }
        //•••≈----------------------------------------------------•••≈||: Arkos 1: Assignments
        aSilos[i].x = nSiloXAlignment;
        //aSilos[i].width = nSiloStretchWidth;
        aSilos[i].y = nSiloYAlignment//stage.stageHeight - aSilos[i].height;
      }
    }


    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Centering Methods
    private function centerMe (targetMC:MovieClip):void {
      targetMC.x = stage.stageWidth/2;
      targetMC.y = stage.stageHeight/2;
    }
    private function centerHorizontal (targetMC:MovieClip):void {
      targetMC.x = stage.stageWidth/2;//-(stage.stageWidth/2 + targetMC.width/2);
    }
    private function centerBG (targetMC:MovieClip):void {
      //targetMC.x = -stage.stageWidth/2;
      //targetMC.y = -stage.stageHeight/2;
      //targetMC.x = -stage.stageWidth/2;
      //targetMC.y = -stage.stageHeight/2;
      targetMC.width = stage.stageWidth;
      targetMC.height = stage.stageHeight;
    }
    private function centerBottom (targetMC:MovieClip):void {
      targetMC.x = stage.stageWidth/2;
      targetMC.y = stage.stageHeight - targetMC.height;
    }
    private function controlPanelCenterBottom ():void {
      //var cpHeight:Number = myGalleryControlPanel.height
      myGalleryControlPanel.x = stage.stageWidth/2;
      myGalleryControlPanel.y = stage.stageHeight - cpHeight;// - myGalleryControlPanel.height;
    }

    private function bottomRightPosition (targetMC:MovieClip):void {
      targetMC.x = stage.stageWidth - (targetMC.width/2);
      targetMC.y = ((stage.stageHeight - targetMC.height/2))// + (targetMC.height/2));//200;//- ((stage.stageHeight) - targetMC.height/2);
    }

    //•••≈--------------------------------------------•••≈||: rectBGStrechCentering: Stretching and Centering control panels background
    private function rectBGStrechCentering():void{
      //var targetMC:MovieClip = myBGRect;
      //myBGRect.visible = true;
      myBGRect.x = 0;//stage.stageWidth/2;
      myBGRect.y = -((stage.stageHeight/2)-50)///2 +50);
      myBGRect.width = stage.stageWidth;
      myBGRect.height = stage.stageHeight;
      /*trace("//•••≈--------------------------------------------•••≈||: rectBGStrechCentering");
       trace("myBGRect.x 2: " + myBGRect.x);
       trace("myBGRect.y 2: " + myBGRect.y);
       trace("myBGRect.width : " + myBGRect.width);
       trace("myBGRect.height : " + myBGRect.height);
       trace("//•••≈--------------------------------------------•••≈||: end rectBGStrechCentering")*/
      //myBGRect.alpha = 1;
    }
    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    //••••••••••••••••••••••••••••••••••••≈----------------:|     MP3 SECTION     |:----------------≈••••••••••••••••••••••••••••••••••••:|•
    ////•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Methods for: CONTROL PANEL BUTTON: SHOW/HIDE MP3 CONTROL PANEL
    private function showMP3Player (e:MouseEvent):void {
      targetButton = e.currentTarget;
      targetButton.buttonMode = true;
      //•••≈------------------------------------------------≈•••:| bWindowPanelOn: True = to let trackMousy not hide the control panel 
      bWindowPanelOn = true;
      //•••≈------------------------------------------------≈•••:| Hide all other panels including itself and call itself back again on the next line
      hideThesePanels();
      //•••≈------------------------------------------------≈•••:| Show MP3 Panel
      myMusicControlPanel.visible = true;

      var panelBGHeight:Number = myMusicControlPanel.MP3BG.height;
      var cpHeight:Number = myGalleryControlPanel.cpButtons_mc.height;
      //•••≈------------------------------------------------≈•••:| Show info container
      Tweener.addTween (myMusicControlPanel,{
          y:(-((panelBGHeight/2) + (cpHeight/2))),
          time:1,
          transition:"easeOutExpo"
        }
      );

      //•••≈------------------------------------------------≈•••:| MP3 Panel Anim
      /*Tweener.addTween (myMusicControlPanel,{
       y:(-((myGalleryControlPanel.cpButtons_mc.height/2)+(myMusicControlPanel.height/2))), 
       time:1,
       transition:"easeOutExpo"
       }
       );*/
      /*Tweener.addTween (myMusicControlPanel,{
       y:(-250), 
       time:1,
       transition:"easeOutExpo"
       }
       );*/
      //•••≈------------------------------------------------≈•••:| Show panel's gradated background
      showControlPanelBackground();

      imageTimer.stop ();
      //•••≈------------------------------------------------•••≈||: Public Function from SliderEffectsSubClassHV 
      //myThumbsSlidingMenu.sliderBtnPosition();
      myMP3SlidingMenu.sliderBtnPosition();
    }
    private function hideMP3Player():void{
      //•••≈------------------------------------------------≈•••:| Hide MP3 Panel
      myMusicControlPanel.visible = false;
      myMusicControlPanel.y = myMusicControlPanel.height + 300;
      //•••≈------------------------------------------------≈•••:| Pause/Play toggle for images
      //•••≈------------------------------------------------•••≈||: Continue MP3 Player
      //video2MP3TriggerOn = true;
      if(MP3TriggerOn == true){
        //imageTimer.start ();
        MP3TriggerOn = false;
      }
      //•••≈------------------------------------------------•••≈||: Handling of images
      if (toggleImagesPausePlay == true) {
        imageTimer.stop ();
      } else {
        imageTimer.start ();
      }
    }

    private function onClickHideMP3Player(e:MouseEvent):void {
      targetButton = e.currentTarget;
      targetButton.buttonMode = true;
      hideMP3Player();
      hideControlPanel();
      hideControlPanelBackground()
    }

    //•••≈----------------------------------------------------------------------------•••≈||: MP3 MENU BUTTONS SLIDER
    //•••≈------------------------------------------------•••≈||: MP3 Buttons Sliding Btn startDrag and stopDrag 
    private function onDownMP3MenuSlider(e:MouseEvent):void{
      var targetObject:Object = e.currentTarget;
      targetObject.buttonMode = true;
      //•••≈------------------------------------------------•••≈||: Create a new rectangle line as a bound for the mousy.
      var mp3SliderBarHt:Number = myMP3VerticalSlider.vertDragSliderBar.height;
      trace("mp3SliderBarHt: " + mp3SliderBarHt);
      var rectangle:Rectangle = new Rectangle(0, 0, 0, mp3SliderBarHt);
      //var rectangle:Rectangle = new Rectangle(0, -136, 0, 272);
      targetObject.startDrag(true, rectangle);
      //trace("onDownMP3MenuSlider")
    }


    private function onClickMP3VerticalSlider(e:MouseEvent):void{
      var targetObject:Object = e.currentTarget;
      targetObject.buttonMode = true;
      targetObject.stopDrag();
      //•••≈------------------------------------------------•••≈||: Public Function from SliderEffectsSubClassHV 
      myMP3SlidingMenu.verticalSliderOnClick();
    }

    private function onUpMP3MenuSlider(e:MouseEvent):void{
      var targetObject:Object = e.currentTarget;
      targetObject.buttonMode = true;
      targetObject.stopDrag();
      //•••≈------------------------------------------------•••≈||: Public Function from SliderEffectsSubClassHV 
      myMP3SlidingMenu.verticalSlide();
    }

    private function toggleSongListOverBG (e:MouseEvent):void {
      targetButton = e.currentTarget;
      targetButton.buttonMode = true;
      targetButton.songListNameBG.alpha = 1;

      soundIndexNum = aDupeList.indexOf(targetButton);
    }

    private function toggleSongListOutBG (e:MouseEvent):void {
      targetButton = e.currentTarget;
      targetButton.buttonMode = true;
      targetButton.songListNameBG.alpha = 0;
    }

    private function loadMyMP3(e:MouseEvent):void {
      trace("//•••----------------------•••≈||: start loadMyMP3");
      targetButton = e.currentTarget;
      targetButton.buttonMode = true;
      //targetButton.songListNameBG.alpha = 1;
      soundIndexNum = aDupeList.indexOf(targetButton);

      //•••≈------------------------------------------------•••≈||: Public Function from LoadMP3SubClass 
      myMP3Player.loadMySound(soundIndexNum);

      trace("//•••----------------------•••≈||: soundIndexNum:" + soundIndexNum);
      //•••≈------------------------------------------------•••≈||: Public Function from SliderEffectsSubClassHV 
      //myThumbsSlidingMenu.sliderBtnPosition();
      trace("//•••----------------------------------------------------------------•••≈||: end loadMyMP3");
    }

    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    //••••••••••••••••••••••••••••••••••••≈----------------:|     THUMBNAILS SECTION     |:----------------≈••••••••••••••••••••••••••••••••••••:|•
    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    private function openAllImages (e:MouseEvent):void {
      targetButton = e.currentTarget;
      targetButton.buttonMode = true;
      //•••≈------------------------------------------------≈•••:| bWindowPanelOn: True = to let trackMousy not hide the control panel 
      bWindowPanelOn = true;
      //•••≈------------------------------------------------≈•••:| Hide all other panels including itself and call itself back again on the next line
      hideThesePanels();
      //•••≈------------------------------------------------≈•••:| Show Thumbnails Panel
      //buildThumbnails();			
      //myGalleryControlPanel.thumbContainer_mc.visible  = true;
      myThumbnailsPanel.visible = true;

      var panelBGHeight:Number = myThumbnailsPanel.thumbPanelBG.height;
      var cpHeight:Number = myGalleryControlPanel.cpButtons_mc.height;
      //•••≈------------------------------------------------≈•••:| Show info container
      Tweener.addTween (myThumbnailsPanel,{
          y:(-((panelBGHeight/2) + (cpHeight/2))),
          time:1,
          transition:"easeOutExpo"
        }
      );
      //trace("targetButton: " + targetButton);
      //•••≈------------------------------------------------≈•••:| Show, Center, Stretch background
      //myBGRect.visible = true;
      //rectBGStrechCentering();

      //•••≈------------------------------------------------≈•••:| Show Thumbnail panel
      /*Tweener.addTween (myThumbnailsPanel,{
       y:(-250), 
       time:1,
       transition:"easeOutExpo"
       }
       );*/

      /*Tweener.addTween (myThumbsVerticalSlider.vertSliderButton,{
       y:(0), 
       time:1,
       transition:"easeOutExpo"
       }
       );*/
      //•••≈------------------------------------------------≈•••:| Show panel's gradated background
      showControlPanelBackground();

      //•••≈------------------------------------------------≈•••:| Pause slideshow if it's playing, pause if it's paused and pause sound too.
      imageTimer.stop ();

      //•••≈------------------------------------------------•••≈||: Public Function from SliderEffectsSubClassHV 
      myThumbsSlidingMenu.sliderBtnPosition();
      //myThumbsSlidingMenu.verticalSlide();


      centerSelectedThumb();

      //•••≈------------------------------------------------•••≈||: Slide thumb container to display selected thumbnail in the middle of the panel
      /*var thumbHeight:int = 80;
       var selectedImage:int = 40;//aThumbnails[currentImage];
       var thumbRowNum:int = selectedImage/8;
       trace("thumbRowNum: " + thumbRowNum);

       var thumbVerticalPosition:Number = thumbHeight * thumbRowNum;// (myThumb.height * (yMax -1));//0;//100;
       trace("thumbVerticalPosition :" + thumbVerticalPosition);
       thumbsPanelSprite.y = thumbVerticalPosition;*/

      //•••≈------------------------------------------------•••≈||: Public Function from SliderEffectsSubClassHV 
      //myThumbsSlidingMenu.sliderYPosition();
    }
    private function hideAllImages():void{
      myThumbnailsPanel.visible = false;
      Tweener.addTween (myThumbnailsPanel,{y:((myThumbnailsPanel.height)), time:1,transition:"easeOutQuad"});
    }
    //•••≈------------------------------------------------•••≈||: allImages Buttons Sliding Btn startDrag and stopDrag 
    private function onDownThumbsMenuSlider(e:MouseEvent):void{
      var targetObject:Object = e.currentTarget;
      targetObject.buttonMode = true;
      //var sliderLine = createRectangle(myVideoContainer.panoramaSlider, 0, 0, 320, 4);			
      //var sliderDragLineX:Number = myVideoContainer.panoramaSlider.x// - (myVideoContainer.width/2);
      //var sliderDragLineY:Number = myVideoContainer.panoramaSlider.y//
      var thumbSliderBarHt:Number = myThumbsVerticalSlider.vertDragSliderBar.height;
      trace("thumbSliderBarHt: " + thumbSliderBarHt);
      var rectangle:Rectangle = new Rectangle(0, 0, 0, thumbSliderBarHt);
      targetObject.startDrag(true, rectangle);
      //trace("onDownThumbsMenuSlider")

    }
    private function onUpThumbsMenuSlider(e:MouseEvent):void{
      var targetObject:Object = e.currentTarget;
      targetObject.buttonMode = true;
      targetObject.stopDrag();
      //•••≈------------------------------------------------•••≈||: Public Function from SliderEffectsSubClassHV 
      myThumbsSlidingMenu.verticalSlide();

    }
    private function onClickHideThumbnailsPanel(e:MouseEvent):void {
      targetButton = e.currentTarget;
      targetButton.buttonMode = true;
      hideAllImages();
      hideControlPanel();
      toggleImgsPlayPause();
      hideControlPanelBackground();
    }


    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    //••••••••••••••••••••••••••••••≈----------------:|     MISCELLLANEOUS FUNCTIONS     |:----------------≈••••••••••••••••••••••••••••••:|•
    //•••≈--------------------------------------------------------------------------------------------------------------------------------------------------------•••≈||:
    private function toggleImgsPlayPause():void{
      //•••≈------------------------------------------------•••≈||: Handling of images
      if (toggleImagesPausePlay == true) {
        imageTimer.stop ();
      } else {
        imageTimer.start ();
      }
    }

    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Clean container
    private function cleanImageContainer (imgHolder:MovieClip):void {
      if (imgHolder.numChildren > 3) {
        imgHolder.removeChildAt (1);
      }
    }

    private function litenSelectedButn(e:MouseEvent):void {
      var targetObject:Object = e.currentTarget;
      targetObject.buttonMode = true;
      targetObject.alpha = 0;
    }

    private function drkenSelectedButn(e:MouseEvent):void {
      var targetObject:Object = e.currentTarget;
      targetObject.buttonMode = true;
      targetObject.alpha = 1;
    }
    private function litenSelectedItem(e:MouseEvent):void {
      var targetObject:Object = e.currentTarget;
      targetObject.buttonMode = true;
      targetObject.alpha = .35;
    }
    private function drkenSelectedItem(e:MouseEvent):void {
      var targetObject:Object = e.currentTarget;
      targetObject.buttonMode = true;
      targetObject.alpha = 1;
    }
    //•••≈-------------------------------------------------------------------------------------------------------------------•••≈||: Colorized Methods
    private function colorMe(mc:MovieClip, kulay:uint, alfa:Number):void {
      /*if(kulay == ""){
       } else {*/
      var myColor:ColorTransform = new ColorTransform();
      myColor.color = kulay;
      mc.transform.colorTransform = myColor;
      mc.alpha = alfa;
    }

    //-------------------createRectangle()::::::: Delete later
    private function createRectangle(mainMC:MovieClip, rX:int, rY:int, rWidth:int, rHeight:int):void{
      var target1:Sprite = new Sprite();
      target1.graphics.beginFill(0xCCFF00);
      target1.graphics.drawRect(rX, rY, rWidth, rHeight);
      target1.name = "target1";
      mainMC.addChild(target1);
    }
  }
}
