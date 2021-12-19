import { colours } from "./palette.js";

let boxes = new URLSearchParams(document.location.search).get("boxes") || 12;
if (boxes > 32) {
  boxes = 32;
}

let scaleFactor = 4;
let minSize = 64;
let spinniness = 4;

let body = document.body;

let width = document.documentElement.clientWidth;
let height = document.documentElement.clientHeight;

let centre = {
  x: width / 2,
  y: height / 2,
};

let addPX = function (value) {
  return `${value}px`;
};

let coord = function (value) {};

let populate = function () {
  for (let i = 0; i < boxes; i++) {
    let box = document.createElement("div");
    box.id = `box-${i}`;
    box.classList.add("box");

    box.style.top = addPX(centre.y);
    box.style.left = addPX(centre.x);
    box.style.height = box.style.width = "1px";

    body.appendChild(box);
  }
};

let yeet = function () {
  document.querySelectorAll(".box").forEach(function (box) {
    let side = (Math.random() * width) / scaleFactor + minSize;
    let top = Math.random() * height;
    let left = Math.random() * width;

    let deltaX = left - centre.x;
    let deltaY = top - centre.y;

    let rotations = Math.round(Math.random() * spinniness) / 4;

    box.style.backgroundColor =
      colours[Math.floor(Math.random() * colours.length)];

    box.style.transform = `
    translateX(${addPX(deltaX)}) 
    translateY(${addPX(deltaY)}) 
    rotateZ(${rotations}turn)
    scale(${side})`;
  });
};

populate();

setInterval(function () {
  yeet();
}, 2000);
