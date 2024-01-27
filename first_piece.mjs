
// Blank, 2023.6.26.16.35.23
// A blank piece.

/* #region 📚 README 
#endregion */

/* #region 🏁 TODO 
- [] overworld section, M.L.SuperStarSaga
- [] control a trail of up to 3 characters, swich order
- [] comming into contact with enemies initates battle
#endregion */

let players,
fence,
direction,
npc,
enemy,
clock;

const size = 24;

let L, R, U, D;

// 🥾 Boot
function boot({ wipe, api,
  screen: { width, height, center },
  geo: { Box },
  num: { randInt: r },
}) {
  // Runs once at the start.
  const gw = floor((width *  0.8) / size),
  gh = floor((height * 0.7) / size);
  
  const fw = size * gw,
  fh = size * gh;
  fence = new Box(center.x - fw / 2, center.y - fh / 2, fw, fh);
  players = new Box(
    fence.x + floor(gw / 2) * size,
    fence.y + floor(gh / 2) * size,
    size
    );
    direction = { x:0, y:0};    
  }

  // 🧮 Sim
  // function sim() {
  //  // Runs once per logic frame. (120fps locked.)
  function sim({ num: { p2 }, gizmo, seconds, geo, pen}) {
    if (L) direction = { x: -1, y: 0 };
    if (R) direction = { x: 1, y: 0 };
    if (U) direction = { x: 0, y: -1 };
    if (D) direction = { x: 0, y: 1 };

    clock ||= new gizmo.Hourglass(seconds(0.085), {
      flipped: (count) => {
       const next = new geo.Box(p2.add(players, p2.mul(dir, size)), size);
       if (!fence.contact(next)) return;
       
       players = next;
      }
    });

      clock.step();
  }
  // }

// 🎨 Paint
function paint({ wipe, ink }) {
  // Executes every display frame.
  const s3 = size/3;
  wipe(127)
    .ink(300)
    .box(fence, "out")
    .ink(255)
    .box(players.x, players.y, size)
    .ink("lime")
    .box(
      players.x + size / 2 + direction.x * s3,
      players.y + size / 2 + direction.y * s3,
      s3,
      "center"
      )

  // return false; // Uncomment for an animation loop.
}

// 🎪 Act
// function act({ event }) {
//  // Respond to user input here.
function act({ event: e }) {
  if (e.is("keyboard:down:a")) L = true;
  if (e.is("keyboard:down:d")) R = true;
  if (e.is("keyboard:down:w")) U = true;
  if (e.is("keyboard:down:s")) D = true;
 
  if (e.is("keyboard:up:a")) L = false;
  if (e.is("keyboard:up:d")) R = false;
  if (e.is("keyboard:up:w")) U = false;
  if (e.is("keyboard:up:s")) D = false;
}
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
    title: "Blank",
    desc: "A blank piece.",
  };
}

export { boot, paint, meta, sim, act };

// 📚 Library
//   (Useful functions used throughout the piece)
const { abs, floor } = Math;