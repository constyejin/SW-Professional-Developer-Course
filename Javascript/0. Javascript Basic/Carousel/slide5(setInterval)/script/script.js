$(document).ready(function(){
    
    var cur = 0;
    var len = $(".slide").length;
    for(i=0; i<len; i++){
        $("#dots").append("<div></div>");
    }
    $("#dots>div").first().addClass("sactive");
    
    function sliding(dir){
        cur = cur + dir;
        if(cur >= len){
            cur = 0;
        }else if(cur < 0){
            cur = len - 1;
        }
        $(".slide").eq(cur).siblings(".slide").stop().fadeOut();
        $(".slide").eq(cur).stop().fadeIn(function(){
            $(this).siblings(".slide").children("p").css({
                marginTop: "20px",
                opacity: 0
            });
            $(this).children("p").stop().animate({
                marginTop: 0,
                opacity: 1
            },600);
            $(this).siblings(".slide").children("img").css({
                height: "900px"
            });
            $(this).children("img").stop().animate({
                height: "860px"
            },4000);
        });
        $("#dots>div").removeClass("sactive");
        $("#dots>div").eq(cur).addClass("sactive");
        
    }
    
    sliding(0);
    
    $("#prev").click(function(){sliding(-1)});
    $("#next").click(function(){sliding(1)});
    
    $("#dots>div").click(function(){
        cur = 0;
        var num = $(this).index();
        sliding(num);
    });
    
    var auto = setInterval(sliding, 5000, 1);
    
    $("#sel1>option").each(function(){
        var cont = $(this).text();
        var valu = $(this).val();
        $(".bbb").append("<div value='"+valu+"'>"+cont+"</div>");
    });
    
    var stat = 0;
    $(".aaa").click(function(){
        if(stat == 0){
            $(".bbb").slideDown();
            stat = 1;
        }else{
            $(".bbb").slideUp();
            stat = 0;
        }
    });
    
    
});



































