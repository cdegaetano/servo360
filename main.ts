input.onButtonPressed(Button.A, function () {
    if (Rotate == 0) {
        servos.P0.run(50)
        servos.P1.run(50)
        Rotate += 1
    } else {
        servos.P0.run(0)
        servos.P1.run(0)
        Rotate += -1
    }
})
let Rotate = 0
Rotate = 0
basic.forever(function () {
	
})
