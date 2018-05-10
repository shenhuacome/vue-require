define(['vue'], function(Vue) {
	new Vue({
        el: '#app',

        data: {
        	
        },
        created: function() {
         
        },
        watch: {
         
        },
        computed: {
            
        },
        mounted:function(){
       
    
        },
        methods: {
         showloading:function(){
            var that=this;//缓存this;
            this.loading.show("加载中")
            //setTimeout会改变this指向
            setTimeout(function(){
                 that.loading.close()
            },2000);
         }
        }
    });
})