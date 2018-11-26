$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// build a scene
	var ourScene = new ScrollMagic.Scene({
        triggerElement: '.home .content',
		triggerHook: 0.6
	})
	.setClassToggle('#header', 'fixed') // add class to project01
    .addTo(controller);

    console.log($('.obj-transition'))
    
    $('.obj-transition').each(function(obj) {
        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.8
        })
        .setClassToggle(this, 'show')
        .addTo(controller);
    });

    $('.slider').slick({
        arrow: true,
        slidesToShow: 3,
        centerMode: true,
        infinite: false
    });

});