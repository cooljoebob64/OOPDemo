// console.log("JS Loaded!");

class Person {

    constructor (first, last, weight) {
        this.first = first;
        this.last = last;
        this.weight = weight;
    }

    bio(){
        return (this.first + " " + this.last + ", weight: " + this.weight);
    }
}


class Tester extends Person {

    constructor(first,last,weight,bugs){
        super(first,last,weight);
        this.bugs = bugs;
    }

    bugCount(){
        return (this.bugs + " bugs found");
    }

    bio(){
        return (super.bio() + ", " + this.bugs + " bugs found");
    }

}





let monty = new Person("Monty", "Bananas", 300);
console.log(monty.bio());

let hambolt = new Tester("Hambolt", "McMuffin",205,9001);
console.log(hambolt.bio());
