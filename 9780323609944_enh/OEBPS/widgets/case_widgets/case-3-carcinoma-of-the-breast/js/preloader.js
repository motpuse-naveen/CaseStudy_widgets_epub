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
	"images/neo310.jpg",
	"images/neo311.jpg",
	"images/neo320.jpg",
	"images/neo321.jpg",
	"images/neo322.jpg",
	"images/neo323.jpg",
	"images/neo324.jpg",
	"images/neo330.jpg",
	"images/neo331.jpg",
	"images/neo340.jpg",
	"images/neo350.jpg",
	"images/neo370.jpg",
	"images/neo1110.jpg",
	"images/neo3100.jpg",
	"images/neo3101.jpg",
	"images/neo3102.jpg",
	"images/neo3103.jpg",
	"images/placholder.jpg",
	"images/placholder.ppg",
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