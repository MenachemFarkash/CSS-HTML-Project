import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div id="paginationButtons">
                    {this.props.pages.map((val, index) => (
                        <button id="pageButtons" key={index}>
                            {val.number}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

export default Footer;
