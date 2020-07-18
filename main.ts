radio.setGroup(5)
basic.forever(function () {
    let LIGHT_LEVEL = 0
    if (LIGHT_LEVEL > 50) {
        radio.sendString("LIGHT ON")
    } else {
        radio.sendString("LIGHT OFF")
    }
    basic.pause(1000)
})
