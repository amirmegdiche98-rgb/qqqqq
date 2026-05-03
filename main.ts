let armed = false
let alarm = false
input.onButtonPressed(Button.A, function () {
    armed = !(armed)
    if (armed) {
        basic.showString("ARM")
    } else {
        basic.showString("OFF")
        alarm = false
        music.stopAllSounds()
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (armed) {
        alarm = true
    }
})
basic.forever(function () {
    if (alarm) {
        basic.showIcon(IconNames.Skull)
        music.playTone(988, music.beat(BeatFraction.Half))
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(200)
    } else if (armed) {
        basic.showIcon(IconNames.SmallDiamond)
    } else {
        basic.clearScreen()
    }
})
