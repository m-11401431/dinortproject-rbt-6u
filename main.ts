basic.forever(function () {
    if (true) {
        pins.servoWritePin(AnalogPin.P2, 180)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
