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
	"images/imm310.jpg",
	"images/imm311.jpg",
	"images/imm312.jpg",
	"images/imm313.jpg",
	"images/imm320.jpg",
	"images/imm321.jpg",
	"images/imm322.jpg",
	"images/imm330.jpg",
	"images/imm331.jpg",
	"images/imm332.jpg",
	"images/imm333.jpg",
	"images/imm340.jpg",
	"images/imm350.jpg",
	"images/immk180.jpg",
	"images/ind5140.jpg",
	"images/placeholder.jpg",
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