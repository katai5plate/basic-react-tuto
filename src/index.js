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
    // 変更後の値 = 変更直後の値
    textData = event.target.value;
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