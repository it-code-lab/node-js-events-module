var events = require('events');

//create an object of EventEmitter 
var em = new events.EventEmitter();

//Subscribe for Event
em.on('Event', function (data) {
    console.log('Event subscriber: ' + data);
});

// Raising Event
em.emit('Event', 'This is Node.js event emitter example.');