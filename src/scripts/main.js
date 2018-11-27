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

    $('.obj-transition').each(function(obj) {
        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.7
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

    $('.tab-header').each(function(indice, obj) {
        $(obj).click(function() {
            $(this).parent().toggleClass('show');
        })
    })

    $('.application-slide').each(function(indice, obj) {
        $(obj).slick({
            arrows: true
        });
    })

    $('#froala-editor').froalaEditor({
        toolbarInline: true,
        charCounterCount: false,
        placeholderText: 'Digite o texto',
        toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'fontSize', 'color', '-', 'paragraphFormat', 'align']
    });
    
    

});