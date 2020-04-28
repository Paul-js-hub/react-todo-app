import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Todo extends Component {
    render() {

        const name = this.props.name || '';
        const id = this.props.id || '';
        return (
            <div style={{ background: '#009688', height: '40px', marginBottom: '10px', color: '#fff' }}>
                <Link to={``}><span>{id + ". "}</span> <span>{name}</span></Link>
            </div>

        )
    }
}

export default Todo;
