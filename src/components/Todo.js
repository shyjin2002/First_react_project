import { useState } from "react";


function Todo() {
    const [newData, setNewData] = useState(null);
    const [todolist, setTodoList] = useState([]);
    const [checkedlist, setCheckedlist] = useState([]);




    function nolinethrough(index, event) {
        console.log(event.target.value);
        if (event.target.value == "on") {
            const newData = checkedlist.filter((item, i) => { return (i == index) })
            updatechecklist(index);
            if (newData != "") {
                const newchecklist = [...todolist, newData];
                setTodoList(newchecklist);
            }

        } else {
            console.log('Checkbox is  unchecked');
        }
    }

    function linethrough(index, event) {
        if (event.target.checked) {
            const newData = todolist.filter((item, i) => { return (i == index) })
            console.log(newData)
            clearData(index);
            if (newData != "") {
                const newchecklist = [...checkedlist, newData];
                setCheckedlist(newchecklist);
            }

        } else {

        }
    }

    function updation(e) {
        setNewData(e.target.value);


    }
    function addData() {

        if (newData != "") {
            const newlist = [...todolist, newData];
            setTodoList(newlist);
        }
        else { }
    }

    function updatechecklist(index) {
        const newlist = checkedlist.filter((item, i) => { return (i != index) })

        setCheckedlist(newlist);
    }

    function clearData(index) {
        const newlist = todolist.filter((item, i) => { return (i != index) })

        setTodoList(newlist);
    }

    return (
        <div >
            <h1>Todo List</h1>
            <input type="text" onChange={updation} />
            <button onClick={addData}>+</button>
            <div>
                <ul>
                    {todolist.map((todo, index) => {
                        return (
                            <>

                                <li key={index}><input type="checkbox" name="horns" onClick={(event) => linethrough(index, event)} />{todo}
                                <button onClick={(e) => clearData(index)}>-</button></li>

                            </>

                        );
                    })}


                </ul>
                <ul>
                    {checkedlist.map((checked, index) => {
                        return (
                            <>

                                <li key={index} style={{ textDecoration: 'line-through' }}>
                                    <input type="checkbox" onClick={(event) => nolinethrough(index, event)} checked />{checked}<button onClick={(e) => clearData(index)}>-</button></li>

                            </>

                        );
                    })}
                </ul>

            </div>
        </div>
    );
}
export default Todo;