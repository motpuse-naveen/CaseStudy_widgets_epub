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
	"images/figure-12-13.jpg",
	"images/figure-12-29.jpg",
	"images/figure-12-30.jpg",
	"images/figure-12-31.jpg",
	"images/cvd510.jpg",
	"images/cvd511.jpg",
	"images/cvd512.jpg",
	"images/cvd513.jpg",
	"images/cvd514.jpg",
	"images/cvd515.jpg",
	"images/cvd520.jpg",
	"images/cvd521.jpg",
	"images/cvd530.jpg",
	"images/cvd531.jpg",
	"images/cvd532.jpg",
	"images/cvd533.jpg",
	"images/cvd540.jpg",
	"images/cvd550.jpg",
	"images/cvd551.jpg",
	"images/cvd552.jpg",
	"images/cvd560.jpg",
	"images/cvd561.jpg",
	"images/cvd570.jpg",
	"images/cvd571.jpg",
	"images/cvd572.jpg",
	"images/cvd573.jpg",
	"images/cvd580.jpg",
	"images/cvd581.jpg",
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