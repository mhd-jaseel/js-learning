//Arrow functions inherit this from their surrounding scope.

const person = {
    name: "Jaseel",

    greet() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};

person.greet();

        //When Should We NOT Use Arrow Functions?
//-------------------------------------------
  //As object methods when you need the object's own this.
  // As constructors with new.
  // When you need the arguments object.

//example
const person2 = {
    name: "Jaseel",

    greet: () => {
        console.log(this.name);
    }
};

person2.greet();

// This won't print "Jaseel" because arrow functions don't have their own this.