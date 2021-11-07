let wobble = 0
let yCoordinate = 4
basic.forever(function on_forever() {
    
    while (wobble <= 5) {
        if (input.acceleration(Dimension.X) > 500 || input.acceleration(Dimension.X) < -500) {
            wobble += 1
            led.plot(2, yCoordinate)
            yCoordinate -= 1
            basic.pause(500)
        }
        
    }
    basic.clearScreen()
    led.plot(0, 0)
    led.plot(1, 1)
    led.plot(2, 2)
    led.plot(3, 3)
    led.plot(4, 4)
    led.plot(4, 0)
    led.plot(3, 1)
    led.plot(1, 3)
    led.plot(0, 4)
})
