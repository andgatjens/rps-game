(function($) {
$(document).ready(function() {


  // Counter
  $('a.btn-success').on('click', function(e) {
    $(this).unbind('click');
    e.preventDefault();
    $(this).addClass('action');

    var count = 3;

    countdown = setInterval(function(){
      $('a.btn-success').html(count);
      if (count == 0) {
       $('a.btn-success').html("Go!");
       return;
      }
      count--;
    }, 1000);

  });

  // User name
  var user_name = $('#user_name').val();

});
})(jQuery);