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
	"images/gen110.jpg",
	"images/gen111.jpg",
	"images/gen120.jpg",
	"images/gen121.jpg",
	"images/gen122.jpg",
	"images/gen123.jpg",
	"images/gen124.jpg",
	"images/gen130.jpg",
	"images/gen131.jpg",
	"images/gen132.jpg",
	"images/gen133.jpg",
	"images/gen134.jpg",
	"images/gen140.jpg",
	"images/gen141.jpg",
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