// hover script is as follows:
function openCategory() {
document.getElementById("categoryNav")
  .style.width="180px";


document.getElementById("category-side")
  .style.width="200px";

}

function closeNav() {
document.getElementById("categoryNav")
  .style.width = "0";

document.getElementByClassName("category-side")
  .style.marginLeft= "0";

document.body.style.backgroundColor = "White";
}

// slider script is as follows:
var images = [
  'image-src/img1.jpg',
  'image-src/img2.jpg',
  'image-src/img3.jpg'
];

var num = 0;
function slideNext() {
  var slider = document.getElementById('slider');
  num++;
  if(num >= images.length) {
    num = 0;
  }
  else {
    slider.src = images[num];
  }
}

function slidePrev() {
  var slider = document.getElementById('slider')
  num--;
  if(num < 0) {
    num = images.length-1;
  }
  else {
    slider.src = images[num];
  }
}
