var imgPreloadArray = new Array("images/gray_dot_old.png",
	"images/loading.gif",
	"images/menu_btn.png",
	"images/next_btn.png",
	"images/prev_btn.png",
	"images/table_btn.png",
	"images/arrow.png",
	"images/check_btn.png",
	"images/checkbox.png",
	"images/dot.png",
	"images/liv510.jpg",
	"images/liv511.jpg",
	"images/liv512.jpg",
	"images/liv520.jpg",
	"images/liv521.jpg",
	"images/liv522.jpg",
	"images/liv523.jpg",
	"images/liv530.jpg",
	"images/liv531.jpg",
	"images/liv540.jpg",
	"images/liv541.jpg",
	"images/liv542.jpg",
	"images/liv543.jpg",
	"images/liv544.jpg",
	"images/liv550.jpg",
	"images/liv560.jpg",
	"images/liv570.jpg",
	"images/liv571.jpg",
	"images/liv572.jpg",
	"images/liv580.jpg",
	"images/liv581.jpg",
	"images/liv582.jpg",
	"images/liv583.jpg",
	"images/liv590.jpg",
	"images/liv591.jpg",
	"images/liv592.jpg",	
	"images/liv593.jpg",	
	"images/liv5100.jpg",	
	"images/liv5101.jpg",	
	"images/liv5110.jpg",	
	"images/liv5111.jpg",	
	"images/liv5112.jpg",	
	"images/liv5113.jpg",	
	"images/liv5120.jpg",	
	"images/liv5121.jpg",	
	"images/liv5130.jpg",	
	"images/liv5131.jpg",	
	"images/liv5132.jpg",	
	"images/liv5133.jpg",	
	"images/placeholder.jpg",
	"images/placeholder.png",
	"images/gray_dot.png");
var imagePreCount = 0;
for(var pId = 0; pId < imgPreloadArray.length; pId++)
{
	var img = new Image();
	img.onload = imagePreloaded;
	img.src = imgPreloadArray[pId];
}
function imagePreloaded()
{
	imagePreCount++;
}