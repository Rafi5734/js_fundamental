/* ---------map and filter method----------/*


const array1 = [1, 3, 4, 5, 6, 7];
console.log(array1);
const modified = array1.map((n) => ({ i: n })).filter((obj) => obj.i >= 3);
console.log(modified);
*/

/*------array storing value and print them with 2 for loop-------/*
const arrays = [
    [1, 3, 45, 5],
    [56, 3, 45, 65, 34],
];
for (const data of arrays) {
    for (const key of data) {
        console.log(key);
    }
}
*/

/*------push(),pop(),unshift(),shift()---------/*

const className = ["one", "two", "three", "four", "five"];
className.push("six", "eight", "nine"); //inserting values by this method///
console.log(className);
className.unshift("seven"); //inserting a value at the first of an array///
className.pop(); //removing an elements from an array at the last point of the array///
console.log(className);
className.shift(); //removing an elements at the first position of an array///
console.log(className);


*/

/*--------splice()
const className = ["one", "two", "three", "four", "five"];
className.splice(0, 1, "deleted place is replaced by me"); //in this method, the first parameter indicates the how many splice do you want,
//second parameter indicates the deleting index of the certain array, the third parameter indicates here add an elements to 
//the array where previous element's was deleted from the array//////
//negative values are also allow to deleted according to the negative values index from the right of the array//////
console.log(className);
*/

/*--------slice() method----------------/*
const result = [12, 44, 23, 4, 25, 43];
console.log(result.slice(0, result.length));
*/
//find the index of an array using indexOf()//
const myTestArray = [12, 44, 23, 4, 25, 55];
//console.log(myTestArray.indexOf(55));

///find() & findIndex() stuff /////
const personalData = [
    {
        name: "kamrul",
    },
    {
        name: "hasan",
    },
];

const showPersonalData = personalData.find((person, id, allPerson) => {
    return person.name === "hasan";
});
//console.log(showPersonalData, personalData);

const findingIndex = personalData.findIndex((person, id, allPerson) => {
    return person.name === "hasan";
});
//console.log(findingIndex);
//console.log(myTestArray.includes(4)); it return truthy or falsy value of an array..

const assignmentMarks = [3, 4, 5, 3, 45, 5432, 23, 53];
const waiver = 0.1;
const finalMarks = assignmentMarks.map((marks, index, allMarks) => {
    const marksObject = {
        index: index,
        marks: marks,
        totalMarks: marks * waiver,
    };
    return marksObject;
});
console.log(finalMarks, assignmentMarks);
