var p = [];
function setup()
{
	createCanvas(windowWidth, windowHeight);
	background(255);
	total = 30;
	for(let i = 0; i < total; i++)
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
