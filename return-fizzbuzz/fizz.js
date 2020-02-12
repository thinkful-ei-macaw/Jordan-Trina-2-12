'use strict';
$('#number-chooser').submit(function(event){
  event.preventDefault();
  $('.js-results').empty();
  const num = $('#number-choice').val();
  let classname = '';
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      classname = 'fizzbuzz';
    }
    else if (i % 3 === 0){
      classname = 'fizz';
    }
    else if (i % 5 === 0){
      classname = 'buzz';
    } else {
      classname = '';
    }
    const element = $(`<div class="fizz-buzz-item ${classname}"><span>${classname ? classname : i}</span></div>`)
    $('.js-results').append(element);
  }
});
