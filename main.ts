input.onButtonPressed(Button.A, function () {
    basic.showNumber(Revolutions)
})
let Revolutions = 0
Revolutions = 0
basic.forever(function () {
    if (touch.getTap(touch.TouchPin.P0)) {
        Revolutions += 1
    }
    basic.pause(20)
})
