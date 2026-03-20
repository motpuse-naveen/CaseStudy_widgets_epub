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
	"images/figure-13-3-a.jpg",
	"images/figure-13-3-b.jpg",
	"images/figure-8-13.jpg",		
	"images/hem310.jpg",
	"images/hem311.jpg",
	"images/hem312.jpg",
	"images/hem313.jpg",
	"images/hem314.jpg",
	"images/hem320.jpg",
	"images/hem321.jpg",
	"images/hem322.jpg",
	"images/hem323.jpg",
	"images/hem324.jpg",
	"images/hem325.jpg",
	"images/hem326.jpg",
	"images/hem330.jpg",
	"images/hem331.jpg",
	"images/hem332.jpg",
	"images/hem333.jpg",
	"images/hem340.jpg",
	"images/hem341.jpg",
	"images/hem342.jpg",
	"images/hem343.jpg",
	"images/hem350.jpg",
	"images/hem351.jpg",
	"images/hem360.jpg",
	"images/hem361.jpg",
	"images/hem362.jpg",
	"images/hem363.jpg",
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