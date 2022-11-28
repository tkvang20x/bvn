const data  =[
  {
    "id": 1,
    "first_name": "Eamon",
    "last_name": "Harhoff",
    "email": "eharhoff0@imageshack.us",
    "gender": "Male",
    "age": 76,
    "salary": 18888
  },
  {
    "id": 2,
    "first_name": "Laney",
    "last_name": "Whittam",
    "email": "lwhittam1@issuu.com",
    "gender": "Female",
    "age": 42,
    "salary": 15018
  },
  {
    "id": 3,
    "first_name": "Lynett",
    "last_name": "Twinberrow",
    "email": "ltwinberrow2@gov.uk",
    "gender": "Female",
    "age": 99,
    "salary": 13343
  },
  {
    "id": 4,
    "first_name": "Madella",
    "last_name": "Kliesl",
    "email": "mkliesl3@ft.com",
    "gender": "Female",
    "age": 56,
    "salary": 5248
  },
  {
    "id": 5,
    "first_name": "Simona",
    "last_name": "Knee",
    "email": "sknee4@sciencedaily.com",
    "gender": "Female",
    "age": 61,
    "salary": 14376
  },
  {
    "id": 6,
    "first_name": "Cord",
    "last_name": "McMurthy",
    "email": "cmcmurthy5@wordpress.org",
    "gender": "Male",
    "age": 86,
    "salary": 9514
  },
  {
    "id": 7,
    "first_name": "Obed",
    "last_name": "Beaven",
    "email": "obeaven6@msn.com",
    "gender": "Male",
    "age": 91,
    "salary": 18463
  },
  {
    "id": 8,
    "first_name": "Elayne",
    "last_name": "Smeuin",
    "email": "esmeuin7@wsj.com",
    "gender": "Female",
    "age": 96,
    "salary": 19907
  },
  {
    "id": 9,
    "first_name": "Robin",
    "last_name": "Picford",
    "email": "rpicford8@typepad.com",
    "gender": "Female",
    "age": 55,
    "salary": 14975
  },
  {
    "id": 10,
    "first_name": "Patsy",
    "last_name": "Ochterlonie",
    "email": "pochterlonie9@latimes.com",
    "gender": "Female",
    "age": 93,
    "salary": 9716
  },
  {
    "id": 11,
    "first_name": "Madelina",
    "last_name": "Henrion",
    "email": "mhenriona@alibaba.com",
    "gender": "Female",
    "age": 81,
    "salary": 12932
  },
  {
    "id": 12,
    "first_name": "Godard",
    "last_name": "Sciacovelli",
    "email": "gsciacovellib@opera.com",
    "gender": "Male",
    "age": 90,
    "salary": 16655
  },
  {
    "id": 13,
    "first_name": "Padget",
    "last_name": "Gore",
    "email": "pgorec@washington.edu",
    "gender": "Male",
    "age": 34,
    "salary": 8029
  },
  {
    "id": 14,
    "first_name": "Birdie",
    "last_name": "Davidovich",
    "email": "bdavidovichd@tamu.edu",
    "gender": "Female",
    "age": 49,
    "salary": 17407
  },
  {
    "id": 15,
    "first_name": "Lisbeth",
    "last_name": "Pride",
    "email": "lpridee@epa.gov",
    "gender": "Female",
    "age": 94,
    "salary": 14993
  },
  {
    "id": 16,
    "first_name": "Saundra",
    "last_name": "Ousbie",
    "email": "sousbief@acquirethisname.com",
    "gender": "Male",
    "age": 44,
    "salary": 15423
  },
  {
    "id": 17,
    "first_name": "Allayne",
    "last_name": "Cluatt",
    "email": "acluattg@nifty.com",
    "gender": "Male",
    "age": 78,
    "salary": 13206
  },
  {
    "id": 18,
    "first_name": "Burke",
    "last_name": "Christoforou",
    "email": "bchristoforouh@un.org",
    "gender": "Male",
    "age": 84,
    "salary": 13712
  },
  {
    "id": 19,
    "first_name": "Maryanne",
    "last_name": "Stoakes",
    "email": "mstoakesi@rambler.ru",
    "gender": "Female",
    "age": 63,
    "salary": 18235
  },
  {
    "id": 20,
    "first_name": "Larisa",
    "last_name": "Bartelet",
    "email": "lbarteletj@studiopress.com",
    "gender": "Female",
    "age": 65,
    "salary": 6594
  }
]


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
const startPoint = 3
const endPoint = 5
let newArray1 = []
let newArray2 = []
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

//=========================Buổi 3=========================  
let new_data = []
let data_c2 = []

//================c1===============
function forEachC1(){
let first_name_c1 =""
let last_name_c1 = ""
    for(let index in data){
            Object.entries(data[index]).forEach(([keys , value])=> {  
                    if (keys ==='first_name'){
                      first_name_c1= value
                    }
                    if ( keys === 'last_name'){
                      last_name_c1 = value
                    }
                }
           ) 
           new_data.push({
                  "first_name": first_name_c1,
                  "last_name" : last_name_c1
          })
    }
}
forEachC1();

//================c2==================
function userC2(){
  for(let index in data){
    if (data[index].gender === 'Male' && data[index].age < 40){
          data_c2.push(data[index])
    console.log(data[index]);

    } 
  }
  }

userC2()

//================c3==================
let first_name_c3 =""
let last_name_c3 = ""
function mapC3(){
  const map_data = data.map(({key, value}) =>{
    if (key === 'first_name'){
      first_name_c3 = value
    }
    if (key === 'last_name'){
      last_name_c3 = value
    }

  }) 
  console.log(map_data);

}
mapC3()

// console.log(new_data);
// console.log(data_c2);


//====================C5================
let key_first_name = ""
let key_last_name = ""
let array_c5_1 = []
function reduceC5_1(){
    data.reduce((previousValue, currentValue) =>{

      key_first_name = currentValue.first_name
      key_last_name = currentValue.last_name
      array_c5_1.push({
        "first_name" : key_first_name,
        "last_name" : key_last_name
       })
      // console.log(previousValue);
      //  return {
      //   "first_name" : key_first_name,
      //   "last_name" : key_last_name
      //  }
   })
  
}
reduceC5_1()

let array_c5_2 = []
function reduceC5_2(){
  data.reduce((previousValue, currentValue) =>{

    if(currentValue.age < 40 && currentValue.gender === 'Male'){
      array_c5_2.push(currentValue)
    }

   
    // console.log(previousValue);
    //  return {
    //   "first_name" : key_first_name,
    //   "last_name" : key_last_name
    //  }
 })

}
reduceC5_2()
console.log(array_c5_2);
