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
	"images/ind110.jpg",
	"images/ind111.jpg",
	"images/ind112.jpg",
	"images/ind120.jpg",
	"images/ind121.jpg",
	"images/ind122.jpg",
	"images/ind130.jpg",
	"images/ind131.jpg",
	"images/ind132.jpg",
	"images/ind140.jpg",
	"images/ind141.jpg",
	"images/ind142.jpg",
	"images/ind150.jpg",
	"images/ind151.jpg",
	"images/ind152.jpg",
	"images/ind160.jpg",
	"images/ind161.jpg",
	"images/ind162.jpg",
	"images/ind170.jpg",
	"images/ind171.jpg",
	"images/ind172.jpg",
	"images/ind180.jpg",
	"images/ind181.jpg",
	"images/ind182.jpg",
	"images/ind190.jpg",
	"images/ind1100.jpg",
	"images/ind1101.jpg",
	"images/ind1102.jpg",
	"images/ind1103.jpg",
	"images/ind1110.jpg",
	"images/ind1111.jpg",
	"images/ind1112.jpg",
	"images/ind1113.jpg",
	"images/image025.jpg",
	"images/image017.jpg",
	"images/image015.jpg",
	"images/image003.jpg",
	"images/image006.jpg",
	"videos/video_tuberculosis.mp4",
	"videos/video_tuberculosis.webm",
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