import './App.css';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // 클라이언트 사이드에서만 실행되도록 조건 추가
    if (typeof window !== 'undefined' && window.Kakao) {
      window.Kakao = window.Kakao || {};

      window.kakaoAsyncInit = function () {
        Kakao.Channel.createChatButton({
          container: '#kakao-talk-channel-chat-button',
        });
      };

      // 카카오 SDK 스크립트 로드
      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.3/kakao.channel.min.js';
        js.integrity = 'sha384-bWRMLTxQRntA4wEpVvfY/jIkkrpCzdbFJETnRNTm9kIF82L5UJfEsuhlcaqNQWiO';
        js.crossOrigin = 'anonymous';
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'kakao-js-sdk');
    }
  }, []); // 빈 배열을 두어 컴포넌트 마운트 시 한 번만 실행

  return (
    <div
      id="kakao-talk-channel-chat-button"
      data-channel-public-id="_IxnHVn"
      data-title="consult"
      data-size="small"
      data-color="yellow"
      data-shape="pc"
      data-support-multiple-densities="true"
  >
  </div>
  );
}

export default App;

