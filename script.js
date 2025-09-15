const cards = document.querySelector(".play-game")
const fruitImages = [
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

  let variable = fruitImages[i]

  cards.appendChild(card)

  console.log(variable)
}

const cardsForClick = document.querySelectorAll(".memory-card")
cardsForClick.forEach((card) => {
  card.addEventListener("click", () =>{
  card.classList.toggle("flip")
  console.log("clicked")
  })
})
