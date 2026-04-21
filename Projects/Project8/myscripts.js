// JavaScript Document
var PrintButton1 = new Image();
var PrintButton2 = new Image();
var logo = new Image();
var logo2 = new Image();
if (document.images) {
	PrintButton1.src = "Images/print1.jpg";
	PrintButton2.src = "Images/print2.jpg";
	logo.src = "Images/logo.jpg";
	logo2.src = "Images/logo2.jpg";
}


var imgArray = new Array(
	'BaldEagleLg.jpg',
	'Owl1Lg.jpg',
	'WoodDuckLg.jpg',
	'HeronLg.jpg'
);


var titleArray = new Array(
	'Bald Eagle',
	'Owl',
	'Wood Duck',
	'Heron'		
);
			
var imgPath = "Images/fullsize/";
		
function swapImage(imgID) {

	var theImage = document.getElementById('theImage');
	var textDiv = document.getElementById('bottomText');

	var newImg;
	var textTitle;

	newImg = imgArray[imgID];
	theImage.src = imgPath + newImg;

	textTitle=titleArray[imgID];

      textDiv.innerHTML = textTitle;
}
			
function preloadImages() {		
	for(var i = 0; i < imgArray.length; i++) {
		var tmpImg = new Image;
		tmpImg.src = imgPath + imgArray[i];
	}
}
		