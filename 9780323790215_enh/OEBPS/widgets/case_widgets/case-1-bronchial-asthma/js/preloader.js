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
	"images/res110.jpg",		
	"images/res111.jpg",
	"images/res120.jpg",
	"images/res121.jpg",
	"images/res122.jpg",
	"images/res123.jpg",
	"images/res124.jpg",
	"images/res125.jpg",
	"images/res130.jpg",
	"images/res131.jpg",
	"images/res132.jpg",
	"images/res133.jpg",
	"images/res134.jpg",
	"images/res135.jpg",
	"images/res136.jpg",
	"images/res140.jpg",
	"images/res141.jpg",
	"images/res142.jpg",
	"images/res143.jpg",
	"images/res145.jpg",
	"images/res150.jpg",
	"images/res151.jpg",
	"images/res160.jpg",
	"images/res170.jpg",
	"images/res171.jpg",
	"images/res180.jpg",
	"images/res181.jpg",
	"images/closeicon.png",
	"images/cysticfibrosiswithbronchiectasis.mp4",
	"images/cysticfibrosiswithbronchiectasis.webm",
	"images/gen240.jpg",
	"images/gen260.jpg",
	"images/gen280.jpg",
	"images/immk110.jpg",
	"images/immk120.jpg",
	"images/immk130.jpg",
	"images/immk140.jpg",
	"images/res182.jpg",
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