import React, { Component } from 'react'
import axios from 'axios'


class TodoDetails extends Component {
    state = {
        todo: {},
        email:'',
    }

    componentDidMount() {

        const { match } = this.props; // this.props.match
        const {id} =  match.params

        axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then((response) => {
                this.setState(() => ({ todo: response.data }))
                console.log(response)
            })

    }

    render() {
        const { todo } = this.state;
        return (
            <div>
                <h1>{todo.id}</h1>
                <h1>{todo.userId}</h1>
                <h1>{todo.title}</h1>
                <h1>{todo.completed}</h1>
            </div>


        )
    }
}

export default TodoDetails;
