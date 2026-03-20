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
	"images/res410.jpg",		
	"images/res420.jpg",
	"images/res430.jpg",
	"images/res440.jpg",
	"images/res441.jpg",
	"images/res442.jpg",
	"images/res450.jpg",
	"images/res451.jpg",
	"images/res460.jpg",
	"images/res470.jpg",
	"images/res480.jpg",
	"images/res481.jpg",
	"images/res482.jpg",
	"images/res483.jpg",
	"images/res484.jpg",
	"images/res490.jpg",
	"images/res491.jpg",
	"images/res492.jpg",
	"images/res4100.jpg",
	"images/res4101.jpg",
	"images/res4102.jpg",
	"images/res4110.jpg",
	"images/res4111.jpg",
	"images/res4120.jpg",
	"images/res4130.jpg",
	"images/res4131.jpg",
	"images/res4140.jpg",	
	"images/res4150.jpg",	
	"images/res4151.jpg",	
	"images/res4152.jpg",	
	"images/res4160.jpg",	
	"images/res4161.jpg",	
	"images/res4162.jpg",
	// "videos/video_sarcoidosis.mp4",
	// "videos/video_sarcoidosis.webm",
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