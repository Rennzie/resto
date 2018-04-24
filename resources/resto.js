var $menu = '<div class="menu">'+
                '<div class="close" onClick="window.location.reload()">'+
                    '<i class="far fa-window-close"></i>'+
                '</div>'+
                '<div class="menu-item entres">'+
                    '<h2>Entres</h2>'+
                    '<h3>Its what we serve first!</h3>'+
                '</div>'+
                '<div class="menu-item mains">'+
                    '<h2>Mains</h2>'+
                    '<h3>Usually filling and comes in second place</h3>'+
                '</div>'+
                '<div class="menu-item desserts">'+
                    '<h2>Desserts</h2>'+
                    '<h3>Something sweet to keep that smile on your face at the end</h3>'+
                '</div>'+
            '</div>'


$(document).ready(function() {
	//displays the menu when clicked
	$('.see-menu').click(function() {
		$('.header').replaceWith($menu)
	});

	//displays the reservation overlay form
	$('.make-request').click(function() {
		$('.overlay').css('display', 'flex')
	})

	//closes the reservation overlay form
	$('.reservation-close').click(function() {
		$('.overlay').css('display', 'none')
	})

	//idicate to the customer that the form has submitted and tells them their eMail
	//and cell phone number
	$('.reservation').on('submit', function(e) {
		let eMail = $('input.email').val();
		let phone = $('input.phone').val();

		alert('Thank you for your interest. We will contact you at ' +
        phone + ' or e-mail you at ' + eMail + ' shortly');
	});
});
