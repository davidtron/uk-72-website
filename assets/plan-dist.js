$(document).ready(function() {
  return $('a.pdf-languages-trigger').click(function() {
    $(this).toggleClass('active');
    return $('.download-languages').toggleClass('active');
  });
});