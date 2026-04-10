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
	"images/Figure 22-52.png",
	
	"images/gpb710.jpg",
	"images/gpb711.jpg",
	"images/gpb712.jpg",
	"images/gpb713.jpg",
	"images/gpb720.jpg",
	"images/gpb721.jpg",
	"images/gpb722.jpg",
	"images/gpb730.jpg",
	"images/gpb731.jpg",
	"images/gpb732.jpg",
	"images/gpb733.jpg",
	"images/gpb740.jpg",
	"images/gpb741.jpg",
	"images/gpb742.jpg",
	"images/gpb750.jpg",
	"images/gpb751.jpg",
	"images/gpb760.jpg",
	"images/gpb761.jpg",
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