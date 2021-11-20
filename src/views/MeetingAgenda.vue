<template>
  <div class="meeting">
    <div class="banner">
      <div id="newsWapNav" class="swiper swiper-container">
        <ul id="myWapTab" class="newTab swiper-wrapper">
          <li class="swiper-slide sub-item" v-for="(item,index) in tabs" :key="index">
            <p v-html="item.name"></p>
          </li>
        </ul>
      </div>
    </div>

    <div class="conn">
      <div  id="pageCon" class="swiper swiper-container">
        <ul id="myTabContent" class="tab-content swiper-wrapper">
          <div class="tab-pane swiper-slide" v-for="(item,index) in tabs" :key="index">
            <div class="meeting-details">
              <div class="details-item">
                <p class="deteils-attr">论坛主题：</p>
                <p class="details-value special">{{item.info.theme}}</p>
              </div>
              <div class="details-item">
                <p class="deteils-attr">论坛时间：</p>
                <p class="details-value special">{{item.info.time}}</p>
              </div>
              <div class="details-item">
                <p class="deteils-attr">论坛地点：</p>
                <p class="details-value special">{{item.info.place}}</p>
              </div>
              <div class="details-item" v-if="item.info.organizer!=''">
                <p class="deteils-attr">主办单位：</p>
                <p class="details-value" v-html="item.info.organizer"></p>
              </div>
              <div class="details-item" v-if="item.info.coHosted!=''">
                <p class="deteils-attr">联合主办：</p>
                <p class="details-value" v-html="item.info.coHosted">
                </p>
              </div>
              <div class="details-item" v-if="item.info.organizer2!=''">
                <p class="deteils-attr">承办单位：</p>
                <p class="details-value" v-html="item.info.organizer2"></p>
              </div>
            </div>
            <div class="agenda-box">
              <div class="agenda-title">论坛议程</div>
                <div class="line"></div>
              <div class="agenda-list" v-for="(item1,i) in item.info.agendaList" :key="i">
                <div v-if="item1.unitname != ''" class="agenda-unittitle">{{item1.unitname}}</div>
                <step :agenda="item1.agenda"></step>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Step from "../components/step.vue";
export default {
  components: {Step },
  data(){
    return {
      tabs:meetingList
    }
  },
  mounted(){
    this.swiperSLide()
  },
  watch: {
      
  },
  methods:{
    swiperSLide(){
      let tSpeed = 300 //切换速度300ms
      let navSlideWidth = 0,initialSlide = 0,navActiveSlideLeft = 0,navSum = 0,navWidth = 0,clientWidth = 0,activeIndex = 0,activeSlidePosition = 0;
      this.tabs.forEach((item,i) => {
        if(item.id === 4){
          initialSlide = i
        }
      })
  let navSwiper = new Swiper('#newsWapNav', {
  	slidesPerView:"auto",
  	freeMode: true,
    initialSlide:initialSlide,
  	on: {
  		init: function() {
  			navSlideWidth = this.slides.eq(0).css('width'); //导航字数需要统一,每个导航宽度一致
        // this.slides.eq(3).addClass('active');
  			navSum = this.slides[this.slides.length - 1].offsetLeft //最后一个slide的位置

  			clientWidth = parseInt(this.$wrapperEl.css('width')) //Nav的可视宽度
  			navWidth = 0
  			for (let i = 0; i < this.slides.length; i++) {
  				navWidth += parseInt(this.slides.eq(i).css('width'))
  			}

  			//topBar = this.$el.parents('body').find('#top') //页头

  		},

  	},
  });

						var tabItem = $('#myWapTab .sub-item');
						$('#myTabContent ul').removeClass('hidden');
						$('.swiper-slide').removeClass("tab-pane fade")
						//var tabItem = $('.tab .tabItem');
						let mySwiper = new Swiper('#pageCon.swiper-container', {
							autoplay: false,autoHeight: true,initialSlide:initialSlide,
							on:{
								//swiper从当前slide开始过渡到另一个slide时执行
								slideChangeTransitionStart: function(){
									var n = this.activeIndex;//过渡后的slide索引
									changeTab(n);
								},
transitionStart: function() {
  			activeIndex = this.activeIndex
  			activeSlidePosition = navSwiper.slides[activeIndex].offsetLeft
  			//释放时导航粉色条移动过渡
  			// bar.transition(tSpeed)
  			// bar.transform('translateX(' + activeSlidePosition + 'px)')
  			//释放时文字变色过渡
  			navSwiper.slides.eq(activeIndex).find('span').transition(tSpeed)
  			navSwiper.slides.eq(activeIndex).addClass("active")
  			if (activeIndex > 0) {
  				navSwiper.slides.eq(activeIndex - 1).find('span').transition(tSpeed)
  				navSwiper.slides.eq(activeIndex - 1).removeClass("active")
  			}
  			if (activeIndex < this.slides.length) {
  				navSwiper.slides.eq(activeIndex + 1).find('span').transition(tSpeed)
  				navSwiper.slides.eq(activeIndex + 1).find('span').removeClass("active")
  			}
  			//导航居中
  			navActiveSlideLeft = navSwiper.slides[activeIndex].offsetLeft //activeSlide距左边的距离

  			navSwiper.setTransition(tSpeed)
  			if (navActiveSlideLeft < (clientWidth - parseInt(navSlideWidth)) / 2) {
  				navSwiper.setTranslate(0)
  			} else if (navActiveSlideLeft > navWidth - (parseInt(navSlideWidth) + clientWidth) / 2) {
  				navSwiper.setTranslate(clientWidth - navWidth)
  			} else {
  				navSwiper.setTranslate((clientWidth - parseInt(navSlideWidth)) / 2 - navActiveSlideLeft)
  			}

  		},
							}
						})
						//tab点击切换silde
						tabItem.click(function(){
							var ind = $(this).index();
							changeTab(ind);
							mySwiper.slideTo(ind);
						})
						//tab切换样式
						function changeTab(index){
							tabItem.removeClass('active').eq(index).addClass('active');
						}	
    }
  }
};
</script>

<style scoped lang="scss">
.meeting {
  min-height:100%;
  background: url("~@/assets/img/introduction-bg.png") no-repeat center bottom #19278b;
  background-size:100% auto;
}

.banner {
  width: 7.5rem;
  height: 1.54rem;
  background: #1e48c7;
  box-shadow: 0rem 0rem 0rem 0rem rgba(6, 23, 57, 0.2);
  padding:0.24rem 0;
}

.meeting-details {
  padding: 0.78rem 0.5rem;
  font-size: 0.26rem;
  font-family: PingFang SC;
  font-weight: bold;
  line-height: 0.64rem;
  color: #ffffff;
}
.agenda-box{
  padding-bottom:3rem;
}
.agenda-title {
  text-align:center;
  font-size: 0.4rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: #00e1fe;
}
.agenda-list {
  padding: 0.5rem;
  padding-bottom: 0;
}

.date {
  font-size: 0.28rem;
  font-family: PingFang SC;
  font-weight: bold;
  color: #00e1fe;
}
.agenda-unittitle{
  font-size: 0.28rem;
  font-family: PingFang SC;
  color: #00e1fe;
  text-align:center;
  padding:0.5rem 0 0.4rem;
}

.line {
  width: 6.5rem;
  height: 0.02rem;
  margin: 0.24rem 0.5rem;
  background: linear-gradient(90deg, #03d9eb, #007eff);
}

.details-item {
  display: flex;
}

.details-attr {
  flex: 1;
}

.details-value {
  flex: 3;
}
.agenda-list{
  padding:0 0.42rem;
}
.special {
  color: #00ddfe;
}
#myWapTab{margin:0;padding:0;height:100%;border:0;}
#myWapTab li{color:#DEEFFF;text-align:center;padding:0 0.1rem;margin:0;display: inline-block;}
#myWapTab li p{background:rgba(9, 21, 56, .3);width:100%;height:100%;
  display:flex;
  align-items: center;
  justify-content: center;
}
#myWapTab li a{padding:0;margin:0;position: absolute;width:100%;left:0;}
#myTabContent .swiper-slide {box-sizing: border-box;}
#newsWapNav{width:100%;height:100%;top:0;}
#newsWapNav li{font-size:0.26rem;width:3rem;height:100%;}
#newsWapNav li a,#newsWapNav li a:focus,#newsWapNav li a:visited{border-bottom:0;font-size:0.15rem;color:#999;text-decoration: none!important;}
#newsWapNav li.active p{background:#00DDFE;color:#0F3994 ;}
#newsWapNav li.active a{font-size:0.17rem;color:#333;}
#newsWapNav li.active span{position: absolute;bottom:0;left:0.49rem;width:0.12rem;height:0.02rem;background:#A39161;}
</style>