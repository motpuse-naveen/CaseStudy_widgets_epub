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
	"images/Figure 19-2.jpg",
	"images/Figure 19-5.jpg",
	"images/Figure 19-12.jpg",
	"images/liv610.jpg",
	"images/liv611.jpg",
	"images/liv612.jpg",
	"images/liv613.jpg",
	"images/liv620.jpg",
	"images/liv621.jpg",
	"images/liv630.jpg",
	"images/liv631.jpg",
	"images/liv632.jpg",
	"images/liv633.jpg",
	"images/liv640.jpg",
	"images/liv641.jpg",
	"images/liv650.jpg",
	"images/liv651.jpg",
	"images/liv660.jpg",
	"images/liv661.jpg",
	"images/liv670.jpg",
	"images/liv671.jpg",
	"images/liv672.jpg",
	"images/liv673.jpg",
	"images/liv680.jpg",
	"images/liv681.jpg",
	"images/liv682.jpg",
	"images/liv690.jpg",
	"images/liv691.jpg",
	"images/liv692.jpg",
	"images/liv693.jpg",
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