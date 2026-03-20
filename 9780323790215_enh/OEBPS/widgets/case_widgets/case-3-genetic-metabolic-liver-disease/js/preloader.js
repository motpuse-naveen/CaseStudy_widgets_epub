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
	"images/figure-18-24.jpg",
"images/liv310.jpg",
"images/liv311.jpg",
"images/liv312.jpg",
"images/liv320.jpg",
"images/liv321.jpg",
"images/liv322.jpg",

"images/liv323.jpg",

"images/liv324.jpg",

"images/liv325.jpg",

"images/liv330.jpg",

"images/liv340.jpg",

"images/liv350.jpg",
"images/liv351.jpg",

"images/liv360.jpg",

"images/liv370.jpg",

"images/liv380.jpg",
"images/liv381.jpg",
"images/liv382.jpg",
"images/liv383.jpg",

"images/liv390.jpg",

"images/liv3100.jpg",
"images/liv3101.jpg",
"images/liv3102.jpg",
"images/liv3110.jpg",

"images/flh180.jpg",
"images/flh190.jpg",
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