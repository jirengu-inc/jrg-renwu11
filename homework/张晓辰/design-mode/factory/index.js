function createPerson(name) {
    var person = {
        name: name,
        sayName: function() {
            console.log(this.name)
        }
    }
    return person
}

createPerson("mary").sayName()