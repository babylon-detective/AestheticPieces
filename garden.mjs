// Field, 2023.11.30.16.05.21.050
// An open place to walk around.

/* #region 📚 README 
#endregion */

/* #region 🏁 TODO 
  + Future
  - [] Store something persistent on the server.
#endregion */

const scenery = {
  grasses: [
    { x: 190, y: 170 },
    { x: 276, y: 286 },
    { x: 128, y: 128 },
    { x: 400, y: 400 },
    { x: 500, y: 512 },
  ],
};

let tile;

// 🥾 Boot
async function boot({ get }) {
  get.painting("2024.1.23.14.34.29.718").by("@dreamdealer").then(({ img }) => {
    tile = img;
  }); // Load a painting from a user and set `tile` to its pixels.
}

// 🏔️ Background
function background({ wipe }) {
  wipe("black");
}

// 🎨 Paint
function paint({ api, ink, paste }, world) {
  ink("gray").box(0, 0, world.width, world.height);

  // paste(tile, 40, 0);

  // paste(tile, 80, 0);

  
  ink("blue").write("hello", { x: -15, y: -15 });
  
  flower(api, 4, 4);
}

function flower({ ink, pan, unpan, circle }, x, y) {
  ink("orange").circle(x + 80, y + 60, 12, { mode: "fill" });
  ink("yellow").circle(60, 65, 12, { mode: "fill" });
  ink("yellow").circle(100, 65, 12, { mode: "fill" });
  ink("white").circle(80, 80, 16, { mode: "fill" });
  ink("orange").circle(105, 80, 14, { mode: "fill" });
  ink("orange").circle(55, 80, 14, { mode: "fill" });
  ink("yellow").circle(65, 95, 15, { mode: "fill" });
  ink("yellow").circle(95, 95, 15, { mode: "fill" });
  ink("orange").circle(80, 100, 16, { mode: "fill" });
  ink("red").pline([{ x:75, y:70}, {x: 85, y: 75}], 3);
  ink("red").pline([{ x: 75, y: 75 }, { x: 85, y: 70 }], 3);
}

// 🚿 Curtain
function curtain({ ink }) {
  // ink().line();
}

// 🎪 Act
function act() {}

// 🧮 Sim
function sim({ system: { world } }) {
 // if (world.me.moved && world.me.pos.x === world.size.width)
 //  world.teleport("horizon", { x: 0, y: 10 });
}

// 🥁 Beat
// function beat() {
//   // Runs once per metronomic BPM.
// }

// 👋 Leave
function leave() {}

// 📰 Meta
function meta() {
  return {
    title: "Field",
    desc: "An open place to walk around.",
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

export const world = { width: 264, height: 364 };
export const system = "world";
export { boot, background, paint, curtain, act, sim, leave, meta };

// 📚 Library
//   (Useful functions used throughout the piece)
