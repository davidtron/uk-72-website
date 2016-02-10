var categories;

categories = [
  {
    href: '#tab-essentials-content',
    contentSelector: '.tab-essentials-content',
    anchorSelector: '[href="#tab-essentials-content"]'
  }, {
    href: '#tab-useful-content',
    contentSelector: '.tab-useful-content',
    anchorSelector: '[href="#tab-useful-content"]'
  }, {
    href: '#tab-personal-content',
    contentSelector: '.tab-personal-content',
    anchorSelector: '[href="#tab-personal-content"]'
  }
];

$(document).ready(function() {
  $('a.pdf-languages-trigger').click(function() {
    $(this).toggleClass('active');
    return $('.download-languages').toggleClass('active');
  });
  $('.tab-useful-content').hide();
  return $('.tab-personal-content').hide();
});

showActive(categories);

window.onhashchange = function() {
  return showActive(categories);
};