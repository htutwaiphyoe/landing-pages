
var image1 = new Image();
image1.src = "assets/imgs/slide.jpg";
var image2 = new Image();
image2.src = "assets/imgs/slide2.jpg";
var image3 = new Image();
image3.src = "assets/imgs/slide3.jpg";
var image4 = new Image();
image4.src = "assets/imgs/slide4.jpg";


var step=1;
function jimmy()
{
	document.images.slide.src=eval("image"+step+".src");
	if(step<4)
	{
		step++;
	}
	else
	{
		step=1;
	}
	setTimeout("jimmy()",2000);
}
jimmy();