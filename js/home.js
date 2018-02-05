;(function () {
    $('.bg-zhezhao').each(function (index,item) {
        $(item).mouseover(function (event) {
            event.stopPropagation();
            //获取当前元素的父级元素的zIndex值保存，并且将当前元素的opacity值变为0
            var val = $(this).parent().css('z-index');
            $(this).parent().css('z-index','20');
            $(this).css('opacity','0');

            // 获取当前元素的宽高，和需要改变后的宽高。
            var widthM = parseInt($(this).parent().css('width')); //没有改变之前的宽度
            var heightM = parseInt($(this).parent().css('height'));

            var widthW = widthM + 20; //改变之后的宽度
            var heightW = heightM + 20;

            $(this).parent().stop().animate({width : widthW,height : heightW},500);
            // $(this).parent().css('width',widthW).css('height',heightW);
            //当前元素划出的时候，将之前保存的zIndex,和opacity值变为原来。
            $(this).mouseout(function () {
                $(this).parent().css('z-index',val);
                $(this).css('opacity','.3');

                $(this).parent().stop().animate({width : widthM,height : heightM},500);
                // $(this).parent().css('width',widthM).css('height',heightM);
            })
        })
    });

    function ShowOrHide(ele) {
        ele.mouseover(function () {
            console.log(1);
            ele.find('.img').hide();
            ele.find('.text').show();
        })
        ele.mouseout(function () {
            console.log(1);
            ele.find('.img').show();
            ele.find('.text').hide();
        })
    }
    new ShowOrHide($('.xiaofeizhe'));
    new ShowOrHide($('.shangjia'));
    new ShowOrHide($('.jiameng'));

    $('.icon-box').find('.bg-box').each(function (index,item) {
        $(item).mouseenter(function (e) {
            e.stopPropagation();
            $(this).stop().animate({opacity : 1},500);
        });
        $(item).mouseleave(function (e) {
            e.stopPropagation();
            $(this).stop().animate({opacity : 0},500)
        })
    })

})();
