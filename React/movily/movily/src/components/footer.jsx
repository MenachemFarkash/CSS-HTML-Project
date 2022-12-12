import React, { Component } from 'react';
import Pagination from 'react-bootstrap/Pagination';

class Footer extends Component {
    style = {
        display: 'inline',
    };
    render() {
        let items = [];
        console.log(Math.ceil(this.props.movies.length / this.props.moviesPerPage));
        for (
            let number = 1;
            number <= Math.ceil(this.props.movies.length / this.props.moviesPerPage);
            number++
        ) {
            console.log('shalpm');
            items.push(
                <Pagination.Item key={number} onClick={() => this.props.updateCurrentPage(number)}>
                    {number}
                </Pagination.Item>
            );
        }
        return (
            <div id="paginationContainer">
                <Pagination id="paginationContainer">{items}</Pagination>
            </div>
        );
    }
}

export default Footer;
