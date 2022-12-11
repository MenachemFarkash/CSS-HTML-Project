import React, { Component } from 'react';
import { useFormik } from 'formik';
import { Link } from 'react-router-dom';

const AddMovie = (props) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            genre: '',
            like: '🖤',
            rating: '',
        },
    });
    console.table(formik.values);

    return (
        <div id="backgroundBlocker">
            <div id="formContainer">
                <form onSubmit={(ev) => props.handleSubmit(ev, formik.values)} action="/" id="addMovieForm">
                    <button id="exitButton" type="button">
                        <Link to="/">X</Link>
                    </button>
                    <h1 id="formHeading">Add Movie</h1>
                    <div>
                        <input
                            name="name"
                            id="movieNameInput"
                            placeholder="Movie Name"
                            onChange={formik.handleChange}
                        />
                    </div>
                    <h2 id="chooseGenreHeading">Choose Genre:</h2>
                    <div>
                        <select name="genre" id="genreSelector" onChange={formik.handleChange}>
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
                        <input
                            id="ratingInput"
                            placeholder="0"
                            name="rating"
                            onChange={formik.handleChange}
                        ></input>
                    </div>
                    <button id="addMovieButton" type="sumbit">
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddMovie;
