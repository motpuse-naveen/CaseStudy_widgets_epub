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
	"images/bon110.jpg",
	"images/bon120.jpg",
	"images/bon121.jpg",
	"images/bon122.jpg",
	"images/bon123.jpg",
	"images/bon130.jpg",
	"images/bon131.jpg",
	"images/bon140.jpg",
	"images/bon141.jpg",
	"images/bon150.jpg",
	"images/bon160.jpg",
	"images/bon170.jpg",
	"images/bon180.jpg",
	"images/bon181.jpg",
	"images/bon182.jpg",
	"images/bon190.jpg",
	"images/bon1100.jpg",
	"images/bon1101.jpg",
	"images/bon1102.jpg",
	"images/bon1103.jpg",
	"images/bon1110.jpg",
	"images/bon1111.jpg",
	"images/bon1112.jpg",
	"images/bon1113.jpg",
	"images/bon1114.jpg",
	"images/bon1120.jpg",
	"images/bon1121.jpg",
	"images/bon1122.jpg",
	"images/bon1123.jpg",
	"images/bon1130.jpg",
	"images/bon1131.jpg",
	"images/bon1140.jpg",
	"images/bon1150.jpg",
	"images/bon1151.jpg",
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