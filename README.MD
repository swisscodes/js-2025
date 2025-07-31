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

to check whether an object has a property
with a given name.
You can do this with the in operator, with the hasOwnProperty()
and propertyIsEnumerable() methods, or simply by querying the property
