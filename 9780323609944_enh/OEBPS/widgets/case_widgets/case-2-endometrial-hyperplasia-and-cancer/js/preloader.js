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
	"images/figure-22-24.jpg",
	"images/figure-22-22.jpg",
	"images/gbp410.jpg",
	"images/gbp411.jpg",
	"images/gbp420.jpg",
	"images/gbp421.jpg",
	"images/gbp430.jpg",
	"images/gbp431.jpg",
	"images/gbp440.jpg",
	"images/gbp441.jpg",
	"images/gbp450.jpg",
	"images/gbp451.jpg",
	"images/gbp452.jpg",
	"images/gbp453.jpg",
	"images/gbp460.jpg",
	"images/gbp461.jpg",
	"images/gbp470.jpg",
	"images/gbp471.jpg",
	"images/gbp472.jpg",
	"images/gbp473.jpg",
	"images/gbp480.jpg",
	"images/gbp481.jpg",
	"images/gbp490.jpg",
	"images/gbp491.jpg",
	"images/gbp492.jpg",
	"images/gbp493.jpg",
	"images/gbp494.jpg",
	"images/neok1200.jpg",
	"images/neok1210.jpg",
	"images/neok1230.jpg",
	"images/neok1240.jpg",
	"images/adenomyosis.mp4",
	"images/adenomyosis.webm",
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