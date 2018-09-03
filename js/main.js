$(function(){
	// 使得一开始的顶部页面高度为整个屏幕高度
	$("header").css("height",$(window).height());

});

// 获取 窗口滚动条 的坐标，实现顶部导航栏显示
function getScrollTop(){
    var scrollTop=0;
    if(document.documentElement&&document.documentElement.scrollTop){
        scrollTop=document.documentElement.scrollTop;
    }else if(document.body){
        scrollTop=document.body.scrollTop;
    }
    return scrollTop;
}
document.onscroll = function(){

    if(getScrollTop() >= $(window).height()){
    	$(".scroll-nav").css("visibility","visible").css("opacity","1");
	}else{
        $(".scroll-nav").css("visibility","hidden").css("opacity","0");
	}
}

// 控制菜单的左右滑动
function slide() {

	var sidebar = $(".click-sidebar");
	var right = Number(sidebar.css("right").replace("px",""));
	if(right > -300){
        sidebar.stop().animate({right:"-300px"});
    }else if(right < 0){
        sidebar.stop().animate({right:"0px"});
    }

}