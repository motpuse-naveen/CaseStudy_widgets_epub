lvar imgPreloadArray = new Array("images/gray_dot_old.png",
	"images/loading.gif",
	"images/menu_btn.png",
	"images/next_btn.png",
	"images/prev_btn.png",
	"images/table_btn.png",
	"images/arrow.png",
	"images/check_btn.png",
	"images/checkbox.png",
	"images/dot.png",
	"images/drm610.jpg",
	"images/drm611.jpg",
	"images/drm612.jpg",
	"images/drm620.jpg",
	"images/drm621.jpg",
	"images/drm622.jpg",
	"images/drm623.jpg",
	"images/drm624.jpg",
	"images/drm630.jpg",
	"images/drm631.jpg",
	"images/drm632.jpg",
	"images/drm633.jpg",
	"images/drm640.jpg",
	"images/drm641.jpg",
	"images/drm650.jpg",
	"images/drm651.jpg",
	"images/drm652.jpg",
	"images/drm653.jpg",
	"images/drm660.jpg",
	"images/drm661.jpg",
	"images/drm662.jpg",
	"images/drm663.jpg",
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