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
	"images/drm710.jpg",
	"images/drm711.jpg",
	"images/drm712.jpg",
	"images/drm720.jpg",
	"images/drm721.jpg",
	"images/drm722.jpg",
	"images/drm723.jpg",
	"images/drm724.jpg",
	"images/drm725.jpg",
	"images/drm730.jpg",
	"images/drm731.jpg",
	"images/drm732.jpg",
	"images/drm733.jpg",
	"images/drm740.jpg",
	"images/drm741.jpg",
	"images/drm750.jpg",
	"images/drm751.jpg",
	"images/drm752.jpg",
	"images/drm753.jpg",
	"images/drm760.jpg",
	"images/drm761.jpg",
	"images/gbp350.jpg",
	"images/drm762.jpg",
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