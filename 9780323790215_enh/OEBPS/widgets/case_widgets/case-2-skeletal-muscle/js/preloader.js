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
	"images/Figure 27-7.jpg",
	"images/Figure 27-10.jpg",
	"images/cns610.jpg",
	"images/cns611.jpg",
	"images/cns612.jpg",
	"images/cns613.jpg",
	"images/cns614.jpg",
	"images/cns615.jpg",
	"images/cns620.jpg",
	"images/cns621.jpg",
	"images/cns622.jpg",
	"images/cns623.jpg",
	"images/cns624.jpg",
	"images/cns625.jpg",
	"images/cns630.jpg",
	"images/cns640.jpg",
	"images/cns641.jpg",
	"images/cns650.jpg",
	"images/cns651.jpg",
	"images/cns652.jpg",
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