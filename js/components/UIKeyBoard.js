define(['vue', 'api'], function(Vue, api) {
    var html = '<transition name="modal">' +
        '    <div class="modal-mask" v-show="visible" m-role="UIKeyBoard" @touchmove.stop.prevent="">' +
        '              <div class="uikeyboard-box">' +
        '    <div class="uikeyboard-box-main">' +
        '            <div class="uikeyboard-box-topbar">' +
        '        <div m-role="left" class="close-uikeyboard-box" @click="closepsw">' +
        '            <div class="arrow-left"></div>' +
        '        </div>' +
        '        <div m-role="title" class="m-color-33" v-html="title"></div>' +
        '        <div m-role="right"></div>' +
        '    </div>' +
        '        <div class="pay-info" v-html="info"></div>' +
        '        <div m-role="cell" m-mode="x-equal" class="psw-block">' +
        '            <div class="pay-msg" v-show="paywait">' +
        '                <div m-role="cell" m-layout="fit" m-align="center">' +
        '                    <div m-role="cell" m-valign="middle">' +
        '                        <div class="spinner">' +
        '                            <div class="spinner-container container1">' +
        '                                <div class="circle1"></div>' +
        '                                <div class="circle2"></div>' +
        '                                <div class="circle3"></div>' +
        '                                <div class="circle4"></div>' +
        '                            </div>' +
        '                            <div class="spinner-container container2">' +
        '                                <div class="circle1"></div>' +
        '                                <div class="circle2"></div>' +
        '                                <div class="circle3"></div>' +
        '                                <div class="circle4"></div>' +
        '                            </div>' +
        '                            <div class="spinner-container container3">' +
        '                                <div class="circle1"></div>' +
        '                                <div class="circle2"></div>' +
        '                                <div class="circle3"></div>' +
        '                                <div class="circle4"></div>' +
        '                            </div>' +
        '                        </div>' +
        '                    </div>' +
        '                    <div m-role="cell" m-valign="middle" v-html="waitText"></div>' +
        '                </div>' +
        '            </div>' +
        '            <div m-role="cell" class="psw-block-item" v-for="(item, index) in pslength">' +
        '                <div class="psw-dot" v-show="rs[index]!==undefined"></div>' +
        '            </div>' +
        '        </div>' +
        '  ' +
        '    </div>' +
        '          <div m-role="cell" m-mode="y" m-valign="middle" class="keyboard-panel">' +
        '            <div m-role="cell" m-mode="x-equal">' +
        '                <div m-role="cell" m-mode="y" class="kb-btn" @click="setValues(item.key)" :key-value="item.key" v-for="item in oneCell">' +
        '                    <div m-role="cell" class="kb-num">{{item.key}}</div>' +
        '                    <div m-role="cell" class="kb-letter">{{item.value}}</div>' +
        '                </div>' +
        '               ' +
        '            </div>' +
        '            <div m-role="cell" m-mode="x-equal">' +
        '                <div m-role="cell" m-mode="y" class="kb-btn" @click="setValues(item.key)" :key-value="item.key" v-for="item in twoCell">' +
        '                    <div m-role="cell" class="kb-num">{{item.key}}</div>' +
        '                    <div m-role="cell" class="kb-letter">{{item.value}}</div>' +
        '                </div>' +
        '            </div>' +
        '            <div m-role="cell" m-mode="x-equal">' +
        '                <div m-role="cell" m-mode="y" class="kb-btn" @click="setValues(item.key)" :key-value="item.key" v-for="item in threeCell">' +
        '                  <div m-role="cell" class="kb-num">{{item.key}}</div>' +
        '                    <div m-role="cell" class="kb-letter">{{item.value}}</div>' +
        '                </div>' +
        '               ' +
        '            </div>' +
        '            <div m-role="cell" m-mode="x-equal">' +
        '                <div m-role="cell" m-mode="y" class="kb-btn kb-reset" @click="resetValue()">' +
        '                    <div m-role="cell">' +
        '                        <div class="kb-ico"></div>' +
        '                    </div>' +
        '                </div>' +
        '                <div m-role="cell" m-mode="y" class="kb-btn" key-value="0" @click="setValues(0)">' +
        '                    <div m-role="cell" class="kb-num">0</div>' +
        '                    <div m-role="cell"></div>' +
        '                </div>' +
        '                <div m-role="cell" m-mode="y" class="kb-btn kb-del" @click="delValue()">' +
        '                    <div m-role="cell">' +
        '                        <div class="kb-ico"></div>' +
        '                    </div>' +
        '                </div>' +
        '            </div>' +
        '        </div>' +
        '</div>' +
        '        </div>' +
        '  </transition>';
    (function($) {
        var keyboard = Vue.extend({
            template: html,
            props: {
               
            },
            data: function() {
                return {
                    title: '请输入密码',
                    visible: false,
                    space: [{
                        key: 1,
                        value: ''
                    }, {
                        key: 2,
                        value: 'ABC'
                    }, {
                        key: 3,
                        value: 'DEF'
                    }, {
                        key: 4,
                        value: 'GHI'
                    }, {
                        key: 5,
                        value: 'JKL'
                    }, {
                        key: 6,
                        value: 'MNO'
                    }, {
                        key: 7,
                        value: 'PQRS'
                    }, {
                        key: 8,
                        value: 'TUV'
                    }, {
                        key: 9,
                        value: 'WXYZ'
                    }],
                    rs: [],
                    callback: null,
                    paywait: false,
                    info: '',
                    waitText: '正在校验，请稍候…'
                }
            },
            computed: {
                oneCell: function() {
                    return this.space.slice(0, 3)
                },
                twoCell: function() {
                    return this.space.slice(3, 6)
                },
                threeCell: function() {
                    return this.space.slice(6, 9)
                },
                pslength: function() {
                    return [1, 2, 3, 4, 5, 6]
                }


            },

            created: function() {

            },

            mounted: function() {

            },
            watch: {
                rs: function(v) {

                	var that=this;
                     
                    if (this.rs.length === this.pslength.length) {
                        this.$emit('callback', this.rs)

                        setTimeout(function(){
                             that.paywait = true;
                         that.callback && that.callback(that.rs)
                     },50)
                        
                        

                       
                    }

                }
            },
            methods: {
                setValues: function(val) {

                    if (this.rs.length < this.pslength.length) {
                        this.rs.push(val);
                        this.$emit('input', this.rs)
                    }

                },
                resetValue: function() {
                    this.rs = [];
                    this.$emit('input', this.rs)
                },
                delValue: function() {
                    this.rs.splice(-1)
                    this.$emit('input', this.rs)
                },
                closepsw: function() {
                    this.visible = false;
                    //this.$emit('close')
                }


            }

        });
        var instance;
        $.UIKeyBoard = {
            show: function(options) {
                if (!instance) {
                    instance = new keyboard({
                        el: document.createElement('div')
                    });
                }
                if (instance.visible) return;

                if(!options){
                    instance.title = instance.title;
                instance.callback =  instance.callback;
                instance.info =  instance.info;
                instance.waitText =  instance.waitText;
                }else{
                    instance.title = options && typeof options === 'string' ? options : options.title || instance.title;
                instance.callback = typeof options === 'string' ? instance.callback : options.callback || instance.callback;
                instance.info = typeof options === 'string' ? instance.info : options.info || instance.info;
                instance.waitText = typeof options === 'string' ? instance.waitText : options.waitText || instance.waitText;
                }

                


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

});
