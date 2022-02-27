$(function(){
     'use strict';
    
    // Preloader js
    $(window).on('load',function(){
       $(".preloader").delay(500).fadeOut(500); 
    });
    
    // Sticky menu
    $(window).on('scroll', function(){
        var scrolling = $(this).scrollTop();
        if(scrolling > 50){
            $(".navbar").addClass("nav-bg");
        }
        else{
            $(".navbar").removeClass("nav-bg");
        }
        if(scrolling > 100){
            back2top.fadeIn(500);
        }
        else{
            back2top.fadeOut(500);
        }
    });
    
     //Type js 
        $(".typer").typed({
            strings: ["frelancer Sajib", "Overfolio.", "Coder", "Designer", "Developer"],
            typeSpeed: 200,
            contentType: 'html',
            loop:true
          });
    
    // Closes responsive menu when a scroll link is clicked
	$('.nav-link').on('click', function () {
		$('.navbar-collapse').collapse('hide');
	});
    
    //Back to top button
    var back2top = $(".back-to-top");
    var html_body= $('html,body');
    back2top.on('click', function(){
        html_body.animate({scrollTop:0},1000);
    });
    
    // smooth scroll
    var html_body = $('html, body');
    $('a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top + 0
                }, 1500);
                return false;
            }
        }
    });
    
    // service slider
    $('.service-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrows:false,
      centerMode:true,
        speed:1500,
      centerPadding:false,
      autoplaySpeed: 2500,
        responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            centerMode:false,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
        ]
    });
	
	
   //background video
    jQuery(".player").YTPlayer();
	
	
    // counter js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
     // team slider
    $('.team-row').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      arrows:false,
      centerMode:true,
        speed:1500,
      centerPadding:false,
      autoplaySpeed: 2000,
        responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
			 {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
          }
        }
        ]
    });
    
    // portfolio js filter
    
    // init Isotope
    var $grid = $('.grid').isotope({
      itemSelector: '.element-item',
      layoutMode: 'fitRows'
    });
    // filter functions
    var filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function() {
        var number = $(this).find('.number').text();
        return parseInt( number, 10 ) > 50;
      },
      // show if name ends with -ium
      ium: function() {
        var name = $(this).find('.name').text();
        return name.match( /ium$/ );
      }
    };
    // bind filter button click
    $('.filters-button-group').on( 'click', 'button', function() {
      var filterValue = $( this ).attr('data-filter');
      // use filterFn if matches value
      filterValue = filterFns[ filterValue ] || filterValue;
      $grid.isotope({ filter: filterValue });
    });
    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
      var $buttonGroup = $( buttonGroup );
      $buttonGroup.on( 'click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      });
    });
    
     // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
	
    //testimonial js
        // vars
        var	testim = document.getElementById("testim"),
            testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
            testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
            testimLeftArrow = document.getElementById("left-arrow"),
            testimRightArrow = document.getElementById("right-arrow"),
            testimSpeed = 4500,
            currentSlide = 0,
            currentActive = 0,
            testimTimer,
                touchStartPos,
                touchEndPos,
                touchPosDiff,
                ignoreTouch = 30;
        ;

        $(window).on('load',function() {

            // Testim Script
            function playSlide(slide) {
                for (var k = 0; k < testimDots.length; k++) {
                    testimContent[k].classList.remove("active");
                    testimContent[k].classList.remove("inactive");
                    testimDots[k].classList.remove("active");
                }

                if (slide < 0) {
                    slide = currentSlide = testimContent.length-1;
                }

                if (slide > testimContent.length - 1) {
                    slide = currentSlide = 0;
                }

                if (currentActive != currentSlide) {
                    testimContent[currentActive].classList.add("inactive");            
                }
                testimContent[slide].classList.add("active");
                testimDots[slide].classList.add("active");

                currentActive = currentSlide;

                clearTimeout(testimTimer);
                testimTimer = setTimeout(function() {
                    playSlide(currentSlide += 1);
                }, testimSpeed)
            }

            testimLeftArrow.addEventListener("click", function() {
                playSlide(currentSlide -= 1);
            })

            testimRightArrow.addEventListener("click", function() {
                playSlide(currentSlide += 1);
            })    

            for (var l = 0; l < testimDots.length; l++) {
                testimDots[l].addEventListener("click", function() {
                    playSlide(currentSlide = testimDots.indexOf(this));
                })
            }

            playSlide(currentSlide);

            // keyboard shortcuts
            document.addEventListener("keyup", function(e) {
                switch (e.keyCode) {
                    case 37:
                        testimLeftArrow.click();
                        break;

                    case 39:
                        testimRightArrow.click();
                        break;

                    case 39:
                        testimRightArrow.click();
                        break;

                    default:
                        break;
                }
            })

                testim.addEventListener("touchstart", function(e) {
                        touchStartPos = e.changedTouches[0].clientX;
                })

                testim.addEventListener("touchend", function(e) {
                        touchEndPos = e.changedTouches[0].clientX;

                        touchPosDiff = touchStartPos - touchEndPos;

                        console.log(touchPosDiff);
                        console.log(touchStartPos);	
                        console.log(touchEndPos);	


                        if (touchPosDiff > 0 + ignoreTouch) {
                                testimLeftArrow.click();
                        } else if (touchPosDiff < 0 - ignoreTouch) {
                                testimRightArrow.click();
                        } else {
                            return;
                        }

                })
        });
        // Veonobox js
        $('.venobox').venobox(); 
        
        // Blog slider 
        $('.blog-slider').slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          arrows:false,
          centerMode:true,
            speed:1500,
          centerPadding:false,
          autoplaySpeed: 2000,
             responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
        });
        // particles js
        var canvasDiv = document.getElementById('particle-canvas');
        var options = {
          particleColor: '#e37575',
          interactive: true,
          speed: 'medium',
          density: 'high'
        };
        var particleCanvas = new ParticleNetwork(canvasDiv, options);
        
    
});

    