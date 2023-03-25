const car = {
  brand: "ford",
  modal: "fiesta",
  start: function () {
    console.log(this)
    console.log(this.brand, this.modal);
  },
  stop: () => {
    console.log(this)
    console.log(this.brand, this.modal);
  },
};

car.start()
car.stop()
