$(document).ready(function(){
    
    $("#direct").click(function(){
        $(this).children("ul").toggle();
    });
    
    $("#pclnb").mouseenter(function(){
        $(this).stop().animate({
            height:"330px"
        },200);
        $("#pcback").stop().slideDown(200);
    });
    $("#hbot").mouseleave(function(){
        $("#pclnb:visible").stop().animate({
            height:"80px"
        },200);
        $("#pcback").stop().slideUp(200);
    });
    
    $("#ham").click(function(){
        $("#mlnb").stop().animate({
            right: 0
        },200);
        $("#mback").stop().fadeIn(200);
        $("html,body").css("overflow","hidden");
    });
    $("#mback").click(function(){
        $("#mlnb").stop().animate({
            right: "-250px"
        },200);
        $("#mback").stop().fadeOut(200);
        $("html,body").css("overflow","auto");
    });
    
    $(".mmain>a").click(function(e){
        e.preventDefault();
    });
    $(".mmain").click(function(){
        $(this).siblings().children(".msub").stop().delay(400).slideUp();
        $(this).children(".msub").stop().slideToggle();
    });
    
    $("#bc1,#bc2").click(function(){
        $(this).siblings().children("ul").hide();
        $(this).children("ul").toggle();
    });
    $("#bc").mouseleave(function(){
        $(this).find("ul").hide();
    });
    
    function chkdummy(){
        var h = $("header").height();
        if($("#bc").is(":visible")){
            h += 30;
        }
        $("#dummy").height(h);
    }
    chkdummy();
    $(window).resize(function(){ chkdummy(); });
    
    $(".tabbtns").each(function(){
        $(this).children().width("calc(100% / "+$(this).children().length+")");
    });
    
    $(".tabbtns button").click(function(){
        var num = $(this).index();
        $(".tabbtns button").removeClass("tactive");
        $(".tabbtns button").eq(num).addClass("tactive");
        $(".tabconts>div").hide();
        $(".tabconts>div").eq(num).show();
    });
    
    function imgfit(){
        $(".imgfit").each(function(){
            var bratio = $(this).width() / $(this).height();
            var iratio = $(this).children("img").get(0).width / $(this).children("img").get(0).height;
            if(bratio > iratio){
                $(this).children("img").width($(this).width()).height("auto");
            }else{
                $(this).children("img").height($(this).height()).width("auto");
            }
        });
    }
    imgfit();
    $(window).resize(imgfit);
    
    var iter = 0;
    $("#sitego").click(function(){
        var url = $("#sitelink").val();
        if(url != ""){
            iter++;
            window.open(url,iter);
        }
    });
    
    
    $("#content table").each(function(){
        $(this).before("<div class='table'></div>");
        $(this).clone().appendTo($(this).prev(".table"));
        $(this).remove();
    });
    
    
    
    var cur = [];
    var len = [];
    var sliderlen = $(".slider").length;
    for(i=0; i<sliderlen; i++){
        cur[i] = 0;
        len[i] = $(".slider").eq(i).find(".slide").length;
        for(j=0; j<len[i]; j++){
            $(".slider").eq(i).find(".dots").append("<div></div>");
        }
        $(".slider").eq(i).find(".dots").children("div").first()
            .addClass("sactive");
    }
    
    function sliding( who, dir ){
        who = who.parents(".slider");
        var idx = who.index(".slider");
        cur[idx] = cur[idx] + dir;
        if(cur[idx] >= len[idx]){
            cur[idx] = 0;
        }else if(cur[idx] < 0){
            cur[idx] = len[idx] - 1;
        }
        who.find(".slide").stop().fadeOut();
        who.find(".slide").eq(cur[idx]).stop().fadeIn();
        who.find(".dots>div").removeClass("sactive");
        who.find(".dots>div").eq(cur[idx]).addClass("sactive");
    }
    
    
    $(".prev").click(function(){
        sliding( $(this), -1 );
    });
    $(".next").click(function(){
        sliding( $(this), 1 );
    });
    
    
    $("body").append("<div id='scrbar'></div>");
    $("#scrbar").append("<div id='scrthumb'></div>");
    var bodyH;
    var winH;
    var thumbH;
    function scrchk(){
        var scrH = $("html,body").scrollTop();
        bodyH = $(document).height();
        winH = $(window).height();
        var scrRatio = scrH / (bodyH - winH);
//        var thumbH = $("#scrthumb").height();
        thumbH = winH/bodyH * winH;
        $("#scrthumb").height(thumbH);
        $("#scrthumb").css("top",(winH - thumbH) * scrRatio+"px");
        if(winH/bodyH >= 1){
            $("#scrbar").hide();
        }else{
            $("#scrbar").show();
        }
        if($(window).width() <= 720){
            $("#scrbar").hide();
        }else{
            $("#scrbar").show();
        }
    }
    scrchk();
    $(window).scroll(scrchk);
    $(window).resize(scrchk);
    var firstclick;
    $("#scrthumb").mousedown(function(event){
        firstclick = event.clientY;
        var scrH = $("html,body").scrollTop();
        $("html,body").on("mousemove",function(event){
            var lastclick = event.clientY;
            var delta = lastclick - firstclick;
            var deltaratio = delta/(winH - thumbH);
            $(window).scrollTop(scrH + (bodyH - winH)*deltaratio);
        });
        document.onselectstart = function(){return false;}
    });
    $("html,body").mouseup(function(event){
        $("html,body").off("mousemove");
        document.onselectstart = function(){return true;}
    });
    
});








