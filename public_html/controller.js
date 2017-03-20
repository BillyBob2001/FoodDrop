
//*******************************************************Globals************************************************************
var catchingBowl;
function start(){
    var args={
        name:"bowl",
        img:"images/bowl.png",
        height:"200",
        width:"200",
        x:window.innerWidth*0.1,
        y:window.innerHeight*0.5,
    };
     catchingBowl=new Bowl(args);
    
    catchingBowl.init();
}
function keyPress(event){
    //console.log(event.keyCode);
    
    if(event.keyCode==97){
            catchingBowl.movement(-100,0);
    }    
}