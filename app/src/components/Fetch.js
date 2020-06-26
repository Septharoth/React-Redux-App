  
import React from 'react';
import {connect} from 'react-redux';
import {api} from '../action/action';

const Fetch = ({api}) => {

    return (
        <div>
            <button onClick={() => api()}>Fetch Characters</button>
        </div>
    )
}

export default connect(
    null,
    {api}
)(Fetch);