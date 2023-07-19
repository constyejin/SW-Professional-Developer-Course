$(document).ready(function(){
    
    var cur = 0;
    var len = $(".slide").length;
    var degree = 360 / len;
    for(i=0 ; i<len ; i++){
        $(".slide").eq(i).css("transform","translateX(-50%) rotate("+(degree*i)+"deg)");                 
    }
    
    function sliding(dir){
        cur = cur + dir;
        for(i=0 ; i<len ; i++){
            $(".slide").eq(i).css("transform","translateX(-50%) rotate("+(degree*i - (cur*degree))+"deg)");          
        }
    }
    
    $("#prev").click(function(){ sliding(-1) });
    $("#next").click(function(){ sliding(1) });
});



