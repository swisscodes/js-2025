# Javascript The Definative Guide 7th Edition

*******************************************************************************************************

## object property access

// Conditionally access properties with ?. (ES2020):
book.contents?.ch01?.sect1 // => undefined: book.contents has no ch01 property

optional chaining
let a = { b: null };
a.b?.c.d   // => undefined

property access with ?. is “short-circuiting”: if the subexpression to
the left of ?. evaluates to null or undefined, then the entire expression immediately
evaluates to undefined without any further property access attempts.

Of course, if a.b is an object, and if that object has no property named c, then
a.b?.c.d will again throw a TypeError, and we will want to use another conditional
property access:
let a = { b: {} };
a.b?.c?.d  // => undefined

all this also applies to array
a?.[index++]

also used to call functions

this is another form of short-circuiting

```js
let o = {x: 1};
let p = null;
o && o.x // => 1: o is truthy, so return value of o.x
p && p.x     // => null: p is falsy, so return it and don't evaluate p.x


// If maxWidth is truthy, use that. Otherwise, look for a value in
// the preferences object. If that is not truthy, use a hardcoded constant.
let max = maxWidth || preferences.maxWidth || 500; // not used mostly anymore there is alternative which is ??


```

```js
 function square(x, log) { // The second argument is an optional function
 log?.(x);            // Call the function if there is one
 return x * x;         // Return the square of the argument
 }
```

## The Conditional Operator (?:) sometimes actually called the ternary operator

x > 0 ? x : -x     // The absolute value of x
greeting = "hello " + (username ? username : "there");

## First-Defined (??)

The first-defined operator ?? evaluates to its first defined operand: if its left operand
is not null and not undefined, it returns that value. Otherwise, it returns the value of
the right operand. Like the && and || operators, ?? is short-circuiting: it only evalu
ates its second operand if the first operand evaluates to null or undefined. If the
expression a has no side effects, then the expression a ?? b is equivalent to:

```js
(a !== null && a !== undefined) ? a : b
```

## the “nullish coalescing” operator

?? is a useful alternative to || (§4.10.2) when you want to select the first defined
operand rather than the first truthy operand. Although || is nominally a logical OR
operator, it is also used idiomatically to select the first non-falsy operand with code
like this:
// If maxWidth is truthy, use that. Otherwise, look for a value in
// the preferences object. If that is not truthy, use a hardcoded constant.

```js
let max = maxWidth || preferences.maxWidth || 500;
```

// Access the properties of an object with . or []:
book.topic
book["edition"]
// => "JavaScript"
// => 7: another way to access property values.
book.author = "Flanagan";  // Create new properties by assignment.
book.contents = {};
// {} is an empty object with no properties.
########################################################################################################

*******************************************************************************************************

conditional operator ?:
which combines three expressions into a single expression

## Array and property access

// JavaScript also supports arrays (numerically indexed lists) of values:

```js
let primes = [2, 3, 5, 7]; // An array of 4 values, delimited with [ and ].
primes[0]                  
// => 2: the first element (index 0) of the array.
primes.length
primes[primes.length-1]
primes[4] = 9;
primes[4] = 11;
let empty = [];
empty.length
// => 4: how many elements in the array.
// => 7: the last element of the array.
// Add a new element by assignment.
// Or alter an existing element by assignment.
// [] is an empty array with no elements.
// => 0
```

array of objects

```js
let points = [
// An array with 2 elements.
{x: 0, y: 0},
{x: 1, y: 1}
]
```

########################################################################################################

## EXPRESION

*******************************************************************************************************
An expression is a phrase of
JavaScript that can be evaluated to produce a value. For example, the use of . and []
to refer to the value of an object property or array element is an expression.

########################################################################################################

Javascript Types
*******************************************************************************************************
JavaScript types can be divided into two categories:

### primitive types

JavaScript’s primitive types include numbers, strings of text (known as strings), and
Boolean truth values (known as booleans).

The special JavaScript values null and undefined are primitive values, but they are
not numbers, strings, or booleans.

Any JavaScript value that is not a number, a string, a boolean, a symbol, null, or unde
fined is an object

### object types

An object (that is, a member of the type object) is a collection of
properties where each property has a name and a value (either a primitive value or
another object)

An ordinary JavaScript object is an unordered collection of named values.
The language also defines a special kind of object, known as an array, that represents an
ordered collection of numbered values.

*******************************************************************************************************
In addition to basic objects and arrays, JavaScript defines a number of other useful
object types. A Set object represents a set of values. A Map object represents a mapping from keys to values. Various “typed array” types facilitate operations on arrays of
bytes and other binary data. The RegExp type represents textual patterns and enables
sophisticated matching, searching, and replacing operations on strings. The Date type
represents dates and times and supports rudimentary date arithmetic. Error and its
subtypes represent errors that can arise when executing JavaScript code. All of these
types are covered in Chapter 11.

########################################################################################################

## Equality check and meaning

*******************************************************************************************************
JavaScript’s liberal value conversion rules affect its definition of
equality, and the == equality operator performs type conversions as described in
§3.9.1. (In practice, however, the == equality operator is deprecated in favor of the
strict equality operator ===, which does no type conversions. See §4.9.1 for more
about both operators.)
e.g

```js

let ss = "hello"
let sss = "hello"
ss == sss
true
ss === sss
true
```

*******************************************************************************************************

```js
let ss = {a:"hello"}
let sss = {a:"hello"}

ss = ss
{a: 'hello'}
ss == ss
true
ss == sss
false
```

false because they are different objects.

########################################################################################################

## NUMBERS

*******************************************************************************************************
You can use underscores within numeric literals to break long literals up into chunks
that are easier to read:
let billion = 1_000_000_000;   // Underscore as a thousands separator.
let bytes = 0x89_AB_CD_EF;
// As a bytes separator.
let bits = 0b0001_1101_0111;   // As a nibble separator.
let fraction = 0.123_456_789;  // Works in the fractional part, too.

```js
// The following Number properties are defined in ES6
Number.parseInt()      // Same as the global parseInt() function 
Number.parseFloat()     // Same as the global parseFloat() function   
Number.isNaN(x)         // Is x the NaN value?      
Number.isFinite(x)      // Is x a number and finite?   
Number.isInteger(x)     // Is x an integer?
Number.isSafeInteger(x) // Is x an integer -(2**53) < x < 2**53?
Number.MIN_SAFE_INTEGER // => -(2**53 - 1)
Number.MAX_SAFE_INTEGER // => 2**53 - 1
Number.EPSILON          // => 2**-52: smallest difference between numbers

```

########################################################################################################

## Arithmetic in JavaScript

*******************************************************************************************************

```js

Math.pow(2,53)      // => 9007199254740992: 2 to the power 53
Math.round(.6)      // => 1.0: round to the nearest integer
Math.ceil(.6)       // => 1.0: round up to an integer
Math.floor(.6)      // => 0.0: round down to an integer
Math.abs(-5)        // => 5: absolute value
Math.max(x,y,z)     // Return the largest argument
Math.min(x,y,z)     // Return the smallest argument
Math.random()       // Pseudo-random number x where 0 <= x < 1.0
Math.PI             // π: circumference of a circle / diameter
Math.E              // e: The base of the natural logarithm
Math.sqrt(3)        // => 3**0.5: the square root of 3
Math.pow(3, 1/3)    // => 3**(1/3): the cube root of 3
Math.sin(0)         // Trigonometry: also Math.cos, Math.atan, etc.
Math.log(10)        // Natural logarithm of 10



Math.log(100)/Math.LN10  // Base 10 logarithm of 100
Math.log(512)/Math.LN2   // Base 2 logarithm of 512
Math.exp(3)              // Math.E cubed
Math.cbrt(27)            // => 3: cube root
Math.hypot(3, 4)        // => 5: square root of sum of squares of all arguments
Math.log10(100)         // => 2: Base-10 logarithm
Math.log2(1024)         // => 10: Base-2 logarithm
Math.log1p(x)           // Natural log of (1+x); accurate for very small x
Math.expm1(x)           // Math.exp(x)-1; the inverse of Math.log1p()
Math.sign(x)            // -1, 0, or 1 for arguments <, ==, or > 0
Math.imul(2,3)          // => 6: optimized multiplication of 32-bit integers
Math.clz32(0xf)         // => 28: number of leading zero bits in a 32-bit integer
Math.trunc(3.9)         // => 3: convert to an integer by truncating fractional part
Math.fround(x)          // Round to nearest 32-bit float number
Math.sinh(x)            // Hyperbolic sine. Also Math.cosh(), Math.tanh()
Math.asinh(x)           // Hyperbolic arcsine. Also Math.acosh(), Math.atanh()

```

########################################################################################################

Dates and Times

*******************************************************************************************************

########################################################################################################

Text

*******************************************************************************************************

The JavaScript type for representing text is the string. A string is an immutable
ordered sequence of 16-bit values, each of which typically represents a Unicode character

########################################################################################################

## Escape Sequences in String Literals

*******************************************************************************************************

```shell
\0      The NUL character (\u0000)
\b      Backspace (\u0008)
\t      Horizontal tab (\u0009)
\n      Newline (\u000A)
\v      Vertical tab (\u000B)
\f      Form feed (\u000C)
\r      Carriage return (\u000D)
\"      Double quote (\u0022)
\'      Apostrophe or single quote (\u0027)
\\      Backslash (\u005C)
\xnn    The Unicode character specified by the two hexadecimal digits nn
\unnnn  The Unicode character specified by the four hexadecimal digits nnnn
\u{n}   The Unicode character specified by the codepoint n, where n is one to six hexadecimal digits between 0 and 10FFFF (ES6)
```

########################################################################################################

## Substring

*******************************************************************************************************
All string methods produce a new string without altering the original string.

```js
let s = "Hello, world"; // Start with some text.
// Obtaining portions of a string
s.substring(1,4)    // => "ell": the 2nd, 3rd, and 4th characters.
s.slice(1,4)        // => "ell": same thing
s.slice(-3)         // => "rld": last 3 characters
s.split(", ")       // => ["Hello", "world"]: split at delimiter string

// Searching a string
s.indexOf("l")         // => 2: position of first letter l      
s.indexOf("l", 3)       // => 3: position of first "l" at or after 3 kind of mean start from index 3
s.indexOf("zz")         // => -1: s does not include the substring "zz"
s.lastIndexOf("l")      // => 10: position of last letter l

// Boolean searching functions in ES6 and later
s.startsWith("Hell")   // => true: the string starts with these
s.endsWith("!")         // => false: s does not end with that
s.includes("or")        // => true: s includes substring "or"

// Creating modified versions of a string
s.replace("llo", "ya") // => "Heya, world"
s.toLowerCase()        // => "hello, world"
s.toUpperCase()        // => "HELLO, WORLD"  
s.normalize()           // Unicode NFC normalization: ES6  
s.normalize("NFD")      // NFD normalization. Also "NFKC", "NFKD

// Inspecting individual (16-bit) characters of a string
s.charAt(0)                 // => "H": the first character    
s.charAt(s.length-1)        // => "d": the last character
s.charCodeAt(0)             // => 72: 16-bit number at the specified position
s.codePointAt(0)            // => 72: ES6, works for codepoints > 16 bits


// String padding functions in ES2017
"x".padStart(3)        // => "  x": add spaces on the left to a length of 3
"x".padEnd(3)           // => "x  ": add spaces on the right to a length of 3
"x".padStart(3, "*")    // => "**x": add stars on the left to a length of 3
"x".padEnd(3, "-")      // => "x--": add dashes on the right to a length of 3



// Space trimming functions. trim() is ES5; others ES2019
" test ".trim()         // => "test": remove spaces at start and end
" test ".trimStart()    // => "test ": remove spaces on left. Also trimLeft
" test ".trimEnd()      // => " test": remove spaces at right. Also trimRight



// Miscellaneous string methods
s.concat("!")     // => "Hello, world!": just use + operator instead
"<>".repeat(5)    // => "<><><><><>": concatenate n copies. ES6


```

########################################################################################################

Template Literals

*******************************************************************************************************

```js
let name = "Bill";
let greeting = `Hello ${ name }.`;  // greeting == "Hello Bill."

`\n`.length           // => 1: the string has a single newline character
String.raw`\n`.length  // => 2: a backslash character and the letter n
/*
Note that even though the tag portion of a tagged template literal is a function, there
are no parentheses used in its invocation. In this very specific case, the backtick char
acters replace the open and close parentheses.
*/
```

########################################################################################################

Pattern Matching

*******************************************************************************************************

```js

/^HTML/;         // Match the letters H T M L at the start of a string
/[1-9][0-9]*/;   // Match a nonzero digit, followed by any # of digits
/\bjavascript\b/i;   // Match "javascript" as a word, case-insensitive  
// at the begening \b means begins with javascript e.g javascriptsjfhdus
// at the end means \b means ends with javascript so e.g ksjhsjavascript  will so point to find

let text = "testing: 1, 2, 3";   // Sample text
let pattern = /\d+/g;            // Matches all instances of one or more digits
pattern.test(text)               // => true: a match exists
text.search(pattern)             // => 9: position of first match
text.match(pattern)              // => ["1", "2", "3"]: array of all matches
text.replace(pattern, "#")      // => "testing: #, #, #" 
text.split(/\D+/)               // => ["","1","2","3"]: split on nondigits  .... this returns array of digits, removing the nondigits
text.split(/\d+/)               // => ["","1","2","3"]: split on digits  .... this returns array of nondigits, removing the digits
3.4 Boolean Values

```

########################################################################################################

Falsy Values

*******************************************************************************************************

```js
undefined
null
0-0
NaN
""  // the empty string

```

########################################################################################################

ES2020 finally defines globalThis as the standard way to refer to the global object in
any context. As of early 2020, this feature has been implemented by all modern
browsers and by Node.

*******************************************************************************************************
Copying from reference types

```js
let a = ["a","b","c"];              
let b = [];                         
// An array we want to copy
// A distinct array we'll copy into
for(let i = 0; i < a.length; i++) { // For each index of a[]
b[i] = a[i];                    
// Copy an element of a into b
}
let c = Array.from(b);              
// In ES6, copy arrays with Array.from()
```

########################################################################################################

*******************************************************************************************************
Destructuring Assignment

```js
let [x,y] = [1,2];  // Same as let x=1, y=2
[x,y] = [x+1,y+1];  // Same as x = x + 1, y = y + 1
[x,y] = [y,x];      // Swap the value of the two variables
[x,y]               // => [3,2]: the incremented and swapped values

//Object.entries() returns an array of arrays, where each inner array represents a key/value pair for one property of the object.
let o = { x: 1, y: 2 }; // The object we'll loop over
for(const [name, value] of Object.entries(o)) {
console.log(name, value); // Prints "x 1" and "y 2"
}

// get only keys
let keys = ""
let o = { x: 1, y: 2, z: 3 };
for(let k of Object.keys(o)) {
    keys += k;
}
keys  // => "xyz"

// for values only
let sum = 0;
for(let v of Object.values(o)) {
    sum += v;
}
sum // => 6


/*The number of variables on the left of a destructuring assignment does not have to
match the number of array elements on the right. Extra variables on the left are set to
undefined, and extra values on the right are ignored. The list of variables on the left
can include extra commas to skip certain values on the right:*/
let [x,y] = [1];     // x == 1; y == undefined
[x,y] = [1,2,3];    // x == 1; y == 2   

[,x,,y] = [1,2,3,4]; // x == 2; y == 4

/*If you want to collect all unused or remaining values into a single variable when
destructuring an array, use three dots (...) before the last variable name on the lefthand side:*/
let [x, ...y] = [1,2,3,4];  // y == [2,3,4]

/*A powerful feature of array destructuring is that it does not actually require an array!
You can use any iterable object (Chapter 12) on the righthand side of the assignment;
any object that can be used with a for/of loop (§5.4.4) can also be destructured:*/
let [first, ...rest] = "Hello"; // first == "H"; rest == ["e","l","l","o"]

/*Destructuring assignment can also be performed when the righthand side is an object
value. In this case, the lefthand side of the assignment looks something like an object
literal: a comma-separated list of variable names within curly braces:*/

let transparent = {r: 0.0, g: 0.0, b: 0.0, a: 1.0}; // A RGBA color
let {r, g, b} = transparent;  // r == 0.0; g == 0.0; b == 0.0

// Same as const cosine = Math.cos, tangent = Math.tan;
const { cos: cosine, tan: tangent } = Math;


/*Destructuring assignment becomes even more complicated when it is used with nes
ted objects, or arrays of objects, or objects of arrays, but it is legal:*/
let points = [{x: 1, y: 2}, {x: 3, y: 4}];     
// An array of two point objects
let [{x: x1, y: y1}, {x: x2, y: y2}] = points; // destructured into 4 variables.
(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4) // => true


/*Or, instead of destructuring an array of objects, we could destructure an object of arrays:*/
let points = { p1: [1,2], p2: [3,4] };         
// An object with 2 array props
let { p1: [x1, y1], p2: [x2, y2] } = points;   // destructured into 4 vars
(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4) // => true
```

########################################################################################################

*******************************************************************************************************

## conditioner statement

```js
switch(n) {
    case 1:                  // Start here if n === 1 
            // Execute code block #1.             
        break;         // Stop here            
    case 2:     // Start here if n === 2
            // Execute code block #2.              
        break;// Stop here                 
    case 3:         // Start here if n === 3
            // Execute code block #3.                      
        break;// Stop here                 
    default:    // If all else fails..
            // Execute code block #4.                     
        break;  // Stop here                   
}

//IF STATEMENT
 if (n === 1) {
    // Execute code block #1
 } else if (n === 2) {
    // Execute code block #2
 } else if (n === 3) {
    // Execute code block #3
 } else {
    // If all else fails, execute block #4
 }

let count = 0;
while(count < 10) {
    console.log(count);
    count++;
}

 do {
    console.log(a[i]);
 } while(++i < a.length);


  for(initialize ; test ; increment)
    statement
//or
for(initialize ; test ; increment) {
    statements
    statements
}

// For of
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9], sum = 0;
for(let element of data) {
    sum += element;
}
console.log(sum)       // => 45

//this is same as writing
for(i=0; i<data.length; i++) {
    sum += data[i]
}

```

## for/of with strings

```js
//Strings are iterable character-by-character in ES6:
    let frequency = {};
for(let letter of "mississippi") {
    if (frequency[letter]) {
        frequency[letter]++;
    } else {
        frequency[letter] = 1;
    }
}
//and this is same as the above using map
const mymap = new Map();  // look into weakmap fir objects because if we have reference type in map it will never be garbage collected
for(let l of "mississippi") {
    mymap.set(l, (mymap.get(l) ?? 0) +1)

}
console.log(mymap)

## set
 let text = "Na na na na na na na na Batman!";
 let wordSet = new Set(text.split(" "));
 let unique = [];
 for(let word of wordSet) {
    unique.push(word);
 }

 //we can also use spread instead of for loop
  let text = "Na na na na na na na na Batman!";
 let wordSet = new Set(text.split(" "));
 let unique = [...wordSet];


```

## Testing Properties

to check whether an object has a property with a given name.
You can do this with the in operator, with the hasOwnProperty()
and propertyIsEnumerable() methods, or simply by querying the property

```js
let o = { x: 1 };
"x" in o         // => true: o has an own property "x"
"y" in o         // => false: o doesn't have a property "y"
"toString" in o  // => true: o inherits a toString property

let o = { x: 1 };
o.hasOwnProperty("x")   // => true: o has an own property x     
o.hasOwnProperty("y")     // => false: o doesn't have a property y   
o.hasOwnProperty("toString") // => false: toString is an inherited property


let o = { x: 1 };
o.propertyIsEnumerable("x")  // => true: o has an own enumerable property x
o.propertyIsEnumerable("toString")  // => false: not an own property
Object.prototype.propertyIsEnumerable("toString") // => false: not enumerable

/*There is one thing the in operator can do that the simple property access technique
shown here cannot do. in can distinguish between properties that do not exist and
properties that exist but have been set to undefined. Consider this code:*/

let o = { x: undefined };  // Property is explicitly set to undefined
o.x !== undefined          // => false: property exists but is undefined
o.y !== undefined          // => false: property doesn't even exist
"x" in o                   // => true: the property exists
"y" in o                   // => false: the property doesn't exist
delete o.x;                // Delete the property x
"x" in o                   // => false: it doesn't exist anymore


/* To guard against enumerating inherited properties with for/in, you can add an
explicit check inside the loop body: */
for(let p in o) {
    if (!o.hasOwnProperty(p)) continue;    // Skip inherited properties   
}

for(let p in o) {
    if (typeof o[p] === "function") continue; // Skip all methods
}

/*
As an alternative to using a for/in loop, it is often easier to get an array of property
names for an object and then loop through that array with a for/of loop. There are
four functions you can use to get an array of property names:
• Object.keys() returns an array of the names of the enumerable own properties
of an object. It does not include non-enumerable properties, inherited properties,
or properties whose name is a Symbol (see §6.10.3).
• Object.getOwnPropertyNames() works like Object.keys() but returns an array
of the names of non-enumerable own properties as well, as long as their names
are strings.
• Object.getOwnPropertySymbols() returns own properties whose names are
Symbols, whether or not they are enumerable.
• Reflect.ownKeys() returns all own property names, both enumerable and non
enumerable, and both string and Symbol.
*/

## copying object
/*
Object.assign() expects two or more objects as its arguments. It modifies and
returns the first argument, which is the target object, but does not alter the second or
any subsequent arguments, which are the source objects
*/

/*Instead, what you can do is to create a new object, copy the defaults into it, and then
override those defaults with the properties in o:*/

o = Object.assign({}, defaults, o);
```

## 6.8 Serializing Objects

```js
 let o = {x: 1, y: {z: [false, null, ""]}}; // Define a test object
 let s = JSON.stringify(o);   // s == '{"x":1,"y":{"z":[false,null,""]}}'
 let p = JSON.parse(s);       // p == {x: 1, y: {z: [false, null, ""]}}
 ```

## Computed Property Names

 ```js
const PROPERTY_NAME = "p1";
function computePropertyName() { return "p" + 2; }
let o = {};
o[PROPERTY_NAME] = 1;
o[computePropertyName()] = 2;
```

### es6 you can use

```js
const PROPERTY_NAME = "p1";
function computePropertyName() { return "p" + 2; }
let p = {
[PROPERTY_NAME]: 1,
[computePropertyName()]: 2
};
p.p1 + p.p2 // => 3
```

## Spread Operator

```JS
 let position = { x: 0, y: 0 };
 let dimensions = { width: 100, height: 75 };
 let rect = { ...position, ...dimensions };
 rect.x + rect.y + rect.width + rect.height // => 175

/*
If the object that is spread and the object it is being spread into both have a property
with the same name, then the value of that property will be the one that comes last:
*/
 let o = { x: 1 };
 let p = { x: 0, ...o };
 p.x   // => 1: the value from object o overrides the initial value
 let q = { ...o, x: 2 };
 q.x   // => 2: the value 2 overrides the previous value from o.
 
 let j = {h:1, y:2, o:5}
 let u = {k:1, y:6, t:5}
 let c = {...j, ...u} // result will be {h:1, y:6, o:5, t:5}  the last object property values overides

```

## Shorthand Methods

```js
// Prior to ES6,
let square = {
    area: function() { return this.side * this.side; },
    side: 10
};
square.area() // => 100

// with es6
let square = {
    area() { return this.side * this.side; },
    side: 10
};
square.area() // => 100
```

## Arrays

Array literals   []
• The ... spread operator on an iterable object [...identifier]
• The Array() constructor
• The Array.of() and Array.from() factory methods

### array literals

```js
let empty = [];                 // An array with no elements
let primes = [2, 3, 5, 7, 11];  // An array with 5 numeric elements
let misc = [ 1.1, true, "a", ]; // 3 elements of various types + trailing comma

/*The values in an array literal need not be constants; they may be arbitrary
expressions: */
let base = 1024;
let table = [base, base+1, base+2, base+3];


//Array literals can contain object literals or other array literals:
let b = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]];

//sparse array not to forget is just a normal js array with empty or undefined elements betwen indexes e.g

let ar = [,,,]  //empty array with length of 3 filled with undefined items
let ar1 = [,,,,5] // array with 1 item but length of 5
let ar1 = [1,,,5] // array with 2 items but length of 5
```

## The Spread Operator

```js
/*
In ES6 and later, you can use the “spread operator,” ..., to include the elements of
one array within an array literal:
*/
let a = [1, 2, 3];
let b = [0, ...a, 4];  // b == [0, 1, 2, 3, 4]

//The spread operator is a convenient way to create a (shallow) copy of an array:
let original = [1,2,3];
let copy = [...original];
copy[0] = 0;  // Modifying the copy does not change the original
original[0]   // => 1

/*Set objects (§11.1.1) are iterable, so an easy way to remove duplicate elements from
an array is to convert the array to a set and then immediately convert the set back to
an array using the spread operator:*/
let letters = [..."hello world"];
[...new Set(letters)]  // => ["h","e","l","o"," ","w","r","d"]

```

## The Array() Constructor

```js
/*
Another way to create an array is with the Array() constructor. You can invoke this
constructor in three distinct ways:
• Call it with no arguments:
*/
let a = new Array();
//This method creates an empty array with no elements and is equivalent to the array literal [].

//Call it with a single numeric argument, which specifies a length:
let a = new Array(10); //This technique creates an array with the specified length

/* Explicitly specify two or more array elements or a single non-numeric element for the array: */
let a = new Array(5, 4, 3, 2, 1, "testing, testing");

```

## Array.of()

```js
/**
 When the Array() constructor function is invoked with one numeric argument, it
uses that argument as an array length. But when invoked with more than one
numeric argument, it treats those arguments as elements for the array to be created.
This means that the Array() constructor cannot be used to create an array with a sin
gle numeric element

 In ES6, the Array.of() function addresses this problem: it is a factory method that
 creates and returns a new array, using its argument values (regardless of how many of
 them there are) as the array elements:
*/

Array.of()        // => []; returns empty array with no arguments
Array.of(10)      // => [10]; can create arrays with a single numeric argument
Array.of(1,2,3)   // => [1, 2, 3]
```

## Array.from()

```js
let copy = Array.from(original);  //makes a copy of an array
let truearray = Array.from(arraylike);  // turns array like objects to true array object by copying

//also accept an option second argument
let truearray = Array.from(arraylike,  (el)=> {
    console.log(el)
    return el*2
})

//use array.from instead of map if you need to convert object like array to normal array
```

Finally, splice() is the general-purpose method for inserting, deleting, or replacing
array elements. It alters the length property and shifts array elements to higher or
lower indexes as needed. See §7.8 for details

```js
splice()

## LOOPING THROUGH ARRAYS

let everyother = "";
    for(let [index, letter] of letters.entries()) {
    if (index % 2 === 0) everyother += letter;  // letters at even indexes
}
//everyother  // => "Hlowrd"

/*Another good way to iterate arrays is with forEach(). This is not a new form of the
for loop, but an array method that offers a functional approach to array iteration.
You pass a function to the forEach() method of an array, and forEach() invokes
your function once on each element of the array:
*/
let uppercase = "";
letters.forEach(letter => {  // Note arrow function syntax here
    uppercase += letter.toUpperCase();
});
//uppercase  // => "HELLO WORLD"

 /*
find() and findIndex()
The find() and findIndex() methods are like filter() in that they iterate through
your array looking for elements for which your predicate function returns a truthy
value. Unlike filter(), however, these two methods stop iterating the first time the
predicate finds an element. When that happens, find() returns the matching ele
ment, and findIndex() returns the index of the matching element. If no matching
element is found, find() returns undefined and findIndex() returns -1:
*/

let a = [1,2,3,4,5];
a.findIndex(x => x === 3)  // => 2; the value 3 appears at index 2
a.findIndex(x => x < 0)    // => -1; no negative numbers in the array
a.find(x => x % 5 === 0)   // => 5: this is a multiple of 5
a.find(x => x % 7 === 0)   // => undefined: no multiples of 7 in the array
```

## every() and some()
```js
/*
The every() and some() methods are array predicates: they apply a predicate function you 
specify to the elements of the array, then return true or false.
The every() method is like the mathematical “for all” quantifier ∀: it returns true if
and only if your predicate function returns true for all elements in the array:
*/

 let a = [1,2,3,4,5];
 a.every(x => x < 10)      // => true: all values are < 10.
 a.every(x => x % 2 === 0) // => false: not all values are even.

/*
The some() method is like the mathematical “there exists” quantifier ∃: it returns
true if there exists at least one element in the array for which the predicate returns
true and returns false if and only if the predicate returns false for all elements of
the array:
*/

let a = [1,2,3,4,5];
a.some(x => x%2===0)  // => true; a has some even numbers.
a.some(isNaN)         
// => false; a has no non-numbers.

reduce() and reduceRight()

let a = [1,2,3,4,5];
a.reduce((x,y) => x+y, 0) // initial value is passed so the first argument become the initial value which is 0 x=0 and y =a[0] 
// => 15; the sum of the values 

a.reduce((x,y) => x*y, 1)          // => 120; the product of the values

a.reduce((x,y) => (x > y) ? x : y) // => 5; the largest of the values

/*
On the first call to the function, this first argument is the initial value you
passed as the second argument to reduce(). On subsequent calls, it is the value
returned by the previous invocation of the function. In the first example, the reduc
tion function is first called with arguments 0 and 1. It adds these and returns 1. It is
then called again with arguments 1 and 2 and returns 3. Next, it computes 3+3=6,
then 6+4=10, and finally 10+5=15. This final value, 15, becomes the return value of
reduce().


You may have noticed that the third call to reduce() in this example has only a single
argument: there is no initial value specified. When you invoke reduce() like this with
no initial value, it uses the first element of the array as the initial value. This means
that the first call to the reduction function will have the first and second array ele
ments as its first and second arguments.
*/


//reduceRight() works just like reduce(), except that it processes the array from highest index to lowest (right-to-left)

```

## Flattening arrays with flat() and flatMap()

```js
[1, [2, 3]].flat()    // => [1, 2, 3]
[1, [2, [3]]].flat()  // => [1, 2, [3]]

/*
When called with no arguments, flat() flattens one level of nesting. Elements of the
original array that are themselves arrays are flattened, but array elements of those
arrays are not flattened. If you want to flatten more levels, pass a number to flat():
*/
let a = [1, [2, [3, [4]]]];
a.flat(1)   // => [1, 2, [3, [4]]]
a.flat(2)   // => [1, 2, 3, [4]]
a.flat(3)   // => [1, 2, 3, 4]
a.flat(4)   // => [1, 2, 3, 4]


/*
The flatMap() method works just like the map() method
except that the returned array is automatically flattened as if passed to flat(). That
is, calling a.flatMap(f) is the same as (but more efficient than) a.map(f).flat():
*/

let phrases = ["hello world", "the definitive guide"];
let words = phrases.flatMap(phrase => phrase.split(" "));
words // => ["hello", "world", "the", "definitive", "guide"];

// more efficient than the one below  samething but the above is more efficent i dont why the book says so.
let phrases = ["hello world", "the definitive guide"];
let words = phrases.map(phrase => phrase.split(" ")).flat();
console.log(words)

```

## pushing and popping

```js
let stack = [];     // stack == []  
stack.push(1,2);    // stack == [1,2];
stack.pop();      // stack == [1]; returns 2    
stack.push(3);    // stack == [1,3]    
stack.pop();      // stack == [1]; returns 3    
stack.push([4,5]);   // stack == [1,[4,5]] 
stack.pop()        // stack == [1]; returns [4,5]   
stack.pop();       // stack == []; returns 1   


The unshift() and shift() methods behave much like push() and pop(), except
that they insert and remove elements from the beginning of an array rather than from the end

let q = [];                 // q == []
q.push(1,2);                // q == [1,2]
q.shift();                  // q == [2]; returns 1  
q.push(3)                   // q == [2, 3]
q.shift()                   // q == [3]; returns 2      
q.shift()                   // q == []; returns 3            

 let a = [];     // a == []       
a.unshift(1)     // a == [1]       
a.unshift(2)     // a == [2, 1]       
a = [];           // a == []      
a.unshift(1,2)     // a == [1, 2]     







```
