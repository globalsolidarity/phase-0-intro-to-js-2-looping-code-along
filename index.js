// Code your solutions in this file
function writeCards(name, event) {
let people = []
for (let i = 0; i < name.length; i++) {
     people.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
}
return people
}

function countDown(i) {
while (i >= 0) {
    console.log(i);
    i -=1;
  }
}
