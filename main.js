$(document).ready(() =>{
  $('.projects').on('click', () => {
    $('.contact').slideToggle(700);
  });

  setTimeout(() => {
    $('.nav-item').fadeToggle(1000);
  }, 500);

  setTimeout(() => {
    $('.carousel').slideToggle(1000);
  }, 1000);

  $('#why').on('mouseover', event => {
    $(event.currentTarget).toggleClass('fun');
  }).on('mouseleave', event => {
    $(event.currentTarget).toggleClass('fun');})

  /* $('.notification').on('click', event => {
    $(event.currentTarget).toggleClass('active');
  })  */
});