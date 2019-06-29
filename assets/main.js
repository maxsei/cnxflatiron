let WIDTH = 500
let HEIGHT = 500
var boundary = document.createElement("div")
boundary.style.background = "red"
boundary.style.width = WIDTH + "px"
boundary.style.height = HEIGHT + "px"
document.body.append(boundary)

var audio = new Audio("assets/hankjpeg.wav");

for ( let i = 0; i < 10; i++ ) {
	speed = Math.random() * 1.5 + .5
	hankBouncer(speed)
}

function hankBouncer(mag, ) {
	var character = document.createElement("img")
	character.src = "./assets/hank-hill.jpg"
	character.style.position = "absolute"
	character.style.width = "100px"
	character.style.height = "100px"
	document.body.append(character)

	let left = WIDTH / 2
	let up = HEIGHT / 2
	let right = left + character.clientWidth
	let down = up + character.clientWidth
	let theta = (0.05 + Math.random() * 0.4 ) * Math.PI * 2
	// let mag = 1.1

	//
	// adjacent/huppotenuse = cos(theta)
	// left/r = cos(theta)

	setInterval( () => {
		if (left < 0) {
			left = 0
			theta = ( 3 * Math.PI - theta ) % (2 * Math.PI)
			// audio.play();
		}
		if (right > WIDTH) {
			right = WIDTH
			left = right - character.clientWidth
			theta = ( 3 * Math.PI - theta ) % (2 * Math.PI)
			// audio.play();
		}
		if (up < 0) {
			up = 0
			theta = ( -theta ) % (2 * Math.PI)
			// audio.play();
		}
		if (down > HEIGHT) {
			down = HEIGHT
			up = down - character.clientWidth
			theta = ( -theta ) % (2 * Math.PI)
			// audio.play();
		}

		left += mag*Math.cos(theta)
		up += mag*Math.sin(theta)
		right = left + character.clientWidth
		down = up + character.clientWidth

		character.style.left = left + "px"
		character.style.top = up + "px"

	}, 60/1000)
}
