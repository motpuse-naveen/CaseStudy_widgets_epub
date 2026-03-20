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
	"images/drm510.jpg",
	"images/drm511.jpg",
	"images/drm520.jpg",
	"images/drm521.jpg",
	"images/drm522.jpg",
	"images/drm523.jpg",
	"images/drm530.jpg",
	"images/drm531.jpg",
	"images/drm540.jpg",
	"images/drm541.jpg",
	"images/drm542.jpg",
	"images/drm550.jpg",
	"images/drm551.jpg",
	"images/drm552.jpg",
	"images/drm553.jpg",
	"images/drm554.jpg",

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