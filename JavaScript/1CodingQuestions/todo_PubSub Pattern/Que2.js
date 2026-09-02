class AsyncObservable {

    constructor() {
        this.subscribers = new Set()
    }

    subscribe(subscriber) {
        this.subscribers.add(subscriber)
        return ()=>this.subscribers.delete(subscriber)

    }

    notify() {
        
    }
   
}