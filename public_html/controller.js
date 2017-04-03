
//*******************************************************Globals************************************************************
var catchingBowl="";

var foods=[];



function start(){
    bowlSpawner();
    foodSpawner();
}

function keyPress(event){
    //console.log(event.keyCode);
    
    if(event.keyCode==97){
            catchingBowl.movement(-10,0);
    }    
   else if(event.keyCode==100){
            catchingBowl.movement(+10,0);
    }
   else if(event.keyCode==119){
       catchingBowl.movement(0,-10);
   }
   else if(event.keyCode==115){
       catchingBowl.movement(0,+10);
   }
}
function foodSpawner(){
    var args={
        name:"apple",
        img:"images/Foods/apple.jpg",
        height:40,
        width:40,
        x:100,
        y:1,
        
    };
     foods[0]=new Food(args);
            
    foods[0].init();
    
}
function bowlSpawner(){
    var args={
        name:"bowl",
        img:"images/Bowl.png",
        height:100,
        width:100,
        x:window.innerWidth*0.1,
        y:window.innerHeight*0.5,
    };
     catchingBowl=new Bowl(args);
            
    catchingBowl.init();
    
}