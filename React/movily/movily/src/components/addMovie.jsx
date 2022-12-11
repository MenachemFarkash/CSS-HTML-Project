import React, { Component } from 'react';

class AddMovie extends Component {
    render() {
        return (
            <div id="backgroundBlocker">
                <div id="formContainer">
                    <form action="/" id="addMovieForm">
                        <h1 id="formHeading">Add Movie</h1>
                        <div>
                            <input id="movieNameInput" placeholder="Movie Name" />
                        </div>
                        <h2 id="chooseGenreHeading">Choose Genre:</h2>
                        <div>
                            <select id="genreSelector">
                                <option>Action</option>
                                <option>Comedy</option>
                                <option>Drama</option>
                                <option>Fantasy</option>
                                <option>Horror</option>
                                <option>Crime</option>
                                <option>Biography</option>
                                <option>Sci-Fi</option>
                                <option>Adventure</option>
                                <option>Animation</option>
                                <option>Thriller</option>
                            </select>
                        </div>
                        <div>
                            <label id="ratingInputLabel">Rating:</label>
                            <input id="ratingInput" placeholder="0"></input>
                        </div>
                        <button id="addMovieButton" type="sumbit">
                            Add
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddMovie;
