// let people = [
//     {
//         person: "Kim Yoo Suk",
//         profession: "tyczkarz"
//     },
//     {
//         person: "Sue Yoo",
//         profession: "prawnik"
//     },
//     {
//         person: "Dr. Alden Cockburn",
//         profession: "urolog"
//     },
//     {
//         person: "Rusty Kuntz",
//         profession: "trener"
//     }
// ];
//
// // const setFunnyName = (...names) => {
// //     // names.map( name => people.push( {person: name} ) );
// //     // console.log(people);
// //
// //     for(let name of names) {
// //         people.push(...names);
// //     }
// // }
//
// const setFunnyName = (...names) => {
//     for (let name of names) {
//         people.push(name);
//     }
// }
//
// setFunnyName('zbigniew', 'adfafa', 'fxx');


let people = [
    {
        person: "Kim Yoo Suk",
        profession: "tyczkarz"
    },
    {
        person: "Sue Yoo",
        profession: "prawnik"
    },
    {
        person: "Dr. Alden Cockburn",
        profession: "urolog"
    },
    {
        person: "Rusty Kuntz",
        profession: "trener"
    }
];

const setFunnyName = (...names) => {
    for (let name of names) {
        people.push(name);
    }

    // Wersja alternatywna
    // people.push(...names);
};

setFunnyName('Jedno', 'Drugie', 'I trzecie');
console.log(people);