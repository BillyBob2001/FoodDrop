function Error(level,objectCaller,message){
    
    if (level==1){
        alert("CRITICAL: " + objectCaller + " " +  message);
        
    }
    else if (level==2){
        console.log("WARNING: " + objectCaller + " " + message);
        
    }
     else if (level==3){
        console.log("DEBUG: " + objectCaller + " " + message);
        
    }
    
}


