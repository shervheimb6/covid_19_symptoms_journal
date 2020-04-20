

let element = document.getElementById("cough-one");

function turnButtonRed (){
  element.style.backgroundColor = "red";
  element.style.color = "white";
  element.innerHTML = "X"; 
  
}

element.onclick = turnButtonRed;