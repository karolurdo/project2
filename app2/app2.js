const squere = document.createElement('div'); // create div in HTML
document.body.appendChild(squere); // add squere to body
let size = 30;
squere.style.width = size +"px"; // make style in HTML
squere.style.height = size +"px"; // make style in HTML
number = 1;

let oldValue = 0
let newValue = 0

window.addEventListener('scroll', function()  { // Listener
  newValue = window.pageYOffset;
  if (oldValue < newValue) {
    size++
squere.style.width = size +"px";
squere.style.height = size +"px";
  } else if (oldValue > newValue) {
    size--
    squere.style.width = size +"px";
    squere.style.height = size +"px";
  }
  oldValue = newValue;
});


