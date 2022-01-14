module.exports = function reverse (n) {
    if (n < 0){
        n = n *( -1); 
    }
    
    let string = n.toString();
    let res = '';

    for(let i = string.length - 1; i >= 0; i-- ){
        res += string[i];
    }

    return res;
}
