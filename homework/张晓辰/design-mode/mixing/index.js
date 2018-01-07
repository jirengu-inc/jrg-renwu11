var Person = function(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.sayName = function() {
    console.log(this.name)
}

var Student = function(name, age, score) {
    Person.call(this, name, age)
    this.score = score
}
//Student.prototype = Object.create(Person.prototype)
Student.prototype = create(Person.prototype)

function create(parentObj) {
    function F(){}
    F.prototype = parentObj
    return new F()
}

Student.prototype.sayScore = function() {
    console.log(this.score)
}

var stu1 = new Student("jack", 18, 60)