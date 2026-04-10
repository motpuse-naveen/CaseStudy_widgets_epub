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
	"images/imm110.jpg",
	"images/imm120.jpg",
	"images/imm121.jpg",
	"images/imm122.jpg",
	"images/imm123.jpg",
	"images/imm124.jpg",
	"images/imm130.jpg",
	"images/imm131.jpg",
	"images/imm132.jpg",
	"images/imm133.jpg",
	"images/imm140.jpg",
	"images/imm141.jpg",
	"images/imm142.jpg",
	"images/imm143.jpg",
	"images/imm150.jpg",
	"images/imm151.jpg",
	"images/imm152.jpg",
	"images/imm153.jpg",
	"images/imm160.jpg",
	"images/imm161.jpg",
	"images/imm162.jpg",
	"images/imm170.jpg",
	"images/imm180.jpg",
	"images/imm181.jpg",
	"images/imm182.jpg",
	"images/imm190.jpg",
	"images/imm191.jpg",
	"images/imm192.jpg",
	"images/imm1100.jpg",
	"images/imm1101.jpg",
	"images/imm1110.jpg",
	"images/imm1120.jpg",
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