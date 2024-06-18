// Notation
const isActive = true;
const hasPermission = false;


// Implicit Conversion
const iC = {
    iC1: 5 < 9,
    iC2: "Name"
};
console.log(iC.iC1,!!iC.iC2);

// Explicit Conversion 
const eC = {
    eC1:0,
    eC2:1
};
console.log(Boolean(eC.eC1),Boolean(eC.eC2));
/* 0 -- Number is only to False, -n --  -1   1 -- n  Numbers is True*/