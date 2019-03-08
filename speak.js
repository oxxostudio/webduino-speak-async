+(function (window, document) {

  'use strict';

  window.speakAsync = function (text, setting) {
    window.speechSynthesis.cancel();
    let utter = new SpeechSynthesisUtterance(text);
    utter.lang = setting[0];
    utter.pitch = setting[1];
    utter.rate = setting[2];
    window.speechSynthesis.speak(utter);
    return new Promise(resolve => {
      utter.onend = () => {
        console.log(text);
        resolve();
      }
    });
  }

  window.speechValue_ = '';
  window.speechRecognitionAsync = function (lang) {

    return new Promise(resolve => {
      let recognition = new webkitSpeechRecognition();
      let state = 0;
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = lang;

      recognition.onstart = function () {
        state = 1;
        console.log('開始辨識...');
      };
      recognition.onend = function () {
        console.log('停止辨識!');
        if (state > 0) {
          recognition.start();
        }
      };

      recognition.onresult = function (event) {
        speechValue_ = event.results[0][0].transcript;
        setTimeout(() => {
          state = 0;
          recognition.stop();
          resolve();
        }, 2000);
      };

      recognition.start();
    });

  }

}(window, window.document));
