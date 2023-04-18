import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [제목들, 제목변경] =
  useState(['진실은복도많지', '내서랍속에 행복', '컴온컴온']);
  let[like, likeAdd] = useState(0);
  // document.querySelectorAll('h4')[0].innerHTML = post;
  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'yellow', fontSize:'22px'}}>힐링영화</h4>
      </div>
      <button onClick={()=>{
        let copy1 = [제목들];
        copy1[0] = '벌새';
        copy1[1] = '슬램덩크';
        copy1[2] = '리바운드';
        제목변경(copy1);
      }}>신규영화</button>
      <div className="list">
        <h4>{제목들[0]}<span onClick={()=>{likeAdd(like+1)}}>👍🏻</span>{like}</h4>
        <p>4월 18일</p>
      </div>
      <div className="list">
        <h4>{제목들[1]}<span onClick={()=>{likeAdd(like+1)}}>👍🏻</span>{like}</h4>
        <p>4월 18일</p>
      </div>
      <div className="list">
        <h4>{제목들[2]}<span onClick={()=>{likeAdd(like+1)}}>👍🏻</span>{like}</h4>
        <p>4월 18일</p>
      </div>
    </div>
  );
}

export default App;
