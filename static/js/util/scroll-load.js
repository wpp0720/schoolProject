
import $ from 'jquery'
//滚动加载数据
export const scrollLoad = {
    monitorScroll: function (loadDataFun, $win, index) {
        $(document).ready(function () {
            $(window).scroll(function () { 
                let totalHeight = parseFloat($(window).height()) + parseFloat($(window).scrollTop())+ parseFloat($(window).height()/2); //浏览器的高度加上滚动条的高度
                if ($(document).height() <= totalHeight) { //当文档的高度小于或者等于总的高度时，开始动态加载数据
                    //分页条数
                   $win[loadDataFun](index);
                }
            })
        });
    }
}