// 1. Function definition is one time process.


var fullname = "Anita Dubey";          //  Global variable   //  Variable declaration and initialization.

console.log(fullname);

function myCar() {

    //  function body
    //  Statement
    //  Variable defined inside a function is called local variable.

    let car = 'Grandi10';           //  Local variable
    console.log(car);
    console.log(fullname);


    //  Every function return something.
    
}

// 2. Function calling is many time process.

    myCar();
    console.log(fullname);