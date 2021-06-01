const timer = document.querySelector('#counter')
const likeButton = document.querySelector('#heart')
const plusButton = document.querySelector('#plus')
const minusButton = document.querySelector('#minus')
const likesList = document.querySelector(".likes")
const arrayOfNumbersLiked = []

const increaseTimer = () => timer.innerText++
const decreaseTimer = () => timer.innerText--
const handleClick = () => {
  const likedNumber = parseInt(timer.innerHTML)
  if (!arrayOfNumbersLiked.find(item => item.number === likedNumber)) {
    arrayOfNumbersLiked.push({ number: likedNumber, timesLiked: 1 })
    let li = document.createElement("li")
    li.innerHTML = `${likedNumber} has been liked 1 time.`
    li.id = `num-${likedNumber}`
    likesList.append(li)
  } else {
    const likedNumberObject = arrayOfNumbersLiked.find(item => item.number === likedNumber)
    likedNumberObject.timesLiked = likedNumberObject.timesLiked + 1
    let listItem = document.querySelector(`#num-${likedNumber}`)
    listItem.innerHTML = `${likedNumber} has been liked ${likedNumberObject.timesLiked} times.`
  }
}

window.addEventListener('DOMContentLoaded', () => {
    let timerInterval = setInterval(increaseTimer, 1000)
  
    plusButton.addEventListener('click', increaseTimer)
    minusButton.addEventListener('click', decreaseTimer)
  })
  
  likeButton.addEventListener('click', handleClick)