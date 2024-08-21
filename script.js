const username = Simen
const password = 1234

let myUsername = prompt("Skriv username")
let myPassword = prompt("Skriv passord")

if (username == myUsername && password == myPassword) {
    console.log("Velkommen")
}

let t1 = Number (prompt("t1"))
let t2 = Number (prompt("t2"))
let t3 = Number (prompt("t3"))

console.log((t1+t2+t3)/3)


const minVerdi = 4;
let sum = 0;
for (let i = 0; i < minVerdi; i++) {
    console.log(i)
    sum = sum + i;
}
console.log(sum)


let f = 86;
let c = (f-32)*5/9
console.log(c)

let c= 30;
let f = (c*9/5)+32
console.log (f)

let poeng = 95;
if (poeng<=30) {
    console.log("1")
} else if (poeng<=45) {
    console.log("2") }
    else if (poeng<=60) {
        console.log("3")
    } else if (poeng<=75) {
        console.log("4")
    } else if (poeng <= 90) {
        console.log("5")
    } else if (poeng <= 100) {
        console.log("6")
    }

if (poeng < 100) { 
    console.log("Ugyldig antall poeng")
}

