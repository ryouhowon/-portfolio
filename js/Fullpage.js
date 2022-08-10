$(document).ready(function(){

    // mousewheel

    const elm = ".case"; 

    $(elm).each(function(index){
        $(this).on("mousewheel DOMMouseScroll", function(e){
            // e.preventDefault();
            // console.log(event.wheelDelta);
            // console.log(event.detail);

            let delta = 0;

            if(event.wheelDelta){
                delta = event.wheelDelta / 120;
                if(window.opera){
                    delta = -delta;
                }
            }else if(event.detail){
                delta = -event.detail/3;
            }
            // console.log(delta); // (마우스 휠) 내렸을 떄 -1 / 올렸을 때 
            
            let moveTo = $(window).scrollTop();
            let elmIndex = $(elm).eq(index); 

            if(delta < 0){
                try{
                    if($(elmIndex).next() != undefined){
                        moveTo = $(elmIndex).next().offset().top;

                        $(elm).removeClass("active");
                        $(elmIndex).next().addClass("active");

                        let $cur_index = $(".case.active").index();
                        $("header li").removeClass("active");
                        $("header li").eq($cur_index).addClass("active");
                    }
                }catch{

                }
            }else if(delta > 0){
                try{
                    if($(elmIndex).prev() != undefined){
                        moveTo = $(elmIndex).prev().offset().top;

                        $(elm).removeClass("active");
                        $(elmIndex).prev().addClass("active");

                        let $cur_index = $(".case.active").index();
                        $("header li").removeClass("active");
                        $("header li").eq($cur_index).addClass("active");
                    }
                }catch{

                }
            }
            $("html, body").animate({"scrollTop": moveTo + "px"});


        });
    });

   
    $("header li").click(function(){

        let $index = $(this).index();

        $("header li").removeClass("active");
        $(this).addClass("active");

        $(".case").removeClass("active");
        $(".case").eq($index).addClass("active");

        $("body, html").stop().animate({scrollTop : $(".case").eq($index).offset().top}, 1000);
        return false;
    });
});