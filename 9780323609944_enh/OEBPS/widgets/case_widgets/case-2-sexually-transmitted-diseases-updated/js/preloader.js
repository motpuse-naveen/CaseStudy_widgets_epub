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
	"images/image002.jpg",
	"images/image003.jpg",
	"images/image006.jpg",
	"images/image008.jpg",
	"images/ind210.jpg",
	"images/ind220.jpg",
	"images/ind221.jpg",
	"images/ind222.jpg",
	"images/ind223.jpg",
	"images/ind224.jpg",
	"images/ind230.jpg",
	"images/ind231.jpg",
	"images/ind240.jpg",
	"images/ind241.jpg",
	"images/ind250.jpg",
	"images/ind251.jpg",
	"images/ind252.jpg",
	"images/ind253.jpg",
	"images/ind254.jpg",
	"images/ind260.jpg",
	"images/ind261.jpg",
	"images/ind262.jpg",
	"images/ind270.jpg",
	"images/ind271.jpg",
	"images/ind272.jpg",
	"images/ind280.jpg",
	"images/ind281.jpg",
	"images/ind282.jpg",
	"images/ind290.jpg",
	"images/ind280.jpg",
	"images/ind3140.jpg",
	"images/inf110.jpg",
	"images/inf120.jpg",
	"images/inf130.jpg",
	"images/inf140.jpg",
	"images/inf150.jpg",
	"images/inf160.jpg",
	"images/gbp760.jpg",
	"Video/video_ectopicpregnancy.mp4",
	"Video/video_ectopicpregnancy.webm",
	// "images/placeholder.jpg",
	// "images/placeholder.png",
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