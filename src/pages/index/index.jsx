import React, { Component } from 'react';
import { render } from 'react-dom'; 

import Header from '../../components/header/header.jsx'
import '../../scss/common'


class Index extends Component {
    render() {
        return (
            <div>
                <Header></Header>
            </div>
        );
    }
}

render(<Index/>,document.getElementById('root'))