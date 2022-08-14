$(document).ready(function(){
    // 스크롤 내렸을때 헤더 바뀜
    var w_scroll = $('.html, body').scrollTop();
    
    $(window).scroll(function(){
        if( $('html, body').scrollTop() > 0 ){
            $('header').addClass('dropDown');
        } else {
            $('header').removeClass('dropDown');
        }
    });

    // 햄버거 버튼 클릭하면 전체메뉴 열림
    $('.btn_sub_nav').click(function(){
        $('.bg_blind').addClass('on');
        $('.nav_wrap').addClass('open');
        $('html').css('overflow','hidden');
    });
    $('.btn_cls').click(function(){
        $('.bg_blind').removeClass('on');
        $('.nav_wrap').removeClass('open');
        $('html').css('overflow','visible');
    });

    // 전체메뉴 안쪽 2, 3차 메뉴 열기
    $('.nav_inner > li:first-child').addClass('on');
    $('.nav_inner > li > a').click(function(e){
        e.preventDefault();
        $('.dept_02').hide();
        $('.nav_inner > li').removeClass('on');
        $(this).siblings('.dept_02').show();
        $(this).parent('li').addClass('on');
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

    // footer 슬라이딩 배너
    var mySwiper2 = new Swiper ('.flowBnn', {
        speed: 500,
        loop: true,
        loopFillGroupWithBlank: false,
        autoplay: {
            delay: 2000
        },
        slidesPerView:2,
        // slidesPerGroup: 5,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
    });
});

$(document).ready(function(){
    //section 영역별 animation 효과
    $(window).scroll(function(){
        var win_top = $(window).scrollTop();
        
        var board_top = $('.board').offset().top - 700;
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
            $('.bx-left, .bx-right, .bx-bot').show();
        }else{
            $('.bx-left, .bx-right, .bx-bot').hide();
        };
    });
})

// 서브페이지
$(document).ready(function(){
    // 페이지 헤더 밑 sub_menu
    $('.sub_menu > ul > li > ul').parent('li').addClass('arw');
    $('.sub_menu .p_title1').click(function(){
        $('.sub_menu').toggleClass('open');
        $('.bg_sm').toggleClass('on');
    });
    $('.bg_sm').click(function(){
        $('.sub_menu').removeClass('open');
        $(this).removeClass('on');
    });

    $('.sub_menu > ul > li > a').click(function(e){
        e.preventDefault();
        $('.sub_menu > ul > li > ul').removeClass('on');
        $(this).siblings('ul').addClass('on');
    });
    
    // $('.sub_menu > ul > li > ul').siblings('a').click(function(e){
    //     e.preventDefault();
    // });

});
