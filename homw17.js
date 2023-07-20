// завдання 1
// const person = {
//     name : "Max",
//     surname: " Mr",
//     age : 15, 

// }

// function personInfo(person) {
//     const {name, surname, age} = person;
//     return `Мене звати ${name} ${surname} і мені ${age} років`;
// }

// console.log(personInfo(person))
// завдання 2

// const student = {
//     name : "piter",
//     surname: "parker",
//     grades : [4, 5, 3],

// }
// console.log(calcGrades(student))

// задання 3

const person ={
    name:"John",
    emails: ["fsfsfsfsfsf@gmail.com", "sffsfsfsfsfssfdsf@gmail.com", "ncjydjsdtsuasjsya458@gmail.com"],
};
const {name: name1, emails: [email1, email2, email3] } = person;
function getEmail (email1, email2, email3){
    console.log(email2)
};
getEmail(email1, email2, email3);


// завдання 4
const data = {
    users : [
        {name : "john", age : 25},
        {name : "Max", age : 17},
        {name : "bob", age : 30},
        {name : "nastya", age : 20},
        

    ]

};

function getAdultUsers(data){
    const {users} = data;

const adalt18 = users.filter(({ age }) => age > 18 );
return adalt18;

}

console.log(getAdultUsers(data))