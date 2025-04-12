function responsive (){
  const a = document.querySelector(".drop-down-menu");
  console.log(a);
  if(a.style.display !=="none"){
    a.style.display = "none";
  } else{
    a.style.display = "block";
  }
}

function mouseLeave(){
  document.querySelector(".drop-down-menu").style.display = "none";
}

const spinner = document.querySelector("#spin-btn");
const img = document.querySelector(".right-section-image")

spinner.addEventListener('click', function() {
  const minRotation = 360;
  const maxRotation = 1440;
  const randomRotation = Math.floor(Math.random() * (maxRotation - minRotation + 1)) + minRotation;
  console.log(randomRotation);
  img.style.setProperty('--final-rotation', `${randomRotation}deg`);
  img.classList.remove('spinning-image');
  void img.offsetWidth;
  img.classList.add('spinning-image');
});