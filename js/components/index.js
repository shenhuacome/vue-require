define(['vue'],function(Vue){
  (function(win){
  win.componentTpl={
    UIBottomBar:"<div m-role=\"UIBottomBar\" v-if=\"visible\">"
+ "        <div class=\"UIBottomBarRoom\">"
+ "            <slot></slot>"
+ "        </div>"
+ "        </div>",


    UIBottomTabBar:"<div m-role=\"cell\" m-align=\"center\" m-layout=\"fit\" m-mode=\"x-equal\">"
    + "  <a m-role=\"cell\" m-mode=\"y\" href=\"index.html\" m-align=\"center\" class=\"tab-link\" :class=\"active==1?'active':''\">"
    + "    <div m-role=\"cell\"><i class=\"tbar-icon tbar-icon1\"></i></div>"
    + "    <div m-role=\"cell\">首页</div>"
    + "  </a>"
    + "  <a m-role=\"cell\" m-mode=\"y\" href=\"list.html\" m-align=\"center\" class=\"tab-link \" :class=\"active==2?'active':''\"> "
    + "    <div m-role=\"cell\"><i class=\"tbar-icon tbar-icon2\"></i></div>"
    + "    <div m-role=\"cell\">列表</div>"
    + "  </a>        "
    + "  <a m-role=\"cell\" m-mode=\"y\" m-href=\"asset.html\" m-align=\"center\" class=\"tab-link\" :class=\"active==3?'active':''\">"
    + "    <div m-role=\"cell\"><i class=\"tbar-icon tbar-icon3\"></i></div>"
    + "    <div m-role=\"cell\">资产</div>"
    + "  </a>"
    + "  <a m-role=\"cell\" m-mode=\"y\" href=\"me.html\" m-align=\"center\" class=\"tab-link\" :class=\"active==4?'active':''\">"
    + "    <div m-role=\"cell\"><i class=\"tbar-icon tbar-icon4\"></i></div>"
    + "    <div m-role=\"cell\">我</div>"
    + "  </a>"
    + "</div>",

    switch:" <label class=\"ui-switch\">"
+ "    <input class=\"ui-switch-input\" @change=\"$emit('change', currentValue)\" type=\"checkbox\" v-model=\"currentValue\">"
+ "    <span class=\"ui-switch-core\"></span>"
+ "    <div class=\"ui-switch-label\"><slot></slot></div>"
+ "  </label>",

     UIRadio: "<div m-role=\"UIRadio\" :m-checked=\"currentValue==mValue?'yes':''\" :class=\"{disabled:disabled}\">"
+ "  <label> <i class=\"UIRadio-icon\"></i><input  type=\"radio\" :disabled=\"disabled\"     :name=\"name\" v-model=\"currentValue\" :value=\"mValue\" /><slot></slot></label>"
+ "  </div>",

     UICheckBox:"<div m-role=\"UICheckBox\" :m-checked=\"currentValue==true?'yes':''\" :class=\"{disabled:disabled}\">"
+ "  <label> <i class=\"UICheck-icon\"></i><input  type=\"checkbox\"  :disabled=\"disabled\"   :name=\"name\" v-model=\"currentValue\" :value=\"mValue\" /><slot></slot></label>"
+ "  </div>",


      UICollapsible:" <div m-role=\"UICollapsible\">"
+ "        "
+ "          <ul>"
+ "             <slot></slot>"
+ "          </ul>"
+ "        "
+ "    </div>",
      UICollapsibleItem: " <li :m-active=\"show?'yes':''\">"
+ "                <div m-role=\"title\" @click=\"collapse\">"
+ "                <slot name=\"title\"></slot>"
+ "                <div class=\"UICollapsibleArrow\" m-icon=\"arrowup\" ></div>"
+ "                </div>"
+ "                <div m-role=\"content\">"
+ "                "
+ "                <slot name=\"content\">"
+ "                    "
+ "                </slot>"
+ "                </div>"
+ "            </li>",

    UISegment: "<div m-role=\"UISegment\" m-id=\"demo-seg\"  class=\"test\">"
+ "        <ul>"
+ "            <li v-html=\"segItem.text\" :m-id=\"segItem['id']\" :m-value=\"segItem['value']\" v-for=\"segItem in newsegment\" :m-active=\"segItem['id']==compActive?'yes':''\" @touchend=\"changeSeg(segItem)\">"
+ "            </li>"
+ "        </ul>"
+ "        <input class=\"UISegmentHiddenInput\" type=\"hidden\" :value=\"segvalue\">"
+ "    </div>",
    UITableView:"<div m-role=\"UITableView\">"
+ "        <dl>"
+ "         <slot></slot>"
+ "        </dl>"
+ "      </div>",
    UITableViewItem: "<dd :m-type=\"type\">"
+ " <div m-layout=\"fit\" m-role=\"cell\">"
+ "  <slot></slot></div><div v-if=\"type=='arrow'\" class=\"UITableViewArrow\" m-icon=\"arrow\"></div><div v-if=\"type=='mark'\" class=\"UITableViewMarkWrap\"><div class=\"UITableViewMark\" m-icon=\"mark\"></div></div>"
+ "</dd>",
    UITextField:'<div m-role="UITextField"><input :readonly="readonly"  :maxlength="maxlength" :name="name" :type="type" :value="value" :placeholder="placeholder"  @focus="focusInput($event.target.value)" @blur="blurInput($event.target.value)"  @input="updateValue($event.target.value)"><div class="UITextFieldClear" m-icon="clear"  v-show="mIconShow" @mousedown="clearValue" ></div></div>',
    UISelectField:'<div m-role="UISelectField" m-layout="fit" ><select @input="updateValue($event.target.value)" :value="value" @change="change($event.target)"><option v-for="option in options" :value="option.value">{{option.text}}</option></select><div m-icon="arrowdown"></div><div m-role="cell" class="UISelectFieldText">{{text}}</div></div>',
    UINavigationBar:'<div m-role="UINavigationBar"  :inline="inline" ><div class="UINavigationBarRoom"><div m-role="left" v-bind:style="{width:width+\'px\'}"><slot name="left"></slot></div><div m-role="title"><slot name="title">首页</slot></div><div m-role="right" v-bind:style="{width:width+\'px\'}"><slot name="right"></slot></div></div></div>',
    UIAlert:'<transition name="modal"><div class="modal-mask" @touchmove.stop.prevent="" v-show="visible"><div class="modal-wrapper"><div class="modal-container"><div class="modal-header"><slot name="header">{{title}}</slot></div><div class="modal-body" v-html="text"></div><div class="modal-footer"><slot name="footer"><div m-role="UIButton" m-style="alert" m-size="min" m-layout="fit" class="UIAlertSubmit" @click="closeAlert"><slot name="ButtonText">{{buttonText}}</slot></div></slot></div></div></div></div></transition>',
    UIConfirm:'<transition name="modal"><div class="modal-mask" @touchmove.stop.prevent="" v-show="visible"><div class="modal-wrapper"><div class="modal-container"><div class="modal-header"><slot name="header">{{title}}</slot></div><div class="modal-body" v-html="text"></div><div class="modal-footer"><slot name="footer"><div m-role="cell" m-mode="x-equal"><div m-role="cell"><div m-role="UIButton" m-style="confirm" m-size="min" m-layout="fit" class="UIComfirmSubmit" @click="confirmSure"><slot name="sureButtonText">{{sureBtn}}</slot></div></div><div m-role="cell"><div m-role="UIButton" m-style="confirm" m-size="min" m-layout="fit" class="UIComfirmCancel" @click="confirmCancel"><slot name="cancelButtonText">{{cancelBtn}}</slot></div></div></div></slot></div></div></div></div></transition>',
    UIToast:'<transition name="toast"><div m-role="UIToast" @touchmove.stop.prevent="" v-show="visible"><div class="UIToastContent"><div class="UIToastIco"></div><div class="UIToastContentText" v-show="toastText">{{toastText}}</div></div></div></transition>',
    UILoading:'<transition name="loading"><div m-role="UILoading" @touchmove.stop.prevent="" v-show="visible"><div class="UILoadingContent" ><div class="UILoadingIco"><div class="UILoadingIcoTop"></div><div class="UILoadingIcoMain"></div><div class="UILoadingIcoBtm"></div></div> <div class="UILoadingContentText">{{loadingText}}</div></div></div></transition>',
    UIImg:'<img :src="csrc" :data-src="src" ref="img"/>',
    UIPopup: '<transition :name="modal">'
+ '    <div class="modal-mask" :m-scroll="scroll"  @touchmove.prevent>'
+ '            <div class="popup-content" :class="position"><slot></slot></div>'
+ '   </div>'
+ '</transition>',
UIScroller:'<div class="UIScroller  swiper-container"><div class="scroll-content swiper-wrapper "><div class="swiper-slide"><slot></slot></div></div></div>'
  }
})(window)


Vue.component('uitextfield',{
  template:componentTpl.UITextField,
  props:{
            value:{
                 default:''
            },
            placeholder:{
                 default:'请输入'
            },
            maxlength:{

            },
            type:{
                 default:'text'
            },
            name:{
                default:''
            },
            readonly:{
               
            }

        },
        data:function(){
            return{
                mIconShow:false
            }
        },

        created:function () {
         
        },
        methods:{
          
            updateValue:function(value){

                this.mIconShow=value!==""?true:false
                this.$emit('input', value)
            },
            clearValue:function(){
                this.$emit('input', '');
                this.mIconShow=false
            },
            focusInput:function(value){
                this.mIconShow=value!==""&&!this.readonly?true:false
            },
            blurInput:function(){
              var that=this;
              
              that.mIconShow=false
            
                
            }
        }

});

Vue.component('uiselectfield',{
  template:componentTpl.UISelectField,
   props:{
        options:'',
        value:''

        },
        data:function(){
          return {
            
          }
        },
        computed:{
          text:function(){
            
            var that=this,text='';
            this.options.forEach(function(i){
              if(i.value==that.value){
                text=i.text
              }
            })
            return text;
          }
            
        },
       
        created:function(){
         
        },

        mounted:function () {
        
           
         
        },
        methods:{
          updateValue:function(value){
            this.$emit('input',value)
          },
          change:function(obj){
           this.$emit('change',obj.value)
           this.text=obj.options[obj.selectedIndex].text
          }
           
        }

});


Vue.component('uinavigationbar',{
  template:componentTpl.UINavigationBar,
   props:{
           cls:{
            default:''
           },
           inline:''

        },
        data:function(){
            return{
                width:''
            }
        },
        computed:{

            maxwidth:function(){
                return 0;
            }
        },

        created:function(){
         
        },
        

        mounted:function () {
            
           var that=this;
                 var rightWidth=document.querySelector('[m-role="right"]').offsetWidth;
                 var leftWidth=document.querySelector('[m-role="left"]').offsetWidth;
           
                 that.width=Math.max(rightWidth,leftWidth);

                 if(this.inline){
                  var el= that.$el,child=el.children[0].offsetHeight;
                     window.addEventListener('scroll',function(){
                     window.scrollY>child?el.classList.add("active"):el.classList.remove("active")
                     
                  },false)
                 }
              
            
           
        },
        methods:{
          
           
        }

});

Vue.component('uibottombar',{
  template:componentTpl.UIBottomBar,
        props:{
           show:''
        },
        data:function(){
          return {}
        },
        computed:{
          visible:function(){
            return this.show!=="hidden"?true:false
          }
            
        },

        created:function(){
          
        },

        mounted:function () {
        
           
         
        },
        methods:{
          
           
        }

});

Vue.component('uibottomtabbar',{
  template:componentTpl.UIBottomTabBar,
        props:{
           active:''

        },
        data:function(){
          return {}
        },
        computed:{

            
        },

        created:function(){
          
        },

        mounted:function () {
        
           
         
        },
        methods:{
          
           
        }

});



Vue.component('uiswitch',{
  template:componentTpl.switch,
  props: {
    value: Boolean
  },
  computed: {
    currentValue: {
      get:function() {
        return this.value;
      },
      set:function(val) {
        this.$emit('input', val);
      }
    }
  }

});



Vue.component('uiradio',{
  template:componentTpl.UIRadio,
 
        props:{
          value: '',
          name:'',
          mValue:'',
          disabled:Boolean
        },
        data:function(){
          return {}
        },

    computed: {
    currentValue: {
      get:function() {
        return this.value;
      },
      set:function(val) {
        this.$emit('input', val);
      }
    }
  },

        created:function(){
          
        },

        mounted:function () {
        
 
         
        },
        methods:{
          updateValue:function(){
            this.$emit('input',this.currentValue)
          }
           
        }

});


Vue.component('uicheckbox',{
  template:componentTpl.UICheckBox,
 
         props:{
          value: '',
          name:'',
          mValue:'',
          disabled:Boolean

        },
        data:function(){
          return {
           
          }
        },

    computed: {
    currentValue:{
      get:function(){
        return this.value
      },
      set:function(value){
        this.$emit('input',value)
      }
    }
  },

        created:function(){
          
        },

        mounted:function () {
        
         
        },
        methods:{
          
           
        }

});

Vue.component('uicollapsible',{
  template:componentTpl.UICollapsible,
 
         props:{
         
        },
        data:function(){
          return {}
        },
        computed:{

            
        },

        created:function(){
          
        },

        mounted:function () {
        
           
        },
        methods:{
          
           
        }

});


Vue.component('uicollapsibleitem',{
  template:componentTpl.UICollapsibleItem,
 
        props:{
         
        },
        data:function(){
          return {
            show:false
          }
        },
        computed:{

            
        },

        created:function(){
          
        },

        mounted:function () {
        
           
        },
        methods:{
          collapse:function(){
            var that=this;
            var childs=  this.$parent.$children.filter(function(i,t){
               return i.$el!==that.$el;
            })
           
           childs.forEach(function(i,t){
            i.show=false;
           })

            this.show=!this.show;


            this.$emit('change',this.show)
          }
           
        }
    
});


Vue.component('uisegment',{
  template:componentTpl.UISegment,
 
         props:{
         
        segment:{
            type: Array,
        default:function() {
          return [];
        }
        },
        value:{
          type:String,
          default:''
        },
        },
        data:function(){
          return {
            newsegment:this.segment
          }
        },
        computed:{
          segvalue:function(){

            var that=this;
              var rs=that.newsegment.filter(function(i,t){
               return i.id==that.compActive
                
              });
              return rs[0].value;
          },
          compActive:function(){
            return this.value;
          }

            
        },

        created:function(){
          
        },

        mounted:function () {
        
           
         
        },
        methods:{
          changeSeg:function(seg){
            
            this.$emit('change',seg)
            this.$emit('input',seg.id)
          }
           
        
          }
    
});


Vue.component('uitableview',{
  template:componentTpl.UITableView,
 
        props:{
         

        },
        data:function(){
          return {}
        },
        computed:{

            
        },
       
        created:function(){
          
        },

        mounted:function () {
        
           
         
        },
        methods:{
          
           
        }
});

Vue.component('uitableviewitem',{
  template:componentTpl.UITableViewItem,
 
        props:{
         
            type:''
        },
        data:function(){
          return {}
        },
        computed:{

            
        },

        created:function(){
          
        },

        mounted:function () {
        
           
         
        },
        methods:{
          
           
        }
});




Vue.component('uiimg',{
  template:componentTpl.UIImg,
 
        props:{
         
            defaultsrc:'',
            src:''
        },
        data:function(){
          return {
           visible:false
          }
        },
        computed:{
            csrc:function(){
              return this.defaultsrc
            }
            
        },

        created:function(){
          
           
        },

        mounted:function () {
           var that=this;
           var img=new Image();
           img.src=this.src;
           if(img.complete){
             that.$refs.img.src=this.src
           }else{
            img.onload=function(){
            that.$refs.img.src=this.src
           }
           }
         
        },
        methods:{
          
           
        }
});

Vue.component('uipopup',{
  template:componentTpl.UIPopup,
 
        props: {
      modal: {
        type:'string',
        default:'modal'
      },
      position:{
        type:'string',
        default:'bottom'
      },
      scroll:{
        type:Boolean,
        default:false
      }
    },

    data() {
      return {
      
      };
    },

    watch: {
     
    },

  
    mounted:function() {

     
    }
});



Vue.component('scroller',{
  template:componentTpl.UIScroller,
 
        props: {
      modal: {
        type:'string',
        default:'modal'
      },
      position:{
        type:'string',
        default:'bottom'
      },
      scroll:{
        type:Boolean,
        default:false
      }
    },

    data() {
      return {
      
      };
    },

    watch: {
     
    },
    created:function(){

    },
    mounted:function() {
      var that=this;
      require(['swiper'],function(swiper){
     
        new Swiper(that.$el, {
        direction: 'vertical',
           freeMode: true,
           observer:true,
           observeParents:true,
        slidesPerView: 'auto'
    });
                     

                    })
     
    }
});



(function($){
  var loading= Vue.extend({
  template:componentTpl.UILoading,
     props:{
          loadingShow:{
            default:false
          },
          loadingText:{
            default:''
          } 

        },
        data:function(){
          return {
           visible:false
          }
        },
        computed:{

            
        },

        created:function(){
          
        },

        mounted:function () {
        
           
         
        },
        methods:{
          
           
        }

});
  var instance;
  $.loading={
  show:function(options){
    if (!instance) {
      instance = new loading({
        el: document.createElement('div')
      });
    }
    if (instance.visible) return;
    instance.loadingText = typeof options === 'string' ? options : options.loadingText || '';
    document.body.appendChild(instance.$el);

    Vue.nextTick(function(){
      instance.visible = true;
    });
  },
  close:function(){
     if (instance) {
      instance.visible = false;
    }
  }
}
})(Vue.prototype);


(function($){
  var toast= Vue.extend({
  template:componentTpl.UIToast,
       props:{
          toastShow:{
            default:false
          },
          toastText:{
            default:''
          } 

        },
        data:function(){
          return {
           visible:false
          }
        },
        computed:{

            
        },

        created:function(){
          
        },

        mounted:function () {
        
           
         
        },
        methods:{
          
           
        }

});
  var instance,st;
  $.toast={
  show:function(options){
    if (!instance) {
      instance = new toast({
        el: document.createElement('div')
      });
    }
    if (instance.visible) return;
    instance.toastText = typeof options === 'string' ? options : options.toastText || '';
    document.body.appendChild(instance.$el);
    time=typeof options === 'string' ? 1000 : options.time || 1000;
    Vue.nextTick(function(){
      instance.visible = true;

      st=setTimeout(function(){
         instance.visible = false;
      },time)
    });
  },
  close:function(){
     if (instance) {
      clearTimeout(st)
      instance.visible = false;
    }
  }
}
})(Vue.prototype);


(function($){
  var alert= Vue.extend({
  template:componentTpl.UIAlert,
      props:{
         
        },
        data:function(){
          return {
            visible:false,
            title:'友情提示',
            text:'',
            buttonText:'确定',
            callback:null
          }
        },
        computed:{

            
        },
       

        created:function(){
          
        },

        mounted:function () {
        
           
         
        },
        methods:{
           closeAlert:function(callback){
          this.visible=false;
          this.callback&&this.callback(this);
        },
           
        }

});
  var instance;
  $.alert={
  show:function(options){
    if (!instance) {
      instance = new alert({
        el: document.createElement('div')
      });
    }
    if (instance.visible) return;
    instance.text = typeof options === 'string' ? options : options.text || '';
    instance.title = typeof options === 'string' ? instance.title : options.title || instance.title;
    instance.buttonText = typeof options === 'string' ? instance.buttonText : options.buttonText || instance.buttonText;
    instance.callback = typeof options === 'string' ? instance.callback : options.callback || instance.callback;
    document.body.appendChild(instance.$el);
    Vue.nextTick(function(){
      instance.visible = true;

    
    });
  },
  close:function(){
     if (instance) {
      instance.visible = false;
    }
  }
}
})(Vue.prototype);

(function($){
  var confirm= Vue.extend({
  template:componentTpl.UIConfirm,
      props:{
         
        },
        data:function(){
          return {
            visible:false,
            title:'友情提示',
            text:'',
            sureBtn:'确定',
            cancelBtn:'取消',
            callback:null,

          }
        },
        computed:{

            
        },
       

        created:function(){
          
        },

        mounted:function () {
        
           
         
        },
        methods:{
           closeAlert:function(callback){
          
        },

        confirmSure:function(){
          this.visible=false;
          this.callback&&this.callback(true,this);
            
        },

        confirmCancel:function(){
          this.visible=false;
          this.callback&&this.callback(false,this);
        },


           
        }

});
  var instance;
  $.confirm={
  show:function(options){
    if (!instance) {
      instance = new confirm({
        el: document.createElement('div')
      });
    }
    if (instance.visible) return;
    instance.text = typeof options === 'string' ? options : options.text || '';
    instance.title = typeof options === 'string' ? instance.title : options.title || instance.title;
    instance.sureBtn = typeof options === 'string' ? instance.sureBtn : options.sureBtn || instance.sureBtn;
    instance.cancelBtn = typeof options === 'string' ? instance.cancelBtn : options.cancelBtn || instance.cancelBtn;
    instance.callback = typeof options === 'string' ? instance.callback : options.callback || instance.callback;
    document.body.appendChild(instance.$el);
    Vue.nextTick(function(){
      instance.visible = true;
    });
  },
  close:function(){
     if (instance) {
      instance.visible = false;
    }
  }
}
})(Vue.prototype);

});




