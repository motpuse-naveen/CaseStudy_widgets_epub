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
	"images/gbp110.jpg",
	"images/gbp111.jpg",
	"images/gbp112.jpg",
	"images/gbp113.jpg",
	"images/gbp120.jpg",
	"images/gbp121.jpg",
	"images/gbp122.jpg",
	"images/gbp130.jpg",
	"images/gbp131.jpg",
	"images/gbp132.jpg",
	"images/gbp133.jpg",
	"images/gbp140.jpg",
	"images/gbp141.jpg",
	"images/gbp142.jpg",
	"images/gbp150.jpg",
	"images/gbp151.jpg",
	"images/gbp160.jpg",
	"images/gbp161.jpg",
	"images/gbp162.jpg",
	"images/gbp170.jpg",
	"images/gbp171.jpg",
	"images/gbp180.jpg",
	"images/gbp181.jpg",
	"images/gbp190.jpg",
	"images/gbp191.jpg",
	"images/gbp192.jpg",
	"images/gbp1100.jpg",
	"images/gbp1101.jpg",
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