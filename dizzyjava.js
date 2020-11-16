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
  'https://www.oeteo.co/wp/wp-content/uploads/2020/11/11.11SALE_Website-Banner.jpg',
  'https://cdn.shopify.com/s/files/1/0655/7411/files/Maternity_Nursing_Bra-3_ee87fba8-d297-4e13-9f22-7528460107ff_1060x.png?v=1541141387',
  'https://cdn.singpromos.com/wp-content/uploads/2020/10/Infantree-Baby-Warehouse-f-1-Oct-2020.jpg'
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
