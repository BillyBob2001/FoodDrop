function Banner(height, width, x, y, textColour, borderColour, backgroundColour, text, textSize, fontType, click){
     this.container = document.createElement("div");
     this.x=x;
     this.y=y;
     this.height=height;
     this.width=width;
     this.textColour=textColour;
     this.borderColour=borderColour;
     this.backgroundColour=backgroundColour;
     this.text=text;
     this.textSize=textSize;
     this.fontType=fontType;
     this.click=click;
     this.message = document.createTextNode(this.text);
    this.init=function(){
        this.setup();
    }
    
    this.setup=function(){
             //creats a place for the image to go  
        this.container.style.position="absolute";
        this.container.style.left = this.x;
        this.container.style.top = this.y;
        this.container.style.visibility = "visible";
        this.container.style.width = this.width;
        this.container.style.height = this.height;
        this.container.style.color = this.textColour;
        this.container.style.backgroundColor = this.backgroundColour;
        this.container.style.border = this.borderColour;
        this.container.style.textAlign="center";
        this.container.style.fontSize=this.textSize;
        this.container.style.fontFace=this.fontType;
         // creats the image object
     
      //onclick button 
      var me=this;
        this.container.onclick=function(){
                
                me.clicked(me);
        }
        //puts the image in thre space 
        this.container.appendChild(this.message);

        // This next line will just add it to the <body> tag
        document.body.appendChild(this.container);  
   
    }
    this.clicked=function(me){
        me.viz();
        me.click();
        
    }
    this.die=function(){
       document.body.removeChild(this.container);
      
    }
    this.updateMessage=function(newMessage, placeHolder){
              var textCopy=this.text;
              var newText=textCopy.replace(placeHolder, newMessage);
              this.message.nodeValue=newText;
    }
    
    this.viz=function(){
        if (this.container.style.visibility=="visible"){
            this.container.style.visibility="hidden";
            
        }
        else {
            this.container.style.visibility="visible";
        }
    }
    
}

