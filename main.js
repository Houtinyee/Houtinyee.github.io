let x = 0;
function showMessage() {
  alert("I'm a chud!");
}
function changeImage() {
  let img = document.getElementById("myImage");
  if(x == 0){
    img.src = "spookycat.png";
    x = 1;
  }else{
    img.src = "cat.png";
    x = 0;
  }
}
