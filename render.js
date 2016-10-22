var Tri = function (a, b, c)
{
	this.verts = [a,b,c];
}
var Point = function(x, y, z)
{
	this.x = x;
	this.y = y;
	this.z = z;
}

var img;
var graphics;
var tridata;
var lastTime;

$(document).ready(function() {
	img = document.getElementById("simpleRenderPageBG");
	img.width = window.innerWidth;
	img.height = window.innerHeight;
	graphics = img.getContext("2d");

	tridata = [new Tri(new Point(-100,-100,500),new Point(100,-100,500),new Point(-100,100,500)), new Tri(new Point(100,-100,500),new Point(-100,100,500),new Point(100,100,500)), new Tri(new Point(-100, -100, 500), new Point(-100, 100, 500), new Point(-100, -100, 700)), new Tri(new Point(-100, 100, 500), new Point(-100, 100, 700), new Point(-100, -100, 700)), new Tri(new Point(100, -100, 500), new Point(100, 100, 500), new Point(100, -100, 700)), new Tri(new Point(100, 100, 500), new Point(100, 100, 700), new Point(100, -100, 700)), new Tri(new Point(-100, -100, 700), new Point(100, -100, 700), new Point(100, 100, 700)), new Tri(new Point(-100, -100, 700), new Point(-100, 100, 700), new Point(100, 100, 700))];
	
	setTimeout("drawScreen()", 10);

});

function drawScreen()
{
	img.width = window.innerWidth;
	img.height = window.innerHeight;
	clear();
	for (var q = 0; q < tridata.length; q++)
	{
		rotateTri(tridata[q], 0.1);
		goDrawTri(tridata[q]);
	}
	setTimeout("drawScreen()", 10);
}
function clear()
{
	graphics.fillStyle = "rgba(0,0,0,0)";
	graphics.beginPath();
	graphics.fillRect(0, 0, img.width, img.height);
	graphics.stroke();
}

function drawLine(x1, y1, x2, y2)
{
	graphics.strokeStyle = "#00FF00";
	graphics.moveTo(x1, y1);
	graphics.lineTo(x2, y2);
	graphics.stroke();
}
var fx, fy;
function goDrawTri(tri)
{
	graphics.strokeStyle = "#00FF00";
	fx = tri.verts[0].x/(tri.verts[0].z/160.);
	fy = tri.verts[0].y/(tri.verts[0].z/160.);
	graphics.moveTo(fx+img.width/2, fy+img.height*2/3);
	graphics.lineTo(tri.verts[1].x/(tri.verts[1].z/160.)+img.width/2, tri.verts[1].y/(tri.verts[1].z/160.)+img.height*2/3);
	graphics.lineTo(tri.verts[2].x/(tri.verts[2].z/160.)+img.width/2, tri.verts[2].y/(tri.verts[2].z/160.)+img.height*2/3);
	graphics.lineTo(fx+img.width/2, fy+img.height*2/3);
	graphics.stroke();
}
function rotateTri(tri, rads)
{
	for (var c = 0; c < 3; c++)
		rotatePoint(tri.verts[c], rads);
}
var tempx;
function rotatePoint(point, rads)
{
	tempx = point.x;
	point.z -= 600;
	point.x = point.x*Math.cos(rads)-point.z*Math.sin(rads);
	point.z = tempx*Math.sin(rads)+point.z*Math.cos(rads);
	point.z += 600;
}