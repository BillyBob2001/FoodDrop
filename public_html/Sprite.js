//main sprite object
function Sprite(args){
 
     this.container = document.createElement("div");
     this.x=args.x;
     this.y=args.y;
    //METHODS************************************************************
    //create image on screen looks for a contact
   this.init=function(){
    //creats a place for the image to go  
   
    this.container.style.position="absolute";
    this.container.style.left = this.x || new Error (1, args.name, "The x position of an image is not set");
    this.container.style.top = this.y || new Error (1, args.name, "The y position of the image is not set");
     // creats the image object
    var img = document.createElement("img");
    img.src = args.img || new Error (1, args.name, "image is not set");
    img.width = args.width || new Error (1, args.name, "Width of image is not set");
    img.height = args.height || new Error(1, args.name, "height of image was not set");
    
    //puts the image in thre space 
    this.container.appendChild(img);
  
    

    // This next line will just add it to the <body> tag
    document.body.appendChild(this.container);  
   } 
   
   //moves sprite on screen
   this.movement=function(xps, yps){
       this.x=this.x + xps;
       this.y=this.y + yps;
       this.container.style.top=this.y + "px";
       this.container.style.left=this.x + "px";
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


