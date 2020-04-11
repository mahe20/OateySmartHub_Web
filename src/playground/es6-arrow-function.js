const square = function (x) {
    return x * x;
};

//arrow function same as above
/*const squareArrow = (x) => {
    return x *x;
};*/

// same as above but no return required
const squareArrow = (x) => x * x;


console.log(square(8));
console.log(squareArrow(9));

// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];

// };


const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName('Mahendra Adhikari'));