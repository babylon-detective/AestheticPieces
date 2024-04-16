// Character01, 2024.1.23.22.10.04.270
// A piece called `DRAGON'

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
let tail = "smile";
let limbs = "smile";

// Copying head, body, and limbs into an array literal
// will copy the values.
// const laugh = [head, body, limbs];

// List of Fuctions for coordinated animations
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
  //wipe("blue")

  let wig = help.choose(-1, 0, 1);

  //Character actions
  smile(); // Will update head, body and limbs with your custom setting.

// console.log("After laugh:", head, body, limbs);
//console.log(laugh);

  //character
  pan(screen.width / 2, screen.height / 2);

  // circle is, x, y, radius
  // ink("lime").oval(0, 0, 32, 12)
  
  //head = "smile"
  if (head === "smile") {
  //horns
  ink("black").line(-7,-30, -12,-35)
  ink("black").line(-8,-32, -8,-35)
  ink("black").line(-12,-30, -8,-30)
  ink("black").line(6,-30, 11,-35)
  ink("black").line(7,-32, 7,-35)
  ink("black").line(11,-30, 7,-30)
  // head
  ink("green",).circle(0, -22, 9.5, 5*3, "center");
  //mouth

  //eyes
    ink("red").circle(4, -24, 3, 1)
    ink("red").circle(-4, -24, 3, 1)
  //nose
  ink("black").point(1, -16)
    ink("black").point(-2, -16)
  //brow
    ink("green").shape([-5,-30+3, 0,-25+3, 5,-30+3]);
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
    ink("green",).circle(0, -3, 9.5, 5*3, "center");
  // center
  ink("red").point(-1, 5);
    //root
    ink("green").circle(0, 10, 9.5, 1, "center");
  } else if (body === "none") {
    // do nothing 
  } else if (body === "laugh") {
    ink("orange").box(0, -2 + wig, 5 * 3, 7 * 3, "center");
     //root
     ink("red").box(-8,9+wig, 15,6)
  }
    
  if (tail === "smile") {
    ink("green").circle(0, 16, 6.5, 1, "center");
    ink("green").circle(0, 25, 4, 1, "center");
    ink("green").circle(0, 30, 4, 1, "center");
    ink("green").circle(0, 35, 2, 1, "center");
    ink("green").circle(0, 38, 1, 1, "center");
  } else if (tail === "none") {

  } else if (tail === "laugh") {
    
  }

  // limbs = "smile"

  if (limbs === "smile") {
  // neck
  ink("green").box(-2.5,-13, 6,3)
  // left arm
  ink("black").poly([[7,-10], [15,-8], [19,-15]]);
  
  // right arm
  ink("black").poly([[-8,-10], [-16,-8], [-20,-15]]);
  
  
  // left leg
  ink("black").poly([[8,15], [12,18], [10,25]]);
  // right leg
  ink("black").poly([[-8,15], [-12,18], [-10,25]]);
  
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

  // ink("yellow").write("DRAGON", { x: -10, y: -9 });
  
  // ink("black").line(1,-17, 1,-35)
  // ink("black").line(-2, -17, -2, -35) 
  
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
