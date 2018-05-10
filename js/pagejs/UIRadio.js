define(['vue'], function(Vue) {
	new Vue({
        el: '#app',

        data: {
        	sex:0,
            disabled:true
        },
        created: function() {
         
        },
        watch: {
         sex:function(v){
            this.toast.show("切换时监听值："+v)
         }
        },
        computed: {
            
        },
        mounted:function(){
       
    
        },
        methods: {
         	setval:function(){
                this.sex=1
            }
        }
    });
})