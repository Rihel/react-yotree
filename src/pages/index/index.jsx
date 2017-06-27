import React, { Component } from 'react';
import { render } from 'react-dom'; 
class Hello extends Component {
    render() {
        return (
            <div>
                首页
            </div>
        );
    }
}

render(<Hello/>,document.getElementById('root'))