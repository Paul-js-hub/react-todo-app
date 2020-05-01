import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Todo extends Component {
    render() {
        const { onDelete, onUpdate, userId } = this.props;
        const name = this.props.name || '';
        const id = this.props.id || '';
        return (
            <div style={{ background: '#009688', height: '40px', marginBottom: '10px', color: '#fff' }}>
                <Link to={`/todo/${id}`}><span>{id + ". "}</span> <span>{name}</span></Link>
                <button style={btnStyle} type="delete" onClick={() => onDelete(userId)}>Delete</button>
                <button style={btnStyle} type='update' onClick={() => onUpdate(userId)}>Update</button>
            </div>

        )
    }
}

const btnStyle = {
    float: 'right',
    cursor: 'pointer'
}

export default Todo;
