$(document).ready(function() {
  $('[obj-name="MainScreen"]').show();
  com.fc.CustomEventListeners = {};
  // LIBRARIES CODE
  // PROJECT CODE
  var _that = this;
  // Block#: lyh;P2VBG=x`c/eSZnkx
  com.fc.JavaScriptDistLib.FireBase.onRegTokenRefresh(function(token) {
    // Block#: zh92hC!yG5v*z494o@-/
    console.log(token);
    if(_that.debugService && _that.debugService.active) {
      _that.debugService.traces.push(token);
      _that.debugService.printLog();
    }
  });
  // Block#: OA#Dk(zf?;SIyz/N`+Vz
  function on_clearButton_click(e) {
    try {
      // Block#: KszBT`Ln[5y~TZg)*8Aw
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("title", ''); // Block#: w]-1$pT]N!u37:g=sx]f
      com.fc.JavaScriptDistLib.Label.setProperty["Text"]("body", '');
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="clearButton"]').on('click', on_clearButton_click);
  // Block#: .=cFGa4TsLVob0rae_n?
  com.fc.JavaScriptDistLib.FireBase.onMessageReceived(function(sender, message) {
    // Block#: IHP~h2XRl.m5/9W7[{5m
    com.fc.JavaScriptDistLib.Label.setProperty["Text"]("body", message);
  });
  // Block#: hUR@EdE/@-^{h(dRHW#)
  function on_tokenButton_click(e) {
    try {
      // Block#: (:dmTsF4r9W8-3OaVXn^
      console.log(com.fc.JavaScriptDistLib.FireBase.getRefreshedToken());
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push(com.fc.JavaScriptDistLib.FireBase.getRefreshedToken());
        _that.debugService.printLog();
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="tokenButton"]').on('click', on_tokenButton_click);
  // Block#: ,VfiWAT1_{MS7ihc,P.q
  function on_deviceIdButton_click(e) {
    try {
      // Block#: K:CO72gCH#AOJnBAt@V3
      console.log(com.fc.JavaScriptDistLib.FireBase.getUniqueDeviceId());
      if(_that.debugService && _that.debugService.active) {
        _that.debugService.traces.push(com.fc.JavaScriptDistLib.FireBase.getUniqueDeviceId());
        _that.debugService.printLog();
      }
      e.stopPropagation();
    } catch(e) {
      com.fc.JavaScriptDistLib.handleExceptionNative(e);
    }
  };
  $('[obj-name="deviceIdButton"]').on('click', on_deviceIdButton_click);
  com.fc.JavaScriptDistLib.FireBase.configure('{"api-key":{"text":"AIzaSyAMq-eBDh0b7QWp8O6b77-zHVBaW-lmDGg"},"project-id":{"text":"snapfirebasetest"},"client-id":{"text":"1012080014692"},"project-number":{"text":"1012080014692"},"public-vapid-key":{"text":"AAAA66SrdWQ:APA91bHN8_NV2-VGAFtFememx7nGKr8FPgPpCvnENswaiYwg_ijcqIwA2KbYTZXZXI1jlaajsfL5hR2NHk4a03f4pDbmD8z161Sj2ZdSu1q-hXtLO5LG4z0egsFpt8GkC1f-yHgq4eg8"},"storage-bucket":{"text":""},"mobilesdk-app-id":{"text":""},"ios-app-id":{"text":""},"ios-bundle-id":{"text":""}}');
});
// Generated by snapp
// 406054-134354-5550-75544
