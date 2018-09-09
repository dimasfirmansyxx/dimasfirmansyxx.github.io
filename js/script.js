$(document).ready(function(){
	$('#teksload').fadeIn();
	$("#loading").delay(2000).fadeOut();
	$('.page-scroll').on('click', function(event) {
	    if (this.hash !== "") {
	      event.preventDefault();
	      var hash = this.hash;
	      $('html').animate({
	        scrollTop: $(hash).offset().top - 45
	      }, 800);
	    }
	    event.preventDefault();
	  });
});