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
	"images/figure-12-4.jpg",
	"images/cvd610.jpg",
	"images/cvd611.jpg",
	"images/cvd620.jpg",
	"images/cvd621.jpg",
	"images/cvd622.jpg",
	"images/cvd623.jpg",
	"images/cvd624.jpg",
	"images/cvd630.jpg",
	"images/cvd640.jpg",
	"images/cvd641.jpg",
	"images/cvd642.jpg",
	"images/cvd650.jpg",
	"images/cvd651.jpg",
	"images/cvd652.jpg",
	"images/cvd653.jpg",
	"images/cvd654.jpg",
	"images/cvd655.jpg",
	"images/cvd660.jpg",
	"images/cvd661.jpg",
	"images/cvd662.jpg",
	"images/cvd663.jpg",
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