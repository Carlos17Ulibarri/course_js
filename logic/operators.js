//Comparative

/*
    Equal
        == 
        === -> Both in value and data type

    Not equal
        !==
        !== -> Both in value and data type

    Greater than
        >
        >= // Or equal 

    Smaller than
        <
        < // Or equal 
*/

// Examples

    const data = {
        d1: 10,
        d2: 50,
        d3: "10"
    };

    const results = {
        r1: data.d1 == data.d3,
        r2: data.d1 === data.d3, 
        r3: data.d1 !==  data.d3,
        r4: data.d1 >= data.d2,
        r5: data.d1 >= data.d3,
        r6: data.d3 <= data.d2
    };

    console.log(results);

// logical

/*
    && // AND 
    || // OR
    ! // NOT
*/

    results.r7 = data.d1 === data.d2 && data.d2 === data.d3;
    results.r8 = data.d1 === data.d2 || data.d2 === data.d3;
    results.r9 = !(true);

    console.log(results);