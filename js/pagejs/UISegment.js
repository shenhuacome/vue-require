define(['vue'], function(Vue) {
	new Vue({
        el: '#app',

        data: {
        	
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
          
         }
        }
    });
})