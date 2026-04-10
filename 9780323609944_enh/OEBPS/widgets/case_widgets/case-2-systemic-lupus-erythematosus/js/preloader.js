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
	"images/imm210.jpg",
	
	"images/imm220.jpg",
	"images/imm230.jpg",
	"images/imm231.jpg",
	"images/imm240.jpg",
	
	"images/imm250.jpg",
	"images/imm251.jpg",
	"images/imm260.jpg",
	"images/imm261.jpg",
	"images/imm262.jpg",

	"images/imm270.jpg",
	"images/imm280.jpg",
	"images/imm290.jpg",
	"images/imm291.jpg",
	"images/imm292.jpg",
	"images/imm2100.jpg",
	"images/imm2101.jpg",
	"images/imm2102.jpg",
	"images/imm2110.jpg",
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