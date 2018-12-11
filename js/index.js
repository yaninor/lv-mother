 // 初始化swiper插件  第一个参数轮播图大容器选择器  第二个参数是对象 是轮播图一些配置项
    new Swiper('.swiper-container', {
        // 方向 水平
        direction: 'horizontal',
        // 是否循环 无缝轮播图 （动态添加2张图片）
        loop: true,
        // 小圆点
        pagination: {
            el: '.swiper-pagination',
        },
          // autoplay:true,//等同于以下设置
            autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
        },
});