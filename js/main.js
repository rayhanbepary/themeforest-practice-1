$(document).ready(function($) {
    "use strict";
    
    //magnific popup
    $('#youtube-video').magnificPopup({
        type:'iframe',
        iframe: {          
            patterns: {
                youtube: {
                    index: 'youtube.com/',            
                    id: 'v=',             
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src'
          }
    });
    //Skill Bar
    $('.skillbar').skillBars({});

    //counter up
    $('.counter-number').each(function(){
        $(this).prop('Counter',0).animate({
        counter: $(this).text(),
        },{
            duration: 3000,
            easing: 'swing',
            step: function(now){
                $(this).text(Math.ceil(now));
            }
        });
    });

    //portfolio mixitup
    var mixer = mixitup('.portfolio-content',{
        selectors: {
            control: '[data-mixitup-control]'
        }
    });
    
    //lightbox
    $('.image-link').magnificPopup({type:'image'});

    //owl carousel team
    $('.team-carousel').owlCarousel({
        loop:true,
        margin:25,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    //owl carousel testimonial data
    $('.testemonial-carousel').owlCarousel({
        loop:true,
        margin:25,
        nav:false,
        dots:false,
        items:1
    })

}(jQuery));