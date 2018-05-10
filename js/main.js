var developerMode = "pro";
var modules = ['UIBase', 'UIKeyBoard'];
if (developerMode == "pro") {
    modules = modules.map(function(i) {
        return i + ".min"
    })
}

(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 50 * (clientWidth / 375) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    recalc();
})(document, window);

function getModuleName() {
    var path = window.location.href,
        filename;
    filename = path.substr(path.lastIndexOf('/') + 1);
    return filename == "" ? "index" : filename.split(".")[0];
}

require.config({　　　　
    paths: {　　　　　　
        "vue": "utils/vue.min",
        "vue-resoure": "utils/vue-resource.min",
        "components": "components/" + modules[0],
        "api": "api/config",
        "keyboard": "components/" + modules[1],
        "swiper": "utils/swiper.min",
        "iscroll": "utils/iscroll.min",
        "zepto": "utils/zepto.min",
        "datetime": "utils/mobiscroll.datetime.min",
        "chart": "utils/chart.min",
        "login": "pagecomponents/Login"　　　　
    },
    shim: {
        'vue-resoure': {
            deps: ["vue"]
        },
        'components': {
            deps: ['vue']
        },
        'vue-lazy': {
            deps: ['vue']
        },
        'api': {
            deps: ['vue', 'vue-resoure']
        },
        'datetime': {
            deps: ['zepto', 'css!../css/mobiscroll.min']
        },
        'swiper': {
            deps: ['css!../css/swiper.min']
        },
        'keyboard': {
            deps: ['css!../css/keyboard.min']
        }

    },
    map: {
        '*': {
            'css': 'utils/css.min'
        }
    },
    waitSeconds: 15　　
});
var moduleName = "pagejs/" + getModuleName();
require(["components"], function(m) {
    m.init();
    require([moduleName], function() {})
})
