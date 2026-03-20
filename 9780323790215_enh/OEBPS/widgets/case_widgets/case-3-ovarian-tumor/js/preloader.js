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
	"images/Figure 22-30.jpg",
	"images/Figure 22-37.jpg",
	"images/gbp510.jpg",
	"images/gbp511.jpg",
	"images/gbp520.jpg",
	"images/gbp521.jpg",
	"images/gbp522.jpg",
	"images/gbp530.jpg",
	"images/gbp531.jpg",
	"images/gbp532.jpg",
	"images/gbp540.jpg",
	"images/gbp550.jpg",
	"images/gbp551.jpg",
	"images/gbp560.jpg",
	"images/gbp561.jpg",
	"images/gbp570.jpg",
	"images/gbp571.jpg",
	"images/gbp580.jpg",
	"images/gbp581.jpg",
	"images/gbp590.jpg",
	"images/gbp591.jpg",
	"images/gbp592.jpg",
	"images/gbp593.jpg",
	"images/gbp594.jpg",
	"images/gbp5100.jpg",
	"images/gbp5101.jpg",
	"images/gbp5110.jpg",
	"images/gbp5111.jpg",
	"images/gbp5112.jpg",
	"images/gbp5120.jpg",
	"images/gbp5130.jpg",
	"images/gbp5131.jpg",
	"images/gbp5132.jpg",
	"images/gbp5140.jpg",
	"images/gbp5141.jpg",
	"images/gbp5150.jpg",
	"images/gbp5151.jpg",
	"images/gbp5152.jpg",
	"images/gbp5153.jpg",
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