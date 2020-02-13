'use strict';


function handleThumbnailClicks() {
  $('.thumbnail').click(even => {
  
  const thumbSrc = $(event.currentTarget).find('img').attr('src');
  const thumbAlt = $(event.currentTarget).find('img').attr('alt');
  
  $('.hero img').attr('src', thumbSrc);
  $('.hero img').attr('alt', thumbAlt);
  
  })}
  $(handleThumbnailClicks);


