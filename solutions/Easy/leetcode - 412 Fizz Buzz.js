/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result = [];
    for(let i = 0; i < n; i++){
        let tempString = "";
        if(((i + 1) % 3) == 0){
            tempString += "Fizz";
        }
        if(((i + 1) % 5) == 0){
            tempString += "Buzz";
        }

        if(tempString != ""){
            result.push(tempString);
        }else{
            result.push((i + 1).toString());
        }

    }

    return result;

};