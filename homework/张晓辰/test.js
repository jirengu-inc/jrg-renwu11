var EventCenter = (function(){
    var events = []

    function on(evt, handler) {
        events[evt] = events[evt] || []
        events[evt].push({handler: handler})
    }

    function fire(evt, args) {
        if(!events[evt]) {
            return
        }
        for(i=0; i<events[evt].length; i++){
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

var Event = EventCenter

Event.on('change', function(val){
    console.log('change...  now val is ' + val);  
});
Event.fire('change', '饥人谷');
Event.off('change');
Event.fire('change', '饥人谷');