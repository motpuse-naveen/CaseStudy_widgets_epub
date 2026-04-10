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
	"images/image004.png",
	"images/image005.png",
	"images/image006.png",
	"images/image008.png",
	"images/image010.png",
	"images/image012.png",
	"images/image015.png",
	"images/image017.png",
	"images/image020.png",
	"images/inf190.jpg",
	"images/inf410.jpg",
	"images/inf411.jpg",
	// "images/gray_dot.png",
	"images/inf412.jpg",
	"images/inf413.jpg",
	"images/inf414.jpg",
	"images/inf420.jpg",
	"images/inf421.jpg",
	"images/inf422.jpg",
	"images/inf423.jpg",
	"images/inf430.jpg",
	"images/inf431.jpg",
	"images/inf432.jpg",
	"images/inf433.jpg",
	"images/inf440.jpg",
	"images/inf441.jpg",
	"images/inf442.jpg",
	"images/inf450.jpg",
	"images/inf451.jpg",
	"images/inf452.jpg",
	"images/inf453.jpg",
	"images/inf460.jpg",
	"images/inf461.jpg",
	"images/inf462.jpg",
	"images/inf463.jpg",
	"images/inf470.jpg",
	"images/inf471.jpg",
	"images/inf480.jpg",
	"images/inf481.jpg");
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