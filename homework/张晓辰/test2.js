function Person(name, age) {
    this.name = name
    this.age = age
}

function Student(name, age, sex) {
    Person(name,age)
    this.sex = sex
}

var s = new Student("jack", 12, "male")
console.log(s)