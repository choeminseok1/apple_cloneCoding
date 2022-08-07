$(function(){
    $(document).on('click','.xi-bars',function(){
        $('.hide_open').css('display','none')
        $('.hide_close').css('display','block')
        $('.hide_cart').css('visibility','hidden')
        $('.hide_menu').css('background-color','#1d1d1f')
        $('.hide_menu_part').slideDown()
    });
    $(document).on('click','.xi-close',function(){
        $('.hide_close').css('display','none')
        $('.hide_open').css('display','block')
        $('.hide_cart').css('visibility','visible')
        $('.hide_menu').css('background-color','#000000cc')
        $('.hide_menu_part').slideUp()
    });
    
    

    $(document).on('click','.footer_hide_title',function(){
        // console.log($(this).siblings('.footer_hide_nav'))
        $(this).addClass('on')
        
        if($(this).hasClass('on')){
        $(this).removeClass('on')
        $(this).siblings('.footer_hide_nav').slideDown()
        $(this).css('color','#000')
        }else {
        $('.footer_hide_title').removeClass('on')
        $('.footer_hide_title').siblings('.footer_hide_nav').slideUp()
        $(this).addClass('on')
        $(this).children('.footer_hide_nav').slideDown()
        }
    })
});
