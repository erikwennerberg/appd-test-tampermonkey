// ==UserScript==
// @name         AppD test script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.marcus.com/*
// @grant        none
// @run-at document-end
// ==/UserScript==


 (function(config){
          (function(info) {
              info.VPageView = function () {
                  console.log('adding custom data to virtual page');
                  return {
                      userData: {
                          loanAmount: document.getElementById('loanAmountRange').value
                      }
                  }
              }
          })(config.userEventInfo || (config.userEventInfo = {}))
     })(window['adrum-config'] || (window['adrum-config'] = {}));

(function(config){
           (function(info) {
              (function(vpageview) {
                   vpageview.userPageName = "ap1-submit-test";
                   vpageview.userData = {
                       "loanAmount": document.getElementById('loanAmountRange').value
                   };
               })(info.VPageView || (info.VPageView = {}));
           })(config.userEventInfo || (config.userEventInfo = {}))
       })(window['adrum-config'] || (window['adrum-config'] = {}));
