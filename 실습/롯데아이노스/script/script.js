$(document).ready(function(){
    function scrchk(){
        var scr = $(document).scrollTop();
        if(scr > 0){
            $("header").addClass("shadow");
            $("#pcHeader").addClass("shrink");
            $("#pcSpacer").height(85);
            $("#mobileSpacer").height(66);
        }else{
            $("header").removeClass("shadow");
            $("#pcHeader").removeClass("shrink");
            $("#pcSpacer").height(110);
            $("#mobileSpacer").height(66);
        }
    }
    scrchk();
    $(window).scroll(function(){ scrchk(); });
    $(window).resize(function(){ scrchk(); });
    
    $("#lang").click(function(){
        $(this).children("ul").stop().fadeToggle();
    });
    
    $("#main,#sub").mouseenter(function(){
        $("#sub").stop().fadeIn();
    });
    $("#main,#sub").mouseleave(function(){
        $("#sub").stop().fadeOut();
    });
    
    // #ham을 눌렀을때
        // #mmenu가 animate다. 어떻게? right값이 0이 되도록
        // #mback은 서서히 등장.
        // html,body쪽 스크롤바는 잠시 숨긴다.(overflow:hidden)
    $("#ham").click(function(){
        $("#mmenu").stop().animate({right:0});
        $("#mback").stop().fadeIn();
        $("html,body").css("overflow", "hidden");
    });
    // #mclose, #mback을 눌렀을때
        // #mmenu가 animate다. 어떻게? right값이 -290px이 되도록 
        // #mback은 서서히 사라짐.
        // html,body쪽 스크롤바는 다시 살린다.(overflow:auto)
    $("#mclose, #mback").click(function(){
        $("#mmenu").stop().animate({right:"-290px"});
        $("#mback").stop().fadeOut();
        $("html,body").css("overflow", "auto");
    });
    
    // .accbtn을 눌렀을때
        // 해야할 일을 못하게 막는다.
        // 지금그것의 부모(a)의 부모(.mmain)의 나머지형제들(.mmain)의
        // 자식(.msub)를 슬라이딩하면서 숨긴다.
        // 모든 .accbtn중에서 나빼고 다 에게서 rot라는 클래스를 뺏어버린다.
    
        // 지금그것의 부모(a)의 동생(.msub)가 보여지고 있는 상황인가?
            // 그렇다면
            // (msub가 보인다? → 곧 숨길거다 → msub를 닫는다 → 
            // accbtn을 다시 세운다. → rot클래스가 없다.)
                // 지금그것에게서 rot라는 클래스를 뺏는다.
            // 그렇지 않다면
            // (msub가 안보인다? → 곧 보여줄거다 → msub를 연다 → 
            // accbtn을 기울인다. → rot클래스가 있다.)
                // 지금그것에게 rot라는 클래스를 준다.
        // 지금그것의 부모(a)의 동생(.msub)를 슬라이딩하면서 보여주거나/숨겨준다.
    $(".accbtn").click(function(e){
        e.preventDefault();
        $(this).parent("a").parent(".mmain").siblings(".mmain")
            .children(".msub").stop().slideUp();
        $(".accbtn").not($(this)).removeClass("rot");
        if( $(this).parent("a").next(".msub").is(":visible") ){
            $(this).removeClass("rot");
        }else{
            $(this).addClass("rot");
        }
        $(this).parent("a").next(".msub").stop().slideToggle();
    });
    
    $(".bdepth").click(function(){
        $(this).siblings().children(".bsub").stop().fadeOut();
        $(this).children(".bsub").stop().fadeToggle();
    });
    
    $("body *").click(function(){
        if($(this).parents(".bdepth").length == 0 &&
           $(this).find(".bdepth").length == 0 &&
           !$(this).is(".bdepth")){   
            $(".bdepth .bsub").stop().fadeOut();
        }
    });
    
    
    
});















































