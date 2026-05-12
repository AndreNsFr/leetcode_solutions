/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
  

    if(x < 0){
        x = x.toString().replace("-","").split("").reverse();
        x = parseInt(x.join('')) * -1
        const verify =  x | 0;
        if (x !== verify) {
            return 0;
        }

        return x;
    }
            
    x = x.toString().split('').reverse();
    x = parseInt(x.join(''));

    const verify = x | 0;
    if (x !== verify) {
        return 0;
    }

    return x;
    
};