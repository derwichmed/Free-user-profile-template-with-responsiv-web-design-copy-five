$(function (){
    $('.user_profile .nav_bar .nav_bar_item').click(function (){
         $('.user_profile_item:visible').hide();
         $('.user_profile_item').eq($(this).attr('item-data')).show();
    });
    
    isNavBarHiden = false;
    $('#mobile_navs .menu_icon img').click(function (){
       if(isNavBarHiden){
            $('.user_profile .nav_bar').show();
            isNavBarHiden = false;
       } 
        else{
            $('.user_profile .nav_bar').hide();
            isNavBarHiden = true;
        }
    });
});