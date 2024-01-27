// Character01, 2024.1.23.22.10.04.270
// A piece called `character01

/* #region 📚 README 
  - Welcome to your first aesthetic.computer piece.
  - You can `console.log(api);` to explore,
    and then destructure additional api commands
    to try them out!


    
  - Top-level commands make up each piece's application flow.
    Uncomment and export them to invoke their behavior and use their apis.
  - Enter `help` for the AC #help and ping @helper for additional explanation.
#endregion */

/* #region 🏁 TODO 
  - [] Draw a purple line.
#endregion */

export const nohud = true;

let head = "smile"; // or "none"
let body = "smile";
let limbs = "smile"

// Copying head, body, and limbs into an array literal
// will copy the values.
// const laugh = [head, body, limbs];

// List of Functions for coordinated animations
function laugh() {
  head = "laugh";
  body = "laugh";
  limbs = "laugh";
}

function smile() {
  head = "smile";
  body = "smile";
  limbs = "smile";
}

function none() {
  head = "none"; 
  body = "none";
  limbs = "none";
}

// console.log("Before laugh:", head, body, limbs);

// laugh(); // Will update head, body and limbs with your custom setting.
// // smile();

// console.log("After laugh:", head, body, limbs);
// console.log(laugh);


// 🥾 Boot
function boot({ api, wipe, resolution }) {
  resolution(80, 80);
  // Runs once at the start.
  wipe("blue"); // Clear's the screen. Can use R, G, B or CSS colors.
}

// 🎨 Paint
function paint({ api, help, num, screen, wipe, ink, line, pen, pan, unpan, box }) {
  wipe("blue")

  ink("yellow").write("hello!", { x: 8, y: 5 });
  ink("red").line(0, 0, 8, 8);

  let wig = help.choose(-1, 0, 1);

  //Character actions
  smile(); // Will update head, body and limbs with your custom setting.

console.log("After laugh:", head, body, limbs);
//console.log(laugh);

  //character
  pan(screen.width / 2, screen.height / 2);

  //shadow
  // oval
  ink("gray").oval(0, 33, 14, 6, 255)
  ink(50).oval(0, 33, 12, 5, 255)
  // circle is, x, y, radius
  // ink("lime").oval(0, 0, 32, 12)
  
  //head = "smile"

  if (head === "smile") {
  //hair
  ink("red").box(0,-25, 20,19, "center")
  ink("black").line(1,-17, 1,-35)
  ink("black").line(6,-17, 6,-35)
  ink("black").line(-7,-17, -7,-35)
  ink("black").line(-2, -17, -2, -35)  
  // head
  ink("orange",).circle(0, -22, 9.5, 5*3, "center");
  //mouth
    ink("black").circle(0, -19, 4, -23)
    ink("orange").box(-4, -19, 8, -4)
  //eyes
    ink("black").point(3, -24)
    ink("black").point(-4, -24)
  //brow
    ink("black").poly([[-3, -30], [-0, -27], [3, -30]]);
    } else if (head === "none") {
    // do nothing
    } else if (head === "eyes-only") {
     //eyes
     ink("black").point(3, -24)
     ink("black").point(-4, -24)
    } else if (head === "laugh") {
    //hair
  ink("red").box(0,-25, 20,19, "center")
  ink("black").line(1,-17, 1,-35)
  ink("black").line(6,-17, 6,-35)
  ink("black").line(-7,-17, -7,-35)
  ink("black").line(-2, -17, -2, -35)  
  // head
  ink("orange",).circle(0, -22, 9.5, 5*3, "center");
    //mouth
    ink("black").circle(0, -19+wig, 4, -23)
    ink("orange").box(-4, -19+wig, 8, -4)
    //eyes
    ink("black").point(3, -24+wig)
    ink("black").point(-4, -24 + wig)
    //brow
    ink("black").poly([[-3, -30+wig], [-0, -27], [3, -30+wig]]);
    }
    
  // body = "smile"

  if (body === "smile") {
    //body
    ink("orange").box(0, 0, 5 * 3, 7 * 3, "center");
    ink("red").point(-4,-3)
    ink("red").point(2, -3)
  // center
  ink("red").point(-1, 5);
    //root
    ink("red").box(-8,9, 15,6)
  } else if (body === "none") {
    // do nothing 
  } else if (body === "laugh") {
    ink("orange").box(0, -2 + wig, 5 * 3, 7 * 3, "center");
     //root
     ink("red").box(-8,9+wig, 15,6)
  }
    
  // limbs = "smile"

  if (limbs === "smile") {
     // neck
  ink("orange").box(-1*2.5,-5 *2.5, 1.5 * 3,1.5 * 2.5)
  // left arm
  ink("orange").shape([7,-12, 15,9, 12,9, 6,-5]);
  ink("orange").shape([15,8, 11,10, 11,16]);
  // right arm
  ink("orange").shape([-8,-12, -16,9, -13,9, -7,-6]);
  ink("orange").shape([-16,8, -12,10, -12,16]);
  // left leg
  ink("orange").shape([-8,9, -2,17, -7,18]);
  // x, y, x, y, x, y
  ink("orange").shape([1,17, 7,17, 3,36]);
  // right leg
  ink("orange").shape([6.5,10, 6,18, 1,18]);
  ink("orange").shape([-8,17, -2,17, -4,36]);
  } else if (limbs === "none") {
    //
  } else if (limbs === "laugh") {
         // neck
  ink("orange").box(-1*2.5,-5 *2.5, 1.5 * 3,1.5 * 2.5)
  // left arm
    ink("orange").shape([7, -12+wig, 15, 9+wig, 12, 9+wig, 6, -5+wig]);
    //left hand
  ink("orange").shape([15,8+wig, 11,10+wig, 11,16+wig]);
  // right arm
    ink("orange").shape([-8, -12+wig, -16, 9+wig, -13, 9+wig, -7, -6+wig]);
    //right hand 
  ink("orange").shape([-16,8+wig, -12,10+wig, -12,16+wig]);
  
    // left leg
  ink("orange").shape([-8,9, -2,17, -7,18]);
  // x, y, x, y, x, y
  ink("orange").shape([1,17, 7,17, 3,36]);
  // right leg
  ink("orange").shape([6.5,10, 6,18, 1,18]);
  ink("orange").shape([-8,17, -2,17, -4,36]);
  }

  
  
  unpan();
  // I guess i'm just thinking that when the user types text or has a command
  // floating over their head, the text shouldnt be huge / should somehow match
  // while still allowing lots of characters on screen?
  
  // return false; // Uncomment for proce55ing's "noLoop" functionality.
}

// 🎪 Act
// function act({ event: e }) {
  //  // Respond to user input here.
  // }

// 🧮 Sim
// function sim() {
//  // Runs once per logic frame. (120fps locked.)
// }

// 🥁 Beat
// function beat() {
//   // Runs once per metronomic BPM.
// }

// 👋 Leave
// function leave() {
//  // Runs once before the piece is unloaded.
// }

// 📰 Meta
function meta() {
  return {
    title: "Character01",
    desc: "A piece called `character01`.",
  };
}

// 🖼️ Preview
// function preview({ ink, wipe }) {
// Render a custom thumbnail image.
// }

// 🪷 Icon
// function icon() {
// Render an application icon, aka favicon.
// }

export { boot, paint, meta };

// 📚 Library
//   (Useful functions used throughout the piece)
