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
	"images/image004.jpg",
	"images/image006.jpg",
	"images/image008.jpg",
	"images/image009.jpg",
	"images/image010.jpg",
	"images/image011.jpg",
	"images/image013.jpg",
	"images/image014.jpg",
	"images/image015.jpg",
	"images/image016.jpg",
	"images/image017.jpg",
	"images/image018.jpg",
	"images/image019.jpg",
	"images/image020.jpg",
	"images/image021.jpg",
	"images/image022.jpg",
	"images/image023.jpg",
	"images/image024.jpg",
	"images/celk1120.jpg",
	"images/celk1160.jpg",
	"images/celk1170.jpg",
	"images/cvd160.jpg",
	"images/cns140.jpg",
	"images/liv380.jpg",
	"images/flh170.jpg",
	"images/flh170.jpg",
	"images/flh110.jpg",
	"images/flh120.jpg",
	"images/flh130.jpg",
	"images/flh140.jpg",
	"images/flh150.jpg",
	"images/necrotizingvasculitis.webm",
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