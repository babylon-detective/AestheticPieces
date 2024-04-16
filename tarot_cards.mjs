// $NAME, $TIMESTAMP
// $THIS_IS_A_TEMPLATE_FOR_MAKING_NEW_PIECES

/* #region ⭐️ Setup
  - Install the `aesthetic.computer` extension to the left.
  - Tap the new 🌀 Spiral icon and follow the instructions in the panel.
*/

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

const cardsDatabase = [
  {name: 'FOOL'},
  {name: 'MAGICIAN'},
  {name: 'HIGH PRIESTES'},
  {name: 'EMPRESS'},
  {name: 'EMPEROR'},
  {name: 'HIEROPHANT'},
  {name: 'LOVERS'},
  {name: 'CHARIOT'},
  {name: 'STRENGHT'},
  {name: 'HERMIT'},
  {name: 'WHEEL OF FORTUNE'},
  {name: 'JUSTICE'},
  {name: 'THE HANGED MAN'},
  {name: 'DEATH'},
  {name: 'TEMPERANCE'},
  {name: 'DEVIL'},    
  {name: 'THE TOWER'},
  {name: 'THE STAR'},
  {name: 'THE MOON'},
  {name: 'THE SUN'},
  {name: 'JUDGEMENT'},
  {name: 'THE WORLD'}
];

const cardCode = "2024.1.28.22.32.09.051";
const cardHandle = "@dreamdealer";

// Format the text to align to center by
let currentCard = 19;
let painting;

// 🥾 Boot
function boot({ api, get, wipe }) {
  // Runs once at the start.
  get
    .painting(cardCode)
    .by(cardHandle)
    .then(({ img }) => {
      painting = img;
    });
}


// 🎨 Paint
function paint({ wipe, api, paste, ink, line, pen, box, pan, unpan, screen }) {

  wipe("blue"); // Clear's the screen. Can use R, G, B or CSS colors.

  const left = 0;
  const top = 0;
  const bottom = screen.height;
  const right = screen.width;

  const margin = 40;

  //Cards
  pan(margin / 2, margin / 2);

  const cardWidth = right - margin;
  const cardHeight = bottom - margin;
  ink("red").box(0, 0, cardWidth, cardHeight, "inline");
  ink("yellow").write(currentCard.toString(), { x: cardWidth / 2.1, y: 2 });

  const text = cardsDatabase[currentCard].name;
  const textWidth = text.length * 6; // 6 pixels per char
  // ink("red").write(text, {x:-textWidth,y:60})
  // ink("lime").write(text, { x: 0, y: 60 })
  ink("white").write(text, { x: + cardWidth / 2 - textWidth / 2, y: cardHeight - 12 })

  if (painting) {
    // pan(0,0)
    paste(painting, 20, 20, { scale: 1 });
    // unpan()
  }

  unpan();
}

  // ink("red").line(0, 0, 100, 100); // Would draw a diagonal line.
  // return false; // Uncomment for proce55ing's "noLoop" functionality.

// Write Function to Display card?

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
    title: "$NAME",
    desc: "$THIS_IS_A_TEMPLATE_FOR_MAKING_NEW_PIECES",
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
