// 导航栏右侧

(function(){
	var swiper1 = new Swiper('.text1', {
        direction: 'vertical',
     	 pagination: {
        el: '.swiper-pagination',
        clickable: true,
     	 },
     	 mousewheel: true,
     	on:{
      	  	init: function(){
         	 	swiperAnimateCache(this); //隐藏动画元素 
          		swiperAnimate(this); //初始化完成开始动画
        	}, 
        	slideChangeTransitionEnd: function(){ 
         		 swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        	} 
      }
    });

    var swiper2 = new Swiper('.text2', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    
    $(".toHome").click(function(){
      swiper1.slideTo(0, 500, true);
    })
    $(".toAboutme").click(function(){
      swiper1.slideTo(1, 500, true);
    })
    $(".toSkills").click(function(){
      swiper1.slideTo(2, 500, true);
    })
    $(".toWorks").click(function(){
      swiper1.slideTo(3, 500, true);
    })
    // 我的作品第一页图片点击事件
    var img1List = $(".obj1 img");
    var obj1Msg = $(".obj1 .obj1-msg");
    var img2List = $(".obj2 img");
    var obj2Msg = $(".obj2 .obj2-msg");
    var img3List = $(".obj3 img");
    var obj3Msg = $(".obj3 .obj3-msg");
    
    // 第一个项目
    change(obj1Msg,img1List,"18%","200px","65%");
    // 第二个项目
    change(obj2Msg,img2List,"30%","200px");
     // 第三个项目
    change(obj3Msg,img3List,"30%","200px","85%");

    
    function change(obj,img,width,height,changeW){
      var changeW = changeW || "100%"
      var num = 0;
        for (var i = 0; i < img.length; i++) {
          img[i].index=i;  
          img[i].onclick=function(){
          num++;
          if (num%2!=0) {
            obj.hide(1)
          }else{
            obj.show(1)
          }
            for (var j = 0; j < img.length; j++) {
              if (num%2!=0) {
                img[j].style.width="0";
                img[j].style.height="0";
              }else{
                img[j].style.width=width;
                img[j].style.height=height;
              }
              
              if (num%2!=0) {
                this.style.width=changeW;
                this.style.height="100%";
              }else{
                this.style.width=width;
                this.style.height=height;
              }
            }
          }
        }
      }

})()