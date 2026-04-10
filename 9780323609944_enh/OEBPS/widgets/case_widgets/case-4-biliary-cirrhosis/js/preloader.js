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
	"images/liv410.jpg",
	"images/liv411.jpg",
	"images/liv420.jpg",
	"images/liv421.jpg",
	"images/liv430.jpg",
	"images/liv431.jpg",
	"images/liv440.jpg",
	"images/liv441.jpg",
	"images/liv442.jpg",
	"images/liv450.jpg",
	"images/liv460.jpg",
	"images/liv461.jpg",
	"images/liv462.jpg",
	"images/liv463.jpg",
	"images/liv470.jpg",
	"images/liv480.jpg",
	"images/liv481.jpg",
	"images/liv482.jpg",
	"images/liv483.jpg",
	"images/liv484.jpg",
	"images/liv490.jpg",
	"images/liv491.jpg",
	"images/liv492.jpg",
	"images/liv493.jpg",
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