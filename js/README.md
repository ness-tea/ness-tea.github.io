# JavaScript Notes
Keeping some notes for reference.

## About JavaScript
- **JavaScript** is a scripting language; **NOT** like Java
- Should always be included at the end of the  body tag (right before </body>)
  - HTML reads from top to bottom; this is to ensure that page is loaded before js script is
- All statements should end with a semi-colon ;

## Variables
- **Varaibles** in JS are declared with the keyword 'var'
- No type declaration needed
- **e.g.** var string = "hello world";
           var number = 3;
           var array = [1, 2, 3];

## Strings
- Declared with 'var string1 = "hello world";'
- If there is a string within a string, use single quotations outside, and double quotations on
  inner string
  - **e.g.** var string1 = 'hello "world"';
- If there is a conjunction being used (e.g. I'm) where a single quotation present, use the
  back escape key
  - **e.g.** var string1 = 'I\'m a "ninja"';

## Arrays
- Declared with 'var Array = [];' which declares an empty array
- Can assign elements to array by 'Array[0] = 1', 'Array[1] = 2', etc.
- Declare an array with fixed size using 'var Array = new Array(5)'
- Subroutines:
  - Array.length = length of Array
  - Array.sort() = sorts array from low to high value
    - If string, alphabetical order
    - If numbers, numerical order
    - order from low to high is numbers, boolean, string
  - Array.reverse() = sort array from high to low value
    - opposite of sort

## Objects
- A container that encloses data
  - **e.g.** an array is an object
- has properties and methods
  - dot notation to access behaviours and methods
    - **e.g.** var myString = new String(); instantiates a new string
               myString = "hello";
               myString.length will return 5 (a property)
               myString.toLowerCase() will return the string in lowercase letters (a method)
- **Creating a JS object**
  - var myCar = new Object(); creates a new object
- **Assigning Properties**
  - myCar.maxSpeed = 50;
  - myCar.driver = "Vanessa";
- **Assigning Methods**
  - myCar.drive = function() {console.log("now driving");};
  - note the double semi-colon
  - to call, use parantheses (**i.e.** myCar.drive();)

- Another way to create a JS object is by using an array:
  - var myCar2 = {
        maxspeed: 50,
        driver: "Bob",
        drive: function(speed, time){ < This logs the distance travelled
          console.log(speed * time);    
          }
        };
