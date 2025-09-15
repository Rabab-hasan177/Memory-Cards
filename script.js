const myContainor = document.querySelector(".container")
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
const backImage = [{src: "./pictures/Qmark.png", alt:"qmark"}]

for (let i = 0; i < fruitImages.length; i++) {
  let card = document.createElement("div")
  let img1 = document.createElement("img")
  img.classList.add('front')

  img.setAttribute("src", fruitImages[i].src)
  card.appendChild(img)
  let variable = fruitImages[i]
  myContainor.appendChild(card)
  console.log(variable)
}
