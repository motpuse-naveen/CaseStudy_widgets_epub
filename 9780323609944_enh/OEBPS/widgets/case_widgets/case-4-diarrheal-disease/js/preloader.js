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
	"images/Figure 17-25.jpg",
"images/gas410.jpg",
"images/gas411.jpg",
"images/gas420.jpg",
"images/gas421.jpg",
"images/gas422.jpg",
"images/gas430.jpg",
"images/gas431.jpg",
"images/gas440.jpg",
"images/gas441.jpg",
"images/gas450.jpg",
"images/gas451.jpg",
"images/gas452.jpg",
"images/gas453.jpg",
"images/gas454.jpg",
"images/gas455.jpg",
"images/gas456.jpg",
"images/gas457.jpg",
"images/gas458.jpg",
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