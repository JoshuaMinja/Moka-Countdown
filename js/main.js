(function($) {

	"use strict";

	$(window).load(function() {
      // Will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function() {

        // Will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      	}); 
  	})

  	$(".fluid-video-wrapper").fitVids();


	  $('.home-particles').particleground({
		dotColor: '#fff',
		lineColor: '#555555',
		particleRadius: 10,
		curveLines: true,
		density: 10000,
		proximity: 110
	 });
	
	$(".tab-content").hide();
	$(".tab-content").first().show();

	$("ul.tabs li").click(function () {
	   $("ul.tabs li").removeClass("active");
	   $(this).addClass("active");
	   $(".tab-content").hide();
	   var activeTab = $(this).attr("data-id");
	   $("#" + activeTab).fadeIn(700);
	});


  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   		var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      	}, 800, 'swing', function () {
      		window.location.hash = target;
      	});

  	});


	$('input, textarea, select').placeholder()  



	var mailChimpURL = 'http://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e65110b38d'

	$('#mc-form').ajaxChimp({

		language: 'es',
	   url: mailChimpURL

	});


	$.ajaxChimp.translations.es = {
	  'submit': 'Submitting...',
	  0: '<i class="fa fa-check"></i> We have sent you a confirmation email',
	  1: '<i class="fa fa-warning"></i> You must enter a valid e-mail address.',
	  2: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  3: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  4: '<i class="fa fa-warning"></i> E-mail address is not valid.',
	  5: '<i class="fa fa-warning"></i> E-mail address is not valid.'
	}




	/* Local validation */
	$('#contactForm').validate({

		/* Submit via ajax */
		submitHandler: function(form) {

			var sLoader = $('#submit-loader');

			$.ajax({      	

		      type: "POST",
		      url: "inc/sendEmail.php",
		      data: $(form).serialize(),
		      beforeSend: function() { 

		      	sLoader.fadeIn(); 

		      },
		      success: function(msg) {

	            // Message was sent
	            if (msg == 'OK') {
	            	sLoader.fadeOut(); 
	               $('#message-warning').hide();
	               $('#contactForm').fadeOut();
	               $('#message-success').fadeIn();   
	            }
	            // There was an error
	            else {
	            	sLoader.fadeOut(); 
	               $('#message-warning').html(msg);
		            $('#message-warning').fadeIn();
	            }

		      },
		      error: function() {

		      	sLoader.fadeOut(); 
		      	$('#message-warning').html("Something went wrong. Please try again.");
		         $('#message-warning').fadeIn();

		      }

	      });     		
  		}

	});


	/* Final Countdown Settings */
	var finalDate = '2021/01/01';

	$('div#counter').countdown(finalDate)
   	.on('update.countdown', function(event) {

   		$(this).html(event.strftime(
			   '<div class=\"half\">' +
   					'<span>%D <sup>days</sup></span>' + 
   					'<span>%H <sup>hours</sup></span>' + 
   				'</div>' +
   				'<div class=\"half\">' +
   					'<span>%M <sup>mins</sup></span>' +
   					'<span>%S <sup>secs</sup></span>' +
				   '</div>'
		));
   });     
 

})(jQuery);