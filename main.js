document.body.style.height = 10000 + "px";


const div = document.createElement("div");

document.body.appendChild(div);

let good = true;

let size = 1;

div.style.height = size + "px";
div.style.width = 100 + "%";
div.style.position = "fixed";
div.style.top = "0";
div.style.left = "0";

console.log("ok out");

function changeHeight() {

    if (size >= innerHeight / 2) {
        good = !good;
    }
    else if (size <= 0) {
        good = !good;
    }

    if (good) {
        size += 5;
        div.style.height = size + "px";
        div.style.backgroundColor = "green";
    }
    else {
        size -= 5;
        div.style.height = size + "px";
        div.style.backgroundColor = "red";
    }

}

window.addEventListener("scroll", changeHeight);

