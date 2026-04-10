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
	
	"images/closeicon.png",
	"images/diabeticglomerulosclerosis.mp4",
	"images/diabeticglomerulosclerosis.webm",
	"images/end610.jpg",
	"images/end611.jpg",
	"images/end620.jpg",
	"images/end621.jpg",
	"images/end622.jpg",
	"images/end623.jpg",
	"images/end624.jpg",
	"images/end625.jpg",
	"images/end630.jpg",
	"images/end631.jpg",
	"images/end632.jpg",
	"images/end640.jpg",
	"images/end641.jpg",
	"images/end642.jpg",
	"images/end643.jpg",
	"images/end650.jpg",
	"images/end651.jpg",
	"images/end660.jpg",
	"images/end670.jpg",
	"images/end671.jpg",
	"images/end672.jpg",
	"images/end673.jpg",
	"images/end680.jpg",
	"images/end681.jpg",
	"images/end682.jpg",
	"images/end683.jpg",
	"images/Figure 24-28.jpg",
	"images/Figure 24-31.jpg",
	"images/Figure 24-32.jpg",
	"images/Figure 24-33.jpg",
	"images/Figure 24-34.jpg",
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