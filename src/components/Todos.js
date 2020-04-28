import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Todo from './Todo.js'
import axios from 'axios';
//import Home from './Pages/Home';
import Nav from './Pages/Nav';
import About from './Pages/About';
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
            if (res) {
                const data = res.data.slice(0, 12)
                this.setState({ todos: data })
            }
        }).catch((err) => {
            console.log('error', err);
        })
    }

    render() {
        const todos = this.state.todos;
        return (
            <Router>
                <div>
                    <Nav />
                    <Switch>
                        <Route exact path='/' render={props => (
                            <React.Fragment>
                                {todos.map((todo) => {
                                    return (<Todo key={todo.id} name={todo.title} id={todo.id} />);
                                })}
                            </React.Fragment>
                        )} />
                        <Route path='/about' component={About} />

                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Todos;