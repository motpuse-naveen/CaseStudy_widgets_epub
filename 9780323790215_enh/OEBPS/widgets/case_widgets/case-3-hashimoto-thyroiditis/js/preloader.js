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
	"images/Figure 24-10.jpg",
"images/end310.jpg",

"images/end320.jpg",
"images/end321.jpg",
"images/end322.jpg",
"images/end330.jpg",
"images/end331.jpg",
"images/end332.jpg",
"images/end340.jpg",
"images/end350.jpg",
"images/end351.jpg",

"images/end360.jpg",
"images/end361.jpg",



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