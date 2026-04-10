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
	"images/neo110.jpg",
	"images/neo111.jpg",
	"images/neo120.jpg",
	"images/neo121.jpg",
	"images/neo122.jpg",
	"images/neo123.jpg",
	"images/neo124.jpg",
	"images/neo130.jpg",
	"images/neo131.jpg",
	"images/neo140.jpg",
	"images/neo150.jpg",
	"images/neo151.jpg",
	"images/neo160.jpg",
	"images/neo170.jpg",
	"images/neo190.jpg",
	"images/neo1110.jpg",
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