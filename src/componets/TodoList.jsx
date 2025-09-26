import React, { useState } from 'react'


// Add itsm and remove items
const TodoList = () => {

    const [todos, setTodas] = useState([])
    const [text, setText] = useState("")

    const handleAddItem = () => {
        if (text) {
            setTodas([...todos, text])
            setText("")
        }


    }
    const handleRemove = (i) => {
        const newItems = [...todos]
        newItems.splice(i, 1)
        setTodas(newItems)

    }


    return (
        <div>
            <input type="text" name="" id="" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAddItem}>Add Item</button>

            <br /><br />
            <h4>Todos List</h4>
            {
                todos.map((item, index) => (
                    <div key={index}>
                        <ul>
                            <li>{item} <button onClick={handleRemove}>Delete</button></li>
                        </ul>

                    </div>
                ))
            }

        </div>
    )
}

export default TodoList
