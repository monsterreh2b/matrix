 var counter = 0;

var targetNumber = 0;

  // Now for the hard part. Creating multiple playerOne each with their own unique number value.

  // We begin by expanding our array to include four options.
  // var name = ["Neo", "Trinity", "Morpheus", "Agent Smith"];
  var identityNum = [0,1,2,3];
  var healthPoints = [12,8,3,2,9,11,6,1,7,10,5,4];
  var attackPower = [3,5,8,4,9,7,1,10,12,2,6,11];
  var counterAttackPower = [2,9,12,8,3,1,7,6,4,10,11,5];
var imagePlayer=[];

var count = 0;

var images= ["./assets/images/0.jpg", "./assets/images/1.jpg", "./assets/images/2.jpg", "./assets/images/3.jpg"]


function targetRand(){ // between 19 - 120.
  targetNumber = Math.floor(Math.random() * 102) + 19; //(max - min + 1)+ min;
  $("#number-to-guess").text(targetNumber);
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function reset(array){
  targetRand();
  counter = 0;
  $("#total").text(counter);
 
  
}

function attribute(array){
  for (var i = 0; i < 4; i++) {

imagePlayer[i].attr("health", healthPoints[i]);
 $("#playerOne").append(imagePlayer[i]);
 }
}
// }
targetRand();
  // Next we create a for loop to create playerOne for every numberOption.


  for (var i = 0; i < 4; i++) {

    // For each iteration, we will create an imagePlayer
    imagePlayer[i] = $("<img>");

    // First each player will be given the class ".player-image".
    // This will allow the CSS to take effect.
    imagePlayer[i].addClass("player-image");

    // Each imagePlayer will be given a src link to the player image

    imagePlayer[i].attr("src", images[i]);
 

    // Each imagePlayer will be given a data attribute called health, attack, & counter
    // These data attributes will be set equal to their array values.
    
    imagePlayer[i].attr("identity", identityNum[i]);
    imagePlayer[i].attr("health", healthPoints[i]);
    imagePlayer[i].attr("attack", attackPower[i]);
    imagePlayer[i].attr("counter", counterAttackPower[i]);

    // Lastly, each player image (with all it classes and attributes) will get added to the page.
    $("#cast").append(imagePlayer[i]);
  }

  // This time, our click event applies to every single player on the page. Not just one.
  $(".player-image").on("click", function() {

    // Determining the player's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the player value of the clicked player.
    // Using the .attr("health") allows us to grab the value out of the "health" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    

    var identityValue = ($(this).attr("identity"));
    // identityValue = parseInt(identityValue);
    // alert(name[identityValue]);



      for (var i=0; i<imagePlayer.length; i++){
        if (identityValue === imagePlayer[i].attr("identity")){
          imagePlayer[i].addClass("protag");
          $("#playerOne").append(imagePlayer[i]);
          
          
        }else{
          imagePlayer[i].addClass("enemas");
        $("#enemies").append(imagePlayer[i]);
      }

      
      // 
        }

        count = 1;
  //     var healthValue = ($(this).attr("health"));
  //     healthValue = parseInt(healthValue);
  //     var attackValue = ($(this).attr("attack"));
  //     attackValue = parseInt(attackValue);
  //     var counterValue = ($(this).attr("counter"));
  //     counterValue = parseInt(counterValue);

  //     // We then add the healthValue to the user's "counter" which is a global variable.
  //     // Every click, from every player adds to the global counter.
  //     counter += healthValue;
  // $("#total").text(counter);
  //     // All of the same game win-lose logic applies. So the rest remains unchanged.
      

  //     if (counter === targetNumber) {
  //       alert("You win!");
        
       
  //       reset(healthPoints);
  //       healthPoints= shuffle(healthPoints);
  //      attribute(healthPoints);
    
  //     }

  //     else if (counter >= targetNumber) {
  //       alert("You lose!!");
      
     
  //       reset(healthPoints);
  //       healthPoints= shuffle(healthPoints);
  //       attribute(healthPoints);
     
  //     }
 
  });


  $(".enemas").on("click", function() {
      var identityValue = ($(this).attr("identity"));
        
for (var i=0; i<imagePlayer.length; i++){
        if (identityValue === imagePlayer[i].attr("identity")){
          imagePlayer[i].addClass("opponent");
          $("#opponent").append(imagePlayer[i]);
          
          
        }
          // imagePlayer[i].attr("identity", enemies[i]);
         // if (identityValueTwo === imagePlayer[i].attr("identity")){
         //  imagePlayer.splice(identityValueTwo,1);
            
           
          // }
          //   }
          // }

       
}


      });