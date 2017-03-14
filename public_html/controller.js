

function start(){
    var args={
        name:"bowl",
        img:"images/bowl.png",
        height:"200",
        width:"200",
        x:window.innerWidth*0.1,
        y:window.innerHeight*0.5,
    };
    var bowl=new Bowl(args);
    
    bowl.init();
}