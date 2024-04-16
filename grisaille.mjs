// Brush, 23.09.29.01.48
// Grisaille brush.

let brushShadeValues = [255, 235, 200, 175, 127, 90, 70, 40, 20, 0];

let brushShade = 255;
let brushSize = 1;
let scroll = 1;
let scrollMax;

// 🖌️ Brush
function brush({ pen, ink }) {
  ink(brushShade).circle(pen.x, pen.y, brushSize, true);
  // console.log(brush);
}

function act({ event }) {
  
  // Function to change brush shade
    if (event.is("keyboard:down:1")) {
    brushShade = 255; // Input console color 255 for white 
  } else if (event.is("keyboard:down:2")) {
    brushShade = 235;
  } else if (event.is("keyboard:down:3")) {
    brushShade = 200;
  } else if (event.is("keyboard:down:4")) {
    brushShade = 175;
  } else if (event.is("keyboard:down:5")) {
    brushShade = 127;
  } else if (event.is("keyboard:down:6")) {
    brushShade = 90;
  } else if (event.is("keyboard:down:7")) {
    brushShade = 70;
  } else if (event.is("keyboard:down:8")) {
    brushShade = 40;
  } else if (event.is("keyboard:down:9")) {
    brushShade = 20;
  } else if (event.is("keyboard:down:0")) {
    brushShade = 1; // Input console color 1 for black 
  } 
       

  // Function Change Brush size   
  if (event.is("scroll")) {
    brushSize -= event.y;
    checkScroll();
  }
  
  if (event.is("keyboard:down")) { console.log(event.key) } 
}

console.log(act)

function checkScroll() {
  brushSize = Math.max(1, Math.min(brushSize, 26));
  
}


export { brush, act }


