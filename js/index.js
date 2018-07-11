$(function () {
    var $item = -1;
    var $toTop = $(".rightbar-2");
    $("#to-left").bind("click",function (event) {
        $item--;
        $("#wrapper-items").animate({"left":$item*1226},600,function () {
            // console.log($index);
            $(".page-item").removeClass("current");
            $(".page-item:eq("+Math.abs($item+1)+")").addClass("current");
        });
        var psLeft = $("#wrapper-items").position();
        if($item==-7) {
            $item = -1;
            $("#wrapper-items").animate({"left":$item*1226},0,function () {
                // console.log($index);
                $(".page-item").removeClass("current");
                $(".page-item:eq("+Math.abs($item+1)+")").addClass("current");
            });
        }
        event.stopPropagation();
        event.preventDefault();
    });
    $("#to-right").bind("click",function (event) {
        $item++;
        $("#wrapper-items").animate({"left":$item*1226},600,function () {
            // console.log($index);
            $(".page-item").removeClass("current");
            $(".page-item:eq("+Math.abs($item+1)+")").addClass("current");
        });
        var psLeft = $("#wrapper-items").position();
        if($item==0) {
            $item = -6;
            $("#wrapper-items").animate({"left":$item*1226},0,function () {
                // console.log($index);
                $(".page-item").removeClass("current");
                $(".page-item:eq("+Math.abs($item+1)+")").addClass("current");
            });
        }
        event.stopPropagation();
        event.preventDefault();
    });
    $(".page-item").bind("click",function (event) {
//                 console.log($(this).index());
         var $index=$(this).index();
        $item = -($(this).index()+1);
        $("#wrapper-items").animate({"left":$item*1226},600,function () {
            // console.log($index);
            $(".page-item").removeClass("current");
            $(".page-item:eq("+Math.abs($item+1)+")").addClass("current");
        });
        event.stopPropagation();
        event.preventDefault();
    });
     timer = setInterval(function () {
        $item--;
        $("#wrapper-items").animate({"left":$item*1226},1500,function () {
            // console.log($index);
            $(".page-item").removeClass("current");
            $(".page-item:eq("+Math.abs($item+1)+")").addClass("current");
        });
        if($item==-7) {
            $item = -1;
            $("#wrapper-items").animate({"left":$item*1226},0,function () {
                // console.log($index);
                $(".page-item").removeClass("current");
                $(".page-item:eq("+Math.abs($item+1)+")").addClass("current");
            });
        }
    },2000);
    $(".wrapper").hover(function () {
        clearInterval(timer);
    },function () {
         timer = setInterval(function () {
            $item--;
            $("#wrapper-items").animate({"left":$item*1226},1500,function () {
                // console.log($index);
                $(".page-item").removeClass("current");
                $(".page-item:eq("+Math.abs($item+1)+")").addClass("current");
            });
            if($item==-7) {
                $item = -1;
                $("#wrapper-items").animate({"left":$item*1226},0,function () {
                    // console.log($index);
                    $(".page-item").removeClass("current");
                    $(".page-item:eq("+Math.abs($item+1)+")").addClass("current");
                });
            }
        },2000);
    });
    $("#title-right").click(function () {
        var $items = $(".star-goods-list li").length;
        $(".star-goods-list").animate({"left":-($items-5)*250},500);
    });
    $("#title-left").click(function () {
        $(".star-goods-list").animate({"left":0},500);
    });
    $(window).scroll(function () {
        var $windowScrollTop = $(window).scrollTop();
        if($windowScrollTop>1500) {
            $toTop.show(100);
        }
        else {
            $toTop.hide(100);
        }

    });
    $toTop.click(function () {
        $("html,body").animate({scrollTop:0},100);
    });
    var temp = document.getElementById("temp").innerHTML;
    var i=0;
    $.ajax({
        url:'goods.php',
        type:'get',
//                 dataType:'json',
        success:function(backData){
            var jsarr= backData;
            var jsarr = JSON.parse(backData);
//                     console.log(jsarr);
            var obj ={
                "item":jsarr
            };
            console.log(obj);
            // 调用模板引擎的方法 填充数据
            var str = template(temp,obj);
            console.log(str);
            // 使用 jq  追加到 界面上
            $("#items>ul").append($(str));
        }
    })
});