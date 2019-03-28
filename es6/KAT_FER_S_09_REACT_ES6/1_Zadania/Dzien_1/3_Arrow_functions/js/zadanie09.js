const span = $('span');
const ul = $('ul');

ul.hide();
span.on('mouseover', (e) => {
    $(e.target).next().fadeIn();
})

span.on('mouseout', (e) => {
    $(e.target).next().fadeOut();
})

// span.on('mouseover', e => {
//     $(e.target).next().slideToggle();
// });