import React from 'react'
import ReactDOM from 'react-dom'

// 初期データ
const items = [
    { name: "ボタンを", color: "green" },
    { name: "押すと", color: "brown" },
    { name: "名前を", color: "red" },
    { name: "追加", color: "blue" },
];

// 同期する表示名
let nameData = "";
// inputの入力制御・nameDataとの同期
const setNameData = (event) => {
    nameData = event.target.value;
    render();
}
// 同期する色名
let colorData = "";
// inputの入力制御・colorDataとの同期
const setColorData = (event) => {
    colorData = event.target.value;
    render();
}
// データ追加
const addData = () => {
    items.push({ name: nameData, color: colorData });
    nameData = "";
    render();
}

// フォーム
const MyForm = () => (
    <div>
        <p>
            名前：
            <input type="text" value={nameData} onChange={setNameData} />
        </p>
        <p>
            色：
            <input type="text" value={colorData} onChange={setColorData} />
        </p>
        <button onClick={addData}>Add Data</button>
    </div>
);

// 削除可能版
const Hello = ({ name, color, onDelete }) => (
    <div>
        <p>
            <span style={{ color }}>
                Hello, {name}!
            </span>
            <button onClick={() => onDelete()}>DEL</button>
        </p>
    </div>
);
// 削除処理
const deleteItem = (index) => {
    // 確認メッセージ
    if (window.confirm("Really?")) {
        items.splice(index, 1);
    }
    render();
}

const App = () => (
    <div>
        <MyForm />
        {
            items.map((item, index) => (
                <Hello name={item.name} color={item.color} onDelete={() => deleteItem(index)} />
            ))
        }
    </div>
);

const render = () => ReactDOM.render(
    <App />,
    document.getElementById('root')
);
render();