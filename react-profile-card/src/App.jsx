import { useState } from 'react';
import './App.css';
import { ProfileCard } from './ProfileCard';

function App() {
  // ① useStateで現在のインデックス（index）を管理する（初期値は0）
  const [index, setIndex] = useState(0);

  // ② 社員のプロフィール情報をprofiles配列で保持する
  const profiles = [
    { name: '侍健太', age: 37, bio: 'プロジェクトマネージャー。チームの進捗管理と課題解決が得意です。' },
    { name: '刀沢彩香', age: 32, bio: 'フルスタックエンジニア。新規サービスの設計から運用まで担当しています。' },
    { name: '戦国広志', age: 24, bio: '若手バックエンドエンジニア。Node.jsでAPI開発に挑戦中です。' },
    { name: '武士山美咲', age: 27, bio: 'UI/UXデザイナー。使いやすく美しいデザインを追求しています。' },
    { name: '武者小路勇気', age: 29, bio: 'フロントエンドエンジニア。ReactとTypeScriptを使って開発中です。' }
  ];

  // ③ ボタンを押したらインデックスが1つ進むようにhandleClick()関数を定義する
  const handleClick = () => {
    if (index < profiles.length - 1) {
      setIndex(index + 1);
    } else {
      // 最後のプロフィールまで進んだら最初（0）に戻す
      setIndex(0);
    }
  };

  // ④ UIの表示（ProfileCardと「次のプロフィール」ボタン）
  return (
    <main>
      {/* 現在のインデックスに対応するプロフィールデータを1つ渡す */}
      <ProfileCard profile={profiles[index]} />
      
      {/* クリック時にhandleClickを実行するボタン */}
      <button onClick={handleClick}>次のプロフィール</button>
    </main>
  );
}

export default App