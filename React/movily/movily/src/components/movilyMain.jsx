import React, { Component } from 'react';
import MovieList from './movieList';
import NavBar from './navBar';
import SideBar from './sideBar';
import Horror1 from './images/Horror1.jpg';
import Horror2 from './images/Hope.jpg';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import AddMovie from './addMovie';
import Footer from './footer';

class MovilyMain extends Component {
    state = {
        idAddMovie: 87,
        movies: [
            { id: 1, name: 'The Shawshank Redemption', rating: 9.2, genre: 'Drama', like: '🖤' },
            { id: 2, name: 'The Godfather', rating: 9.2, genre: 'Crime', like: '🖤' },
            { id: 3, name: 'The Godfather: Part II', rating: 9.0, genre: 'Crime', like: '🖤' },
            { id: 4, name: 'The Dark Knight', rating: 9.0, genre: 'Action', like: '🖤' },
            { id: 5, name: '12 Angry Men', rating: 8.9, genre: 'Drama', like: '🖤' },
            { id: 6, name: 'Schindlers List', rating: 8.9, genre: 'Biography', like: '🖤' },
            { id: 7, name: 'Pulp Fiction', rating: 8.9, genre: 'Crime', like: '🖤' },
            { id: 8, name: 'The Good, the Bad and the Ugly', rating: 8.8, genre: 'Western', like: '🖤' },
            { id: 9, name: 'The Return of the King', rating: 8.8, genre: 'Adventure', like: '🖤' },
            { id: 10, name: 'Fight Club', rating: 8.8, genre: 'Drama', like: '🖤' },
            { id: 11, name: 'The Empire Strikes Back', rating: 8.7, genre: 'Sci-Fi', like: '🖤' },
            { id: 12, name: 'One Flew Over the Cuckoos Nest', rating: 8.7, genre: 'Drama', like: '🖤' },
            { id: 13, name: 'The Fellowship of the Ring', rating: 8.7, genre: 'Adventure', like: '🖤' },
            { id: 14, name: 'Inception', rating: 8.7, genre: 'Action', like: '🖤' },
            { id: 15, name: 'Goodfellas', rating: 8.7, genre: 'Crime', like: '🖤' },
            { id: 16, name: 'The Matrix', rating: 8.6, genre: 'Sci-Fi', like: '🖤' },
            { id: 17, name: 'Seven Samurai', rating: 8.6, genre: 'Adventure', like: '🖤' },
            { id: 18, name: 'Star Wars: Episode IV - A New Hope', rating: 8.6, genre: 'Sci-Fi', like: '🖤' },
            { id: 19, name: 'Forrest Gump', rating: 8.6, genre: 'Drama', like: '🖤' },
            { id: 20, name: 'The Silence of the Lambs', rating: 8.6, genre: 'Thriller', like: '🖤' },
            { id: 21, name: 'Its a Wonderful Life', rating: 8.5, genre: 'Drama', like: '🖤' },
            { id: 22, name: 'Life Is Beautiful', rating: 8.5, genre: 'Comedy', like: '🖤' },
            { id: 23, name: 'The Usual Suspects', rating: 8.5, genre: 'Crime', like: '🖤' },
            { id: 24, name: 'Léon: The Professional', rating: 8.5, genre: 'Crime', like: '🖤' },
            { id: 25, name: 'Spirited Away', rating: 8.4, genre: 'Animation', like: '🖤' },
            { id: 26, name: 'Saving Private Ryan', rating: 8.4, genre: 'Drama', like: '🖤' },
            { id: 27, name: 'The Green Mile', rating: 8.4, genre: 'Drama', like: '🖤' },
            { id: 28, name: 'Interstellar', rating: 8.4, genre: 'Sci-Fi', like: '🖤' },
            { id: 29, name: 'American Beauty', rating: 8.3, genre: 'Drama', like: '🖤' },
            { id: 30, name: 'Pulp Fiction', rating: 8.9, genre: 'Crime', like: '🖤' },
            { id: 31, name: 'The Godfather', rating: 9.2, genre: 'Crime', like: '🖤' },
            { id: 32, name: 'The Dark Knight', rating: 9.0, genre: 'Action', like: '🖤' },
            { id: 33, name: 'The Shawshank Redemption', rating: 9.2, genre: 'Drama', like: '🖤' },
            { id: 34, name: 'The Silence of the Lambs', rating: 8.6, genre: 'Thriller', like: '🖤' },
            { id: 35, name: 'Fight Club', rating: 8.8, genre: 'Drama', like: '🖤' },
            { id: 36, name: 'The Prestige', rating: 8.3, genre: 'Drama', like: '🖤' },
            { id: 37, name: 'Gladiator', rating: 8.3, genre: 'Action', like: '🖤' },
            { id: 38, name: 'The Green Mile', rating: 8.4, genre: 'Drama', like: '🖤' },
            { id: 39, name: 'The Departed', rating: 8.2, genre: 'Crime', like: '🖤' },
            { id: 40, name: 'The Lion King', rating: 8.3, genre: 'Animation', like: '🖤' },
            { id: 41, name: 'Interstellar', rating: 8.4, genre: 'Sci-Fi', like: '🖤' },
            { id: 42, name: 'The Matrix', rating: 8.6, genre: 'Sci-Fi', like: '🖤' },
            { id: 43, name: 'Spirited Away', rating: 8.4, genre: 'Animation', like: '🖤' },
            { id: 44, name: 'The Usual Suspects', rating: 8.5, genre: 'Crime', like: '🖤' },
            { id: 45, name: 'Inception', rating: 8.7, genre: 'Action', like: '🖤' },
            { id: 46, name: 'The Good, the Bad and the Ugly', rating: 8.8, genre: 'Western', like: '🖤' },
            { id: 47, name: 'The Great Dictator', rating: 8.2, genre: 'Comedy', like: '🖤' },
            { id: 48, name: 'Back to the Future', rating: 8.2, genre: 'Sci-Fi', like: '🖤' },
            { id: 49, name: 'Life Is Beautiful', rating: 8.5, genre: 'Comedy', like: '🖤' },
            { id: 50, name: 'Its a Wonderful Life', rating: 8.5, genre: 'Drama', like: '🖤' },
            { id: 51, name: 'Léon: The Professional', rating: 8.5, genre: 'Crime', like: '🖤' },
            { id: 52, name: 'Grave of the Fireflies', rating: 8.1, genre: 'Animation', like: '🖤' },
            { id: 53, name: 'The Shining', rating: 8.5, genre: 'Horror', like: '🖤' },
            { id: 54, name: 'The Exorcist', rating: 8.0, genre: 'Horror', like: '🖤' },
            { id: 55, name: 'Halloween', rating: 7.8, genre: 'Horror', like: '🖤' },
            { id: 56, name: 'Psycho', rating: 8.5, genre: 'Horror', like: '🖤' },
            { id: 57, name: 'A Nightmare on Elm Street', rating: 7.5, genre: 'Horror', like: '🖤' },
            { id: 58, name: 'The Texas Chain Saw Massacre', rating: 7.5, genre: 'Horror', like: '🖤' },
            { id: 59, name: 'The Silence of the Lambs', rating: 8.6, genre: 'Horror', like: '🖤' },
            { id: 60, name: 'Friday the 13th', rating: 6.0, genre: 'Horror', like: '🖤' },
            { id: 61, name: 'The Ring', rating: 7.1, genre: 'Horror', like: '🖤' },
            { id: 62, name: 'The Conjuring', rating: 7.5, genre: 'Horror', like: '🖤' },
            { id: 63, name: 'The Blair Witch Project', rating: 6.4, genre: 'Horror', like: '🖤' },
            { id: 64, name: 'Poltergeist', rating: 7.0, genre: 'Horror', like: '🖤' },
            { id: 65, name: 'The Omen', rating: 7.5, genre: 'Horror', like: '🖤' },
            { id: 66, name: 'The Sixth Sense', rating: 7.6, genre: 'Horror', like: '🖤' },
            { id: 67, name: 'Saw', rating: 6.6, genre: 'Horror', like: '🖤' },
            { id: 67, name: 'Scream', rating: 7.0, genre: 'Horror', like: '🖤' },
            { id: 68, name: 'The Grudge', rating: 5.9, genre: 'Horror', like: '🖤' },
            { id: 69, name: 'The Amityville Horror', rating: 5.9, genre: 'Horror', like: '🖤' },
            {
                id: 70,
                name: 'The Lord of the Rings: The Fellowship of the Ring',
                rating: 8.7,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                id: 71,
                name: 'The Lord of the Rings: The Two Towers',
                rating: 8.7,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                id: 72,
                name: 'The Lord of the Rings: The Return of the King',
                rating: 8.8,
                genre: 'Fantasy',
                like: '🖤',
            },
            { id: 73, name: 'The Hobbit: An Unexpected Journey', rating: 7.9, genre: 'Fantasy', like: '🖤' },
            {
                id: 74,
                name: 'The Hobbit: The Desolation of Smaug',
                rating: 7.5,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                id: 75,
                name: 'The Hobbit: The Battle of the Five Armies',
                rating: 7.0,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                id: 76,
                name: 'Harry Potter and the Sorcerers Stone',
                rating: 7.6,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                id: 77,
                name: 'Harry Potter and the Chamber of Secrets',
                rating: 7.4,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                id: 78,
                name: 'Harry Potter and the Prisoner of Azkaban',
                rating: 7.9,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                id: 79,
                name: 'Harry Potter and the Goblet of Fire',
                rating: 7.7,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                id: 80,
                name: 'Harry Potter and the Order of the Phoenix',
                rating: 7.5,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                id: 81,
                name: 'Harry Potter and the Half-Blood Prince',
                rating: 7.6,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                id: 82,
                name: 'Harry Potter and the Deathly Hallows: Part 1',
                rating: 7.7,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                id: 83,
                name: 'Harry Potter and the Deathly Hallows: Part 2',
                rating: 7.7,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                id: 84,
                name: 'Narnia: The Lion, the Witch and the Wardrobe',
                rating: 6.9,
                genre: 'Fantasy',
                like: '🖤',
            },
            { id: 85, name: 'Narnia: Prince Caspian', rating: 6.6, genre: 'Fantasy', like: '🖤' },
            {
                id: 86,
                name: 'Narnia: The Voyage of the Dawn Treader',
                rating: 6.2,
                genre: 'Fantasy',
                like: '🖤',
            },
        ],
        showenMovies: [],
        pages: [],
        newMovie: {},
        mainPageOn: true,
        max: 0,
        // ? Pagination=============
    };
    style = {};
    render() {
        {
            if (this.state.mainPageOn === true) {
                this.chooseWhatToPrint();
            }
        }
        return (
            <div style={this.style}>
                <NavBar mainPage={this.mainPage} pagesNumber={this.pagesNumber} />
                <SideBar
                    showList={this.showMovies}
                    resetShowenList={this.resetShowenList}
                    movies={this.state.movies}
                />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <MovieList
                                showenMovies={this.state.showenMovies}
                                handleLike={this.handleLike}
                                movies={this.state.movies}
                                handleDelete={this.handleDelete}
                            />
                        }
                    />
                    <Route
                        path="/addMovie"
                        element={
                            <AddMovie
                                prevent={this.prevent}
                                handleSubmit={this.handleSubmit}
                                movies={this.state.movies}
                                max={this.state.max}
                            />
                        }
                    />
                </Routes>
                <Footer pages={this.state.pages}></Footer>
            </div>
        );
    }
    showMovies = (genre) => {
        switch (genre) {
            case 'Action':
                {
                    const showenMovies = this.state.movies.filter((movie) => movie.genre === genre);

                    this.setState({ showenMovies });
                }

                break;
            case 'Comedy': {
                const showenMovies = this.state.movies.filter((movie) => movie.genre === genre);

                this.setState({ showenMovies });
                break;
            }
            case 'Fantasy': {
                const showenMovies = this.state.movies.filter((movie) => movie.genre === genre);

                this.setState({ showenMovies });
                break;
            }
            case 'Drama': {
                const showenMovies = this.state.movies.filter((movie) => movie.genre === genre);

                this.setState({ showenMovies });
                break;
            }
            case 'Horror': {
                const showenMovies = this.state.movies.filter((movie) => movie.genre === genre);

                this.setState({ showenMovies });
                break;
            }
            case 'Crime': {
                const showenMovies = this.state.movies.filter((movie) => movie.genre === genre);

                this.setState({ showenMovies });
                break;
            }
            case 'Biography': {
                const showenMovies = this.state.movies.filter((movie) => movie.genre === genre);

                this.setState({ showenMovies });
                break;
            }
            case 'Sci-Fi': {
                const showenMovies = this.state.movies.filter((movie) => movie.genre === genre);

                this.setState({ showenMovies });
                break;
            }
            case 'Adventure': {
                const showenMovies = this.state.movies.filter((movie) => movie.genre === genre);

                this.setState({ showenMovies });
                break;
            }
            case 'Animation': {
                const showenMovies = this.state.movies.filter((movie) => movie.genre === genre);

                this.setState({ showenMovies });
                break;
            }
            case 'Thriller': {
                const showenMovies = this.state.movies.filter((movie) => movie.genre === genre);

                this.setState({ showenMovies });
                break;
            }

            default:
                break;
        }
    };

    handleLike = (id) => {
        const likedMovies = this.state.movies;
        let index = likedMovies.findIndex((element) => element.id === id);
        if (likedMovies[index].like === '🖤') {
            likedMovies[index].like = '🧡';
        } else {
            likedMovies[index].like = '🖤';
        }
        this.setState({ movies: likedMovies });
        this.setState({ showenMovies: this.state.showenMovies });
    };

    chooseWhatToPrint = () => {
        this.setState({ showenMovies: this.state.movies });
        this.setState({ mainPageOn: false });
    };

    handleDelete = (id, genre) => {
        const notDeleted = this.state.movies.filter((movie) => movie.id !== id);
        const showenMovies = this.state.showenMovies.filter((movie) => movie.id !== id);
        this.setState({ movies: notDeleted });
        this.setState({ showenMovies });
    };
    mainPage = () => {
        this.setState({ mainPageOn: true });
    };
    pagesNumber = (ev) => {
        if (ev.target.value !== '' && ev.target.value !== 0) {
            let pages = this.state.pages;
            pages.length = 0;
            for (let i = 1; i <= Math.ceil(this.state.showenMovies.length / ev.target.value); i++) {
                this.state.pages.push(i);
                this.setState({ pages: this.state.pages });
            }
            console.table(this.state.pages);
        }
        console.table(this.state.pages);
    };
    handleSubmit = (event, values) => {
        event.preventDefault();
        let newMovie = {
            id: this.state.idAddMovie,
            ...values,
            like: '🖤',
        };
        this.state.movies.push(newMovie);
        this.setState({ movies: this.state.movies });
        this.state.idAddMovie++;
    };
}
export default MovilyMain;
