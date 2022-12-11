import React, { Component } from 'react';
import SignUp from './signUp';

class Master extends Component {
    state = {};
    render() {
        return (
            <div>
                <SignUp onsubmit={this.onsubmit}></SignUp>
            </div>
        );
    }
    onsubmit = (values) => {
        alert(values.firstName + ' ' + values.lastName + ' ' + values.email + ' ' + values.age);
    };
}

export default Master;
