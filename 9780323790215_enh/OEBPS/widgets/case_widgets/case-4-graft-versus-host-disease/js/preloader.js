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
	"images/imm410.jpg",
	"images/imm420.jpg",
	"images/imm430.jpg",
	"images/imm440.jpg",
	"images/imm441.jpg",
	"images/imm442.jpg",
	"images/imm450.jpg",
	"images/imm451.jpg",
	"images/imm452.jpg",
	"images/imm460.jpg",
	"images/imm461.jpg",
	"images/imm462.jpg",
	"images/imm470.jpg",
	"images/imm471.jpg",
	"images/imm472.jpg",
	"images/imm473.jpg",
	"images/imm474.jpg",
	"images/imm480.jpg",
	"images/imm481.jpg",
	"images/imm482.jpg",
	"images/imm490.jpg",
	"images/imm491.jpg",
	"images/imm492.jpg",
	"images/imm4100.jpg",
	"images/imm4101.jpg",
	"images/imm4102.jpg",
	"images/imm4110.jpg",
	"images/imm4111.jpg",
	"images/imm4112.jpg",
	"images/imm4113.jpg",
	"images/imm4120.jpg",
	"images/imm4121.jpg",
	"images/imm4122.jpg",
	"images/imm4130.jpg",
	"images/imm4131.jpg",
	"images/imm4132.jpg",
	"images/imm4133.jpg",
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