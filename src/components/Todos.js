import React, { Component } from 'react';
import Todo from './Todo.js'
import axios from 'axios'

class Todos extends Component {

    state = {
        todos: [],
        todo: {}
    }
    componentDidMount() {
        this.fetchTodos();
    }
    fetchTodos = () => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((res) => {
                console.log('response', res)
                if (res) {
                    const data = res.data.slice(0, 12)
                    this.setState({ todos: data })
                }
            }).catch((err) => {
                console.log('error', err);
            })
    }

    addTodo = () => {
        const newTodo = this.state.todo;
        newTodo.userId = 1;
        fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            body: JSON.stringify(newTodo),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(() => { this.fetchTodos() })
    }

    onChange = (e) => {
        const title = e.target.value || ''; //setting a new value for title
        const todo = { title }
        this.setState({ todo })
    }

    updateTodo = (userId) => {
        //title.preventDefault();
        const newTodo ={
            title:this.state.title
        }
        axios.put('https://jsonplaceholder.typicode.com/todos/{userId}', newTodo)
            .then(res => console.log("response", res));
    }

    deleteTodo = (userId) => {
        if (window.confirm('Are you sure?')) {
            axios.delete('https://jsonplaceholder.typicode.com/todos/{userId}')
        }
    }

    render() {
        const todos = this.state.todos;
        return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div>{todos.map((todo) => {
                    return (
                        <Todo key={todo.id} name={todo.title} id={todo.id}
                            onDelete={this.deleteTodo}
                            onUpdate={this.updateTodo} />);
                })}
                </div>
                <div style={{ marginLeft: '100px' }}>
                    <input name="title" onChange={(e) => this.onChange(e)}></input>
                    <button type="button" onClick={() => this.addTodo()}>Submit</button>

                </div>
            </div>)

    }
}

export default Todos;