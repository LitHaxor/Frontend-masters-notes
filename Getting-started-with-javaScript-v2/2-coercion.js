/**Type Conversion **/

let msg1= "There are ";
let numberOfStudents = 16;
let msg2 = " students";

console.log(msg1+ numberOfStudents + msg2);
// Implicit coertion

console.log(
    `There are ${numberOfStudents + ""} students`
);

// converting JS type with concatination with ""