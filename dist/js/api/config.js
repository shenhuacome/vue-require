﻿(function(b,a){if(typeof exports==="object"){module.exports=a()}else{if(typeof define==="function"&&define.amd){define(["vue","vue-resoure"],a)}else{b.hsApi=a()}}})(this,function(a,b){a.use(b);return{domain:"https://wx.gsfunds.com.cn/appServer",getFundList:function(){var c=this;return new Promise(function(f,e){var d=a.http({url:c.domain+"/product/product/findPage.json",method:"JSONP",jsonp:"jsonpCallback"}).then(function(g){f(g)},function(g){e(g)})})},getPhotoList:function(){var c=this;return new Promise(function(e,d){a.http({url:c.domain+"/wxzt/m.json?functionCode=1047&adsGroup=indexAD&originalId=app&appServertimestamp=1495596309680&_=1495596309516",method:"JSONP",jsonp:"jsonpCallback",data:{a:1}}).then(function(f){e(f)},function(f){d(f)})})},getLoginTpl:function(){var c=this;return new Promise(function(e,d){a.http({url:"login.html",method:"get"}).then(function(f){e(f)},function(f){d(f)})})}}});