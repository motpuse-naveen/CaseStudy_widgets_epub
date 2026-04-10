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
	"images/bon410.jpg",
	"images/bon411.jpg",
	"images/bon420.jpg",
	"images/bon421.jpg",
	"images/bon422.jpg",
	"images/bon430.jpg",
	"images/bon431.jpg",
	"images/bon432.jpg",
	"images/bon440.jpg",
	"images/bon441.jpg",
	"images/bon442.jpg",
	"images/bon450.jpg",
	"images/bon451.jpg",
	"images/bon452.jpg",
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