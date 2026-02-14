let x = 0;
function showMessage() {
  alert("I'm a chud!");
}
function changeImage() {
  let img = document.getElementById("myImage");
  if(x % 2 == 0 && x % 10 != 0){
    img.src = "spookycat.png";
    img.style.height = "920px";
    img.style.width = "918px";
    x++;
  }else if(x % 10 == 0){
    img.src = "Marco.png";
    img.style.height = "920px";
    img.style.width = "918px";
    x++;
  }else{
    img.src = "cat.png";
    x++;
  }
}
