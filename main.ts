input.onButtonPressed(Button.A, function () {
    if (Rotate == 0) {
        for (let index = 0; index < 100; index++) {
            servos.P0.run(50)
            servos.P1.run(50)
        }
        servos.P0.run(0)
        servos.P1.run(0)
        Rotate += 1
    } else {
        servos.P1.run(0)
        Rotate += -1
    }
})
let Rotate = 0
Rotate = 0
basic.forever(function () {
	
})
