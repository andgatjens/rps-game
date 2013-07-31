(function($) {
$(document).ready(function() {
	
	// Nav Manu / Change of images
  	$('ul.nav li').on('click', function(e) {
  		e.preventDefault();
  		$('li').removeClass('active');
  		$(this).addClass('active');
  		var choise = $(this).data("option");
  		$('.jumbotron').css({
  			'background':'url(' + 'images/' +  choise + '.png ) no-repeat top',
  		});
  	});
});
})(jQuery);