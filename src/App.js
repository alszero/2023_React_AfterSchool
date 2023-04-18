import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [제목1, b1] = useState('찬실은복도많지');
  let [제목2, b2] = useState('내서랍속에 행복');
  let [제목3, b3] = useState('컴온컴온');
  // document.querySelectorAll('h4')[0].innerHTML = post;
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'yellow', fontSize:'22px'}}>힐링영화</h4>
      </div>
      <div className="list">
        <h4>{제목1}</h4>
        <p>4월 18일</p>
      </div>
      <div className="list">
        <h4>{제목2}</h4>
        <p>4월 18일</p>
      </div>
      <div className="list">
        <h4>{제목3}</h4>
        <p>4월 18일</p>
      </div>
    </div>
  );
}

export default App;
