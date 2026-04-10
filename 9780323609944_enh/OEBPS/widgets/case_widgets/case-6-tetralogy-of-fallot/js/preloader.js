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
	"images/figure-12-6.jpg",
	"images/figure-12-8.jpg",	
	"images/cvd710.jpg",
	"images/cvd711.jpg",
	"images/cvd712.jpg",
	"images/cvd713.jpg",
	"images/cvd714.jpg",
	"images/cvd715.jpg",
	"images/cvd720.jpg",
	"images/cvd721.jpg",
	"images/cvd722.jpg",
	"images/cvd723.jpg",
	"images/cvd724.jpg",
	"images/cvd725.jpg",
	"images/cvd730.jpg",
	"images/cvd740.jpg",
	"images/cvd741.jpg",
	"images/cvd742.jpg",
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