define(['vue', 'api', 'components'], function(Vue, api, m) {


  return  api.getLoginTpl().then(function(res) {

        html = res.body;

        (function($) {
            var login = Vue.extend({
                template: html,
                components: m.UI,
                props: {

                },
                data: function() {
                    return {
                        phone: '',
                        pass: '',
                        visible: false,
                        rem: true
                    }


                },

                created: function() {

                },

                mounted: function() {

                },

                methods: {

                    hidelogin:function(){
                        this.visible=false
                    }
                }

            });
            var instance;
            $.login = {
                show: function(options) {
                    if (!instance) {
                        instance = new login({
                            el: document.createElement('div')
                        });
                    }
                    if (instance.visible) return;

                    document.body.appendChild(instance.$el);

                    Vue.nextTick(function() {
                        instance.visible = true;

                         

                    });
                },
                close: function() {
                    if (instance) {
                        instance.visible = false;
                    }
                },
                reset: function() {
                    if (instance) {
                        instance.rs = [];
                        instance.paywait = false;
                    }
                },
                getValue: function() {
                    if (instance) {
                        return instance.rs;
                    }
                }
            }
        })(Vue.prototype);

        



    }, function() {
        Vue.prototype.toast.show("获取登录页面模板失败")
    });


});
