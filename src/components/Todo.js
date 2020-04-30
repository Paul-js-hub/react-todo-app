import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Todo extends Component {
    render() {

        const name = this.props.name || '';
        const id = this.props.id || '';
        return (
            <div style={{ background: '#009688', height: '40px', marginBottom: '10px', color: '#fff' }}>
                <Link to={`/todo/${id}`}><span>{id + ". "}</span> <span>{name}</span></Link>
                <button style={btnStyle} type="delete" onClick={() =>this.props.onDelete(this.props.id) }>Delete</button>
            </div>

        )
    }
}

const btnStyle={
    float:'right',
    cursor:'pointer'
}

export default Todo;
