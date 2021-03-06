
    var Carousel = (function(){
            function _Carousel($ct){
            this.$ct = $ct;
            this.init();
            this.bind();
            this.selectAct();
        }
        _Carousel.prototype.init = function(){
            var $imgCt = this.$imgCt = this.$ct.find(".music-style"),
                $preBtn = this.$preBtn = this.$ct.parent().find(".pre-style"),
                $nextBtn = this.$nextBtn = this.$ct.parent().find(".next-style");

            var $firstImg = this.$firstImg = $imgCt.find("li").first(),
                $lastImg = this.lastImg = $imgCt.find("li").last();

            this.curPageIndex = 0;
            this.imgLength = $imgCt.children().length;
            this.isAnimate = false;

            $imgCt.prepend(this.lastImg.clone());
            $imgCt.append(this.$firstImg.clone());

            $imgCt.width(this.$firstImg.width() * $imgCt.children().length);
            /*$imgCt.css({
                "left" : "-100px"
            })*/
        };
        _Carousel.prototype.bind = function(){
            var _this = this ;
            this.$preBtn.on("click",function(e){
                e.preventDefault();
                _this.playPre();
            })

            this.$nextBtn.on("click",function(e){
                e.preventDefault();
                _this.playNext();
            })
        };
        _Carousel.prototype.playPre = function(){
            var _this = this;
            this.curPageIndex=this.curPageIndex||0;
            if(this.isAnimate) return;
            this.isAnimate = true;
            this.$imgCt.animate({
                left:"+="+this.$firstImg.width()
            },function(){
                _this.curPageIndex--;
                if (_this.curPageIndex < 0){
                    if(_this.imgLenth<=7){_this.$imgCt.css("left", -(_this.imgLength * _this.$firstImg.width()));
                    _this.curPageIndex = _this.imgLength - 1;}else{
                        _this.$imgCt.css("left", -((_this.imgLength-1)* _this.$firstImg.width()));
                        _this.curPageIndex = _this.imgLength - 1;
                    }
                    
                }
            })
            this.isAnimate = false;
            this.SetActPre()
        };
        _Carousel.prototype.playNext = function(){
            this.curPageIndex=this.curPageIndex||0;
            var _this = this;
            if(this.isAnimate) return;
            this.isAnimate = true;
            this.$imgCt.animate({
                left:"-="+this.$firstImg.width()
            },function(){
                _this.curPageIndex++;
                if(_this.curPageIndex ===_this.imgLength){
                    _this.$imgCt.css({
                        "left":"0px"
                    })
                    _this.curPageIndex = 0;
                }
            })
            _this.isAnimate = false;
            this.SetAct()
        };
        _Carousel.prototype.selectAct = function(){

            this.$imgCt.on("click",'li',function(){
                $(this).addClass('active');
                $(this).siblings().removeClass("active");
            })

            }
        return{
            init: function($ct){
                $ct.each(function(index,node){
                    new _Carousel($(node));
                })
            }
        }
    })();

    Carousel.init($(".choose"));