// Cat Carasoul

function handleThumbnailClicks() {
$('.thumbnail').click(even => {

const thumbSrc = $(event.currentTarget).find('img').attr('src');
const thumbAlt = $(event.currentTarget).find('img').attr('alt');

$('.hero img').attr('src', thumbSrc);
$('.hero img').attr('alt', thumbAlt);

})}
$(handleThumbnailClicks);

// FizzBuzz

$('#number-chooser').submit(function (event) {
    event.preventDefault();
    $('.js-results').empty();
    const num = $('#number-choice').val();
    let classname = '';
    for (let i = 1; i <= num; i++) {
        if (i % 15 === 0) {
            classname = 'fizzbuzz';
        }
        else if (i % 3 === 0) {
            classname = 'fizz';
        }
        else if (i % 5 === 0) {
            classname = 'buzz';
        } else {
            classname = '';
        }
        const element = $(`<div class="fizz-buzz-item ${classname}"><span>${classname ? classname : i}</span></div>`)
        $('.js-results').append(element);
    }
});
