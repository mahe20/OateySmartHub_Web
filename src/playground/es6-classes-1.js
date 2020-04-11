
class Person {
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        // return 'Hi i am ' + this.name;
        //below is the same in es6 as above
        return `Hi. I am ${this.name}`;
    }

    getDescription(){
        return `${this.name} is ${this.age} years old`;
    }

}


// class Student extends Person{

//     constructor(name,age,major){
//         super(name, age); // this is calling the parent class with parent class value 
//         this.major = major; // we are only doing this in child class

//     }

//     hasMajor(){
//         return !!this.major;
//     }
//     //overriding the parent method here
//     getDescription(){
//         let description = super.getDescription(); // accessing the parent getDescription

//         if (this.hasMajor()){ // if person has a major then return it
//             description += ` and major is ${this.major}.`;
//         }
//         return description;
//     }


// }

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        
        if (this.hasHomeLocation()){
            greeting += `I am visiting from ${this.homeLocation}.`;
        }

        return greeting;
    }
}

const me = new Traveler('Mahendra Adhi', 20, 'Ohio');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());