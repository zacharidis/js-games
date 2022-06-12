

var counter = 0 ; 



$("button").click(function(){


  

  for (let i = 0 ; i < 256 ; i++ ) {

  let bx1 = Math.random();
  let bx2 = Math.random();
  let bx3 = Math.random();



  bx1 =  parseInt(bx1 * 225);
  bx2 = parseInt(bx2 * 225);

  bx3 = parseInt(bx3*225);

  console.log(bx1,bx2,bx3);

  $(".boxOne").css("background-color",`rgb(${bx1},${bx2},${bx3})`);

  $(".boxTwo").css("background-color",`rgb(${bx2},${bx2},${bx2})`);

  $(".boxThree").css("background-color",`rgb(${bx3},${bx3},${bx3})`);

  
  if(bx1===bx2 && bx2===bx3) {
    alert(" YOU WON") ;
    counter = 0 ;
    break;

  }



  }

  counter +=1;
  
  console.log("the counter is : " + counter);
  $("h3").text("Times you've played : " + counter);




  
})


