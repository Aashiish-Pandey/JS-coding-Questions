class Move {

    constructor() {
        this.handlers = new Set()
    }

    subscribe(fn) {
        this.handlers.add(fn)

    }
    unsubscribe(fn) {
        this.handlers.delete(fn)

    }

    fire(data) {
        this.handlers.forEach(subscriber=>subscriber(data))
    }
}


const moveHanlder1 = function(item) {

    console.log('fired 1',item)
}

const moveHanlder2 = function(item) {

    console.log('fired 2',item)
}


const move = new Move()
move.subscribe(moveHanlder1)
move.subscribe(moveHanlder2)
move.fire("Ashish")