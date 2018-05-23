import React, {Component} from 'react';

export default class TodosListItem extends Component{

    constructor(props){
        super(props);
        this.state ={
            isEditing: false
        }
    }

    renderTask(){
        let {task,isCompleted} = this.props;
        const style = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer',
        }

        if(this.state.isEditing){
            return (
                <td>
                    <form onSubmit={this.editSubmit.bind(this)}>
                        <input ref="editInput" defaultValue={task} />
                    </form>
                </td>
            )
        }

        return (
            <td style={style} onClick={this.handleCompleted.bind(this,task)}>
                {task}
            </td>
        )
    }

    renderActionSection(){
        if(this.state.isEditing){
            return (
                <td>
                    <button onClick={this.editSubmit.bind(this,this.props.task)}>Save</button>
                    <button onClick={this.toggleEditing.bind(this)}>Cancel</button>
                </td>
            )
        }

        return (
            <td>
                <button onClick={this.toggleEditing.bind(this)}>Edit</button>
                <button onClick={this.deleteItem.bind(this,this.props.task)}>Delete</button>
            </td>
        )
    }

    toggleEditing(e){
        this.setState((prevState) => {
            return {isEditing : !prevState.isEditing};
        });
    }

    handleCompleted(task){
        this.props.handleCompleted(task);
    }

    editSubmit(){
        let value;
        if(value = this.refs.editInput.value)
        this.props.saveItem(this.props.task,value);
        this.setState({isEditing: false});
    }

    deleteItem(task){
        this.props.deleteItem(task);
    }

    render(){
        return (
            <tr>
                {this.renderTask()}
                {this.renderActionSection()}
            </tr>
        )
    }
}
