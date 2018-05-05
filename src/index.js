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
// データ追加
const addData = () => {
    items.push({ name: nameData, color: "black" });
    nameData = "";
    render();
}
// フォーム
const MyForm = () => (
    <div>
        <input type="text" value={nameData} onChange={setNameData} />
        <button onClick={addData}>Add Data</button>
    </div>
);

// 文字列表示
const Hello = ({ name, color }) => (
    <div>
        <p style={{ color }}>
            Hello, {name}!
        </p>
    </div>
);

const App = () => (
    <div>
        <MyForm />
        {
            items.map((item) => (
                <Hello name={item.name} color={item.color} />
            ))
        }
    </div>
);

const render = () => ReactDOM.render(
    <App />,
    document.getElementById('root')
);
render();