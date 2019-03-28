document.addEventListener('DOMContentLoaded', function () {
    const next = document.querySelector('#nextPicture');


    const prev = document.querySelector('#prevPicture');
    const lis = document.querySelectorAll('.slider li');
    let counter = 0;

    lis[counter].classList.add('visible');

    // var button = document.querySelector("button");
    //
    // var clickCount = 0, randomWords = ['Some', 'Random', 'Words'];
    //
    // function clickCounter(event) {
    //     clickCount += 1;
    //     console.log('Click number', clickCount);
    // }
    //
    //     function randomWord(event) {
    //     var myWord = randomWords[Math.floor(Math.random() * randomWords.length)]; console.log(myWord);
    // }
    //
    // function nextPic(e) = {
    //
    // }

    // button.addEventListener('click', clickCounter);
    // button.addEventListener('click', randomWord);
    //
    // next.addEventListener('click', nextPic);


    next.addEventListener('click', function() {

        lis[counter].classList.remove('visible');
        counter ++;
        if(counter > lis.length-1) {
            counter = 0;
        }
        lis[counter].classList.add('visible');
    });

    prev.addEventListener('click', function() {

        lis[counter].classList.remove('visible');
        counter --;
        if(counter < 0) {
            counter = lis.length-1;
        }
        lis[counter].classList.add('visible');

    });

    document.addEventListener('keydown', function(e) {
        if(e.keyCode === 39) {
            lis[counter].classList.remove('visible');
            counter ++;
            if(counter > lis.length-1) {
                counter = 0;
            }
            lis[counter].classList.add('visible');
        }
        if(e.keyCode === 37) {
            lis[counter].classList.remove('visible');
            counter --;
            if(counter < 0) {
                counter = lis.length-1;
            }
            lis[counter].classList.add('visible');
        }
    });

    const project1 = $('#landing-page-img');
    console.log(project1);

    project1.on('mouseover', function () {
        $(this).css('opacity', '0.5');
    })

    project1.on('mouseleave', function () {
        $(this).css('opacity', '1');
    })

    const project2 = $('#puzzle-game-img');
    console.log(project1);

    project2.on('mouseover', function () {
        $(this).css('opacity', '0.5');
    })

    project2.on('mouseleave', function () {
        $(this).css('opacity', '1');
    })
});