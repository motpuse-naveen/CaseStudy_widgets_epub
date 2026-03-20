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
	"images/figure-10-6.jpg",
	"images/figure-10-6_b.jpg",
	"images/ped110.jpg",
	"images/ped120.jpg",
	"images/ped121.jpg",
	"images/ped130.jpg",
	"images/ped131.jpg",
	"images/ped132.jpg",
	"images/ped140.jpg",
	"images/ped141.jpg",
	"images/ped142.jpg",
	"images/ped150.jpg",
	"images/ped151.jpg",
	"images/ped152.jpg",
	"images/ped153.jpg",
	"images/ped160.jpg",
	"images/ped161.jpg",
	"images/ped162.jpg",
	"images/ped163.jpg",
	"images/ped170.jpg",
	"images/ped171.jpg",
	"images/ped180.jpg",
	"images/ped181.jpg",
	"images/ped182.jpg",
	"images/ped183.jpg",
	"images/ped190.jpg",
	"images/ped191.jpg",
	"images/ped192.jpg",
	"images/ped1100.jpg",
	"images/ped1110.jpg",
	"images/ped1111.jpg",
	"images/ped1112.jpg",
	"images/ped1120.jpg",
	"images/ped1121.jpg",
	"images/ped1122.jpg",
	"images/ped1150.jpg",
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