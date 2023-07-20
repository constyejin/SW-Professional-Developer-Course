
let cur = 0;
let len = $(".slide").length;
$("#bus").width(740*len);
  
// 함수부
function sliding(dir){
    // 번호관리팀
    cur = cur + dir;
    if(cur >= len){
        cur = 0;
    }else if(cur < 0){
        cur = len - 1;
    }
    
    // 수행팀
    $("#bus").animate({
        marginLeft: -740 * cur +"px"
    });
}
    
    // 버튼시작팀
    $(".sprev").click(function(){
        sliding(-1);
    });
    $(".snext").click(function(){
        sliding(1);
    });
    
    // 자동재생팀
    let auto = setInterval(function(){ sliding(1) }, 3000);
    let stat = 0;
    $(".sauto").click(function(){
        if(stat == 0){
            clearInterval(auto);
            $(this).children("i").removeClass("fa-pause").addClass("fa-play");
            stat = 1;
        }else{
            auto = setInterval(function(){ sliding(1) }, 3000);
            $(this).children("i").removeClass("fa-play").addClass("fa-pause");
            stat = 0;
        }
    });
    




























