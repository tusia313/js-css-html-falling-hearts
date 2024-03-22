const body = document.querySelector('body')

class Heart {
    constructor(color, position, speed) {
        this.color = color
        this.position = position
        this.speed = speed
    }
    drew() {
        let timerId
        let top = 0
        const divElement = document.createElement('div')
        divElement.classList.add('heart')
        divElement.style.setProperty('--c', this.color)
        divElement.style.left = this.position + 'px'
        divElement.style.speed = this.speed
        body.append(divElement)

        function move() {
            divElement.style.top = top + 'px'
            top += 10
            if (top >= window.innerHeight) {
                clearInterval(timerId)
                divElement.remove()
            }
        }
        timerId = setInterval(move, this.speed)
    }
}

function addHeart() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
    const randomPosition = Math.floor(Math.random() * window.innerWidth)
    const randomSpeed = Math.floor(Math.random() * 500)

    const newHeart = new Heart(randomColor, randomPosition, randomSpeed)
    console.log(newHeart)
    newHeart.drew()
}
setInterval(addHeart, 100)
