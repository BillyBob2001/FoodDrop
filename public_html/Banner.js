function Banner(height, width, x, y, textColour, borderColour, backgroundColour, text, textSize, fontType){
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
    this.init=function(){
        this.setup();
    }
    this.setup=function(){
             //creats a place for the image to go  
        this.container.style.position="absolute";
        this.container.style.left = this.x;
        this.container.style.top = this.y;
        //this.container.style.width = this.width;
       // this.container.style.height = this.height;
        this.container.style.color = this.textColour;
        this.container.style.backgroundColor = this.backgroundColour;
        this.container.style.border = this.borderColour;
        this.container.style.textAlign="center";
        this.container.style.fontSize=this.textSize;
        this.container.style.fontFace=this.fontType;
         // creats the image object
        var message = document.createTextNode(this.text);
      

        //puts the image in thre space 
        this.container.appendChild(message);
  
    

    // This next line will just add it to the <body> tag
    document.body.appendChild(this.container);  
   
    }
    this.die=function(){
        
    }
    this.updateMessage=function(){
        
    }
    
}

