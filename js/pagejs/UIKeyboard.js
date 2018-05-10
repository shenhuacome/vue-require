define(['vue','keyboard'], function(Vue) {
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
         	showKeyboard:function(){
                this.UIKeyBoard.show({callback:function(v){
                    //回调
                    this.UIKeyBoard.close();
                    this.UIKeyBoard.reset()
                    this.toast.show("值为："+v)
                }});
            }
        }
    });
})