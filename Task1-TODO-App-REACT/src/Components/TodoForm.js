import React, {useState} from "react"

function TodoForm(props){
    const [input, setInput] = useState("")
    
    const handleChange = e =>{
        if(!e.target.value)
            return
        setInput(e.target.value)
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        props.addTask({
            id:Math.floor(Math.random()*1000000),
            text: input,
            isComplete: false
        })
        setInput('')  
    }
    return(
        <form className="todo-form">
            <input type="text" placeholder="Add a todo" onChange={handleChange} value={input}  className="todo-input"/>
            <button type="submit" className="todo-btn" onClick={handleSubmit}>ADD</button>
        </form>
    )
}
export default TodoForm