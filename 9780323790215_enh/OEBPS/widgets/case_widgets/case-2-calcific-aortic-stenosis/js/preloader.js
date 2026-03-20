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
	"images/figure-12-8.jpg",	
	"images/cvd210.jpg",
	"images/cvd211.jpg",
	"images/cvd212.jpg",
	"images/cvd213.jpg",
	"images/cvd214.jpg",
	"images/cvd220.jpg",
	"images/cvd221.jpg",
	"images/cvd222.jpg",
	"images/cvd223.jpg",
	"images/cvd230.jpg",
	"images/cvd231.jpg",
	"images/cvd232.jpg",
	"images/cvd233.jpg",
	"images/cvd234.jpg",
	"images/cvd240.jpg",
	"images/cvd241.jpg",
	"images/cvd242.jpg",
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