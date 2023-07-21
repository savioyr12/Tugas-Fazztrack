var myHeading = document.getElementById('nama');
console.log(myHeading);
myHeading.innerHTML = "Krozeo Jupiter";

var dive = document.querySelector('.cild.tri');
var imageElement = dive.querySelector('img');

function toggleList() {
    var List = document.getElementById("list");
    
    // Toggle the display of the list
    if (List.style.display === 'none') {
      List.style.display = 'block';
      imageElement.src = "./Asset/Arrow - Up 2.png";
    } else {
      List.style.display = 'none';
      imageElement.src = "./Asset/Arrow - Down 2.svg";
    }
  }
  const btn = document.querySelector('section button[type="button"]');

var divElement = document.querySelector('.isi.satu')
divElement.addEventListener('click', toggleList);

//bag isian
var centang = document.querySelector('.left');
//console.log(centang)

function dicentang() {
  var imagecentang = centang.querySelector('img');
  
  if (imagecentang === 'block') {
    imagecentang.src = "./Asset/Group 39.png";
    imageState = 1;
  } else {
    imagecentang.src = "./Asset/Rectangle 21.png";
    imageState = 0;
  }
}

var isian = document.querySelector('.isian')
isian.addEventListener('click', dicentang);