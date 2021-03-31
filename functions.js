"use strict";

//Given a `town`, return `True` if `town` is 'San Francisco

// 1. isHometown

// Define your function here
function isHometown(town){
    if (town =='San Francisco'){
        return true;
    }
    console.log(isHometown);
}


"use strict";





// 2. getFullName

// Define your function here

function getFullName(first, last){
    return (full==`${first} ${last}`);
}


// 3. calculateTotal

// Define your function here

function calculateTotal(base, state, tax = 0.05){
    const subTotal = base * ( 1 + tax );
    let fee = 0;
    if (state === 'CA'){
        (fee = 0.03*subTotal);
    }else if (state === 'PA'){
        (fee=2);
    }else if (state ==='MA'){
     if (base <= 100){
        (fee = 1);
        } else {
        (fee===3);
    }
}

        return subTotal+fee
    }
