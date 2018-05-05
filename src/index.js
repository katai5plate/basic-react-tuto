import React from 'react'
import ReactDOM from 'react-dom'

const MyButton = () => (
    <div>
        <button onClick={() => alert("HIT!")}>
            Click Me!
        </button>
    </div>
);

// 変更後の値
let textData = "";
// onChange、つまり値が更新された時の処理
const setTextData = (event) => {
    // 変更後の値 = 変更直後の値１
    textData = event.target.value;
    // 20文字より多く入力できないようにする
    ((leng) => {
        if (textData.length > leng) {
            textData = textData.slice(0, leng);
        }
    })(20);
    // 数字を使えなくする
    if (/[0-9]|[０-９]/.test(textData)) return;
    // 小文字を大文字にする
    textData = textData.toUpperCase()
    // これがないと正常に入力操作ができない。
    // なぜならデータ変更しても自動では再描画されないから。
    render();
}
const MyBox = () => (
    <div>
        <input type="text" value={textData} onChange={setTextData} />
    </div>
);

const App = () => (
    <div>
        <MyBox />
        <MyButton />
    </div>
);

const render = () => ReactDOM.render(
    <App />,
    document.getElementById('root')
);
render();