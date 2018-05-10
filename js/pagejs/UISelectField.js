define(['vue'], function(Vue) {
	new Vue({
        el: '#app',

        data: {
        	val:'A',
            options: [{
                text: 'One',
                value: 'A',

            }, {
                text: 'Two',
                value: 'B'
            }, {
                text: 'Three',
                value: 'C',
                 disabled:true //禁用某一项
            }],
            disabled:false
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
         	selectChange:function(v){
         		this.toast.show("你选择了:"+v)
         	},
            setval:function(){
                this.val="B"
            }
        }
    });
})