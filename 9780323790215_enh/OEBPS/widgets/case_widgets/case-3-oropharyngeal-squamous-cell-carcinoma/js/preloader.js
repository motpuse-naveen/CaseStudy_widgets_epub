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
	"images/Figure 16-6.jpg",
	"images/gas1160.jpg",
	"images/gas1161.jpg",
	"images/gas1170.jpg",
	"images/gas1171.jpg",
	"images/gas1172.jpg",
	"images/gas1180.jpg",
	"images/gas1181.jpg",
	"images/gas1182.jpg",
	"images/gas1190.jpg",
	"images/gas1191.jpg",
	"images/gas1192.jpg",
	"images/gas1200.jpg",
	"images/gas1201.jpg",
	"images/gas1202.jpg",
	"images/gas1203.jpg",
	"images/gas1210.jpg",
	"images/gas1211.jpg",
	"images/gas1220.jpg",
	"images/gas1221.jpg",
	"images/gas1222.jpg",
	"images/gas1223.jpg",
	"images/gas1230.jpg",
	"images/gas1231.jpg",
	"images/gas1232.jpg",
	"images/gas1233.jpg",
	"images/gas1240.jpg",
	"images/gas1241.jpg",
	"images/gas1242.jpg",
	"images/image005.png",
	"images/image007.png",	
	"images/image009.png",	
	"images/image011.png",	
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