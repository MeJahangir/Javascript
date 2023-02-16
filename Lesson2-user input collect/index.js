// user input collect
// var jahangir = prompt('Enter your names:');
// console.log('Hi...' + jahangir);

// var jahangir = prompt('Enter your names:');
// document.write('Hi...' + jahangir);

// let number = prompt('Enter your number..');
// console.log(number);

// var fName = 'jahangir alam';
// var lName = 'alam';
// var fullName = fName + lName;
// console.log(fullName);


function myFunction(x1,x2) {
    return x1 * x2;

}
// document.getElementById('demo').innerHTML = myFunction(10,20);

var result = myFunction(10, 20);
// console.log(result);

const names = [1,2,3,4,5,6,7,8];
for (let name = 1; name < names.length; name++) {
    const result = names[name];
    console.log(result);
}

// data type 
var a = 10;
var b = 'jahangir';
var c = true;
// console.log(a + b);
console.log(typeof(a)); //type chack
console.log(typeof(b)); //type chack
console.log(typeof(c)); //type chack
 
let text = ' ';
let i = 0;
while ( i < 10 ) {
  text += i;
  i++;
}
// console.log(text);

const results = [20, 30, 40, 50, 60];
console.log(typeof(results));

let time = 9;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}