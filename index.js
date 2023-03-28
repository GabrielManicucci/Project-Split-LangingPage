const splitLeft = document.getElementById("left")
const splitRight = document.getElementById("right")
const mainDiv = document.getElementById('content')

splitLeft.addEventListener("mouseenter", event => {

  setDimensions()
  
  if (getX(mainDiv) <= 825) {
    splitLeft.style.height = "73%"
    splitRight.style.height = "27%"
  } else {
    splitLeft.style.width = "73%"
    splitRight.style.width = "27%"
  }
})

splitRight.addEventListener("mouseenter", event => {

  setDimensions()

  if (getX(mainDiv) <= 825) {
    splitRight.style.height = "73%"
    splitLeft.style.height = "27%"
  } else {
    splitRight.style.width = "73%"
    splitLeft.style.width = "27%"
  }
})

// mainDiv.addEventListener("click", event => {
//   if (getX(mainDiv) <= 825) {
//     splitLeft.style.height = '50%'
//     splitRight.style.height = '50%'
//   }
// })

function getX(split) {
  const widthSplit = parseInt(split.clientWidth)
  return widthSplit
}

function getY(split) {
  const heightSplit = parseInt(split.clientHeight)
  return heightSplit
}

function setDimensions() {
  if (getX(mainDiv) >= 825) {
    splitLeft.style.height = '100%'
    splitRight.style.height = '100%'
  } else if(getX(mainDiv) <= 825) {
    splitLeft.style.height = '50%'
    splitRight.style.height = '50%'
  }
}

console.log(getX(splitLeft))
console.log(getX(splitRight))
console.log(getX(mainDiv))
