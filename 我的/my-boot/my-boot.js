/***************myload-button*********************/
    $(".load_button>.position").on("mouseenter",function(){
        //console.log("我来了")
        var $tar=$(this);
        $tar.children(":first-child").css("width","100%")
            .next().css("color","white");
    });
    $(".load_button>.position").on("mouseleave",function(){
        //console.log("我走了");
        var $tar=$(this);
        $tar.children(":first-child").css("width","0%")
            .next().css("color","black");
    });


/******************平行四边形按钮***********************
$(".skew_button").on("mouseenter",function(){
    //console.log("我来了")
    var $tar=$(this);
    $tar.children(":only-child").children(":first-child").css({
        "width":"300px",
        "height":"200px",
        "opacity": "1"})

});
$(".skew_button").on("mouseleave",function(){
    //console.log("我走了")
    var $tar=$(this);
    $tar.children(":first-child").css({
        "width":"0",
        "height":"0",
        "opacity": "0"})

});
*/

/************************搜索按钮****************************/
$btn=$(".search_btn");
$btn.click(function(){
    $input=$btn.parent().prev()
})
