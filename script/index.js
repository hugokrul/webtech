function dragonAttack() {
  let dragons = document.getElementsByClassName("attackDragon");
  for (const dragon of dragons) {
    let positivity = randomPositivity();
    dragon.animate(
      [
        // keyframes
        {
          right: positivity * 100 + "vw",
          top: randomNumber(600) - 200 + "px",
          transform: "scaleX(" + positivity + ")",
        },
        {
          right: positivity * -100 + "vw",
          top: randomNumber(1000) - 200 + "px",
          transform: "scaleX(" + positivity + ")",
        },
      ],
      {
        // timing options
        duration: 1500,
      }
    );
  }
}

function randomPositivity() {
  return Math.round(Math.random()) ? -1 : 1;
}
function randomNumber(max) {
  return Math.floor(Math.random() * max);
}
