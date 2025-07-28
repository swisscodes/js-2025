# Javascript The Definative Guide 5th Edition

*******************************************************************************************************

## object property access

// Conditionally access properties with ?. (ES2020):
 book.contents?.ch01?.sect1 // => undefined: book.contents has no ch01 property

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
