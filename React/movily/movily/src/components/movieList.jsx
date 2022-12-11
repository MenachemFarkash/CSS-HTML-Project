import React, { Component } from 'react';
import '../Style.css';

class MovieList extends Component {
    render() {
        return (
            <div id="main">
                <main id="movieList">
                    <div id="scroll">
                        <table id="table">
                            <thead id="tableHead">
                                <tr id="tableHead">
                                    <th>Image</th>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Genre</th>
                                    <th>Rating</th>
                                    <th>🧡</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.showenMovies.map((list, index) => (
                                    <tr id="movieCellOdd" key={index}>
                                        <td id="cell">
                                            <img src={list.image}></img>
                                        </td>
                                        <td id="cell">{list.id}</td>
                                        <td id="cell">{list.name}</td>
                                        <td id="cell">{list.genre}</td>
                                        <td id="cell">{list.rating}</td>
                                        <td id="likeCell" onClick={(id) => this.props.handleLike(list.id)}>
                                            {list.like}
                                        </td>
                                        <td id="cell">
                                            <button
                                                id="delete"
                                                onClick={() => this.props.handleDelete(list.id, list.genre)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        );
    }
}
export default MovieList;
