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
	"images/gbp310.jpg",
	"images/gbp311.jpg",
	"images/gbp312.jpg",
	"images/gbp313.jpg",
	"images/gbp320.jpg",
	"images/gbp321.jpg",
	"images/gbp322.jpg",
	"images/gbp330.jpg",
	"images/gbp331.jpg",
	"images/gbp332.jpg",
	"images/gbp340.jpg",
	"images/gbp341.jpg",
	"images/gbp350.jpg",
	"images/gbp351.jpg",
	"images/gbp352.jpg",
	"images/gbp360.jpg",
	"images/gbp361.jpg",
	"images/gbp362.jpg",
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