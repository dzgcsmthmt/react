import React from 'react';

export default (props) => {
    if(props.celsius > 100){
        return <p>the water would boil</p>
    }else{
        return <p>the water would not boil</p>
    }
}
