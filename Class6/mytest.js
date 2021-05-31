outlets = 3
inlets = 2

function bang()
{
	outlet(0, Math.random());
	outlet(1, 42);
}

function bangbang(a,b)
{
	outlet(0, a);
	outlet(1, b);
	outlet(2, a+b);
}

function test()
{
	var args = arrayfromargs(arguments)
	outlet(0, args)
}