
 document.querySelector('#submit').onclick = function(e) {
    e.preventDefault();
     let comparison;
     let a = Number(document.querySelector('#a').value);
     let b = Number(document.querySelector('#b').value);
 
    console.log(a);
    console.log(b);

     // Add comparison logic
        
        if( isNaN(a) || isNaN(b) ){  // Are they not numbers

          comparison = "N/A";

        } else if( a > b ){   // Is A more than B

          comparison = ">";

        } else if( a < b ){  // Is B more than A
           
          comparison = "<";

        } else {        // Is A equal to B

          comparison = "=";

        }




     document.querySelector('#comparison').innerText = comparison;
   };
 



   function hail(){
    console.log("Hail!");
    console.log("For I have been clicked upon!");
  }

let garfield = document.getElementById("comparison");

garfield.addEventListener('click',hail);

let comicPets = {
  "garfield":{
    "type":"cat",
    "color":"orange",
    "weight":"Fat Beyond All Belief"
  },
  "odie":{
    "type":"dog",
    "color":"white with spot",
    "weight":"healthy"
  },
  "slyvester":{
    "type":"cat"
  }
};

console.log(comicPets.garfield.weight);


