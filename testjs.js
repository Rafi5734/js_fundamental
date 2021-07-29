// /* ---------map and filter method----------/*

// const array1 = [1, 3, 4, 5, 6, 7];
// console.log(array1);
// const modified = array1.map((n) => ({ i: n })).filter((obj) => obj.i >= 3);
// console.log(modified);
// */

// /*------array storing value and print them with 2 for loop-------/*
// const arrays = [
//     [1, 3, 45, 5],
//     [56, 3, 45, 65, 34],
// ];
// for (const data of arrays) {
//     for (const key of data) {
//         console.log(key);
//     }
// }
// */

// /*------push(),pop(),unshift(),shift()---------/*

// const className = ["one", "two", "three", "four", "five"];
// className.push("six", "eight", "nine"); //inserting values by this method///
// console.log(className);
// className.unshift("seven"); //inserting a value at the first of an array///
// className.pop(); //removing an elements from an array at the last point of the array///
// console.log(className);
// className.shift(); //removing an elements at the first position of an array///
// console.log(className);

// */

// /*--------splice()
// const className = ["one", "two", "three", "four", "five"];
// className.splice(0, 1, "deleted place is replaced by me"); //in this method, the first parameter indicates the how many splice do you want,
// //second parameter indicates the deleting index of the certain array, the third parameter indicates here add an elements to
// //the array where previous element's was deleted from the array//////
// //negative values are also allow to deleted according to the negative values index from the right of the array//////
// console.log(className);
// */

// /*--------slice() method----------------/*
// const result = [12, 44, 23, 4, 25, 43];
// console.log(result.slice(0, result.length));
// */
// //find the index of an array using indexOf()//
// const myTestArray = [12, 44, 23, 4, 25, 55];
// //console.log(myTestArray.indexOf(55));

// ///find() & findIndex() stuff /////
// const personalData = [
//     {
//         name: "kamrul",
//     },
//     {
//         name: "hasan",
//     },
// ];

// const showPersonalData = personalData.find((person, id, allPerson) => {
//     return person.name === "hasan";
// });
// //console.log(showPersonalData, personalData);

// const findingIndex = personalData.findIndex((person, id, allPerson) => {
//     return person.name === "hasan";
// });
// //console.log(findingIndex);
// //console.log(myTestArray.includes(4)); it return truthy or falsy value of an array..

// const assignmentMarks = [3, 4, 5, 3, 45, 5432, 23, 53];
// const waiver = 0.1;
// const finalMarks = assignmentMarks.map((marks, index, allMarks) => {
//     const marksObject = {
//         index: index,
//         marks: marks,
//         totalMarks: marks * waiver,
//     };
//     return marksObject;
// });
// console.log(finalMarks, assignmentMarks);

/////////////// Faculty management system ////////////////////////

/*
const codeForAll = {
    faculties: {
        faculty1: {
            name: "A",
            salary: "10",
            classes: ["sat", "mon", "tue"],
            description: "He/She is awesome",
        },
        faculty2: {
            name: "B",
            salary: "11",
            classes: ["web", "thus", "fri"],
            description: "He/She is awesome2",
        },
        faculty3: {
            name: "C",
            salary: "12",
            classes: ["sat", "sun", "mon"],
            description: "He/She is awesome3",
        },
        faculty4: {
            name: "D",
            salary: "13",
            classes: ["tue", "wed", "thus"],
            description: "He/She is awesome4",
        },
        faculty5: {
            name: "E",
            salary: "14",
            classes: ["Fri", "sat", "sun"],
            description: "He/She is awesome5",
        },
        faculty6: {
            name: "F",
            salary: "15",
            classes: ["mon", "tue", "wed"],
            description: "He/She is awesome6",
        },
        faculty7: {
            name: "G",
            salary: "16",
            classes: ["thus", "fri", "sat"],
            description: "He/She is awesome7",
        },
        faculty8: {
            name: "H",
            salary: "17",
            classes: ["sun", "mon", "tue"],
            description: "He/She is awesome8",
        },
        faculty9: {
            name: "I",
            salary: "18",
            classes: ["wed", "thus", "fri"],
            description: "He/She is awesome9",
        },
        faculty10: {
            name: "J",
            salary: "19",
            classes: ["sat", "sun", "mon"],
            description: "He/She is awesome10",
        },
    },
    students: {
        semester1: {
            id: "191071019",
            batch: "20th",
            classDays: ["mon", "tue", "wed", "thus"],
            holidays: ["sat", "sun", "fri"],
            waiver: "10%",
        },
    },
};
console.log(codeForAll);
console.log(codeForAll.faculties);
*/

//////////////////// adding, updating and deleting an object/////////////////
/*
const person = {
    name: "John",
    age: 34,
    hobbies: ["gaming", "Football", "Family"],
    greet: function () {
        console.log("hi!Hello");
    },
};
person.isAdmin = true;
delete person.age;
//person.name = "rafi";   //override the name object;
console.log(person);
*/

////////////////////// special key and square brackets////////////////////////////////
/*
const person = {
    "first name": "smith",
    age: 34,
    hobbies: ["gaming", "Football", "Family"],
    greet: function () {
        console.log("hi!Hello");
    },
};
person.isAdmin = true;
delete person.age;
console.log(person["first name"]);
*/

////////////////////// property Type and Property Order ////////////////////////////////
/*
const person = {
    "first name": "smith",
    age: 34,
    hobbies: ["gaming", "Football", "Family"],
    greet: function () {
        console.log("hi!Hello");
    },
    3.3: "this is js",
};
person.isAdmin = true;
delete person.age;
console.log(person[3.3]);
*/

///////////////////// textContent //////////////////////

// function MytextContent() {
//     var text1 = document.getElementById("myBtn").textContent;
//     document.getElementById("demo").innerHTML = text1;
// }

/////////////// Traversing DOM //////////////////
