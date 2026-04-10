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
	"images/drm410.jpg",
	"images/drm411.jpg",
	"images/drm412.jpg",
	"images/drm420.jpg",
	"images/drm421.jpg",
	"images/drm422.jpg",
	"images/drm423.jpg",
	"images/drm430.jpg",
	"images/drm431.jpg",
	"images/drm432.jpg",
	"images/drm433.jpg",
	"images/drm440.jpg",
	"images/drm441.jpg",
	"images/drm442.jpg",
	"images/drm443.jpg",
	"images/drm450.jpg",
	"images/drm451.jpg",
	"images/drm452.jpg",
	"images/drm460.jpg",
	"images/drm461.jpg",
	"images/drm462.jpg",
	"images/drm463.jpg",
	"images/drm470.jpg",
	"images/drm471.jpg",
	"images/drm472.jpg",
	"images/drm480.jpg",
	"images/drm481.jpg",
	"images/drm482.jpg",
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