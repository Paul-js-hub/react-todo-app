import React, { Component } from "react"

class Todo extends Component{
    render(){
        
        const name = this.props.name || '';
        const id = this.props.id || '';
        return(
            <div style={{ background: '#009688',height:'40px', marginBottom:'10px', color:'#fff'}}>
                <span>{id + ". "}</span> <span>{name}</span>
            </div>
            
        )
    }
}

export default Todo;
