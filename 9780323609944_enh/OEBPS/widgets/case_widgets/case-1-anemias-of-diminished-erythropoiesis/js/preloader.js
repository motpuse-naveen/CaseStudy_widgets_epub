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
	"images/Figure 14-1.jpg",
	"images/Figure Unname1.jpg",
	"images/Figure Unname2.jpg",		
	"images/Figure_14-5.jpg",
	"images/Figure_14-18.jpg",
	"images/Figure_14-19.jpg",
	"images/Figure_14-20.jpg",
	"images/Figure_14-24.jpg",
	"images/hem110.jpg",
	"images/hem111.jpg",
	"images/hem120.jpg",
	"images/hem121.jpg",
	"images/hem122.jpg",
	"images/hem123.jpg",
	"images/hem124.jpg",
	"images/hem130.jpg",
	"images/hem131.jpg",
	"images/hem132.jpg",
	"images/hem140.jpg",
	"images/hem141.jpg",
	"images/hem142.jpg",
	"images/hem150.jpg",
	"images/hem160.jpg",
	"images/hem161.jpg",
	"images/hem162.jpg",
	"images/hem170.jpg",
	"images/hem171.jpg",
	"images/hem172.jpg",
	"images/hem180.jpg",
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