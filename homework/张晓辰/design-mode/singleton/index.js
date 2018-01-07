var People = (function(){
    var instance
    function init(name) {
        return {
            name: name
        }
    }

    return {
        createPeople: function(name) {
            if(!instance) {
                instance = init(name)
            }
            return instance
        }
    }
}())

console.log(People.createPeople("jack"))
console.log(People.createPeople("mary"))