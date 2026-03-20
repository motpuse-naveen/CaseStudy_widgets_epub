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
	"images/res610.jpg",
	"images/res611.jpg",
"images/res612.jpg",
"images/res620.jpg",
"images/res621.jpg",
"images/res622.jpg",
"images/res630.jpg",
"images/res631.jpg",
"images/res632.jpg",
"images/res640.jpg",
"images/res650.jpg",
"images/res651.jpg",
"images/res652.jpg",
"images/res660.jpg",
"images/res661.jpg",
"images/res662.jpg",
"images/res663.jpg",
"images/res670.jpg",
"images/res671.jpg",
"images/res680.jpg",
"images/res681.jpg",
"images/res682.jpg",
"images/res683.jpg",
"images/res690.jpg",
"images/res691.jpg",
"images/res692.jpg",
"images/res693.jpg",
"images/res6100.jpg",
"images/res6101.jpg",
"images/res6102.jpg",
"images/res6103.jpg",
"images/res6104.jpg",
"images/res6110.jpg",
"images/res6111.jpg",
"images/res6112.jpg",
"images/res6120.jpg",
"images/res6121.jpg",
"images/res6122.jpg",
"images/res6130.jpg",
"images/res6140.jpg",
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