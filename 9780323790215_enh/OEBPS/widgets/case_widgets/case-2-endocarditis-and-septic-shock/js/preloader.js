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
	"images/image001.jpg",
	"images/image002.jpg",
	"images/image003.jpg",
	"images/image004.jpg",
	"images/image006.jpg",
	"images/image007.jpg",
	"images/image008.jpg",
	"images/image009.jpg",
	"images/image010.jpg",
	"images/image012.jpg",
	"images/image013.jpg",
	"images/image014.jpg",
	"images/image015.jpg",
	"images/image016.jpg",
	"images/image017.jpg",
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