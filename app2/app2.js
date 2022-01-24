const squere = document.createElement('div'); // create div in HTML
document.body.appendChild(squere); // add squere to body
let size = 30;
squere.style.width = size +"px"; // make style in HTML
squere.style.height = size +"px"; // make style in HTML
number = 1;

const showScroll = function() {
console.log("scroll");
if (size < window.innerWidth / 2) {
size++
squere.style.width = size +"px";
squere.style.height = size +"px";
}
}
window.addEventListener('scroll', showScroll);

