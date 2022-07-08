import React from "react"
import {RiCloseCircleLine} from "react-icons/ri"
import {TiTick} from "react-icons/ti"
export default function Todo({todos,completeTask,removeTask}) {
 return (
        todos.map((todo)=>(
            <div className={todo.isComplete? 'complete task-div' : 'task-div'}>
                <div className="todo-text">{todo.text}</div>
                <div className="icons">
                    <TiTick className ={todo.isComplete ? "hide":"tick"} onClick={()=>{completeTask(todo.id)}}></TiTick>
                    <RiCloseCircleLine className="cross" onClick={()=>{removeTask(todo.id)}}></RiCloseCircleLine>
                </div>
            </div>
        ))
    )
}