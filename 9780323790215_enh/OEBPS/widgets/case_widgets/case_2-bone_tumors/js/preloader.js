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
	"images/bon210.jpg",
	"images/bon211.jpg",
	"images/bon212.jpg",
	"images/bon213.jpg",
	"images/bon220.jpg",
	"images/bon230.jpg",
	"images/bon231.jpg",
	"images/bon240.jpg",
	"images/bon241.jpg",
	"images/bon250.jpg",
	"images/bon251.jpg",
	"images/bon260.jpg",
	"images/bon261.jpg",
	"images/bon270.jpg",
	"images/bon271.jpg",
	"images/bon280.jpg",
	"images/bon281.jpg",
	"images/bon290.jpg",
	"images/bon291.jpg",
	"images/bon2100.jpg",
	"images/bon2101.jpg",
	"images/bon2110.jpg",
	"images/bon2111.jpg",
	"images/bon2112.jpg",
	"images/bon2113.jpg",
	"images/bon2120.jpg",
	"images/bon2130.jpg",
	"images/bon2140.jpg",
	"images/bon2141.jpg",
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