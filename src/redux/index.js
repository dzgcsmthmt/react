import React, {Component} from 'react';
import {createStore,applyMiddleware} from 'redux';


let reducer = (state,action) => {
    switch (action.type){
        case 'INC':
            return state + action.payload;
        case 'DEC':
            return state - action.payload;
        case 'E':
            throw new Error('syntaxError');
        default:
            return state;
    }
}

let logger = store => next => action => {
    const console = window.console;
    const prevState = store.getState();
    const returnValue = next(action);
    const nextState = store.getState();
    const actionType = String(action.type);
    const message = `action ${actionType}`;
    console.log(`%c prev state`, `color: #9E9E9E`, prevState);
    console.log(`%c action`, `color: #03A9F4`, action);
    console.log(`%c next state`, `color: #4CAF50`, nextState);
    return returnValue;
}

let error = store => next => action => {
    try{
        next(action);
    }catch(e){
        console.log(`%c Ahhhhhhhhh`,`color: #FF0000`,e);
    }
}

let middleWare = applyMiddleware(error,logger);

let store = createStore(reducer,0,middleWare);

// store.subscribe(() => {
//     console.log('store changed',store.getState());
// });

store.dispatch({type:'INC',payload: 1});
store.dispatch({type:'DEC',payload: 10});
store.dispatch({type:'E',payload: 10});

export default class App extends Component{
    render(){
        return (
            <div>
                <h1>hello world</h1>
                <button onClick={() => {store.dispatch({type:'INC',payload: 1})}}>add</button>
                <button onClick={() => {store.dispatch({type:'DEC',payload: 1})}}>minus</button>
            </div> 
        )
    }
}
