console.log("This is a node js practise demo");
// ES5 var vs ES6 let and const
// var is functional scoped
//let and const are block scoped

function functionScope() {
  if (true) {
    var a = 1;
    var b = 2;
  }
  console.log(a + b);
}
functionScope();

// function blockScope() {
//   if (true) {
//     let a = 1;
//     const b = 2;
//   }
//   console.log(a + b);
// }
// blockScope(); // a and b are not defined

// String interpolation (template string)
const name = "mason";
const age = 14;
//es5
console.log("My name is " + name + ", and I'm " + age + " years old");

//es6
console.log(`My name is ${name}, and I\'m ${age} years old`);

// Arrow function
let array = [0, 1, 2, 3];
//es5
array.forEach(function (e) {
  console.log(e * 2);
});

//es6
array.forEach((e) => console.log(e * 2));


// Quiz
let array_quiz = [0, 1, 2, 3];
array_quiz.forEach(e => {
    e = e * 2;
  });
console.log(array_quiz); //  [0, 1, 2, 3]

let array_q = [0, 1, 2, 3];
const res = array_q.map(i => {
    if (i % 2) {
      return i;
    }
  });
console.log(res); //  [ undefined, 1, undefined, 3 ]

// 'this' keyword in callback functions
// es5
const calendar = {
  currentDay: 6,
  nextDay: function() {
    setTimeout(function() {
      this.currentDay += 1;
      console.log(this.currentDay); // this points to window
    });
  }
};
calendar.nextDay(); //NaN

// we used to use a self variable to solve this problem
const calendar_1 = {
  currentDay: 6,
  nextDay: function() {
    var self = this;
    setTimeout(function() {
      self.currentDay += 1;
      console.log(self.currentDay);
    });
  }
};
calendar_1.nextDay(); //7

// es6
const calendar_es6 = {
  currentDay: 6,
  nextDay: function() {
    setTimeout(() => {
      this.currentDay += 1;
      console.log(this.currentDay);
    });
  }
};
calendar_es6.nextDay(); //7
