define(['vue'], function(Vue) {
	new Vue({
        el: '#app',

        data: {
        	
            options: [{
                text: 'One',
                value: 'A'
            }, {
                text: 'Two',
                value: 'B'
            }, {
                text: 'Three',
                value: 'C'
            }]
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
         change:function(v){
            var text=v?"展开":"收起";
            this.toast.show(text)
         }
        }
    });
})