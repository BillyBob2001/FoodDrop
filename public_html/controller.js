
//*******************************************************Globals************************************************************
var catchingBowl="";
var count = 0;

var scoreBanner="";

var score = 0;

var foods=[];
var foodTypes={
    //Ratio small one is allways 40
    //Setting up the food stuff
    "Apple":{
        name:"apple",
        img:"images/Foods/apple.png",
        height:40,
        width:40,
        x:100,
        y:1,
        score:5
    },
    "Cheese":{
        name:"cheese",
        img:"images/Foods/Cheese.png",
        height:40,
        width:70,
        x:500,
        y:1,
        score:10
    },
    "Icecream":{
        name:"iceCream",
        img:"images/Foods/Icecream.png",
        height:53,
        width:40,
        x:500,
        y:1,
        score:3
    },
       "Watermelon":{
        name:"Watermelon",
        img:"images/Foods/Watermelon.png",
        height:40,
        width:66,
        x:500,
        y:1,
        score:8
    },
       "Banna":{
        name:"banna",
        img:"images/Foods/Banna.png",
        height:40,
        width:42,
        x:500,
        y:1,
        score:4
    },
       "Cookie":{
        name:"Cookie",
        img:"images/Foods/Cookie.png",
        height:40,
        width:40,
        x:500,
        y:1,
        score:2
    },
       "Grapes":{
        name:"Graped",
        img:"images/Foods/Grapes.png",
        height:40,
        width:41,
        x:500,
        y:1,
        score:9
    },
       "Olive":{
        name:"Olive",
        img:"images/Foods/Olive.png",
        height:40,
        width:54,
        x:500,
        y:1,
        score:14
    },
       "Pineapple":{
        name:"Pineapple",
        img:"images/Foods/Pineapple.png",
        height:40,
        width:40,
        x:500,
        y:1,
        score:12
    },
       "Sandwhich":{
        name:"Sandwhich",
        img:"images/Foods/Sandwitch.png",
        height:40,
        width:60,
        x:500,
        y:1,
        score:-5
    },
       "Stawberry":{
        name:"Stawberry",
        img:"images/Foods/Stawberry.png",
        height:56,
        width:40,
        x:500,
        y:1,
        score:1
    },
       "Spaghetti":{
        name:"Spaghetti",
        img:"images/Foods/Spaghetti.png",
        height:40,
        width:55,
        x:500,
        y:1,
        score:20
    },
    
            
    
};


//Starts the game by spawning the bowl, and it also spawns the food every 3sec
function start(){
     scoreBanner=new Banner(100, window.innerWidth, 0, 0, "red", "white", "black", "Score: |score|", 18, "chicago");
    scoreBanner.setup();
    scoreBanner.updateMessage(0, "|score|");
    bowlSpawner();
    setInterval( function(){foodSpawner()},3000);
    
   
    
}
// Tells us what key is being pressed
function keyPress(event){
    //console.log(event.keyCode);
    
    
    //bowl controles 
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
//gives the start banner its attributes
function startBanner(){
    var startBanner=new Banner("100%", "100%", 0, 0, "green", "blue", "red", "START", 100, "times",start);
    startBanner.init();
        
    
}
//checks the ostion of the food and the bowl.
function checker(){
     var b=catchingBowl.locater();
     
     
     //runs through the list of foods and returns the location of the food
     for (i = 0; i<foods.length; i++){
         var f=foods[i].locater();
         if (overlap(b,f)){
             //what happens when food is caught 
          
          score+=foods[i].score;
          scoreBanner.updateMessage(score, "|score|");
          foods[i].die();
         }
             
         
     }
}
// do they over lap
function overlap(bl,fl){
    var bxmid= bl.x+(bl.width/2);
    var bymid= bl.y+(bl.height/2);
    
    if (fl.x<=bxmid && fl.x+fl.width>=bxmid && fl.y<=bymid && fl.y+fl.height>=bymid){
        return 1;
    }
    else {
        return 0;
    }
        
}
function dropOff (food){
    score+=(0-food.score);
    scoreBanner.updateMessage(score, "|score|");
    
}








