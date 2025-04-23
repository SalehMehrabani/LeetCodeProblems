/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
       if (x<-1000 || x>1000){
        return false
       }
       if (functions.length <0 || functions.length>1000){
        return false
       }
       if (functions.length==0){
        return x
       }
       result= functions.slice(0).reverse().map((item)=>{
        x=item(x)
        return x
       })
       return result[result.length-1]
    }
};


const fn = compose([x => x + 1, x => 2 * x])
fn(4) 
