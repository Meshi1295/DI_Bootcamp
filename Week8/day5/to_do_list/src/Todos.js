import React from 'react';
import './App.css'

const Todos = (props) => {
    const { todos, deleteTodo } = props

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => deleteTodo(todo.id)}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">You have no todo's left !! yaay!!</p>
    )

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )

}

export default Todos;