const body = document.querySelector('body')

class Heart{
    constructor(color, position, speed) {
        this.color = color
        this.position = position
        this.speed = speed
    }
}

function addHeart() {
    const randomColor = '#00000'
    const randomPosition = '40'
    const randomSpeed = '200'

    const newHeart = new Heart(randomColor, randomPosition, randomSpeed)
    console.log(newHeart)
}

addHeart()