// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const likerHearts=document.getElementsByClassName('like-glyph')
// console.log(likerHeart)
for(let likerHeart of likerHearts){
  likerHeart.addEventListener('click',mimicServerCall=>{
    if(likerHeart.classList.contains('activated-heart')){
      likerHeart.classList.remove('activated-heart');
    } 
    else{
      likerHeart.classList.add('activated-heart')
    }
       
  })
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
