//incusive of min and max
function randomNumber(min,max){
    if (isNaN(min) || isNaN(max)){
        return null;
    }
    else if (min > max){
        return null;
    }
    
    return Math.floor((Math.random() * (max-min)) + min);
    
} 


