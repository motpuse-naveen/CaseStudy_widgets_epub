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
	"images/drm310.jpg",
	"images/drm311.jpg",
	"images/drm312.jpg",
	"images/drm313.jpg",
	"images/drm314.jpg",
	"images/drm320.jpg",
	"images/drm321.jpg",
	"images/drm322.jpg",
	"images/drm323.jpg",
	"images/drm330.jpg",
	"images/drm331.jpg",
	"images/drm332.jpg",
	"images/drm333.jpg",
	"images/drm340.jpg",
	"images/drm341.jpg",
	"images/drm342.jpg",
	"images/drm350.jpg",
	"images/drm351.jpg",
	"images/drm352.jpg",
	"images/drm353.jpg",
	"images/drm354.jpg",
	"images/drm360.jpg",
	"images/drm361.jpg",
	"images/drm362.jpg",
	"images/drm370.jpg",
	"images/drm371.jpg",
	"images/drm372.jpg",
	"images/drm373.jpg",
	"images/drm374.jpg",
	"images/drm375.jpg",
	"images/drm380.jpg",
	"images/drm381.jpg",
	"images/drm382.jpg",
	"images/drm390.jpg",
	"images/drm391.jpg",
	"images/drm392.jpg",
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