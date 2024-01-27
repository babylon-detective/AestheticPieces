// Dreamdealer, 2023.6.26.15.25.54
// A piece called `dreamdealer`.

/* #region 📚 README 
#endregion */

/* #region 🏁 TODO 
#endregion */

let player,
obstacle,
score,
speed,
jump,
gravity,
clock;

const size = 12;
let L, R; // 🎮

// 🥾 Boot
function boot({ 
  screen: { width, height, center },
  geo: { Box },
  num: {randInt: r},
}) {
  const gw = floor((width * 0.8)/ size),
        gh = floor((height * 0.7) / size);

  const  fw = size * gw,
  fh = size * gh;
  fence = new Box(center.x - fw/2, center.y - fh/2, fw, fh);
  player = new Box(
    fence.x + floor(gw/2) * size,
    fence.y + floor(gh/2) * size,
    size
    );
    dir = { x: 0, y: 0 }; // 🧭

    // jump = ;

    // gravity = ; 

    // obstacle = ;

    // Runs once at the start.

// wipe(100);
// console.log(api);
}


// 🎨 Paint
function paint({ wipe, ink }) {
  // Executes every display frame.
  const s3 = size / 3;
  wipe(127)
    .ink(110)
    .box(fence, "out")
    .ink("lime")
    .box(fence.grow(size / 2), "out")
    .ink(255)
    .box(snake.x, snake.y, size)
    .ink("lime")
    .box(
      snake.x + size / 2 + dir.x * s3,
      snake.y + size / 2 + dir.y * s3,
      s3,
      "center"
    )
    .ink(food?.color)
    .box(food?.box);

  tail.forEach((seg) => ink(seg.color).box(seg.box));

  belly.forEach((seg) => {
    if (tail[seg.index])
      ink(seg.color)
        .box(tail[seg.index].box)
        .ink()
        .box(tail[seg.index].box, "in");
  });

  // return false; // Uncomment for an animation loop.
}

// 🎪 Act
// function act({ event }) {
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
    title: "Dreamdealer",
    desc: "A piece called `dreamdealer`.",
  };
}

export { boot, paint, meta };

// 📚 Library
//   (Useful functions used throughout the piece)
const { abs, floor } = Math;