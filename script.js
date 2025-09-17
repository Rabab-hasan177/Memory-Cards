const cards = document.querySelector(".play-game")

const container = document.querySelector(".container")
const canvas = document.getElementById("fireworks-canvas")
const fireworks = new Fireworks.default(canvas, {
  autoresize: true,
  opacity: 0.5,
  acceleration: 1.05,
  friction: 0.97,
  gravity: 1.5,
  particles: 50,
  traceLength: 3,
  traceSpeed: 10,
  explosion: 5,
  intensity: 30,
  flickering: 50,
  lineStyle: "round",
  hue: {
    min: 0,
    max: 360,
  },
  delay: {
    min: 30,
    max: 60,
  },
  rocketsPoint: {
    min: 50,
    max: 50,
  },
  lineWidth: {
    explosion: {
      min: 1,
      max: 3,
    },
    trace: {
      min: 1,
      max: 2,
    },
  },
  brightness: {
    min: 50,
    max: 80,
  },
  decay: {
    min: 0.015,
    max: 0.03,
  },
  mouse: {
    click: false,
    move: false,
    max: 1,
  },
})

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
const fruitSound = {
  orange: "./Alaa Saad Burtogala علاء سعد البرتقالة.mp3",
  apple: "./Alaa Saad Al Tufaha علاء سعد التفاحة.mp3",
  banana: "./better-banana-58341.mp3",
  pear1: "./نشيد الكمثرى أناشيد قناة مجد للأطفال القديمة.mp3",
  strawberry: "./الفراولة طيور الجنة.mp3",
}
let audioPlayer = new Audio()

const playSound = (fruitName) => {
  if (fruitSound[fruitName]) {
    audioPlayer.pause()
    audioPlayer.currentTime = 0
    audioPlayer.src = fruitSound[fruitName]
    audioPlayer.play()
  }
}
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
  frontImg.setAttribute("alt", fruitImages[i].alt)
  card.appendChild(frontImg)
  for (let j = 0; j < backImage.length; j++) {
    let backImg = document.createElement("img")
    backImg.classList.add("back")
    backImg.setAttribute("src", backImage[j].src)
    card.appendChild(backImg)
    let variable2 = backImage[j]
  }

  cards.appendChild(card)
}

let emptyArray = []
let stopClicking = false

const checkArray = () => {
  stopClicking = true
  const [first, second] = emptyArray

  const firstImg = first.querySelector(".front")
  const secondImg = second.querySelector(".front")

  if (firstImg.src === secondImg.src) {
    ;[first, second].forEach((image) => {
      image.classList.add("matched")
      const fruitName = firstImg.alt
      playSound(fruitName)
      emptyArray = []
      stopClicking = false
      const allMatched = document.querySelectorAll(".memory-card.matched")
      if (allMatched.length === fruitImages.length) {
        fireworks.start()
        setTimeout(() => fireworks.stop(), 5000)
      }
    })
    fireworks.start()
    setTimeout(() => fireworks.stop(), 3000)
    stopClicking = false
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
    if (card.classList.contains("matched")) {
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
