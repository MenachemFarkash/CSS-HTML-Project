import React, { Component } from 'react';
import { Route, Switch, Link, Router } from 'react-router-dom';
import AddMovie from './addMovie';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav id="navBar">
                    <h1 id="heading" onClick={() => this.props.mainPage()}>
                        Movily 🎬
                    </h1>
                    <div id="center">
                        <button id="addMovieMainButton">
                            <Link id="addMovieLink" to="/addMovie">
                                Add Movie
                            </Link>
                        </button>
                    </div>
                    <div id="center">
                        <label id="label">Number Of Items: </label>
                        <input
                            onKeyPress={(ev) => this.props.setMoviesPerPage(ev)}
                            id="input"
                            type="text"
                            placeholder={'1'}
                        ></input>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;
