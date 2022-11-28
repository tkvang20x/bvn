var array = [1,2,-5,6,-3]

function b1(){
    let sum = 0;
    const item = array.map(item => {
       if (item > 0){
            sum += item
       }
    })
    console.log(sum);
}

b1()

