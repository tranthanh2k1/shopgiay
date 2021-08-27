import React, { useState } from 'react'

const TodoAdd = (props) => {
    const [inputValue, setInputValue] = useState("");
    const onHandleSubmit = e => {
        e.preventDefault();
        props.onAdd(inputValue);
    }
    const onHandleChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <div>
            <form onSubmit={onHandleSubmit}>
                <input type="text" onChange={onHandleChange} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoAdd
