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
	"images/gen310.jpg",
	"images/gen311.jpg",
	"images/gen312.jpg",
	"images/gen320.jpg",
	"images/gen321.jpg",
	"images/gen322.jpg",
	"images/gen323.jpg",
	"images/gen330.jpg",
	"images/gen331.jpg",
	"images/gen340.jpg",
	"images/gen341.jpg",
	"images/gen342.jpg",
	"images/gen343.jpg",
	"images/gen350.jpg",
	"images/gen351.jpg",
	"images/gen352.jpg",
	"images/gen353.jpg",
	"images/gen360.jpg",
	"images/gen361.jpg",
	"images/gen370.jpg",
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