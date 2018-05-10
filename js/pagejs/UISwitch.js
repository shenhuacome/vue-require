define(['vue'], function(Vue) {
	new Vue({
        el: '#app',

        data: {
        	ck:false,
            text:'关闭'
        },
        created: function() {
         
        },
        watch: {
         ck:function(v){
           this.text= v?'开启':'关闭'
         }
        },
        computed: {
            
        },
        mounted:function(){
       
    
        },
        methods: {
         	toggle:function(){
                this.ck=!this.ck
            }
        }
    });
})