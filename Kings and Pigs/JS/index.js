
const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

canvas.width = 1024
canvas.height = 576

class Sprite {
    constructor({position}) {
        this.position = position
        this.image = new Image()
        this.image.src = "/Images/BG.jpg"
    }
    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)
    }

    update() {
        if (bottom < canvas.height) {
            y++
            bottom = y + 100
        }
    }
}

const backgroundLevel1 = new Sprite({
    position: {
        x: 0,
        y: -850,
    }
})

let player = new Player()

const keys = {
    w: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
}

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = "white"
    c.fillRect(0, 0, canvas.width, canvas.height)
    
    backgroundLevel1.draw()

    player.velocity.x = 0
    if (keys.d.pressed) player.velocity.x = 1.5
    else if (keys.a.pressed) player.velocity.x = -1.5
    player.draw()
    player.update()
}

animate()


