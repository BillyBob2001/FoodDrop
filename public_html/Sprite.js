//main sprite object
function Sprite(args){
    
    
    //METHODS************************************************************
    //create image on screen looks for a contact
   this.init=function(){
    //creats a place for the image to go  
    var container = document.createElement("div");
    container.style.position="absolute";
    container.style.left = args.x || new Error (1, args.name, "The x position of an image is not set");
    container.style.top = args.y || new Error (1, args.name, "The y position of the image is not set");
     // creats the image object
    var img = document.createElement("img");
    img.src = args.img;
    img.width = args.width || new Error (1, args.name, "Width of image is not set");
    img.height = args.height || new Error(1, args.name, "height of image was not set");
    
    //puts the image in thre space 
    container.appendChild(img);
  
   

    // This next line will just add it to the <body> tag
    document.body.appendChild(container);  
   } 
   
   //moves sprite on screen
   this.movement=function(){
       
   }
   
   //kills objects
   this.die=function(){
       
   }
   
   //emptys bowl
   this.empty=function(){
       
   }
   
   //sets image
   this.setImage=function(){
       
   }
}


