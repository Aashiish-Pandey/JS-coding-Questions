let blog = {

  name: "Tapas",
  address: "freecodecamp",
  message: function () {
    setTimeout(()=> {
      console.log(this.name);
    }, 1000);
    console.log(`${this.name} blogs on ${this.address}`);
  },
};

blog.message();
