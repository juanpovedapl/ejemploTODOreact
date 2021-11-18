import React from "react";
import "./TodoItem.css"

function TodoItem(props){
    return(
        <li className="TodoItem">
            
            <p className="TodoItem-p"><span>✓</span>{props.text}<span>X</span></p>
            
        </li>

    );
}

export {TodoItem};