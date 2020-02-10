let greeting1 = "What is your name?";
let greeting2 = "what is your mom's name?";
let greeting3 = "what is your dad's name?";

let name1 = prompt(greeting1);
let name2 = prompt(greeting2);
let name3 = prompt(greeting3);

let names = [name1, name2, name3];

function longestString(arr) {
    var long1 = arr[0];
    for (i = 0; i < arr.length; i++) {
        if (arr[i].length > long1.length) {
            long1 = arr[i];
        }
    }
    alert(long1 + " has the longest name");
    return long1;

}

console.log(longestString(names));