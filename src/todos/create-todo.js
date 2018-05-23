import React, {Component} from 'react';

export default class CreateTodo extends Component{

    constructor(props){
        super(props);
        this.state = {
            errorMsg: '',
        }
    }

    handleCreate(e){
        var errorMsg,val = this.refs.createInput.value;
        e.preventDefault();
        if(val){
            const arr = this.props.todos;
            const index = arr.findIndex((item) => {
                return item.task === val;
            });
            if(index > -1){
                errorMsg = 'Task already exists.';
                this.setState({errorMsg});
                return;
            }
            this.props.onSubmit(this.refs.createInput.value);
            this.refs.createInput.value = '';
            this.state.errorMsg && this.setState({errorMsg: ''});
        }else{
            errorMsg = 'Please enter a task';
            this.setState({errorMsg});
        }
    }

    render(){
        const style = {
            display: this.state.errorMsg ? 'block' : 'none',
            color: 'red',
        }
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text"  ref="createInput"  placeholder="what do i need to do" />
                <button>Create</button>
                <div style={style}>{this.state.errorMsg}</div>
            </form>
        )
    }
}
