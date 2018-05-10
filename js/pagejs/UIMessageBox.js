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
         	showConfirm:function(v){
         		this.confirm.show({
         			title:'我是confirm',
         			text:'你确定是confirm吗？',
         			callback:function(v){
         				if(v){
         					this.toast.show('确定')
         				}else{
         					this.toast.show('取消')
         				}
         			}

         		})
         	},
            showAlert:function(){
                	this.alert.show({
         			title:'我是alert',
         			text:'你确定是alert吗？',
         			callback:function(){
         				this.toast.show('确定')
         			}
         			
         		})
            },
            showToast:function(){
            	this.toast.show('hi,我是toast')
            }
        }
    });
})