$(document).ready(function(){
    // 스크롤 내렸을때 헤더 바뀜
    
    // var w_scroll = $('.html, body').scrollTop();
    // if( w_scroll > 0 ){
    //     $('header').addClass('.dropDown');
    // } else {
    //     $('header').removeClass('dropDown');
    // };

    var w_scroll = $('.html, body').scrollTop();
    
    $(window).scroll(function(){
        if( $('html, body').scrollTop() > 0 ){
            $('header').addClass('dropDown');
        } else {
            $('header').removeClass('dropDown');
        }
    });

    // nav에 mouseover 했을때 dept_02 메뉴 열림
    $(function(){
        $('.nav > li').mouseenter(function(){
            $('header').addClass('on');
            $('.bg_blind').fadeIn(200);
            $(this).children('.dept_02').css({"display":"block"},function(){
            });
            $(this).children('.dept_02_bg').fadeIn(200);
            var dept_height = $(this).children('.dept_02').outerHeight();
            
            $('.dept_02_bg').height(dept_height);
            $('.dept_02_bg').addClass('on');
        });

        $('.nav > li').mouseleave(function(){
            $(this).removeClass('on');
            $(this).children('.dept_02').hide();
            $('.dept_02_bg').removeClass('on');
        })

        $('header').mouseleave(function(){
            $('header').removeClass('on');
            $('.bg_blind').fadeOut(200);
        });
    });

    // 메인 슬라이드
    var mySwiper = new Swiper ('.mainVisual', {
        speed:500,
        loop:true,
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }
    });

    $(document).ready(function(){
        //section 영역별 animation 효과
        $(window).scroll(function(){
            var win_top = $(window).scrollTop();
            
            var board_top = $('.board').offset().top - 800;
            if( win_top >= board_top ){
                $('.board .area_tab, .board .promotion, .board .news').show();
            }else{
                $('.board .area_tab, .board .promotion, .board .news').hide();
            };
            
            var busi_top = $('.business').offset().top - 600;
            if( win_top >= busi_top ){
                $('.business .txt_eff, .business .btn_eff').show();
            }else{
                $('.business .txt_eff, .business .btn_eff').hide();
            };

            var serv_top = $('.service').offset().top - 600;
            if( win_top >= serv_top ){
                $('.bx-left, .service .li_top, .service .li_bot').show();
            }else{
                $('.bx-left, .service .li_top, .service .li_bot').hide();
            };
        });
    })

    // area_tab(KTCA Education News) 탭메뉴 
    $('.area_tab .tab_btn').on('click',function(e){
        e.preventDefault();
        $('.area_tab .tab_btn').removeClass('on');
        $(this).addClass('on');
        
        var tabIdx = $('.area_tab .tab_btn').index(this);

        $('.area_tab .tab_panel').hide();
        $('.area_tab .tab_panel').eq(tabIdx).show();
    });

    // 공지사항/소식 탭메뉴
    $('.news .tab_btn').on('click',function(e){
        e.preventDefault();
        $('.news .tab_btn').removeClass('on');
        $(this).addClass('on');
        
        var tabIdx = $('.news .tab_btn').index(this);

        $('.news .tab_panel').hide();
        $('.news .tab_panel').eq(tabIdx).show();
    });

    // aside메뉴 해당 section 위치로 스크롤 이동
    $('.scrollMove').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:
            $(this.hash).offset().top - 112 }, 500);
    });

    // aside메뉴 top버튼 누르면 화면 최상단으로 이동
    $('.top').click(function(){
        $('html,body').animate({scrollTop : 0},400);
        return false;
    });

    // footer 슬라이딩 배너
    var mySwiper2 = new Swiper ('.flowBnn', {
        speed: 500,
        loop: true,
        loopFillGroupWithBlank: false,
        autoplay: {
            delay: 2000
        },
        slidesPerView:5,
        // slidesPerGroup: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    });
    
    // 슬라이딩 배너에 마우스 올리면 멈춤/재생
    $(".flowBnn").mouseenter(function() {
        mySwiper2.autoplay.stop();
    });
    $(".flowBnn").mouseleave(function() {
        mySwiper2.autoplay.start();
    });
})

// 서브페이지
$(document).ready(function(){
    // 하위 ul 있는 li항목에만 화살표 붙기
    $('.sm_inner ul').parent('.sm_inner > li').prepend('<span class="ico_ar"></span>');
    $('.sm_inner ul').siblings('.sm_inner > li > a').css('width','85%');

});

    //메뉴 아코디언 효과
    $(document).ready(function(){
        $('.sm_inner > li').click(function(){
            var submenu = $(this).children('ul');
            submenu.slideUp();
            if( submenu.is(':visible') ){
                $(this).removeClass('on');
                
            }else{
                $(this).addClass('on');
                submenu.slideDown();
            }
        });
        $('.sm_inner > li.on ul').css('display','block');
    });