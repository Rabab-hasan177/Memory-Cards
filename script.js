const cards = document.querySelector(".play-game")
let fruitImages = [
  { src: "./pictures/apple.jpg", alt: "apple" },
  { src: "./pictures/banana.jpg", alt: "banana" },
  { src: "./pictures/orange.jpg", alt: "orange" },
  { src: "./pictures/pear1.jpg", alt: "pear1" },
  { src: "./pictures/strawberry.jpg", alt: "strawberry" },
  { src: "./pictures/apple.jpg", alt: "apple" },
  { src: "./pictures/banana.jpg", alt: "banana" },
  { src: "./pictures/orange.jpg", alt: "orange" },
  { src: "./pictures/pear1.jpg", alt: "pear1" },
  { src: "./pictures/strawberry.jpg", alt: "strawberry" },
]
const backImage = [{ src: "./pictures/Qmark.png", alt: "qmark" }]
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
shuffleArray(fruitImages)
for (let i = 0; i < fruitImages.length; i++) {
  let card = document.createElement("div")
  card.classList.add("memory-card")
  let frontImg = document.createElement("img")
  frontImg.classList.add("front")
  frontImg.setAttribute("src", fruitImages[i].src)
  card.appendChild(frontImg)
  for (let j = 0; j < backImage.length; j++) {
    let backImg = document.createElement("img")
    backImg.classList.add("back")
    backImg.setAttribute("src", backImage[j].src)
    card.appendChild(backImg)
    let variable2 = backImage[j]
  }

  // let variable = fruitImages[i]

  cards.appendChild(card)

  // console.log(variable)
}

let emptyArray = []
let stopClicking = false

const checkArray = () => {
  stopClicking = true
  const [first, second] = emptyArray

  const firstImg = first.querySelector(".front")
  const secondImg = second.querySelector(".front")

  if (firstImg.src === secondImg.src) {
    emptyArray = []
    stopClicking = false
    firstImg.classList.add("animate__animated", "animate__bounce")
    secondImg.classList.add("animate__animated", "animate__bounce")
    setTimeout(() => {
      ;[firstImg, secondImg].forEach((img) => {
        img.classList.remove("animate__animated", "animate__bounce")
      })
    }, 2000)
  } else {
    // from https://developer.mozilla.org/en-US/docs/Web/API/Window/setTimeout
    setTimeout(() => {
      first.classList.remove("flip")
      second.classList.remove("flip")
      emptyArray = []
      stopClicking = false
    }, 1000)
  }
}
const cardsForClick = document.querySelectorAll(".memory-card")
cardsForClick.forEach((card) => {
  card.addEventListener("click", () => {
    if (stopClicking) {
      return
    }
    if (emptyArray.includes(card)) {
      return
    }

    card.classList.toggle("flip")
    emptyArray.push(card)
    if (emptyArray.length === 2) {
      checkArray()
    }
    console.log("clicked")
  })
})
