import React, { useState } from 'react';
// import './App.css';

function TodoList() {
  // declare state variable and add two default todo items
  const [ todoList, setTodoList ] = useState([
    { text: "item1", done: false},
    { text: "item2", done: true},
  ]);

  // function to add user input to todo list
  const submitTodo = () => {
    let newItem = { text: document.getElementById("add-item").value, done: false};
    setTodoList( (todoList) => todoList.concat(newItem));  
    document.getElementById("add-item").value = "";
  }

  return (
    <div className="content container">
        <div className="row">
            <div className="profile">
                <p>The To-do List below is built with a React Functional Component paired with React Hooks (released v16.8). Look around and add new items to your To-do List, mark items complete, or even delete items entirely.</p>
            </div>
        </div>
        <div className="todo-list-app">
        <h2 className="tool-heading">To-do List</h2>
        <div className="todo-list">
            {/* map items from state array into todo items */}
            {todoList.map((item, index) => (
            <div class="todo-item">
                <div>
                <input className="checkbox" type="checkbox" checked={item.done} data-index={index} onClick={  
                    () => {
                    // onClick uses the item's index to locate item in state and toggles the 'done' boolean value
                    const updatedList = [...todoList];
                    updatedList[index].done = !updatedList[index].done
                    setTodoList(updatedList);
                    }
                } />
                <span className={todoList[index].done ? "done" : ""}>{item.text}</span>
                </div>
                <button class="delete-button" onClick={
                () => {
                    // onClick uses the item's index to locate and remove the item from state
                    const modifiedList = [...todoList];
                    modifiedList.splice(index, 1);
                    setTodoList(modifiedList);
                }
                }>DELETE</button>
            </div>
            ))}
        </div>
        <div class="add-todo">
            <h3 className="add-todo-heading">Add Item</h3>
            <div className="add-todo-input">
            <input id="add-item" type="text"></input>
            <button className="submit-button" onClick={submitTodo}>Submit</button>
            </div>
        </div>
        </div>
    </div>
  );
}

export default TodoList;
