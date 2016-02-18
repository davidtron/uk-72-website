
$(document).ready ->
  $('a.pdf-languages-trigger').click ->
    $(this).toggleClass 'active'
    $('.download-languages').toggleClass 'active'
