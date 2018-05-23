import React,{ Component } from 'react';

export default class TodosListHeader extends Component{
    render(){
        return (
            <thead>
                <tr>
                    <th>task</th>
                    <th>Action</th>
                </tr>
            </thead>
        )
    }
}
