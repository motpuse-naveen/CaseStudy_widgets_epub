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
	"images/hem410.jpg",
	"images/hem420.jpg",
	"images/hem421.jpg",
	"images/hem430.jpg",
	"images/hem431.jpg",

	"images/hem440.jpg",
	"images/hem441.jpg",
	"images/hem442.jpg",
	"images/hem450.jpg",
	
	"images/hem460.jpg",
	"images/hem461.jpg",
	"images/hem470.jpg",
	"images/hem471.jpg",
	"images/hem480.jpg",
	"images/hem481.jpg",
	"images/hem482.jpg",
	"images/hem483.jpg",
	"images/hem490.jpg",
	"images/hem491.jpg",
	"images/hem492.jpg",
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