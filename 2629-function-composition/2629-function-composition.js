/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
       //fn = functions[functions.length-1](x);
       fn=x;
       for(i=functions.length-1;i>=0;i--){
            fn = functions[i](fn);
       } 
       return fn;
    
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */