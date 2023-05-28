//Event Module
//Node.JS has a built-in module,called 'events'.
//Where You Can create-,fire-,and listen for your own events.

//Example 1 - Registering for the event to be fired only one time using once.
//Example 2 - Create an event emitter instance and register a couple of callbacks.
//Example 3 - Registering for the event with callback parameters

const EventEmitter = require('events'); 
const event = new EventEmitter(); //  creating event function to use to create event.
// event.on('myName',() => {  //giving command to newly created event.
//     console.log('Yash');
// })
// event.on('myName',() => {
//     console.log('Yash');
// })
// event.on('myName',() => { //creating multiple function to same event
//     console.log('Yash');
// })
// event.emit('myName'); //creating/firing a new event
event.on('checkPage',(sc,msg) => {
    console.log(`${sc} Status,${msg} Message`);
})
event.emit('checkPage',200,'ok'); //firing a new event to check page status.