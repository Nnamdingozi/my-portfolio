
let myLinks = document.querySelector("ul")
let myPix = document.getElementById('mypix')
let nav = document.querySelectorAll('li');
for(i of nav) {
    i.addEventListener("mouseover", changeColor)
    

}
nav.addEventListener("mouseover", changeColor);
function changeColor(event) {
 event.target.style.backgroundColor = 'rgb(8, 8, 103)';
 event.target.style.color = 'white';
 event.target.style.removeEventListener("mouseover", changeColor)
};
function changePix() {
 if (myPix.getAttribute('src') == "./resources/mine.jpg") {
    myPix.src = "./resources/ngoo.jpg";
    
 }else {myPix.src ="./resources/mine.jpg"}

} ;


    
