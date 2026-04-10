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
	"images/Figure_13-5.jpg",
	"images/Figure_13-18.jpg",
	"images/hem610.jpg",
	"images/hem611.jpg",
	"images/hem612.jpg",
	"images/hem613.jpg",
	"images/hem620.jpg",
	"images/hem621.jpg",
	"images/hem622.jpg",
	"images/hem623.jpg",
	"images/hem630.jpg",
	"images/hem631.jpg",
	"images/hem632.jpg",
	"images/hem640.jpg",
	"images/hem641.jpg",
	"images/hem642.jpg",
	"images/hem643.jpg",
	"images/hem644.jpg",
	"images/hem650.jpg",
	"images/hem651.jpg",
	"images/hem652.jpg",
	"images/hem653.jpg",	
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