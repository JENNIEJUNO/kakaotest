import './App.css';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Kakao 객체가 로드되었는지 확인
    if (typeof window !== 'undefined' && !window.Kakao) {
      window.Kakao = window.Kakao || {};
    }

    window.kakaoAsyncInit = function () {
      if (window.Kakao && window.Kakao.Channel) {
        Kakao.Channel.createChatButton({
          container: '#kakao-talk-channel-chat-button',
        });
      }
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.7.3/kakao.channel.min.js';
      js.integrity = 'sha384-bWRMLTxQRntA4wEpVvfY/jIkkrpCzdbFJETnRNTm9kIF82L5UJfEsuhlcaqNQWiO';
      js.crossOrigin = 'anonymous';
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'kakao-js-sdk');
  }, []);

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
