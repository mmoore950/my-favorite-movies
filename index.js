const image = document.getElementById('image')
console.log('hi')
const imageArray = []
imageArray.push('./images/batman.jpg')
imageArray.push('./images/shawshank.jpg')
imageArray.push('./images/moonlight.jpeg')
imageArray.push('./images/jaws.jpg')
console.log('all pushed')
console.log(imageArray)

let index = 0
const rightArrow = document.getElementById('right-arrow')
const leftArrow = document.getElementById('left-arrow')

function carousel(num) {
    index = (index + num + imageArray.length) % imageArray.length
    image.src = imageArray[index]
}

rightArrow.addEventListener('click', () => {
    carousel(1)
})

leftArrow.addEventListener('click', () => {
    carousel(-1)
})

function circleButtons(button) {
    circles.forEach((circle) => {
        circle.style.color = 'white'
    })
    image.src = imageArray[Number(button.id)]
    button.style.color = 'red'
}

const circles = document.querySelectorAll('.circle')
circles.forEach((element) => {
    element.addEventListener('click', () => {
        circleButtons(element)
    })
})

setInterval(() => {
    carousel(1)
}, 5000)



