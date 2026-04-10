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
	"images/Figure 24-8.jpg",
	"images/Figure 24-18.jpg",
	"images/end210.jpg",
	"images/end211.jpg",
	"images/end220.jpg",
	"images/end221.jpg",
	"images/end230.jpg",
	"images/end231.jpg",
	"images/end232.jpg",
	"images/end233.jpg",
	"images/end234.jpg",
	"images/end240.jpg",
	"images/end241.jpg",
	"images/end242.jpg",
	"images/end243.jpg",
	"images/end244.jpg",
	"images/end245.jpg",
	"images/end250.jpg",
	"images/end251.jpg",
	"images/end252.jpg",
	"images/end260.jpg",
	"images/end261.jpg",
	"images/end270.jpg",
	"images/end271.jpg",
	"images/end272.jpg",
	"images/end280.jpg",
	"images/end281.jpg",
	"images/end282.jpg",
	"images/end283.jpg",
	"images/end290.jpg",
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