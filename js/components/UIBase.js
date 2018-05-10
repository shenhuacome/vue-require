define(["vue"], function(Vue) {
  var componentTpl = {
    UIBottomBar:
      '<div m-role="UIBottomBar" v-if="visible">' +
      '        <div class="UIBottomBarRoom">' +
      "            <slot></slot>" +
      "        </div>" +
      "        </div>",

    UIBottomTabBar:
      '<div m-role="cell" m-align="center" m-layout="fit" m-mode="x-equal">' +
      '  <a m-role="cell" m-mode="y" href="index.html" m-align="center" class="tab-link" :class="active==1?\'active\':\'\'">' +
      '    <div m-role="cell"><i class="tbar-icon tbar-icon1"></i></div>' +
      '    <div m-role="cell">首页</div>' +
      "  </a>" +
      '  <a m-role="cell" m-mode="y" href="list.html" m-align="center" class="tab-link " :class="active==2?\'active\':\'\'"> ' +
      '    <div m-role="cell"><i class="tbar-icon tbar-icon2"></i></div>' +
      '    <div m-role="cell">列表</div>' +
      "  </a>        " +
      '  <a m-role="cell" m-mode="y" m-href="asset.html" m-align="center" class="tab-link" :class="active==3?\'active\':\'\'">' +
      '    <div m-role="cell"><i class="tbar-icon tbar-icon3"></i></div>' +
      '    <div m-role="cell">资产</div>' +
      "  </a>" +
      '  <a m-role="cell" m-mode="y" href="me.html" m-align="center" class="tab-link" :class="active==4?\'active\':\'\'">' +
      '    <div m-role="cell"><i class="tbar-icon tbar-icon4"></i></div>' +
      '    <div m-role="cell">我</div>' +
      "  </a>" +
      "</div>",

    switch:
      ' <label class="ui-switch">' +
      '    <input class="ui-switch-input" @change="$emit(\'change\', currentValue)" type="checkbox" v-model="currentValue">' +
      '    <span class="ui-switch-core"></span>' +
      '    <div class="ui-switch-label"><slot></slot></div>' +
      "  </label>",

    UIRadio:
      '<div m-role="UIRadio" :m-checked="currentValue==mValue?\'yes\':\'\'" :class="{disabled:disabled}">' +
      '  <label> <i class="UIRadio-icon"></i><input  type="radio" :disabled="disabled"     :name="name" v-model="currentValue" :value="mValue" /><slot></slot></label>' +
      "  </div>",

    UICheckBox:
      '<div m-role="UICheckBox" :m-checked="currentValue==true?\'yes\':\'\'" :class="{disabled:disabled}">' +
      '  <label> <i class="UICheck-icon"></i><input  type="checkbox"  :disabled="disabled"   :name="name" v-model="currentValue" :value="mValue" /><slot></slot></label>' +
      "  </div>",

    UICheckBoxList:
      '<div m-role="UITableView"    :class="{ \'max-limit\': max <= currentValue.length ,\'align-right\': position === \'right\'}"><dl><dd v-for="item in options"><div m-layout="fit" m-role="UICheckBox" :class="{disabled:item.disabled}" ref="UICheckBox"  :m-checked="currentValue.indexOf(item.value||item)!==-1?\'yes\':\'\'"   class=""><label><i class="UICheck-icon"></i><input type="checkbox" :disabled="item.disabled"    v-model="currentValue" :value="item.value||item">{{item.label || item}}</label></div></dd></dl></div>',

    UICollapsible:
      ' <div m-role="UICollapsible">' +
      "        " +
      "          <ul>" +
      "             <slot></slot>" +
      "          </ul>" +
      "        " +
      "    </div>",
    UICollapsibleItem:
      " <li :m-active=\"show?'yes':''\">" +
      '                <div m-role="title" @click="collapse">' +
      '                <slot name="title"></slot>' +
      '                <div class="UICollapsibleArrow" m-icon="arrowup" ></div>' +
      "                </div>" +
      '                <div m-role="content">' +
      "                " +
      '                <slot name="content">' +
      "                    " +
      "                </slot>" +
      "                </div>" +
      "            </li>",

    UISegment:
      '<div m-role="UISegment" m-id="demo-seg"  class="test">' +
      "        <ul>" +
      '            <li v-html="segItem.text" :m-id="segItem[\'id\']" :m-value="segItem[\'value\']" v-for="segItem in newsegment" :m-active="segItem[\'id\']==compActive?\'yes\':\'\'" @touchend="changeSeg(segItem)">' +
      "            </li>" +
      "        </ul>" +
      '        <input class="UISegmentHiddenInput" type="hidden" :value="segvalue">' +
      "    </div>",
    UITableView:
      '<div m-role="UITableView">' +
      "        <dl>" +
      "         <slot></slot>" +
      "        </dl>" +
      "      </div>",
    UITableViewItem:
      '<dd :m-type="type">' +
      ' <div m-layout="fit" m-role="cell">' +
      '  <slot></slot></div><div v-if="type==\'arrow\'" class="UITableViewArrow" m-icon="arrow"></div><div v-if="type==\'mark\'" class="UITableViewMarkWrap"><div class="UITableViewMark" m-icon="mark"></div></div>' +
      "</dd>",
    UITextField:
      '<div m-role="UITextField" :readonly="readonly" ><input :readonly="readonly"  :maxlength="maxlength" :name="name" :type="type" :value="value" :placeholder="placeholder"  @focus="focusInput($event.target.value)" @blur="blurInput($event.target.value)"  @input="updateValue($event.target.value)"><div class="UITextFieldClear" m-icon="clear"  v-show="mIconShow" @mousedown="clearValue" ></div></div>',
    UISelectField:
      '<div m-role="UISelectField" m-layout="fit"><select :disabled="disabled" @input="updateValue($event.target.value)" :value="value" @change="change($event.target)"><option v-for="option in options" :value="option.value" :disabled="option.disabled">{{option.text}}</option></select><div m-icon="arrowdown"></div><div m-role="cell" class="UISelectFieldText">{{text}}</div></div>',
    UINavigationBar:
      '<div m-role="UINavigationBar"  :inline="inline" ><div class="UINavigationBarRoom"><div m-role="left" v-bind:style="{width:width+\'px\'}"><slot name="left"></slot></div><div m-role="title"><slot name="title">首页</slot></div><div m-role="right" v-bind:style="{width:width+\'px\'}"><slot name="right"></slot></div></div></div>',
    UIAlert:
      '<transition name="modal"><div class="modal-mask" @touchmove.stop.prevent="" v-if="visible"><div class="modal-wrapper"><div class="modal-container"><div class="modal-header"><slot name="header">{{title}}</slot></div><div class="modal-body" v-html="text"></div><div class="modal-footer"><slot name="footer"><div m-role="UIButton" m-style="alert" m-size="min" m-layout="fit" class="UIAlertSubmit" @click="closeAlert"><slot name="ButtonText">{{buttonText}}</slot></div></slot></div></div></div></div></transition>',
    UIConfirm:
      '<transition name="modal"><div class="modal-mask" @touchmove.stop.prevent="" v-if="visible"><div class="modal-wrapper"><div class="modal-container"><div class="modal-header"><slot name="header">{{title}}</slot></div><div class="modal-body" v-html="text"></div><div class="modal-footer"><slot name="footer"><div m-role="cell" m-mode="x-equal"><div m-role="cell"><div m-role="UIButton" m-style="confirm" m-size="min" m-layout="fit" class="UIComfirmSubmit" @click="confirmSure"><slot name="sureButtonText">{{sureBtn}}</slot></div></div><div m-role="cell"><div m-role="UIButton" m-style="confirm" m-size="min" m-layout="fit" class="UIComfirmCancel" @click="confirmCancel"><slot name="cancelButtonText">{{cancelBtn}}</slot></div></div></div></slot></div></div></div></div></transition>',
    UIToast:
      '<transition name="toast"><div m-role="UIToast" @touchmove.stop.prevent="" v-if="visible"><div class="UIToastContent"><div class="UIToastIco"></div><div class="UIToastContentText" v-show="toastText">{{toastText}}</div></div></div></transition>',
    UILoading:
      '<transition name="loading"><div m-role="UILoading" @touchmove.stop.prevent="" v-if="visible"><div class="UILoadingContent" ><div class="UILoadingIco"><div class="UILoadingIcoTop"></div><div class="UILoadingIcoMain"></div><div class="UILoadingIcoBtm"></div></div> <div class="UILoadingContentText">{{loadingText}}</div></div></div></transition>',
    UIImg: '<img :src="csrc" :data-src="src" ref="img"/>',
    UIPopup:
      '<transition :name="modal">' +
      '    <div class="modal-mask" :m-scroll="scroll"  @touchmove.prevent>' +
      '            <div class="popup-content" :class="position"><slot></slot></div>' +
      "   </div>" +
      "</transition>",
    UIScroller:
      '<div class="UIScroller  swiper-container"><div class="scroll-refresh" ref="refresh" v-html="refreshText"></div><div class="scroll-content swiper-wrapper " ref="wrapper"><div class="swiper-slide" ref="slide"><slot></slot><div class="loadText" v-if="loadTextshow" v-html="loadText"></div></div></div></div>',
    UIDateField:
      '<div  m-role="UIDateField" :m-min="min" :m-max="max" :m-preset="preset"   :m-stepminute="stepminute" ><div @click="showDate" class="UIDateFieldHandler"></div><input :placeholder="placeholder" type="text" ref="datefield"   v-model="currentValue"/><div class="UIDateFieldIcon"></div></div>',
    UIButton:
      '<div m-role="UIButton" :class="{active:active}"  @click="click($event.target)" :m-disabled="mDisabled" @touchstart="ts($event.target)" @touchend="td($event.target)"><i class="UIButtonMask"></i><slot></slot></div>'
  };

  var UINavigationBar = Vue.extend({
    template: componentTpl.UINavigationBar,
    props: {
      cls: {
        default: ""
      },
      inline: ""
    },
    data: function() {
      return {
        width: ""
      };
    },
    computed: {
      maxwidth: function() {
        return 0;
      }
    },

    created: function() {},

    mounted: function() {
      var that = this;
      Vue.nextTick(function() {
        setTimeout(function() {
          var rightWidth = document.querySelector('[m-role="right"]')
            .offsetWidth;
          var leftWidth = document.querySelector('[m-role="left"]').offsetWidth;
          that.width = Math.max(rightWidth, leftWidth);
        }, 0);

        if (that.inline) {
          var el = that.$el,
            child = el.children[0].offsetHeight;
          window.addEventListener(
            "scroll",
            function() {
              window.scrollY > child
                ? el.classList.add("active")
                : el.classList.remove("active");
            },
            false
          );
        }
      });
    },
    methods: {}
  });

  var UIButton = Vue.extend({
    template: componentTpl.UIButton,
    props: {
      mDisabled: {
        default: "false"
      }
    },
    data: function() {
      return {
        active: false
      };
    },

    computed: function() {},
    created: function() {},
    methods: {
      ts: function(t) {
        if (this.mDisabled != "true") {
          this.$emit("touchstart", t);
          this.active = true;
        }
      },
      td: function(t) {
        if (this.mDisabled != "true") {
          this.$emit("touchend", t);
          this.active = false;
        }
      },
      click: function(t) {
        if (this.mDisabled != "true") {
          this.$emit("click", t);
        }
      }
    }
  });

  var UITextField = Vue.extend({
    template: componentTpl.UITextField,
    props: {
      value: {
        default: ""
      },
      placeholder: {
        default: "请输入"
      },
      maxlength: {},
      type: {
        default: "text"
      },
      name: {
        default: ""
      },
      readonly: {}
    },
    data: function() {
      return {
        mIconShow: false
      };
    },

    computed: function() {},
    created: function() {},
    methods: {
      updateValue: function(value) {
        this.mIconShow = value !== "" ? true : false;
        this.$emit("input", value);
      },
      clearValue: function() {
        this.$emit("input", "");
        this.mIconShow = false;
      },
      focusInput: function(value) {
        this.mIconShow = value !== "" && !this.readonly ? true : false;
      },
      blurInput: function() {
        var that = this;

        that.mIconShow = false;
      }
    }
  });

  var UISelectField = Vue.extend({
    template: componentTpl.UISelectField,
    props: {
      options: "",
      value: "",
      disabled: false
    },
    data: function() {
      return {};
    },
    computed: {
      text: function() {
        var that = this,
          text = "";
        this.options.forEach(function(i) {
          if (i.value == that.value) {
            text = i.text;
          }
        });
        return text;
      }
    },

    created: function() {},

    mounted: function() {},
    methods: {
      updateValue: function(value) {
        this.$emit("input", value);
      },
      change: function(obj) {
        this.$emit("change", obj.value);
        this.text = obj.options[obj.selectedIndex].text;
      }
    }
  });

  var UIBottomBar = Vue.extend({
    template: componentTpl.UIBottomBar,
    props: {
      show: ""
    },
    data: function() {
      return {};
    },
    computed: {
      visible: function() {
        return this.show !== "hidden" ? true : false;
      }
    },

    created: function() {},

    mounted: function() {},
    methods: {}
  });

  var UIBottomTabBar = Vue.extend({
    template: componentTpl.UIBottomTabBar,
    props: {
      active: ""
    },
    data: function() {
      return {};
    },
    computed: {},

    created: function() {},

    mounted: function() {},
    methods: {}
  });

  var UISwitch = Vue.extend({
    template: componentTpl.switch,
    props: {
      value: Boolean
    },
    computed: {
      currentValue: {
        get: function() {
          return this.value;
        },
        set: function(val) {
          this.$emit("input", val);
        }
      }
    }
  });

  var UIRadio = Vue.extend({
    template: componentTpl.UIRadio,

    props: {
      value: "",
      name: "",
      mValue: "",
      disabled: Boolean
    },
    data: function() {
      return {};
    },

    computed: {
      currentValue: {
        get: function() {
          return this.value;
        },
        set: function(val) {
          this.$emit("input", val);
        }
      }
    },

    created: function() {},

    mounted: function() {},
    methods: {
      updateValue: function() {
        this.$emit("input", this.currentValue);
      }
    }
  });

  var UICheckBox = Vue.extend({
    template: componentTpl.UICheckBox,

    props: {
      value: "",
      name: "",
      mValue: "",
      disabled: Boolean
    },
    data: function() {
      return {};
    },

    computed: {
      currentValue: {
        get: function() {
          return this.value;
        },
        set: function(value) {
          this.$emit("input", value);
        }
      }
    },

    created: function() {},

    mounted: function() {},
    methods: {}
  });

  var UICheckBoxList = Vue.extend({
    template: componentTpl.UICheckBoxList,

    props: {
      options: {
        type: Array,
        required: true
      },
      value: Array,
      max: Number,
      position: String
    },
    data: function() {
      return {
        currentValue: this.value
      };
    },
    computed: {
      limit: function() {
        return this.max < this.currentValue.length;
      }
    },

    watch: {
      value: function(val) {
        this.currentValue = val;
      },

      currentValue: function(val) {
        if (this.limit) val.pop();
        this.$emit("input", val);
      }
    },

    created: function() {},

    mounted: function() {},
    methods: {}
  });

  var UICollapsible = Vue.extend({
    template: componentTpl.UICollapsible,

    props: {},
    data: function() {
      return {};
    },
    computed: {},

    created: function() {},

    mounted: function() {},
    methods: {}
  });

  var UICollapsibleItem = Vue.extend({
    template: componentTpl.UICollapsibleItem,

    props: {},
    data: function() {
      return {
        show: false
      };
    },
    computed: {},

    created: function() {},

    mounted: function() {},
    methods: {
      collapse: function() {
        var that = this;
        var childs = this.$parent.$children.filter(function(i, t) {
          return i.$el !== that.$el;
        });

        childs.forEach(function(i, t) {
          i.show = false;
        });

        this.show = !this.show;

        this.$emit("change", this.show);
      }
    }
  });

  var UISegment = Vue.extend({
    template: componentTpl.UISegment,

    props: {
      segment: {
        type: Array,
        default: function() {
          return [];
        }
      },
      value: {
        type: String,
        default: ""
      }
    },
    data: function() {
      return {
        newsegment: this.segment
      };
    },
    computed: {
      segvalue: function() {
        var that = this;
        var rs = that.newsegment.filter(function(i, t) {
          return i.id == that.compActive;
        });
        return rs[0].value;
      },
      compActive: function() {
        return this.value;
      }
    },

    created: function() {},

    mounted: function() {},
    methods: {
      changeSeg: function(seg) {
        this.$emit("change", seg);
        this.$emit("input", seg.id);
      }
    }
  });

  var UITableView = Vue.extend({
    template: componentTpl.UITableView,

    props: {},
    data: function() {
      return {};
    },
    computed: {},

    created: function() {},

    mounted: function() {},
    methods: {}
  });

  var UITableViewItem = Vue.extend({
    template: componentTpl.UITableViewItem,

    props: {
      type: ""
    },
    data: function() {
      return {};
    },
    computed: {},

    created: function() {},

    mounted: function() {},
    methods: {}
  });

  var UIImg = Vue.extend({
    template: componentTpl.UIImg,

    props: {
      defaultsrc: "",
      src: ""
    },
    data: function() {
      return {
        visible: false
      };
    },
    computed: {
      csrc: function() {
        return this.defaultsrc;
      }
    },

    created: function() {},

    mounted: function() {
      var that = this;
      var img = new Image();
      img.src = this.src;
      if (img.complete) {
        that.$refs.img.src = this.src;
      } else {
        img.onload = function() {
          that.$refs.img.src = this.src;
        };
      }
    },
    methods: {}
  });

  var UIPopup = Vue.extend({
    template: componentTpl.UIPopup,

    props: {
      modal: {
        type: "string",
        default: "modal"
      },
      position: {
        type: "string",
        default: "bottom"
      },
      scroll: {
        type: Boolean,
        default: false
      }
    },

    data: function() {
      return {};
    },

    watch: {},

    mounted: function() {}
  });

  var UIScroller = Vue.extend({
    template: componentTpl.UIScroller,

    props: {
      modal: {
        type: "string",
        default: "modal"
      },
      position: {
        type: "string",
        default: "bottom"
      },
      scroll: {
        type: Boolean,
        default: false
      },
      scrollload: {
        type: Boolean,
        default: false
      },
      canrefresh: {
        type: Boolean,
        default: false
      }
    },

    data: function() {
      return {
        refreshText: "",
        loadTextshow: false,
        loadText: "上拉加载更多",
        isAllLoaded: false
      };
    },
    computed: {
      canLoad: {
        get: function() {
          return this.scrollload;
        },
        set: function(v) {
          this.loadTextshow = v;
        }
      }
    },

    watch: {},
    methods: {
      loadCompleted: function() {
        this.isAllLoaded = true;
        this.loadText = "没有数据了";
      }
    },
    created: function() {},
    mounted: function() {
      var that = this;

      require(["swiper"], function(swiper) {
        var loadFlag = true;
        var refreshFlag = false;
        var swiper = new Swiper(that.$el, {
          direction: "vertical",
          freeMode: true,
          observer: true,
          observeParents: true,
          slidesPerView: "auto"
        });

        var warp = that.$refs.wrapper,
          slide = that.$refs.slide;

        var loadtag = slide.offsetHeight > warp.offsetHeight;
        swiper.on("TouchEnd", function(swiper) {
          loadtag = slide.offsetHeight > warp.offsetHeight;

          //下拉加载

          if (that.canLoad) {
            if (loadtag) {
              that.canLoad = true;

              if (!that.isAllLoaded) {
                if (swiper.isEnd) {
                  that.loadText = "正在加载";
                  that.$emit("load", swiper, that);
                } else {
                  that.loadText = "上拉加载更多";
                }
              }
            } else {
              that.canLoad = false;
            }
          }

          //上拉刷新

          if (that.canrefresh) {
            if (swiper.translate > 70) {
              that.refreshText = "正在刷新";
              that.isAllLoaded = false;
              that.$emit("refresh", swiper, that);
            }
          }
        });

        swiper.on("TouchMove", function(swiper) {
          if (that.canrefresh) {
            if (swiper.translate < 70 && swiper.translate > 0) {
              that.refreshText = "下拉刷新";
            } else if (swiper.translate > 70) {
              that.refreshText = "释放刷新";
            }
          }
        });
      });
    }
  });
  var UIDateField = Vue.extend({
    template: componentTpl.UIDateField,

    props: {
      min: {
        type: "string",
        default: ""
      },
      max: {
        type: "string",
        default: ""
      },
      preset: {
        type: "string",
        default: "date"
      },
      stepminute: {
        type: "string",
        default: "5"
      },
      value: {
        type: "string",
        default: ""
      },
      placeholder: {
        type: "string",
        default: ""
      }
    },

    data: function() {
      var that = this;
      return {
        opt: {
          theme: "ios", //皮肤样式
          display: "bottom", //显示方式
          mode: "scroller", //日期选择模式
          lang: "zh",
          startYear: new Date().getFullYear() - 10, //开始年份
          endYear: new Date().getFullYear() + 10, //结束年份
          dateFormat: "yy-mm-dd",
          dateOrder: "yymmdd",
          dayNames: ["周日", "周一;", "周二;", "周三", "周四", "周五", "周六"],
          dayNamesShort: ["日", "一", "二", "三", "四", "五", "六"],
          dayText: "日",
          hourText: "时",
          minuteText: "分",
          monthNames: [
            "一月",
            "二月",
            "三月",
            "四月",
            "五月",
            "六月",
            "七月",
            "八月",
            "九月",
            "十月",
            "十一月",
            "十二月"
          ],
          monthNamesShort: [
            "1月",
            "2月",
            "3月",
            "4月",
            "5月",
            "6月",
            "7月",
            "8月",
            "9月",
            "10月",
            "11月",
            "12月"
          ],
          monthText: "月",
          secText: "秒",
          timeFormat: "HH:ii",
          timeWheels: "HHii",
          yearText: "年",
          setText: "确定",
          cancelText: "取消",
          rows: this.stepminute,
          preset: this.preset,
          onSelect: function(v) {
            that.$emit("input", v);
          }
        },
        mIconShow: false
      };
    },

    watch: {},
    computed: {
      currentValue: {
        get: function() {
          return this.value;
        },
        set: function(val) {
          console.log(val);
          this.$emit("input", val);
        }
      }
    },
    created: function() {},
    mounted: function() {
      var that = this;
      var mindate = this.min
        ? new Date(Date.parse(this.min.replace(/-/g, "/")))
        : new Date(new Date().getFullYear(), 0, 0, 0, 0);
      var maxdate = this.max
        ? new Date(Date.parse(this.max.replace(/-/g, "/")))
        : new Date(new Date().getFullYear() + 10, 0, 0, 0, 0);

      if (this.min) {
        that.opt.minDate = mindate;
      }
      if (this.max) {
        that.opt.maxDate = maxdate;
      }
      require(["datetime"], function() {
        $(that.$refs.datefield).mobiscroll(that.opt);
      });
    },
    methods: {
      clearValue: function() {
        this.currentValue = "";
      },
      showDate: function() {
        $(this.$refs.datefield).mobiscroll("show");
      }
    }
  });

  return {
    UI: {
      UINavigationBar: UINavigationBar,
      UIButton: UIButton,
      UITextField: UITextField,
      UIBottomBar: UIBottomBar,
      UIBottomTabBar: UIBottomTabBar,
      UISwitch: UISwitch,
      UIRadio: UIRadio,
      UICheckBox: UICheckBox,
      UICollapsible: UICollapsible,
      UICollapsibleItem: UICollapsibleItem,
      UISegment: UISegment,
      UITableView: UITableView,
      UITableViewItem: UITableViewItem,
      UIImg: UIImg,
      UIPopup: UIPopup,
      UIScroller: UIScroller,
      UIDateField: UIDateField,
      UICheckBoxList: UICheckBoxList
    },

    init: function() {
      Vue.component("uibutton", UIButton);
      Vue.component("uitextfield", UITextField);
      Vue.component("uiselectfield", UISelectField);
      Vue.component("uinavigationbar", UINavigationBar);
      Vue.component("uibottombar", UIBottomBar);
      Vue.component("uibottomtabbar", UIBottomTabBar);
      Vue.component("uiswitch", UISwitch);
      Vue.component("uiradio", UIRadio);
      Vue.component("uicheckbox", UICheckBox);
      Vue.component("uicheckboxlist", UICheckBoxList);
      Vue.component("uicollapsible", UICollapsible);
      Vue.component("uicollapsibleitem", UICollapsibleItem);
      Vue.component("uisegment", UISegment);
      Vue.component("uitableview", UITableView);
      Vue.component("uitableviewitem", UITableViewItem);
      Vue.component("uiimg", UIImg);
      Vue.component("uipopup", UIPopup);
      Vue.component("uiscroller", UIScroller);
      Vue.component("uidatefield", UIDateField);

      (function($) {
        var loading = Vue.extend({
          template: componentTpl.UILoading,
          props: {
            loadingShow: {
              default: false
            },
            loadingText: {
              default: ""
            }
          },
          data: function() {
            return {
              visible: false
            };
          },
          computed: {},

          created: function() {},

          mounted: function() {},
          methods: {}
        });
        var instance;
        $.loading = {
          show: function(options) {
            var text = "";
            if (!instance) {
              instance = new loading({
                el: document.createElement("div")
              });
            }
            if (instance.visible) return;
            if (options) {
              text =
                typeof options === "string"
                  ? options
                  : options.loadingText || "";
            } else {
              text = "";
            }
            instance.loadingText = text;
            document.body.appendChild(instance.$el);

            Vue.nextTick(function() {
              instance.visible = true;
            });
          },
          close: function() {
            if (instance) {
              instance.visible = false;
            }
          }
        };
      })(Vue.prototype);

      (function($) {
        var toast = Vue.extend({
          template: componentTpl.UIToast,
          props: {
            toastShow: {
              default: false
            },
            toastText: {
              default: ""
            }
          },
          data: function() {
            return {
              visible: false
            };
          },
          computed: {},

          created: function() {},

          mounted: function() {},
          methods: {}
        });
        var instance, st;
        $.toast = {
          show: function(options) {
            if (!instance) {
              instance = new toast({
                el: document.createElement("div")
              });
            }
            if (instance.visible) return;
            instance.toastText =
              typeof options === "string" ? options : options.toastText || "";
            document.body.appendChild(instance.$el);
            time = typeof options === "string" ? 1000 : options.time || 1000;
            Vue.nextTick(function() {
              instance.visible = true;

              st = setTimeout(function() {
                instance.visible = false;
              }, time);
            });
          },
          close: function() {
            if (instance) {
              clearTimeout(st);
              instance.visible = false;
            }
          }
        };
      })(Vue.prototype);

      (function($) {
        var alert = Vue.extend({
          template: componentTpl.UIAlert,
          props: {},
          data: function() {
            return {
              visible: false,
              title: "友情提示",
              text: "",
              buttonText: "确定",
              callback: null
            };
          },
          computed: {},

          created: function() {},

          mounted: function() {},
          methods: {
            closeAlert: function(callback) {
              this.visible = false;
              this.callback && this.callback(this);
            }
          }
        });
        var instance;
        $.alert = {
          show: function(options) {
            if (!instance) {
              instance = new alert({
                el: document.createElement("div")
              });
            }
            if (instance.visible) return;
            instance.text =
              typeof options === "string" ? options : options.text || "";
            instance.title =
              typeof options === "string"
                ? instance.title
                : options.title || instance.title;
            instance.buttonText =
              typeof options === "string"
                ? instance.buttonText
                : options.buttonText || instance.buttonText;
            instance.callback =
              typeof options === "string"
                ? instance.callback
                : options.callback || instance.callback;
            document.body.appendChild(instance.$el);
            Vue.nextTick(function() {
              instance.visible = true;
            });
          },
          close: function() {
            if (instance) {
              instance.visible = false;
            }
          }
        };
      })(Vue.prototype);

      (function($) {
        var confirm = Vue.extend({
          template: componentTpl.UIConfirm,
          props: {},
          data: function() {
            return {
              visible: false,
              title: "友情提示",
              text: "",
              sureBtn: "确定",
              cancelBtn: "取消",
              callback: null
            };
          },
          computed: {},

          created: function() {},

          mounted: function() {},
          methods: {
            closeAlert: function(callback) {},

            confirmSure: function() {
              this.visible = false;
              this.callback && this.callback(true, this);
            },

            confirmCancel: function() {
              this.visible = false;
              this.callback && this.callback(false, this);
            }
          }
        });
        var instance;
        $.confirm = {
          show: function(options) {
            if (!instance) {
              instance = new confirm({
                el: document.createElement("div")
              });
            }
            if (instance.visible) return;
            instance.text =
              typeof options === "string" ? options : options.text || "";
            instance.title =
              typeof options === "string"
                ? instance.title
                : options.title || instance.title;
            instance.sureBtn =
              typeof options === "string"
                ? instance.sureBtn
                : options.sureBtn || instance.sureBtn;
            instance.cancelBtn =
              typeof options === "string"
                ? instance.cancelBtn
                : options.cancelBtn || instance.cancelBtn;
            instance.callback =
              typeof options === "string"
                ? instance.callback
                : options.callback || instance.callback;
            document.body.appendChild(instance.$el);
            Vue.nextTick(function() {
              instance.visible = true;
            });
          },
          close: function() {
            if (instance) {
              instance.visible = false;
            }
          }
        };
      })(Vue.prototype);
    }
  };
});
