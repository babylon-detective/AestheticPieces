let player, obstacle, dir, ground, jump, gravity;
const size = 50;
let L, R, jumpPressed; // 🎮

// 🥾 Boot
function boot({ screen: { width, height, center }, geo: { Box }, num: { randInt: r } }) {
  const playAreaWidth = width * 0.8,
        playAreaHeight = height * 0.7; // Play area size

  ground = height * 0.8;
  // Ensure the player is initialized on the ground
  player = new Box(center.x - playAreaWidth / 4, ground - size, size, size); // Correctly on the ground
  obstacle = new Box(center.x + r(playAreaWidth / 4, playAreaWidth / 2), ground - size, size, size / 2); // 🧱
  dir = { x: 0, y: 0 }; // 🧭
  gravity = 1;
  jump = -15;
  jumpPressed = false;
}
// 🧮 Sim
function sim({ geo, gizmo, seconds }) {
  if (L) dir.x = -1;
  if (R) dir.x = 1;
  if (!L && !R) dir.x = 0; // No horizontal movement if neither left nor right is pressed

  // Apply gravity constantly but ensure it doesn't make the player fall below ground
  dir.y += gravity;
  player.y += dir.y; // Apply gravity effect

  // Check for ground collision after applying gravity
  if (player.y = ground - player.height) {
    player.y = ground - player.height; // Adjust player's position to ground level
    dir.y = 0; // Stop vertical movement since the player is on the ground
  }

  // Apply jump if the jump button was pressed and the player is on the ground
  if (jumpPressed && player.y === ground - player.height) {
    dir.y = jump; // Apply jump force
    jumpPressed = false; // Reset jump flag
  }

  // Update player's horizontal position based on direction
  player.x += dir.x * 5;

  // Ensure the player doesn't move outside the play area
  if (player.x < 0) player.x = 0;
  if (player.x + player.width > width) player.x = width - player.width;
}



// 🎨 Paint
function paint({ wipe, ink }) {
  wipe(127); // Clear screen
  ink("lime").box(player); // Draw player
  ink("red").box(obstacle); // Draw obstacle
}

// 🎪 Act
function act({ event: e }) {
  if (e.is("keyboard:down:arrowleft")) L = true;
  if (e.is("keyboard:down:arrowright")) R = true;
  if (e.is("keyboard:down:space")) jumpPressed = true;

  if (e.is("keyboard:up:arrowleft")) L = false;
  if (e.is("keyboard:up:arrowright")) R = false;
}

// 📰 Meta
function meta() {
  return {
    title: "Primitive Run",
    desc: "A simple 2D running game with gravity and obstacles.",
  };
}

export { boot, sim, paint, act, meta };

// 📚 Library (already defined in your environment)
