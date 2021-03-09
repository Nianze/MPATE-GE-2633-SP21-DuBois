// X = sin(A*y)-z*cos(B*x)
// Y = z*sin(C*x)-cos(D*y)
// Z = E*sin(x)

outlets = 2;

var x, y, z;
var A, B, C, D, E;

function bang()
{
 	var newx = Math.sin(A*y)-z*Math.cos(B*x);
	var newy = z*Math.sin(C*x)-Math.cos(D*y);
	var newz = E*Math.sin(x);
	outlet(1, x, y, z);
	outlet(0, newx, newy, newz);
	x = newx;
	y = newy;
	z = newz;
	
}

function reset()
{
	x = 0;
	y = 0;
	z = 0;
	A = Math.random()*4-2;
	B = Math.random()*4-2;
	C = Math.random()*4-2;
	D = Math.random()*4-2;
	E = Math.random()*4-2;	
}