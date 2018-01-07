var EventCenter = (function(){
    var events = {}
    function on(evt, handler) {
        events[evt] = events[evt] || []
        events[evt].push({handler: handler})
        console.log(events)
    }

    function fire(evt, args) {
        if(!events[evt]) {
            return
        }
        for(i=0; i<events[evt].length; i++) {
            events[evt][i].handler(args)
        }
    }

    function off(evt) {
        delete events[evt]
    }
    
    return {
        on: on,
        fire: fire,
        off: off
    }
}())

EventCenter.on("hello", function(){console.log("test")})
EventCenter.fire("hello")
EventCenter.fire("hella")