//Food Set up. Personal stuff
function Food(args){
    var intId;
    Sprite.call(this,args);
    
     this.init=function(){
       this.display();
       var me=this;
       var intId=setInterval(function(){ me.drop() }, 90);
   } 
   
   this.drop=function(){
       this.movement(0,10);
   }
   this.movement=function(xps, yps){
       this.x=this.x + xps;
       this.y=this.y + yps;
       if(this.x > window.innerWidth){
           this.x=0;
           
       }
       else if(this.x < 0){
           this.x=window.innerWidth; 
       }
       if(this.y> (window.innerHeight-this.height)){
           this.die();
           
       }
       this.container.style.top=this.y + "px";
       this.container.style.left=this.x + "px";
       
       
   }
}
