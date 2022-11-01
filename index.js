let a = {}

if (Object.keys(a).length === 0) {
    console.log("a is empty");
} else {
    console.log("a not is empty");
}

let b = 10
if (b <= 5) {
    console.log("hoc luc trung binh");
} else if (b > 5 && b < 6) {
    console.log("hoc luc kha");
} else if (b > 7 && b <= 8) {
    console.log("hoc luc kha gioi");
} else if (b >= 9) {
    console.log("hoc luc gioi");
}



const c = [2, 3, 6, 8, 9, 23, 16]
let sum = 0
const n =6
startPoint = 3
endPoint = 5
newArray1 = []
newArray2 = []
//===============b1 & b2=============
for (let i = 0; i < c.length; i++) {
    sum += c[i];
    if(n === c[i]){
        console.log("n co thuoc mang c , vi tri:" + (i+1));
    }
}
console.log(sum);

//============b3==============

let index = c.indexOf(3);

for (index ; index < c.length; index++){
        newArray1.push(c[index])
}
console.log(newArray1);

for (let i = 0; i< c.length; i++){
    if(c[i] >= startPoint && c[i] <= endPoint){
       newArray2.push(c[i])
    }
}
console.log(newArray2);

//====================b4================
let index2 = c.indexOf(6);
if (index2 > -1) {
    c.splice(index2, 1)

}
console.log(c);
