wobble = 0
yCoordinate = 4

def on_forever():
    global wobble, yCoordinate
    while wobble <= 5:
        if input.acceleration(Dimension.X) > 500 or input.acceleration(Dimension.X) < -500:
            wobble += 1
            led.plot(2, yCoordinate)
            yCoordinate -= 1
            basic.pause(500)
    basic.clear_screen()
    led.plot(0, 0)
    led.plot(1, 1)
    led.plot(2, 2)
    led.plot(3, 3)
    led.plot(4, 4)
    led.plot(4, 0)
    led.plot(3, 1)
    led.plot(1, 3)
    led.plot(0, 4)
basic.forever(on_forever)
