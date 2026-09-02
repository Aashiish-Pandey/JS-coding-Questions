class Engine {

    start() {
        return 'Engine Started'
    }
}

class Car  {
    constructor() {
        this.engine = new Engine()
    }

    drive() {

        return this.engine.start() + '& car is moving'
    }
}

const alto = new Car()
console.log(alto.drive())