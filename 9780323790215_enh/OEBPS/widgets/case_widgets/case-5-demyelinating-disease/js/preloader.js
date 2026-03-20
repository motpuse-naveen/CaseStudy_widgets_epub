var imgPreloadArray = new Array("images/gray_dot_old.png",
	"images/loading.gif",
	"images/menu_btn.png",
	"images/next_btn.png",
	"images/prev_btn.png",
	"images/table_btn.png",
	"images/arrow.png",
	"images/check_btn.png",
	

	"images/cns510.jpg",
	"images/cns511.jpg",
	"images/cns520.jpg",
	"images/cns521.jpg",
	"images/cns522.jpg",
	"images/cns523.jpg",
	"images/cns524.jpg",
	"images/cns525.jpg",
	"images/cns526.jpg",
	"images/cns530.jpg",
	"images/cns531.jpg",
	"images/cns532.jpg",
	"images/cns533.jpg",
	"images/cns534.jpg",
	"images/cns535.jpg",
	"images/cns540.jpg",
	"images/cns541.jpg",
	"images/cns542.jpg",
	"images/cns550.jpg",
	"images/cns551.jpg",
	"images/cns560.jpg",
	"images/cns561.jpg",
	"images/cns562.jpg",
	"images/cns563.jpg",
	"images/cns564.jpg",
	"images/cns565.jpg",
	"images/cns566.jpg",
	"images/cns567.jpg",
	"images/cns568.jpg",
"images/cns570.jpg",
"images/cns571.jpg",
"images/cns572.jpg",
"images/cns573.jpg",
"images/cns580.jpg",
"images/cns581.jpg",
"images/cns590.jpg",
"images/cns591.jpg",
"images/cns5100.jpg",
"images/cns5101.jpg",
"images/cns5102.jpg",
"images/cns5110.jpg",
"images/cns5111.jpg",
"images/cns5112.jpg",
"images/cns5113.jpg",


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