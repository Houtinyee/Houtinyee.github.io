let x = 0;
function showMessage() {
  alert("houyee@ethz.ch");
}
function changeImage() {
  let img = document.getElementById("myImage");
  if(x % 2 == 0 && x % 10 != 0 || x == 0){
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
function edge(){
  let div = document.getElementById("EPROG");
  div.classList = "div1";
}
function goon(){
  let div = document.getElementById("EPROG");
  div.classList = "div";
}
