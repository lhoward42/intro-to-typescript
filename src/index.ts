
//count is of "type" number
let count = 5
count = 10
// count = "Laurice"

//Const's type is a literal
const fname = "Laurice"

//this makes a var of type any
// let testing;

let testing: number;
testing = 5


function add(x: number, y: number): number {
    let result = x + y
    return result
}

console.log(add(5, testing));

type Student = {
    fname: string
    lname: string
    grade: number
}

let student: Student = {
    fname: "Richie",
    lname: "Rich",
    grade: 12
}

function toString(student: Student){
    return JSON.stringify(student)
}

const toStringArrow = (student: Student): string => {
    return JSON.stringify(student)
}

console.log(toString(student));
console.log(add(5, testing));

//Any & Void

//Any means it can be any type in the language
//Void means it can't be any type

type Status = "success" | "failure"
type ServerResponse  = Student | Error
//Tuple
function sendMessage(): [status: Status, response: ServerResponse]
{
return ["success", {
    fname: "Laurice",
    lname: "Howard", 
    grade: 12
}]
}

const [statusResult, data] = sendMessage()
if (statusResult == "success")
console.log(data.fname);
