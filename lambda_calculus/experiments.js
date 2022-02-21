const I = (a) => a;

let r = I(3);
r;

r = I(I);
r;

const SELF = (f) => f(f);

r = SELF(I);
r;

const FIRST = (a) => (_) => a;

r = FIRST(7)(11);
r;

const LAST = (a) => (b) => b;

r = LAST(7)(11);
r;

const FLIP = (f) => (a) => (b) => f(b)(a);
r = FLIP(LAST)(7)(11);
r;

const LAST2 = (a) => (b) => FLIP(FIRST)(a)(b);
r = LAST2(13)(20);
r;

// boolean TRUE and FALSE
// TRUE ? <FIRST> : LAST
// FALSE ? FIRST : <LAST>

const T = FIRST;
const F = LAST;

T.inspect = () => "TRUE (FIRST)";
F.inspect = () => "FALSE (LAST)";

T;
F;

// NOT
const NOT = (a) => a(LAST)(FIRST);

const r2 = NOT(T);
r2;

// AND
// true && true => true
// true && false => false
// false && true => false
// false && false => false
// a && b

const AND = (a) => (b) => a(b)(F);

const r3 = AND(T)(T);
r3;

// OR

const OR = (a) => (b) => a(T)(b);
const r4 = OR(F)(F);
r4;

// EQ

// const EQ = a => b => a(b)(b(F)(T))
const EQ = (a) => (b) => a(b)(NOT(b));
let r5 = EQ(T)(F);
r5;
r5 = EQ(F)(T);
r5;
r5 = EQ(T)(T);
r5;
r5 = EQ(F)(F);
r5;

// XOR

const XOR = (a) => (b) => NOT(EQ(a)(b));
let r6 = XOR(T)(T);
r6;
r6 = XOR(T)(F);
r6;
r6 = XOR(F)(T);
r6;
r6 = XOR(F)(F);
r6;
