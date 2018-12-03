(function waves() {
   document.querySelector('#waves').play()
   var x = document.getElementById("waves");

   function enableLoop() {
       x.loop = true;
       x.load();
   }
 }());
