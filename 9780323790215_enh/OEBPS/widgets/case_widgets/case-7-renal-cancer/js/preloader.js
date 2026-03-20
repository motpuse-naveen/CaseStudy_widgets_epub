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
	"images/ren760.jpg",
	"images/ren710.jpg",
	"images/ren711.jpg",
	"images/ren712.jpg",
	"images/ren720.jpg",
	"images/ren721.jpg",
	"images/ren722.jpg",
	"images/ren723.jpg",
	"images/ren724.jpg",
	"images/ren730.jpg",
	"images/ren731.jpg",
	"images/ren732.jpg",
	"images/ren733.jpg",
	"images/ren734.jpg",
	"images/ren740.jpg",
	"images/ren741.jpg",
	"images/ren742.jpg",
	"images/ren743.jpg",
	"images/ren744.jpg",
	"images/ren745.jpg",
	"images/ren746.jpg",
	"images/ren747.jpg",
	"images/ren750.jpg",
	"images/ind350.jpg",
	"images/ind360.jpg",
	"images/ind370.jpg",
	"images/ren751.jpg",
	"images/ren752.jpg",
	"images/ren753.jpg",
	"images/ren754.jpg",
	"images/ren755.jpg",
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