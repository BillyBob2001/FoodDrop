//Food Set up. Personal stuff
function Food(args){
    Sprite.call(this,args);
    
     this.init=function(){
       this.display();
       var me=this;
       setInterval(function(){ me.drop() }, 3000);
   } 
   
   this.drop=function(){
       this.movement(0,10);
   }
}
