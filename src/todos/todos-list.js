import React, {Component} from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-li';

export default class TodosList extends Component{

    renderListItem(){
        var temp = {};
        for (var key in this.props) {
            if (this.props.hasOwnProperty(key)) {
                if(key != 'todos'){
                    temp[key] = this.props[key];
                }
            }
        }

        return this.props.todos.map((todo,index) => {
            return <TodosListItem key={index} {...todo} {...temp}/>
        })
    }

    render(){
        return (
            <table style={{width: '100%',tableLayout: 'fixed',textAlign:'center'}}>
                <TodosListHeader />
                <tbody>
                    {this.renderListItem()}
                </tbody>
            </table>
        )
    }
}
