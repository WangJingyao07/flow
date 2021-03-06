/* @flow */

/* EXAMPLES NOT IN A CONDITIONAL */

//"Sketchy" checks excused by the default pattern (Not errors)

var x1: ?boolean = null;
x1 = x1 || false;

var y1: ?number = null;
y1 = y1 || 0;

var z1: ?string = null;
z1 = z1 || '';

//These checks aren't excused because they aren't the same as a null check
//(Errors: one per line)

var x2: ?boolean = null;
x2 = x2 || true;

var y2: ?number = null;
y2 = y2 || 1;

var z2: ?string = null;
z2 = z2 || 'foo';

//The default pattern doesn't excuse all sketchy null checks, just
//sound ones. (Errors: two per line)

var a1: boolean | number | string | null = null;
a1 = a1 || false;

var b1: boolean | number | string | null = null;
b1 = b1 || 0;

var c1: boolean | number | string | null = null;
c1 = c1 || '';


/* EXAMPLES IN A CONDITIONAL */

//"Sketchy" checks excused by the default pattern (Not errors)

var x3: ?boolean = null;
if (x3 || false) {}

var y3: ?number = null;
if (y3 || 0) {}

var z3: ?string = null;
if (z3 || '') {}

//These checks aren't excused because they aren't the same as a null check
//(Errors: one per line)

var x4: ?boolean = null;
if (x4 || true) {}

var y4: ?number = null;
if (y4 || false) {}

var z4: ?string = null;
if (z4 || 'foo') {}

//The default pattern doesn't excuse all sketchy null checks, just
//sound ones. (Errors: two per line)

var a2: boolean | number | string | null = null;
if (a2 || false) {}

var b2: boolean | number | string | null = null;
if (b2 || 0) {}

var c2: boolean | number | string | null = null;
if (c2 || '') {}

//Compound sketchy null checks

var d1: ?boolean = null;
var e1: ?boolean = true;
d1 = (d1 || e1) || false; //Both checks are sketchy. (This is how it gets parsed without the parentheses)

var d2: ?boolean = null;
var e2: ?boolean = true;
d2 = d2 || (e2 || false); //Only d2 is sketchy; e2 matches the default pattern.
