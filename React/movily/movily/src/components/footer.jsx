import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <div id="paginationButtons">
                    {this.props.pages.map((val, index) => (
                        <button onClick={(event) => this.props.pageSwich(event)} id="pageButtons" key={index}>
                            {val}
                        </button>
                    ))}
                </div>
            </div>
        );
    }
}

export default Footer;
