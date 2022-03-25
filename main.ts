input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    contador += 1
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(contador)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    contador += -1
})
let contador = 0
contador = 0
