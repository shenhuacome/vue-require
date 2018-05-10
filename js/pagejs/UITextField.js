define(['vue'], function(Vue) {
	new Vue({
        el: '#app',

        data: {
        	text:'',
        	tel:'',
        	number:'',
        	password:'',
        	readonly:false,
        	btntext:'可写'
            
        },
        created: function() {
         
        },
        watch: {
         text:function(v){
         	if(v.length>6){
         		this.toast.show("普通文本框的文本长度超过6了我才会出现哦！")
         	}
         }
        },
        computed: {
            
        },
        mounted:function(){
       
    
        },
        methods: {
         	toggle:function(){
         		this.readonly=!this.readonly
         		this.btntext=this.btntext=='可写'?"不可写":'可写'
         	}
        }
    });
})