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
	"images/ora210.jpg",		
	"images/ora211.jpg",
	"images/ora212.jpg",
	"images/ora213.jpg",		
	"images/ora214.jpg",
	"images/ora215.jpg",
	"images/ora220.jpg",
	"images/ora221.jpg",
	
	"images/ora230.jpg",
	"images/ora231.jpg",
	"images/ora232.jpg",
	"images/ora233.jpg",
	"images/ora234.jpg",
	"images/ora235.jpg",
	"images/ora236.jpg",

	
	"images/ora240.jpg",

	"images/ora250.jpg",
	"images/ora251.jpg",
	"images/ora252.jpg",
	"images/ora253.jpg",
	"images/ora254.jpg",
	"images/ora260.jpg",

	"images/ora270.jpg",
	"images/ora271.jpg",
	"images/ora280.jpg",
	"images/ora281.jpg",
	
	"images/ora290.jpg",
	"images/ora291.jpg",
	"images/ora292.jpg",
	"images/ora293.jpg",
	"images/ora294.jpg",

	"images/ora2100.jpg",
	
	"images/ora2110.jpg",
	"images/ora2111.jpg",
	"images/ora2112.jpg",
	"images/ora2113.jpg",
	"images/ora2120.jpg",
	"images/ora2130.jpg",

	"images/ora2140.jpg",
	"images/ora2141.jpg",
	"images/ora2142.jpg",







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