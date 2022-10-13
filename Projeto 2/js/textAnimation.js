var string = "Olá, meu nome é Geovana."; 
var array = string.split("");
var timer;

function frameLooper () {
  if (array.length > 0) {
    document.getElementById("text").innerHTML += array.shift();
  } else {
    clearTimeout(timer);
      }
  loopTimer = setTimeout('frameLooper()',120); /* change 70 for speed */

}
frameLooper();