(function(window, factory) {
  if (typeof exports === "object") {
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    define(["vue", "vue-resoure"], factory);
  } else {
    window.hsApi = factory();
  }
})(this, function(Vue, VueResource) {
  Vue.use(VueResource);
  return {
    domain: "https://m.urainf.com/appServer/",
    extend: function(o, n) {
      for (var p in n) {
        o[p] = n[p];
      }
      return o;
    },
    restful: function(options) {
      var that = this;
      var optionsDefault = {
        url: "",
        method: "JSONP",
        jsonp: "jsonpCallback",
		params: {},
		_timeout:10000
      };
      options = that.extend(optionsDefault, options);
      return new Promise(function(resolve, reject) {
        var g = Vue.http(options).then(
          function(res) {
            resolve(res);
          },
          function(res) {
			console.log('连接服务器失败！')
            reject(res);
          }
        );
      });
    },
    getFundList: function(options) {
      var that = this;
      return that.restful({
        url: that.domain + "/product/product/findPage.json",
        params: options || {}
      });
    },
    getPhotoList: function(options) {
      var that = this;
      return that.restful({
        url: that.domain + "/wxzt/m.json",
        params: options || {}
      });
    },
    getThirdpartyFundList: function(options) {
      var that = this;
      return that.restful({
        url: that.domain + "thirdparty/couchbasedata/getFundList.json",
        params: options || {}
      });
    },
    getLoginTpl: function() {
      var that = this;
      return new Promise(function(resolve, reject) {
        Vue.http({ url: "login.html", method: "get" }).then(
          function(res) {
            resolve(res);
          },
          function(res) {
            reject(res);
          }
        );
      });
    }
  };
});
