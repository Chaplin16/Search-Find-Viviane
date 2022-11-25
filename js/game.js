//const games = [...document.querySelectorAll(".game")];
const answers = document.querySelectorAll(".answer");
let currentGame = 1;
let presentGame = 0;
// let timeOut;

const otherChoice = document.querySelectorAll(".photo");



// for (let i = 0; i < otherChoice.length; i++) {
//     otherChoice[i].addEventListener('click', () => {
//       games[presentGame].classList.add("red");
//       setTimeout((games[presentGame].classList.add("grey")),'2000')
//     }) 
//  }

// answers.forEach((answer) => {
//   answer.addEventListener("click", () => {
//     games[presentGame].classList.add("green");
//     if (currentGame === games.length) return;
//     games[currentGame].style.display = "block";
//     games[currentGame].scrollIntoView({ behavior: "smooth" });
//     currentGame++;
//   });
// });

const games = document.querySelectorAll(".game");
let timeOut;

const init = async (ele) => {
  ele.classList.remove("green");
  ele.classList.remove("red");
  ele.classList.remove("tremolo");
  clearTimeout(timeOut);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 50);
  });
}

games.forEach((game, i) => {
  const images = game.querySelectorAll(".photo, .answer");
  images.forEach(image => image.addEventListener("click", async () => {
    const isRight = image.classList.contains("answer");
    const className = isRight ? "green" : "red";
    await init(game);
    game.classList.add(className);
    timeOut = setTimeout(async () => {
      await init(game);
    }, 500)
    if (isRight) {
      image.classList.add("valid");
      games[i + 1].style.display = "block";
      games[i + 1].scrollIntoView({ behavior: "smooth" });
    } else {
      game.classList.add("tremolo");
    }
  }));
});
