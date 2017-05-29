
//*******************************************************Globals************************************************************
var catchingBowl="";
var count = 0;

var foods=[];
var foodTypes={
    //Ratio small one is allways 40
    "Apple":{
        name:"apple",
        img:"images/Foods/apple.png",
        height:40,
        width:40,
        x:100,
        y:1
    },
    "Cheese":{
        name:"cheese",
        img:"images/Foods/Cheese.png",
        height:40,
        width:70,
        x:500,
        y:1
    },
    "Icecream":{
        name:"iceCream",
        img:"images/Foods/Icecream.png",
        height:53,
        width:40,
        x:500,
        y:1        
    },
       "Watermelon":{
        name:"Watermelon",
        img:"images/Foods/Watermelon.png",
        height:40,
        width:66,
        x:500,
        y:1        
    },
       "Banna":{
        name:"banna",
        img:"images/Foods/Banna.png",
        height:40,
        width:42,
        x:500,
        y:1        
    },
       "Cookie":{
        name:"Cookie",
        img:"images/Foods/Cookie.png",
        height:40,
        width:40,
        x:500,
        y:1        
    },
       "Grapes":{
        name:"Graped",
        img:"images/Foods/Grapes.png",
        height:40,
        width:41,
        x:500,
        y:1        
    },
       "Olive":{
        name:"Olive",
        img:"images/Foods/Olive.png",
        height:40,
        width:54,
        x:500,
        y:1        
    },
       "Orange":{
        name:"Orange",
        img:"images/Foods/Orange.png",
        height:40,
        width:66,
        x:500,
        y:1        
    },
       "Pineapple":{
        name:"Pineapple",
        img:"images/Foods/Pineapple.png",
        height:40,
        width:40,
        x:500,
        y:1        
    },
       "Sandwhich":{
        name:"Sandwhich",
        img:"images/Foods/Sandwitch.png",
        height:40,
        width:60,
        x:500,
        y:1        
    },
       "Stawberry":{
        name:"Stawberry",
        img:"images/Foods/Stawberry.png",
        height:56,
        width:40,
        x:500,
        y:1        
    },
       "Spaghetti":{
        name:"Spaghetti",
        img:"images/Foods/Spaghetti.png",
        height:40,
        width:55,
        x:500,
        y:1        
    },
    
            
    
};



function start(){
    bowlSpawner();
    setInterval( function(){foodSpawner()},3000);
   
    
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
    var keys = Object.keys(foodTypes);
    var key = randomNumber(0,keys.length);
    var args= foodTypes[keys[key]];
    args.x=randomNumber(1,window.innerWidth);
    var newFood=new Food(args);
     foods.push(newFood);
    newFood.id=count++;        
    newFood.init();
    
    
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
function removeFood(id){
    
    index=foods.findIndex(checkFood,id);
    foods.splice(index,1);
}


function checkFood(food){
    
    return food.id==this;
    
}