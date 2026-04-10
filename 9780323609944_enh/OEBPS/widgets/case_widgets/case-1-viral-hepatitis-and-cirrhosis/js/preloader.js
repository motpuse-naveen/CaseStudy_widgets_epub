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
	"images/Figure 18-10.jpg",		
	"images/Figure 18-11.jpg",
	"images/Figure 18-12.jpg",
	"images/Figure 18-14.jpg",
	"images/liv110.jpg",
	"images/liv111.jpg",
	"images/liv120.jpg",
	"images/liv121.jpg",
	"images/liv122.jpg",
	"images/liv130.jpg",
	"images/liv131.jpg",
	"images/liv132.jpg",
	"images/liv133.jpg",
	"images/liv140.jpg",
	"images/liv141.jpg",
	"images/liv142.jpg",
	"images/liv150.jpg",
	"images/liv151.jpg",
	"images/liv160.jpg",
	"images/liv170.jpg",
	"images/liv171.jpg",
	"images/liv180.jpg",
	"images/liv181.jpg",
	"images/liv190.jpg",
	"images/liv1100.jpg",
	"images/liv1101.jpg",
	"images/liv1110.jpg",
	"images/liv1111.jpg",
	"images/liv1112.jpg",
	"images/liv1120.jpg",	
	"images/liv1121.jpg",	
	"images/liv1122.jpg",	
	"images/liv1123.jpg",	
	"images/liv1130.jpg",	
	"images/liv1140.jpg",	
	"images/liv1141.jpg",	
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