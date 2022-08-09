$(document).ready(function()
{
   
   $(window).on('load', function(){

        $('.preloader').addClass('complete');       

   });
   
   
   
    $(window).on('scroll', function(){
        // .on('scroll') is the event occurs when we scrolled
        var scroll = $(window).scrollTop();
        // $(window).scrollTop(); is used to get the scroll value
       if(scroll>=50){
        $(".sticky").addClass("stickyadd");
       }
       else{
        $(".sticky").removeClass("stickyadd");
       }
    })


    // to add typing effect

    var typed =new Typed(".element",{
        strings: ["Pooja Palaparthi","a Software Developer", "a Designer","a Trainer", "a Content Developer" ],
        smartBackspace:true,
        typeSpeed:500,
        backSpeed:500,
        loop:true,
        loopCount:Infinity,
        startDelay:1000
    });

    // to start progress bar animation when its visited for the first time

    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function() {
         var p=document.querySelectorAll(".progress-bar");
         p[0].setAttribute("style", "width:95%;transition:1s all");
         p[1].setAttribute("style", "width:90%;transition:1.3s all");
         p[2].setAttribute("style", "width:80%;transition:1.7s all");
         p[3].setAttribute("style", "width:80%;transition:2s all");
         p[4].setAttribute("style", "width:70%;transition:2.5s all");
         p[5].setAttribute("style", "width:30%;transition:2.7s all");
         p[6].setAttribute("style", "width:60%;transition:3s all");


        }, offset:'90%'
      });
      

// to create filter effect to the work section
      var filterizd = $('.filter-container').filterizr({
            animationDuration :.5,

      });

      // owl carousel


      $(".owl-carousel").owlCarousel({

            loop: true,
            autoplay: true,
            autoplayTimeout:4000,
            items: 1

      });

     


});