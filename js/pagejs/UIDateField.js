define(['vue'], function(Vue) {
	new Vue({
        el: '#app',

        data: {
            datemin:'',
            datemax:'',
        	date:'',
            time:''
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
         	setdate:function(){
               this.date="2017-09-18"
            }
        }
    });
})