document.body.style.height = 10000 + "px";


const div = document.createElement("div");

document.body.appendChild(div);

let size = 100 + "px";

div.style.hight = size + "%";
div.style.width = 100 + "%";
div.style.position = "fixed";
div.style.top = "0";
div.style.left = "0";
div.style.backgroundColor = "green";

function changeHeight() {

}

document.addEventListener("scrol", changeHeight)

