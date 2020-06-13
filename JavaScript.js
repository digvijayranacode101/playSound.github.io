


window.addEventListener('keydown', function(e) {
  var presentsound = event.keyCode;
  var newkey = document.getElementById("key");  
  if (presentsound==65){
  var audio=document.querySelector('audio[data-key="65"]');
  var newkey = document.querySelector('div[data-key="65"]');
  newkey.classList.add("playing");
  audio.currentTime=0;
  audio.play()
 } 
  else if (presentsound==66){
  var audio=document.querySelector('audio[data-key="66"]');
  var newkey = document.querySelector('div[data-key="66"]');
  newkey.classList.add("playing");
  audio.currentTime=0;
  audio.play()
 }
 else if (presentsound==67){
  var audio=document.querySelector('audio[data-key="67"]');
  var newkey = document.querySelector('div[data-key="67"]');
  newkey.classList.add("playing");
  audio.currentTime=0;
  audio.play()
 }
 else if (presentsound==68){
  var audio=document.querySelector('audio[data-key="68"]');
  var newkey = document.querySelector('div[data-key="68"]');
  newkey.classList.add("playing");
  audio.currentTime=0;
  audio.play()
 }
 
 else if (presentsound==69){
  var audio=document.querySelector('audio[data-key="69"]');
  var newkey = document.querySelector('div[data-key="69"]');
  newkey.classList.add("playing");
  audio.currentTime=0;
  audio.play()
 }
 else if (presentsound==70){
  var audio=document.querySelector('audio[data-key="70"]');
  var newkey = document.querySelector('div[data-key="70"]');
  newkey.classList.add("playing");
  audio.currentTime=0;
  audio.play()
 }
 else if (presentsound==71){
  var audio=document.querySelector('audio[data-key="71"]')
  var newkey = document.querySelector('div[data-key="71"]');
  newkey.classList.add("playing");
  audio.currentTime=0;
  audio.play()
 }
  
  console.log(audio);
});



function removeTransition(e){
 if(e.propertyName !== 'transform') return;
 this.classList.remove('playing');
}

const allkeys = document.querySelectorAll(".key");
allkeys.forEach(key => key.addEventListener('transitionend',removeTransition));