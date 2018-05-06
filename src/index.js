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
// 同期する編集番号
let editData = "";
// inputの入力制御・editDataとの同期
const setEditData = (event) => {
    editData = event.target.value;
    if (!(/[0-9]/.test(editData))) return;
    render();
}
// データ追加
const addData = () => {
    if (editData === "") {
        // 新規の場合
        items.push({ name: nameData, color: colorData });
    } else {
        // 編集の場合
        items[editData] = { name: nameData, color: colorData };
    }
    [nameData, colorData, editData] = [""];
    render();
}

// フォーム
//const MyForm = () => (
class MyForm extends React.Component {
    render() {
        return (
            <div>
                <p>
                    名前：
                    <input type="text" value={nameData} onChange={setNameData} />
                </p>
                <p>
                    色：
                    <input type="text" value={colorData} onChange={setColorData} />
                </p>
                <p>
                    番号：
                    <input type="text" value={editData} onChange={setEditData} />
                </p>
                <button onClick={addData}>Add Data</button>
            </div>
        )
    }
}

// 削除可能版
class Hello extends React.Component {
    render() {
        const props = this.props;
        const [name, color, onEdit, onDelete] = [
            props.name,
            props.color,
            () => props.onEdit(),
            () => props.onDelete(),
        ]
        return (
            <div>
                <p>
                    <span style={{ color }}>
                        Hello, {name}!
                    </span>
                    <button onClick={onEdit}>EDIT</button>
                    <button onClick={onDelete}>DEL</button>
                </p>
            </div>
        );
    }
}
// 編集処理
const editItem = (index) => {
    // 確認メッセージ
    const item = items[index];
    [nameData, colorData, editData] = [
        item.name, item.color, index
    ];
    render();
}
// 削除処理
const deleteItem = (index) => {
    // 確認メッセージ
    if (window.confirm("Really?")) {
        items.splice(index, 1);
    }
    render();
}

class TestSetState extends React.Component {
    constructor() {
        super();
        this.state = {
            x: 0,
        }
    }
    render() {
        return (
            <div>
                <button onClick={
                    () => this.setState({ x: this.state.x + 1 })
                }>{this.state.x}</button>
            </div>
        )
    }
}


class App extends React.Component {
    render() {
        return (
            <div>
                <TestSetState />
                <MyForm />
                {
                    items.map((item, index) => (
                        <Hello
                            name={item.name}
                            color={item.color}
                            onEdit={() => editItem(index)}
                            onDelete={() => deleteItem(index)}
                        />
                    ))
                }
            </div>
        )
    }
};

const render = () => ReactDOM.render(
    <App />,
    document.getElementById('root')
);
render();