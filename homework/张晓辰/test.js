function AutoMobile(name, color, status) {
    this.name = name 
    this.color = color
    this.status = status

    AutoMobile.prototype.run = function() {
        console.log("It's running")
    }
    AutoMobile.prototype.stop = function() {
        console.log("It stopped")
    }
    AutoMobile.prototype.getStatus = function() {
        console.log("Its status is " + Car.status)
    }
}

var Car = new AutoMobile("jeep", "blue", "good")
console.log(Car.name)
console.log(Car.color)
Car.run()
Car.stop()
Car.getStatus()