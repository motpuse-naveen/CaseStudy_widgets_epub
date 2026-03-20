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
	"images/inf510.jpg",
	"images/inf511.jpg",
	"images/inf520.jpg",
	"images/inf521.jpg",
	"images/inf530.jpg",
	"images/inf531.jpg",
	"images/inf532.jpg",
	"images/inf540.jpg",
	"images/inf541.jpg",
	"images/inf542.jpg",
	"images/inf543.jpg",
	"images/inf550.jpg",
	"images/inf560.jpg",
	"images/inf561.jpg",
	"images/inf570.jpg",
	"images/inf571.jpg",
	"images/inf572.jpg",
	"images/inf580.jpg",
	"images/inf581.jpg",
	"images/inf582.jpg",
	"images/inf583.jpg",
	"images/inf590.jpg",
	"images/inf591.jpg",
	"images/inf592.jpg",
	"images/inf5100.jpg",
	"images/inf5101.jpg",
	"images/inf5102.jpg",

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