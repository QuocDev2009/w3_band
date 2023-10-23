const sliderElement = document.querySelector('#slider')
var index = 0
const listImages = [
    'la.jpg',
    'ny.jpg',
    'chicago.jpg'
]
const listTextHeading = [
    'Los Angeles',
    'New York',
    'Chicago'
]
const listTextDes = [
    'We had the best time playing at Venice Beach!',
    'The atmosphere in New York is lorem ipsum.',
    "Thank you, Chicago - A night we won't forget."
]
function changeImages(){
    index++
    index%=3
    sliderElement.style.backgroundImage = `url(./assets/images/${listImages[index]})`
    const textHeading = document.querySelector('#text-heading')
    const textDes = document.querySelector('#text-description')
    textHeading.innerText = listTextHeading[index]
    textDes.innerText = listTextDes[index]
}
setInterval(
    changeImages, 
    3000
)