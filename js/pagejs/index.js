define(['vue', 'api', 'keyboard', 'swiper'], function(Vue, api, keyboard, swiper) {

    new Vue({
        el: '#app',
        data: {
            t: '',
            show: '',
            sex: '',
            fundList: [],
            ads: [{pic_url:'../images/640x320.png'}],
            date: '',
            sure: true,
            ck:false,
            disabled: 'true',
            scrollLoad:true,
            listLoad:false,
            fresh:true,
            options: [{
                text: 'One',
                value: 'A'
            }, {
                text: 'Two',
                value: 'B'
            }, {
                text: 'Three',
                value: 'C'
            }],
            se: 'C',
            segment: [{
                id: 'a',
                text: '<span>css</span>',
                value: 1
            }, {
                id: 'b',
                text: 'javascript',
                value: 2
            }, {
                id: 'c',
                text: 'html',
                value: 3
            }],
            segmentActive: 'a',
            popup: false
        },
        created: function() {
            var that = this;

            api.getPhotoList({functionCode:1047,adsGroup:'indexAD',originalId:'app'}).then(function(res) {
            	console.log(this)
                that.ads = JSON.parse(res.body.message).result.list;
                Vue.nextTick(function() {
                    var mySwiper = new Swiper('#banner', {
                        // Disable preloading of all images
                        preloadImages: false,
                        // Enable lazy loading
                        lazyLoading: true,
                        pagination: '.swiper-pagination'

                    })
                })
            },function(){
                that.toast.show('请求失败')
            })

           
        },
        mounted:function(){

        },
        watch: {
            sex: function(val) {
                console.log(val)
            }
        },
        computed: {
            ck: {
                get: function(value) {
                    console.log('get')
                },
                set: function(value) {
                    console.log('set', value)
                }
            }
        },
        methods: {
            change: function(v) {
                console.log(v, this.sure)
            },
            selectChange: function() {
                var that = this;
                this.alert.show({
                    title: '你好',
                    text: '<div class="aa">' + that.se + '</div>',
                    buttonText: '知道了',
                    callback: function(o) {
                        console.log(o)
                    }
                })
            },
            share: function() {
                this.disabled = 'false'
                this.confirm.show({
                    text: '<div class="scorll-view">确定要享?</div>',
                    callback: function(rs) {
                        if (rs) {
                            this.toast.show("分享失败！")
                        }
                    }
                })

            },
            getdata: function() {
                var that = this;
                if(!that.listLoad){
                    that.loading.show("加载中");
                api.getFundList().then(function(res) {

                        that.show = that.show == "hidden" ? "" : "hidden";
                        that.fundList = res.body.recommendList
                        that.UIKeyBoard.close();
                        that.UIKeyBoard.reset();
                        that.popup = true;
                        that.loading.close();
                        that.listLoad=true;
                    })
                }else{
                     that.popup = true;
                }



                
            },
            pop: function() {
                this.popup = true;

            },
            showloading: function() {
                var that = this;
                that.loading.show("加载中");
                setTimeout(function() {
                    that.loading.close();
                }, 1000);
            },
            refresh: function(s,t) {

                var that = this;
                that.loading.show("刷新中");
                api.getFundList().then(function(res) {
                    that.fundList = res.body.recommendList;
                    that.loading.close();
                    Vue.nextTick(function() {
                        s.update();
                    })



                })

            },
            homerefresh:function(s,t){
                var that = this;
               // that.loading.show("刷新中");
               
                api.getPhotoList({functionCode:1047,adsGroup:'indexAD',originalId:'app'}).then(function(res) {
                    that.ads = JSON.parse(res.body.message).result.list;
                    Vue.nextTick(function() {
                        var mySwiper = new Swiper('#banner', {
                            // Disable preloading of all images
                            preloadImages: false,
                            // Enable lazy loading
                            lazyLoading: true,
                            pagination: '.swiper-pagination'
    
                        });
                        s.update();
                    })
                },function(){
                    that.toast.show('请求失败')
                })

            },
            load: function(s,t) {

                var that = this;

                if( that.fundList.length>20){
                   
                    that.$refs.scroll.loadCompleted()
                      return;
                }



                that.loading.show("加载中....");
                api.getFundList().then(function(res) {

                    that.fundList = that.fundList.concat(res.body.recommendList)
                    that.loading.close();
                    Vue.nextTick(function() {
                        s.update();
                    })



                })

            }
        }
    });
});
