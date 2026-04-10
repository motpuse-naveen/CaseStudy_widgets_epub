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
	"images/figure_3-10.jpg",
	"images/figure_6-5.jpg",
	"images/figure_6-18.jpg",	
	"images/inf310.jpg",
	"images/inf320.jpg",
	"images/inf321.jpg",
	"images/inf322.jpg",
	"images/inf330.jpg",
	"images/inf331.jpg",
	"images/inf340.jpg",
	"images/inf341.jpg",
	"images/inf350.jpg",
	"images/inf351.jpg",
	"images/inf352.jpg",
	"images/inf353.jpg",
	"images/inf354.jpg",
	"images/inf355.jpg",
	"images/inf356.jpg",
	"images/inf357.jpg",
	"images/inf358.jpg",	
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