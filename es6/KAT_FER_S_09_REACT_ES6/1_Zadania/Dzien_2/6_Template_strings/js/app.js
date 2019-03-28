//zad z kuba

const person = {
    name: "Vlad",
    lastName: "Drăculea",
    yearOfBirth: 1431,
    profession: "Lord of Wallachia"
};

whoAreYou(person);

function whoAreYou(obj) {
    const age = (new Date()).getFullYear() - obj.yearOfBirth;

    console.log(`My name is ${obj.name} ${obj.lastName}.
I am ${age} years old.
My proffesion is ${obj.profession}`);
}

/*
My name is Vlad Drăculea.
I am 586 years old.
My proffesion is Lord of Wallachia.
 */

// zad 1

const x = 2;
const y = 3;

console.log(`Suma dwóch liczb ${x} i ${y} to: ${x + y}`);

// zad 2
const myName = 'ola';
console.log(`Moje imię i nazwisko to: ${myName} ksiazek`);

// zad 3

// $(function () {
//     function insertCite() {
//         return `"Myślę, że jest wiele piękna
// w posiadaniu problemów.
// To jeden ze sposobów w jaki się uczymy"
// Herbie Hancock`
//     };
// });
//
//
// const quote = $('.cite');
//
// quote.text(insertCite);

// zad 4
const button = {
    text: "Send message",
    id: "sendMsg",
    width: 100,
    padding: 20
};

console.log(`To jest button.
    Jego szerokość to ${button.width + button.padding * 2} px.
    Napis, który na nim widnieje to ${button.text}.`);

const btn = $('button');
btn.css('width', '100px');
btn.css('padding', '20');
btn.text('Send message');
btn.attr('id', 'sendMsg');

console.log(btn.attr('id'));

btn.on('click', e => {
    e.preventDefault();
    alert('be careful!');
})

