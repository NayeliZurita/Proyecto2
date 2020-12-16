var sketchProc = function(processingInstance){
   with(processingInstance){
   	size(400,400);
   	background(130, 205, 255); // wooden table
	ellipse(200, 200, 350, 350); // plate
	ellipse(200, 200, 300, 300); 
	//pizza
	fill(245, 215, 19);
	triangle(245,186,137,69,91,145);
	line(105,149,154,85);
	fill(255, 0, 0);
	noStroke();
	ellipse(130,145,20,20);
	ellipse(152,117,20,20);
	ellipse(160,143,20,20);
	ellipse(183,135,20,20);
	ellipse(185,159,20,20);
	ellipse(212,163,20,20);
	//uvas
	fill(12, 245, 12);
	rect(105,203,100,10);
	fill(86, 10, 250);
	noStroke();
	ellipse(122,229,30,30);
	ellipse(152,229,30,30);
	ellipse(182,229,30,30);
	ellipse(137,255,30,30);
	ellipse(168,255,30,30);
	ellipse(152,281,30,30);
	//helado
	noStroke();
	fill(82, 44, 44);
	ellipse(252,255,50,50);
	fill(235, 227, 136);
	ellipse(294,255,50,50);
	fill(230, 78, 220);
	ellipse(271,289,50,50);
}
};
var canvas = document.getElementById("mycanvas");
var processing = new Processing(canvas, sketchProc);