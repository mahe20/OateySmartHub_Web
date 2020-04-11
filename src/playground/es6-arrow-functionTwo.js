const add = function (a, b) {
    console.log(arguments);
return a +b;
};

console.log(add(55,1));


const user = {
    name: 'Mahendra',
    cities: ['Nepal', 'USA', 'Cleveland'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());


const multiplier = {
    numbers: [2,3,6],
    singleNumber: 2,

    multiply(){
        return this.numbers.map((num) => this.singleNumber * num);
    }

};

console.log(multiplier.multiply());