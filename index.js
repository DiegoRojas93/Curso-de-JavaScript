let verdadero = true;
let falso = false;

let v = Boolean(true);
let f = Boolean(false)

console.log(verdadero, falso);
console.log(typeof verdadero, typeof falso);

console.log(v, f);

function comprovacion (truthy, falsy) {
	this.truthy = truthy;
	this.falsy = falsy;
}

let boolean = {};

boolean.booleanoTrue = new comprovacion (true, );
boolean.objeto = new comprovacion ('{}', );
boolean.array = new comprovacion ('[]', );
boolean.number = new comprovacion (45,);
boolean.string = new comprovacion ('string', );
boolean.date = new comprovacion (new Date(), );
boolean.numberNegative = new comprovacion (-42, );
boolean.float = new comprovacion (3.14, );
boolean.floatNegative = new comprovacion (-3.14, );
boolean.infinite = new comprovacion (Infinity, )
boolean.infiniteNegative =  new comprovacion (-Infinity, );

boolean.booleanoFalse =  new comprovacion (undefined, false);
boolean.stringVacio =  new comprovacion (undefined, '');
boolean.numberZero = new comprovacion (undefined, 0);
boolean.numberZeroNegative = new comprovacion (undefined, -0);
boolean.bigInt = new comprovacion (undefined, 0n);
boolean.null = new comprovacion (undefined, null);
boolean.undefined = new comprovacion (undefined, undefined);
boolean.nan = new comprovacion (undefined, NaN);

console.table(boolean);