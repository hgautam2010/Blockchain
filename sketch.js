var p = [];
var canvas;
var total;
function setup()
{
	canvas = createCanvas(windowWidth, windowHeight);
	background(255);
	total = (canvas.height * canvas.width) / 38000;
	for(let i = 0; i < 150; i++)
	{
		p.push(new particle());
	}
}

function draw()
{
	background(255);
	for(let i = 0; i < total; i++)
	{
		for(let j = i + 1; j < total; j++)
		{
			dist = sqrt((p[i].loc.x - p[j].loc.x)*(p[i].loc.x - p[j].loc.x) + (p[i].loc.y - p[j].loc.y)*(p[i].loc.y - p[j].loc.y));
			if(map(1300 - dist, 0, 1300, -1500, 255) > 0)
				p[i].lineWith(p[j].loc);
		}
		p[i].display();
	}
}

window.onresize = function() {
	var w = window.innerWidth;
	var h = window.innerHeight;
	canvas.size(w,h);
	total = (canvas.height * canvas.width) / 38000;
  width = w;
  height = h;
}
