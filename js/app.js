const body = document.querySelector('body')

class Heart{
    constructor(color, position, speed) {
        this.color = color
        this.position = position
        this.speed = speed
    }
}

function addHeart() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
    console.log(randomColor)
    const randomPosition = Math.floor(Math.random() * window.innerWidth)
    console.log(window.innerWidth)
    const randomSpeed = Math.floor(Math.random() * 500)

    const newHeart = new Heart(randomColor, randomPosition, randomSpeed)
    console.log(newHeart)
}

addHeart()