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
	"images/drm110.jpg",
	"images/drm111.jpg",
	"images/drm112.jpg",

	"images/drm120.jpg",
	"images/drm121.jpg",
	"images/drm122.jpg",
	"images/drm123.jpg",
	"images/drm124.jpg",
	"images/drm125.jpg",


	"images/drm130.jpg",
	"images/drm131.jpg",
	"images/drm132.jpg",
	"images/drm133.jpg",
	"images/drm140.jpg",
	"images/drm141.jpg",
	"images/drm142.jpg",
	"images/drm143.jpg",
	"images/drm144.jpg",

	"images/drm150.jpg",
	"images/drm151.jpg",
	"images/drm152.jpg",
	"images/drm153.jpg",
	"images/drm154.jpg",
	"images/drm155.jpg",
	"images/drm156.jpg",
	"images/drm157.jpg",

	"images/drm160.jpg",
	"images/drm161.jpg",
	"images/drm162.jpg",
	"images/drm163.jpg",
	"images/drm164.jpg",


	"images/drm170.jpg",
	"images/drm171.jpg",
	"images/drm172.jpg",
	"images/drm173.jpg",


	"images/drm180.jpg",
	"images/drm181.jpg",
	
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