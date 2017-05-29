var numList1=[10,0,100,90,0,10,8,10,0.5,9, ,9-7 , 10, Math, -90, +82];
var numList2=[0,10,90,100,0,10,10, "hello" , 6, .9,3, 999, 893, 90,90,9];

function test(){
    var min;
    var max;
    var  pass=0;
    var fail=0;
    var numTests=numList1.length +1;
    var i;
    console.log("about to run " + numTests + " tests");
    for( i=1; i<numList1.length+1; i++){
      
        min=numList1[i];
        max=numList2[i];
    
        var number=randomNumber(min,max);
        //if min is bigger than max then expect null.
        if(min>max && number==null){
            pass++;
            console.log("test " + i + " passed");
        }
        //if the reslute is bigger than min and smaller than max then pass.
        else if(number >=min && number<=max){
            pass++;
            console.log("test " + i + " passed");
        }
        else if((isNaN(min) || isNaN(max)) && number==null){
            pass++;
             console.log("test " + i + " passed");
        }
        //any thing else is a fail
        else {
            fail++;
            console.log( "test " + i + " FAIL: expected between " + min + " and " + max + " got " + number );
           
        }
       
    }
    if (i!=numTests){
        fail++;
        console.log("FAIL expected to run " + numTests + " ran " + i);
    }
  else{
      pass++;
  }
      console.log(pass + " tests passed " + fail + " tests failed ");
  
   
    
}

