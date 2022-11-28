var string = '     George Raymond Richard Martin'
let new_string = ''
function b3() { 
    var string_trim = string.trim(); 
    for (var i = 0; i < string_trim.length; i++) {
        if (i === 0){
            new_string += string_trim.charAt(0);
        }
        if (string_trim.charAt(i) === ' '){
            new_string += string_trim.charAt(i+1)
        }
      }
      console.log(new_string);
}

b3()

