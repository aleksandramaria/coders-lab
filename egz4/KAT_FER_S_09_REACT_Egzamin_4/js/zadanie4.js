$(function () {

    const MAX = 180;
    let userResults = [102, 120, 156, 23, 178];

    const score = $('.score');
    const info = $('.info');

    console.log(score);
    console.log(info);

    for(let i=0; i <= userResults.length; i++) {
        score[i].append(userResults[i]);
        // if(userResults[i] < 120) {
        //     info[i].text('Niezaliczone');
        // } else {
        //     info[i].text('Zaliczone');
        // }
    }
});



    // const results = $('.results');
    //
    // results.each((index, element) => {
    //
    //     const score = $(element).find('.score');
    //     const info = $(element).find('.info');
    //     const points = userResults[index];
    //
    //     score.text(points);
    //
    //     if (points < 120) {
    //         info.text('Niezaliczone');
    //     } else {
    //         info.text('Zaliczone');
    //     }
    // });
// });


