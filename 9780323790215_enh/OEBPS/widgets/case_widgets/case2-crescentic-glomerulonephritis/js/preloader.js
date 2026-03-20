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
	"images/Figure 20-5.jpg",
	"images/Figure 20-6.jpg",
	"images/ren210.jpg",		
	"images/ren211.jpg",
	"images/ren212.jpg",
	"images/ren220.jpg",
	"images/ren221.jpg",
	"images/ren222.jpg",
	"images/ren223.jpg",
	"images/ren224.jpg",
	"images/ren230.jpg",
	"images/ren231.jpg",
	"images/ren232.jpg",
	"images/ren233.jpg",
	"images/ren234.jpg",
	"images/ren235.jpg",
	"images/ren236.jpg",
	"images/ren237.jpg",
	"images/ren240.jpg",
	"images/ren250.jpg",
	"images/ren251.jpg",
	"images/ren252.jpg",
	"images/ren253.jpg",
	"images/ren260.jpg",
	"images/ren261.jpg",
	"images/ren262.jpg",
	"images/ren263.jpg",
	"images/ren264.jpg",
	"images/ren265.jpg",	
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