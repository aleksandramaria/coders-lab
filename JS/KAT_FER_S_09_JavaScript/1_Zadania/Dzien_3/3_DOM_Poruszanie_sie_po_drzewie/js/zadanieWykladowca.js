//task 1

document.addEventListener('DOMContentLoaded', function(){
    console.log('DOM!');

    var task1 = document.querySelector('.first').firstElementChild.children[2];
    console.log(task1);

    var task2 = document.querySelector('#second').parentElement.children[3];
    console.log(task2);

    var task3 = document.querySelector('[data-ex="third"]')
        .parentElement.parentElement.lastElementChild.firstElementChild;

    var task3Children = task3.children;
    console.log(task3Children[ Math.floor(task3Children.length / 2) ]);


    var task4 = document.querySelector('.forth')
        .parentElement.querySelector('article').querySelectorAll('p')[1];
    console.log(task4);
});