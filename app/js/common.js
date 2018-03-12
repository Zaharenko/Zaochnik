$(function(){
  $("#promo-code").mask("999-999-999");
});

new WOW().init();

 $(function(){

  $('#slide-submenu').on('click',function() {             
        $(this).closest('.content__list-group').hide('slide',function(){
          $('.mini-submenu').show();
        });
        
      });

  $('.mini-submenu').on('click',function(){   
        $(this).next('.content__list-group').toggle('slide');
        $('.mini-submenu').hide();
  })
})

$(window).resize(function() {
  if ( $(window).width() < 414 ) {
    $('#slide-submenu').on('click',function() {             
          $('.content-info__text').show(); 
        });
    $('.mini-submenu').on('click',function(){   
        $('.content-info__text').hide();
  })    
      };
  
}); 

 $( document ).ready(function() {
    $(".close-form").click( function(){
        $(".new-order").css("display", "none")
    });

});

$( document ).ready(function() {
    $(".header__new-order").click( function(){
        $(".new-order").css("display", "block")
    });

}); 

$( document ).ready(function() {
    $('.datepicker').datepicker()

}); 




 $( document ).ready(function() {
    $(".menu-row-1").mouseover( function(){
    	$(".menu-row-1__bg-home").css("background", "url('../img/sprite/css_sprites_color.png') -10px -10px")
    });
    $(".menu-row-1").mouseout( function(){
    	$(".menu-row-1__bg-home").css("background", "url('../img/sprite/css_sprites.png') -10px -10px")
    });

    $(".menu-row-2").mouseover( function(){
    	$(".menu-row-2__bg-blog").css("background", "url('../img/sprite/css_sprites_color.png') -10px -92px")
    });
    $(".menu-row-2").mouseout( function(){
    	$(".menu-row-2__bg-blog").css("background", "url('../img/sprite/css_sprites.png') -10px -92px")
    });

    $(".menu-row-3").mouseover( function(){
    	$(".menu-row-3__bg-cart").css("background", "url('../img/sprite/css_sprites_color.png') -86px -92px")
    });
    $(".menu-row-3").mouseout( function(){
    	$(".menu-row-3__bg-cart").css("background", "url('../img/sprite/css_sprites.png') -86px -92px")
    });

    $(".menu-row-4").mouseover( function(){
    	$(".menu-row-4__bg-reviews").css("background", "url('../img/sprite/css_sprites_color.png') -48px -53px")
    });
    $(".menu-row-4").mouseout( function(){
    	$(".menu-row-4__bg-reviews").css("background", "url('../img/sprite/css_sprites.png') -48px -53px")
    });

    $(".menu-row-5").mouseover( function(){
    	$(".menu-row-5__bg-settings").css("background", "url('../img/sprite/css_sprites_color.png') -10px -53px")
    });
    $(".menu-row-5").mouseout( function(){
    	$(".menu-row-5__bg-settings").css("background", "url('../img/sprite/css_sprites.png') -10px -53px")
    });

    $(".menu-row-6").mouseover( function(){
    	$(".menu-row-6__bg-friends").css("background", "url('../img/sprite/css_sprites_color.png') -54px -10px")
    });
    $(".menu-row-6").mouseout( function(){
    	$(".menu-row-6__bg-friends").css("background", "url('../img/sprite/css_sprites.png') -54px -10px")
    });

    $(".menu-row-7").mouseover( function(){
    	$(".menu-row-7__bg-cheat").css("background", "url('../img/sprite/css_sprites_color.png') -92px -10px")
    });
    $(".menu-row-7").mouseout( function(){
    	$(".menu-row-7__bg-cheat").css("background", "url('../img/sprite/css_sprites.png') -92px -10px")
    });

    $(".menu-row-8").mouseover( function(){
    	$(".menu-row-8__bg-exit").css("background", "url('../img/sprite/css_sprites_color.png') -48px -92px")
    });
    $(".menu-row-8").mouseout( function(){
    	$(".menu-row-8__bg-exit").css("background", "url('../img/sprite/css_sprites.png') -48px -92px")
    });
});

 
              

$( document ).ready(function() {
    $(".content__work_blog-1").mouseover( function(){
        $(".content__work_blog_bg-pencil").css("background", "url('../img/sprite/css_sprites-2-color.png') -10px -10px")
    });
    $(".content__work_blog-1").mouseout( function(){
        $(".content__work_blog_bg-pencil").css("background", "url('../img/sprite/css_sprites-2.png') -10px -10px")
    });

    $(".content__work_blog-2").mouseover( function(){
        $(".content__work_blog_bg-check").css("background", "url('../img/sprite/css_sprites-2-color.png') -61px -10px")
    });
    $(".content__work_blog-2").mouseout( function(){
        $(".content__work_blog_bg-check").css("background", "url('../img/sprite/css_sprites-2.png') -61px -10px")
    });

    $(".content__work_blog-3").mouseover( function(){
        $(".content__work_blog_bg-plus").css("background", "url('../img/sprite/css_sprites-2-color.png') -10px -60px")
    });
    $(".content__work_blog-3").mouseout( function(){
        $(".content__work_blog_bg-plus").css("background", "url('../img/sprite/css_sprites-2.png') -10px -60px")
    });


    $(".content__work_blog-4").mouseover( function(){
        $(".content__work_blog_bg-dowland").css("background", "url('../img/sprite/css_sprites-2-color.png') -60px -60px")
    });
    $(".content__work_blog-4").mouseout( function(){
        $(".content__work_blog_bg-dowland").css("background", "url('../img/sprite/css_sprites-2.png') -60px -60px")
    });

    
});  

$( document ).ready(function() {
    $(".form-gift").click( function(){
        $("#promo-code").css("display", "inline-block")
    });
    
});  

new Vue({
  el: '#app',
  data: {
    selected: 'стр',
    options: [
        { text: 'Вид работы', value: 'стр' },
        { text: 'Дипломная работа', value: '70' },
        { text: 'Курсовая работа', value: '35' },
        { text: 'Контрольная работа ', value: '15' },
        { text: 'Реферат', value: '20' },
        { text: 'Автореферат', value: 'стр' }
    ]
  }
})  


document.querySelector("html").classList.add('js');

var fileInput  = document.querySelector( ".input-file" ),  
    button     = document.querySelector( ".input-file-trigger" ),
    the_return = document.querySelector(".file-return");
      
button.addEventListener( "keydown", function( event ) {  
    if ( event.keyCode == 13 || event.keyCode == 32 ) {  
        fileInput.focus();  
    }  
});
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});  
fileInput.addEventListener( "change", function( event ) {  
    the_return.innerHTML = this.value;  
}); 


