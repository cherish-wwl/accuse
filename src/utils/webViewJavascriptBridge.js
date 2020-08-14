
/*这段代码是固定的，必须要放到js中*/
var u = navigator.userAgent;
var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
// var isWeixin = u.toLowerCase().indexOf('micromessenger') != -1; //微信浏览器打开
//
function setupWebViewJavascriptBridge(callback) {
  if (isiOS) {
    //ios的处理
    if (window.WebViewJavascriptBridge) {
      return callback(WebViewJavascriptBridge);
    }
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback);
    }
    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement("iframe");
    WVJBIframe.style.display = "none";
    WVJBIframe.src = "wvjbscheme://__BRIDGE_LOADED__";
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() {
      document.documentElement.removeChild(WVJBIframe);
    }, 0);
  }
  if (isAndroid) {
    //Android的处理
    if (window.WebViewJavascriptBridge) {
      callback(WebViewJavascriptBridge);
    } else {
      document.addEventListener(
        "WebViewJavascriptBridgeReady",
        function() {
          callback(WebViewJavascriptBridge);
        },
        false
      );
    }
  }
}

function getJWT() {
    return new Promise((resolve,reject)=>{
      if (isiOS) {
        console.log('IOS JWT')
        setupWebViewJavascriptBridge(bridge=>{
          bridge.callHandler('suboNTGetJWT', {'source':'我要来获取JWT了，快给我'},function(response) {
            console.log(response)
            resolve(response);
          });
        })
        setTimeout(()=>{
          reject('error:cannot get JWT')
        },3000)
      }
      if (isAndroid) {
        console.log('Android JWT')
        const  JWT = window.JSBridge.getJWT();
        if(JWT){
          resolve(window.JSBridge.getJWT())
        }else{
          reject('error:cannot get JWT')
        }
       
      }
    })

}

function CToast(msg,status){
  if (isiOS) {
    console.log('IOS JWT')
    setupWebViewJavascriptBridge(bridge=>{
      bridge.callHandler('suboNTTost', {'msg':msg,'duration':2},function(response) {});
    })
  }
  if (isAndroid) {
    if(status == 'success'){
      window.JSBridge.toastSuccess(msg);
    }
    if(status == 'fail'){
      window.JSBridge.toastFail(msg);
    }
  }
}
export { setupWebViewJavascriptBridge, getJWT,CToast };
