define(['vue'], function(Vue) {
	new Vue({
        el: '#app',

        data: {
            popup:false,
            bank:'',
            bankitem:null,
            bankList:[{bankname:'招商银行',bankvalue:'cmb'},{bankname:'中国银行',bankvalue:'boc'}]
        },
        created: function() {
         
        },
        watch: {
         bank:function(v){
            
          this.bankitem=this.getBankItem(v)
    
            this.popup=false
           
         }
        },
        computed: {
            
        },
        mounted:function(){
       
    
        },
        methods: {
         choosebank:function(){
            this.popup=true;
         },
         getBankItem:function(v){
            var rs;
            this.bankList.map(function(i,t){
               if(i.bankvalue==v){
                rs=i;
               }
            })
            return rs;
         }
        }
    });
})