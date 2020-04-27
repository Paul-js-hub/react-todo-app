import React, { Component } from 'react';
import Todo from './Todo.js'
import axios from 'axios';

class Todos extends Component {

    state = {
        todos: []
    }
    componentDidMount() {
        this.fetchTodos();
    }
    fetchTodos = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => {
            console.log('response', res.data)
            if (res.data) {
                const data = res.data.slice(0,12)
                this.setState({ todos:data })
            }
        }).catch((err) => {
            console.log('error', err);
        })
    }

    render() {
        const todos = this.state.todos;
        return (<div> {
            todos.map((todo) => { 
                return (<Todo key={todo.id} name={todo.title} id={todo.id} />);
            })
        }
        </div>)
    }
}

export default Todos;