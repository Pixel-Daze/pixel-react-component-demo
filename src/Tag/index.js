import React, { Component } from 'react';
import './index.scss';

class Tag extends Component {
    constructor(props){
        super(props)
    }

    render () {
        return <div>
            <span className="red">hello world</span>
        </div>
    }
}

export default Tag;