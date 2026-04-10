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
	"images/figure-21-30.jpg",
	"images/figure-21-32.jpg",
	"images/gbp210.jpg",
	"images/gbp211.jpg",
	"images/gbp220.jpg",
	"images/gbp221.jpg",
	"images/gbp222.jpg",
	"images/gbp230.jpg",
	"images/gbp231.jpg",
	"images/gbp232.jpg",
	"images/gbp240.jpg",
	"images/gbp241.jpg",
	"images/gbp242.jpg",
	"images/gbp250.jpg",
	"images/gbp251.jpg",
	"images/gbp252.jpg",
	"images/gbp260.jpg",
	"images/gbp261.jpg",
	"images/gbp262.jpg",
	"images/gbp270.jpg",
	"images/gbp271.jpg",
	"images/gbp272.jpg",
	"images/gbp273.jpg",
	"images/gbp280.jpg",
	"images/gbp290.jpg",
	"images/gbp291.jpg",
	"images/gbp292.jpg",
	"images/gbp293.jpg",
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