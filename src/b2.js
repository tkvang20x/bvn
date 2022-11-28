var array = [1, 2, -5, 6, -3]

function b2() {
    let sum = 0;
    array.map(item => {
        sum += item * item
    })
    console.log(sum);
}

b2()

