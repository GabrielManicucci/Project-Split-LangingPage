const splitLeft = document.getElementById("left")
const splitRight = document.getElementById("right")
const mainDiv = document.getElementById('content')

splitLeft.addEventListener("mouseenter", event => {

  if (getWidth(mainDiv) <= 825) {
    splitLeft.style.height = "73%"
    splitRight.style.height = "27%"
  } else {
    splitLeft.style.width = "73%"
    splitRight.style.width = "27%"
  }
})

splitRight.addEventListener("mouseenter", event => {

  if (getWidth(mainDiv) <= 825) {
    splitRight.style.height = "73%"
    splitLeft.style.height = "27%"
  } else {
    splitRight.style.width = "73%"
    splitLeft.style.width = "27%"
  }
})

function getWidth(split) {
  const widthSplit = parseInt(split.clientWidth)
  return widthSplit
}

function getHeight(split) {
  const heightSplit = parseInt(split.clientHeight)
  return heightSplit
}

function setDimensions() {
  if (getWidth(mainDiv) >= 825) {
    // console.log(getX(mainDiv))
    splitLeft.style.height = '100%'
    splitRight.style.height = '100%'
  } else if(getWidth(mainDiv) <= 825) {
    // console.log(getX(mainDiv))
    splitLeft.style.width = '100%'
    splitRight.style.width = '100%'
  }
}

setInterval(setDimensions, 1300)
