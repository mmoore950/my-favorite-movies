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
    circles.forEach((circle) => {
        circle.style.color = 'white'
    })
    let curr = document.getElementById(index.toString())
    curr.style.color = 'red'

}

rightArrow.addEventListener('click', () => {
    carousel(1)
})

leftArrow.addEventListener('click', () => {
    carousel(-1)
})

const circles = document.querySelectorAll('.circle')
circles.forEach((element) => {
    element.addEventListener('click', () => {
        let num = (element.id - (index % imageArray.length) + imageArray.length) % imageArray.length
        carousel(num)
    })
})

setInterval(() => {
    carousel(1)
}, 5000)



