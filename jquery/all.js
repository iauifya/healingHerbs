$(document).ready(function(){
    $(window).scroll(function(){
            //抓取滾動距離
            scrolledPx = $(this).scrollTop();
            console.log(scrolledPx);//存取距離上方的值
            if(scrolledPx >= 200){//條件判斷
                $('.navbar').addClass('active');//加上active
            } else {
                $('.navbar').removeClass('active');//移除active
            }
            if(scrolledPx >= 1000){//條件判斷
                $('.box').addClass('active');//加上active
            } else {
                $('.box').removeClass('active');//移除active
            }
        })
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            navText: [ ],
            items: 1,
            autoplay:true,
            autoplayTimeout:2500,
            autoplayHoverPause:false
        });
    
    //彈跳視窗寫法
        // $(".menu-toggle").on("click",function(){
        //     $(this)toggleClass('active');
        //     $(".navbar .nav")toggleClass('active');
        // })
        // $(".navbar .nav-link").on("click",function(){
        //     $(".menu-toggle")toggleClass('removeClass');
        //     $(".navbar .nav")toggleClass('removeClass');
        // })
        $('.menu-toggle').on('click',function(){
            $(this).toggleClass('active');
            $('.navbar .nav').toggleClass('active');
        })
        $('.nav .nav-link').on('click',function(){
            $('.menu-toggle').removeClass('active');
            $('.navbar .nav').removeClass('active');
        })

        //scrollreveal
        ScrollReveal().reveal('.js-fadeInUPP', { 
            origin: 'top',
            distance: '50px',
            duration: 800, 
            delay: 300,
            // reset: true
        });
        ScrollReveal().reveal('.js-main_card', { 
            origin: 'top',
            distance: '50px',
            duration: 800, 
            delay: 300,
            interval: 500,
            reset: true
        });
        ScrollReveal().reveal('.js-fadeInLeft', { 
            origin: 'left',
            distance: '50px',
            duration: 800, 
            delay: 300,
            reset: true
        });
        ScrollReveal().reveal('.js-fadeInRight', { 
            origin: 'right',
            distance: '50px',
            duration: 800, 
            delay: 300,
            reset: true
        });
        ScrollReveal().reveal('.js-fadeInRightone', { 
            origin: 'right',
            distance: '50px',
            duration: 700,
            delay: 500,
            reset: true
        });

        var rellax = new Rellax('.rellax', {
            center: true
        });
});