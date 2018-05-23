import React, {Component} from 'react';
import './App.css';
import CreateTodo from './todos/create-todo.js';
import TodosList from './todos/todos-list';

const todos = [{
    task: 'learning react',
    isCompleted: false
}, {
    task: 'eat dinner',
    isCompleted: true
}, ]

class App extends Component {
    constructor(props){
        super(props);
        this.state = {todos}
    }

    handleSubmit(task){
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({todos: this.state.todos});
    }

    deleteItem(task){
        const arr = this.state.todos;
        const index = arr.findIndex((item) => {
            return item.task === task;
        });
        if(index > -1){
            arr.splice(index,1);
        }
        this.setState({todos: arr});
    }

    handleCompleted(task){
        const arr = this.state.todos;
        const index = arr.map((item) => {
            if(item.task === task){
                item.isCompleted = !item.isCompleted;
            }
        });
        this.setState({todos: arr});
    }

    saveItem(oldTask,newTask){
        const arr = this.state.todos;
        arr.map((item) => {
            if(item.task === oldTask){
                item.task = newTask;
            }
        });
        this.setState({todos: arr});
    }

    render() {
        return (
            <div className="app">
                <h1> React toDos App </h1>
                <CreateTodo
                    todos={this.state.todos}
                    onSubmit={this.handleSubmit.bind(this)}
                />
                <TodosList
                    todos={this.state.todos}
                    deleteItem={this.deleteItem.bind(this)}
                    handleCompleted={this.handleCompleted.bind(this)}
                    saveItem={this.saveItem.bind(this)}
                />
            </div>
        );
    }
}

export default App;
