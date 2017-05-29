function Bowl(args){
    Sprite.call(this,args);
    this.movement=function(xps, yps){
       this.x=this.x + xps;
       this.y=this.y + yps;
       if(this.x > window.innerWidth){
           this.x=0;
        
       }
       else if(this.x < 0){
           this.x=window.innerWidth; 
       }
       if(this.y > (window.innerHeight-this.height)){
           this.y=(window.innerHeight-this.height);
       }
       else if(this.y <0){
           this.y=0;
       }
       this.container.style.top=this.y + "px";
       this.container.style.left=this.x + "px";
       
       
   }
}

