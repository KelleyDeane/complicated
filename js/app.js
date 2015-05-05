function Complication () {

  var input = document.getElementsByName('input')[0];
  var answer = document.getElementById('answer');
  var button = document.getElementById('button');
  var nope = [
    'NOPE!',
    '<img src="img/nope.png">',
    '<iframe src="//giphy.com/embed/lXiRsXOUUUdfHCOOY" width="300" height="288" frameBorder="0" style="max-width: 100%" class="giphy-embed" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>',
    'Obviously Not',
    'Noooooooooooooooooooo',
    'Seriously?',
    'Surely you know better than that.',
    '*shakes head*',
    'NEGATIVE',
    'Never. Ever. Ever.',
    'Let me consult my <img src="img/crystal.png">',
    'Kinda'
  ];

var checked = false;

  var inputCheck = function(){
        if (input.value.toLowerCase() === 'nothing'){

          answer.innerHTML = '<p>FINALLY, SOMEONE GETS IT.</p>';
          document.getElementById('button').innerHTML = "GET THE HAT";

 
           button.addEventListener('click', function(){

             location.href = "hats.html";
         

          });
        }

        else if (input.value.trim() === ''){
          checked = false;
          answer.innerHTML = '';
          document.body.style.backgroundColor = "white";
          document.getElementById('complication').style.color = "black";
          document.getElementById('button').innerHTML = "LET'S SEE";


        }

        else if (input.value.toLowerCase() === 'rihanna'){
          checked = false;
          answer.innerHTML = '<iframe src="//giphy.com/embed/lXiRsXOUUUdfHCOOY" width="300" height="288" frameBorder="0" style="max-width: 100%" class="giphy-embed" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
          document.body.style.backgroundColor = "white";
          document.getElementById('complication').style.color = "black";
          document.getElementById('button').innerHTML = "TRY AGAIN";

           
        }

        else {

          checked = true;

          var randomNumber = Math.floor(Math.random()*nope.length);
          answer.innerHTML = (nope[randomNumber]);
          document.getElementById('button').innerHTML = 'TRY AGAIN';

          // input.addEventListener("focus", function(ev){
          //     console.log(ev);



            
          // });


        


        }

  };


  window.addEventListener("keydown", function(ev) {
    console.log(checked);

     if(ev.keyCode === 13 && checked === false){


       inputCheck();



      }

  });

  button.addEventListener('click', function(){
    if(checked === true) {

      document.getElementsByName('input')[0].value = '';
      document.getElementById('button').innerHTML = "LET'S SEE";
      answer.innerHTML = '';
      checked = false;

    } else {

        inputCheck();
    }


  });



};

Complication();
