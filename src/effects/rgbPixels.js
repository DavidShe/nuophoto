/**
 * This will replace every square of main.strokeResolution with a square divided in 3 columns
 * Each column will be filled with the corresponding color in the order R-G-B
 * It should mimic a very low resolution screen. 
 * @param {Object} main
 */
var parameters = [];
var exec = function(main){
	var i=0;
	for(var y = 0; y < main.canvas.HEIGHT; y += main.strokeResolution){
		for(var x = 0; x < main.canvas.WIDTH; x += main.strokeResolution){
			// Draw strokes
			main.canvas.ctx.fillStyle = 'rgba('+main.avg[i][0]+',0,0,1)';
			main.canvas.ctx.fillRect(Math.ceil(x),Math.round(main.img.y+y),Math.ceil(main.strokeResolution/3), main.strokeResolution-1);
			
			main.canvas.ctx.fillStyle = 'rgba(0,'+main.avg[i][1]+',0,1)';
			main.canvas.ctx.fillRect(Math.ceil(x+main.strokeResolution/3),Math.round(main.img.y+y),Math.ceil(main.strokeResolution/3), main.strokeResolution-1);
			
			main.canvas.ctx.fillStyle = 'rgba(0,0,'+main.avg[i][2]+',1)';
			main.canvas.ctx.fillRect(Math.ceil(x+2*main.strokeResolution/3),Math.round(main.img.y+y),Math.ceil(main.strokeResolution/3), main.strokeResolution-1);
			i++;
		}
	}
};