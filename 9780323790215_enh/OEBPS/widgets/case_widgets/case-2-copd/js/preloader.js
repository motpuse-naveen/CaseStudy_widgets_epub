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
	"images/Figure 15-5.jpg",
	"images/Figure 15-6.jpg",
	"images/Figure 15-8.jpg",
	"images/Figure 15-29.jpg",
	"images/res210.jpg",
	"images/res211.jpg",
	"images/res212.jpg",
	"images/res220.jpg",
	"images/res221.jpg",
	"images/res222.jpg",
	"images/res230.jpg",
	"images/res231.jpg",
	"images/res240.jpg",
	"images/res241.jpg",
	"images/res250.jpg",
	"images/res251.jpg",
	"images/res260.jpg",
	"images/res261.jpg",
	"images/res270.jpg",
	"images/res271.jpg",
	"images/res280.jpg",
	"images/res281.jpg",
	"images/res282.jpg",
	"images/res290.jpg",
	"images/res291.jpg",
	"images/res292.jpg",
	"images/res2100.jpg",
	"images/res2101.jpg",
	"images/res2102.jpg",
	"images/res2110.jpg",
	"images/res2111.jpg",
	"images/res2112.jpg",
	"images/liv350.jpg",
	"images/cvd640.jpg",
	"images/res2120.jpg",
	"images/res2121.jpg",	
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