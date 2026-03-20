var imgPreloadArray = new Array("images/gray_dot_old.png",
	"images/loading.gif",
	"images/menu_btn.png",
	"images/next_btn.png",
	"images/prev_btn.png",
	"images/table_btn.png",
	"images/arrow.png",
	"images/check_btn.png",
	"images/figure-3-2.jpg",
	"images/figure-3-3.jpg",
	"images/figure-3-4.jpg",
	"images/figure-3-10.jpg",
	"images/figure-3-11.jpg",
	"images/figure-3-17.jpg",
	"images/checkbox.png",
	"images/dot.png",
	"images/gbp760.jpg",	
	"images/inf110.jpg",
	"images/inf111.jpg",
	"images/inf112.jpg",
	"images/inf113.jpg",
	"images/inf120.jpg",
	"images/inf121.jpg",
	"images/inf122.jpg",
	"images/inf130.jpg",
	"images/inf131.jpg",
	"images/inf132.jpg",
	"images/inf133.jpg",
	"images/inf134.jpg",
	"images/inf135.jpg",
	"images/inf140.jpg",
	"images/inf141.jpg",
	"images/inf142.jpg",
	"images/inf143.jpg",
	"images/inf150.jpg",
	"images/inf151.jpg",
	"images/inf152.jpg",
	"images/inf160.jpg",
	"images/inf161.jpg",
	"images/inf162.jpg",
	"images/inf163.jpg",
	"images/inf164.jpg",
	"images/inf165.jpg",
	"images/inf170.jpg",
	"images/inf171.jpg",
	"images/inf172.jpg",
	"images/inf173.jpg",
	"images/inf180.jpg",
	"images/inf181.jpg",
	"images/inf182.jpg",
	"images/inf183.jpg",
	"images/inf190.jpg",
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