import React, { Component } from 'react';
import MovieList from './movieList';
import NavBar from './navBar';
import SideBar from './sideBar';
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import AddMovie from './addMovie';
import Footer from './footer';
import I1 from './images/1.jpg';
import I2 from './images/2.jpg';
import I3 from './images/3.jpg';
import I4 from './images/4.jpg';
import I5 from './images/5.jpg';
import I6 from './images/11.jpg';
import I7 from './images/7.jpg';
import I8 from './images/8.jpg';
import I9 from './images/9.jpg';
import I10 from './images/10.jpg';
import I11 from './images/21.jpg';
import I12 from './images/12.jpg';
import I13 from './images/13.jpg';
import I14 from './images/14.jpg';
import I15 from './images/15.jpg';
import I16 from './images/16.jpg';
import I17 from './images/17.jpg';
import I18 from './images/18.jpg';
import I19 from './images/19.jpg';
import I20 from './images/20.jpg';
import I21 from './images/20.jpg';
import I22 from './images/22.jpg';
import I23 from './images/23.jpg';
import I24 from './images/24.jpg';
import I25 from './images/25.jpg';
import I26 from './images/26.jpg';
import I27 from './images/27.jpg';
import I28 from './images/28.jpg';
import I29 from './images/29.jpg';
import I30 from './images/30.jpg';
import I31 from './images/31.jpg';
import I32 from './images/32.jpg';
import I33 from './images/33.jpg';
import I34 from './images/34.jpg';
import I35 from './images/35.jpg';
import I36 from './images/36.jpg';
import I37 from './images/37.jpg';
import I38 from './images/38.jpg';
import I39 from './images/39.jpg';
import I40 from './images/40.jpg';
import I41 from './images/41.jpg';
import I42 from './images/42.jpg';
import I43 from './images/43.jpg';
import I44 from './images/44.jpg';
import I45 from './images/45.jpg';
import I46 from './images/46.jpg';
import I47 from './images/47.jpg';
import I48 from './images/48.jpg';
import I49 from './images/49.jpg';
import I50 from './images/50.jpg';
import I51 from './images/51.jpg';
import I52 from './images/52.jpg';
import I53 from './images/53.jpg';
import I54 from './images/54.jpg';
import I55 from './images/55.jpg';
import I56 from './images/56.jpg';
import I57 from './images/57.jpg';
import I58 from './images/58.jpg';
import I59 from './images/59.jpg';
import I60 from './images/60.jpg';
import I61 from './images/61.jpg';
import I62 from './images/62.jpg';
import I63 from './images/63.jpg';
import I64 from './images/64.jpg';
import I65 from './images/65.jpg';
import I66 from './images/66.jpg';
import I67 from './images/67.jpg';
import I68 from './images/68.jpg';
import I69 from './images/69.jpg';
import I70 from './images/70.jpg';
import I71 from './images/71.jpg';
import I72 from './images/72.jpg';
import I73 from './images/73.jpg';
import I74 from './images/74.jpg';
import I75 from './images/75.jpg';
import I76 from './images/76.jpg';
import I77 from './images/77.jpg';
import I78 from './images/78.jpg';
import I79 from './images/79.jpg';
import I80 from './images/80.jpg';
import I81 from './images/81.jpg';
import I82 from './images/82.jpg';
import I83 from './images/83.jpg';
import I84 from './images/84.jpg';
import I85 from './images/85.jpg';
import I86 from './images/86.jpg';
import I87 from './images/87.jpg';

class MovilyMain extends Component {
    state = {
        idAddMovie: 87,
        movies: [
            { image: I1, id: 1, name: 'The Shawshank Redemption', rating: 9.2, genre: 'Drama', like: '🖤' },
            { image: I2, id: 2, name: 'The Godfather', rating: 9.2, genre: 'Crime', like: '🖤' },
            { image: I3, id: 3, name: 'The Godfather: Part II', rating: 9.0, genre: 'Crime', like: '🖤' },
            { image: I4, id: 4, name: 'The Dark Knight', rating: 9.0, genre: 'Action', like: '🖤' },
            { image: I5, id: 5, name: '12 Angry Men', rating: 8.9, genre: 'Drama', like: '🖤' },
            { image: I6, id: 6, name: 'Schindlers List', rating: 8.9, genre: 'Biography', like: '🖤' },
            { image: I7, id: 7, name: 'Pulp Fiction', rating: 8.9, genre: 'Crime', like: '🖤' },
            {
                image: I8,
                id: 8,
                name: 'The Good, the Bad and the Ugly',
                rating: 8.8,
                genre: 'Western',
                like: '🖤',
            },
            { image: I9, id: 9, name: 'The Return of the King', rating: 8.8, genre: 'Adventure', like: '🖤' },
            { image: I10, id: 10, name: 'Fight Club', rating: 8.8, genre: 'Drama', like: '🖤' },
            { image: I11, id: 11, name: 'The Empire Strikes Back', rating: 8.7, genre: 'Sci-Fi', like: '🖤' },
            {
                image: I87,
                id: 12,
                name: 'One Flew Over the Cuckoos Nest',
                rating: 8.7,
                genre: 'Drama',
                like: '🖤',
            },
            {
                image: I86,
                id: 13,
                name: 'The Fellowship of the Ring',
                rating: 8.7,
                genre: 'Adventure',
                like: '🖤',
            },
            { image: I12, id: 14, name: 'Inception', rating: 8.7, genre: 'Action', like: '🖤' },
            { image: I13, id: 15, name: 'Goodfellas', rating: 8.7, genre: 'Crime', like: '🖤' },
            { image: I14, id: 16, name: 'The Matrix', rating: 8.6, genre: 'Sci-Fi', like: '🖤' },
            { image: I15, id: 17, name: 'Seven Samurai', rating: 8.6, genre: 'Adventure', like: '🖤' },
            {
                image: I85,
                id: 18,
                name: 'Star Wars: Episode IV - A New Hope',
                rating: 8.6,
                genre: 'Sci-Fi',
                like: '🖤',
            },
            { image: I16, id: 19, name: 'Forrest Gump', rating: 8.6, genre: 'Drama', like: '🖤' },
            {
                image: I84,
                id: 20,
                name: 'The Silence of the Lambs',
                rating: 8.6,
                genre: 'Thriller',
                like: '🖤',
            },
            { image: I17, id: 21, name: 'Its a Wonderful Life', rating: 8.5, genre: 'Drama', like: '🖤' },
            { image: I18, id: 22, name: 'Life Is Beautiful', rating: 8.5, genre: 'Comedy', like: '🖤' },
            { image: I19, id: 23, name: 'The Usual Suspects', rating: 8.5, genre: 'Crime', like: '🖤' },
            { image: I20, id: 24, name: 'Léon: The Professional', rating: 8.5, genre: 'Crime', like: '🖤' },
            { image: I21, id: 25, name: 'Spirited Away', rating: 8.4, genre: 'Animation', like: '🖤' },
            { image: I22, id: 26, name: 'Saving Private Ryan', rating: 8.4, genre: 'Drama', like: '🖤' },
            { image: I23, id: 27, name: 'The Green Mile', rating: 8.4, genre: 'Drama', like: '🖤' },
            { image: I24, id: 28, name: 'Interstellar', rating: 8.4, genre: 'Sci-Fi', like: '🖤' },
            { image: I25, id: 29, name: 'American Beauty', rating: 8.3, genre: 'Drama', like: '🖤' },
            { image: I26, id: 30, name: 'Pulp Fiction', rating: 8.9, genre: 'Crime', like: '🖤' },
            { image: I27, id: 31, name: 'The Godfather', rating: 9.2, genre: 'Crime', like: '🖤' },
            { image: I28, id: 32, name: 'The Dark Knight', rating: 9.0, genre: 'Action', like: '🖤' },
            { image: I29, id: 33, name: 'The Shawshank Redemption', rating: 9.2, genre: 'Drama', like: '🖤' },
            {
                image: I83,
                id: 34,
                name: 'The Silence of the Lambs',
                rating: 8.6,
                genre: 'Thriller',
                like: '🖤',
            },
            { image: I30, id: 35, name: 'Fight Club', rating: 8.8, genre: 'Drama', like: '🖤' },
            { image: I31, id: 36, name: 'The Prestige', rating: 8.3, genre: 'Drama', like: '🖤' },
            { image: I32, id: 37, name: 'Gladiator', rating: 8.3, genre: 'Action', like: '🖤' },
            { image: I33, id: 38, name: 'The Green Mile', rating: 8.4, genre: 'Drama', like: '🖤' },
            { image: I34, id: 39, name: 'The Departed', rating: 8.2, genre: 'Crime', like: '🖤' },
            { image: I35, id: 40, name: 'The Lion King', rating: 8.3, genre: 'Animation', like: '🖤' },
            { image: I36, id: 41, name: 'Interstellar', rating: 8.4, genre: 'Sci-Fi', like: '🖤' },
            { image: I37, id: 42, name: 'The Matrix', rating: 8.6, genre: 'Sci-Fi', like: '🖤' },
            { image: I38, id: 43, name: 'Spirited Away', rating: 8.4, genre: 'Animation', like: '🖤' },
            { image: I39, id: 44, name: 'The Usual Suspects', rating: 8.5, genre: 'Crime', like: '🖤' },
            { image: I40, id: 45, name: 'Inception', rating: 8.7, genre: 'Action', like: '🖤' },
            {
                image: I82,
                id: 46,
                name: 'The Good, the Bad and the Ugly',
                rating: 8.8,
                genre: 'Western',
                like: '🖤',
            },
            { image: I41, id: 47, name: 'The Great Dictator', rating: 8.2, genre: 'Comedy', like: '🖤' },
            { image: I42, id: 48, name: 'Back to the Future', rating: 8.2, genre: 'Sci-Fi', like: '🖤' },
            { image: I43, id: 49, name: 'Life Is Beautiful', rating: 8.5, genre: 'Comedy', like: '🖤' },
            { image: I44, id: 50, name: 'Its a Wonderful Life', rating: 8.5, genre: 'Drama', like: '🖤' },
            { image: I45, id: 51, name: 'Léon: The Professional', rating: 8.5, genre: 'Crime', like: '🖤' },
            {
                image: I81,
                id: 52,
                name: 'Grave of the Fireflies',
                rating: 8.1,
                genre: 'Animation',
                like: '🖤',
            },
            { image: I46, id: 53, name: 'The Shining', rating: 8.5, genre: 'Horror', like: '🖤' },
            { image: I47, id: 54, name: 'The Exorcist', rating: 8.0, genre: 'Horror', like: '🖤' },
            { image: I48, id: 55, name: 'Halloween', rating: 7.8, genre: 'Horror', like: '🖤' },
            { image: I49, id: 56, name: 'Psycho', rating: 8.5, genre: 'Horror', like: '🖤' },
            {
                image: I79,
                id: 57,
                name: 'A Nightmare on Elm Street',
                rating: 7.5,
                genre: 'Horror',
                like: '🖤',
            },
            {
                image: I80,
                id: 58,
                name: 'The Texas Chain Saw Massacre',
                rating: 7.5,
                genre: 'Horror',
                like: '🖤',
            },
            {
                image: I50,
                id: 59,
                name: 'The Silence of the Lambs',
                rating: 8.6,
                genre: 'Horror',
                like: '🖤',
            },
            { image: I51, id: 60, name: 'Friday the 13th', rating: 6.0, genre: 'Horror', like: '🖤' },
            { image: I52, id: 61, name: 'The Ring', rating: 7.1, genre: 'Horror', like: '🖤' },
            { image: I53, id: 62, name: 'The Conjuring', rating: 7.5, genre: 'Horror', like: '🖤' },
            { image: I54, id: 63, name: 'The Blair Witch Project', rating: 6.4, genre: 'Horror', like: '🖤' },
            { image: I55, id: 64, name: 'Poltergeist', rating: 7.0, genre: 'Horror', like: '🖤' },
            { image: I56, id: 65, name: 'The Omen', rating: 7.5, genre: 'Horror', like: '🖤' },
            { image: I57, id: 66, name: 'The Sixth Sense', rating: 7.6, genre: 'Horror', like: '🖤' },
            { image: I58, id: 67, name: 'Saw', rating: 6.6, genre: 'Horror', like: '🖤' },
            { image: I59, id: 67, name: 'Scream', rating: 7.0, genre: 'Horror', like: '🖤' },
            { image: I60, id: 68, name: 'The Grudge', rating: 5.9, genre: 'Horror', like: '🖤' },
            { image: I78, id: 69, name: 'The Amityville Horror', rating: 5.9, genre: 'Horror', like: '🖤' },
            {
                image: I61,
                id: 70,
                name: 'The Lord of the Rings: The Fellowship of the Ring',
                rating: 8.7,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                image: I62,
                id: 71,
                name: 'The Lord of the Rings: The Two Towers',
                rating: 8.7,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                image: I63,
                id: 72,
                name: 'The Lord of the Rings: The Return of the King',
                rating: 8.8,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                image: I64,
                id: 73,
                name: 'The Hobbit: An Unexpected Journey',
                rating: 7.9,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                image: I65,
                id: 74,
                name: 'The Hobbit: The Desolation of Smaug',
                rating: 7.5,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                image: I66,
                id: 75,
                name: 'The Hobbit: The Battle of the Five Armies',
                rating: 7.0,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                image: I67,
                id: 76,
                name: 'Harry Potter and the Sorcerers Stone',
                rating: 7.6,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                image: I68,
                id: 77,
                name: 'Harry Potter and the Chamber of Secrets',
                rating: 7.4,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                image: I69,
                id: 78,
                name: 'Harry Potter and the Prisoner of Azkaban',
                rating: 7.9,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                image: I70,
                id: 79,
                name: 'Harry Potter and the Goblet of Fire',
                rating: 7.7,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                image: I71,
                id: 80,
                name: 'Harry Potter and the Order of the Phoenix',
                rating: 7.5,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                image: I72,
                id: 81,
                name: 'Harry Potter and the Half-Blood Prince',
                rating: 7.6,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                image: I73,
                id: 82,
                name: 'Harry Potter and the Deathly Hallows: Part 1',
                rating: 7.7,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                image: I74,
                id: 83,
                name: 'Harry Potter and the Deathly Hallows: Part 2',
                rating: 7.7,
                genre: 'Fantasy',
                like: '🖤',
            },
            {
                image: I75,
                id: 84,
                name: 'Narnia: The Lion, the Witch and the Wardrobe',
                rating: 6.9,
                genre: 'Fantasy',
                like: '🖤',
            },
            { image: I76, id: 85, name: 'Narnia: Prince Caspian', rating: 6.6, genre: 'Fantasy', like: '🖤' },
            {
                image: I77,
                id: 86,
                name: 'Narnia: The Voyage of the Dawn Treader',
                rating: 6.2,
                genre: 'Fantasy',
                like: '🖤',
            },
        ],
        showenMovies: [],
        pages: [],
        moviesPerPage: 10,
        currentPage: 1,
        newMovie: [],
        mainPageOn: true,
        max: 0,
        buttonBadges: [
            { action: 0 },
            { comedy: 0 },
            { drama: 0 },
            { fantasy: 0 },
            { horror: 0 },
            { crime: 0 },
            { biography: 0 },
            { scifi: 0 },
            { adventure: 0 },
            { animation: 0 },
            { thriller: 0 },
        ],
    };
    style = {};
    render() {
        if (this.state.mainPageOn === true) {
            this.chooseWhatToPrint();
        }
        this.updateButtonBagdes();

        return (
            <div style={this.style}>
                <NavBar
                    mainPage={this.mainPage}
                    pagesNumber={this.pagesNumber}
                    updateCurrentPage={this.updateCurrentPage}
                    setMoviesPerPage={this.setMoviesPerPage}
                />
                <SideBar
                    showList={this.showMovies}
                    resetShowenList={this.resetShowenList}
                    movies={this.state.movies}
                    buttonBadges={this.state.buttonBadges}
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
                                moviesPerPage={this.state.moviesPerPage}
                                currentPage={this.state.currentPage}
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
                <Footer
                    pages={this.state.pages}
                    pageSwich={this.pageSwich}
                    moviesPerPage={this.state.moviesPerPage}
                    currentPage={this.state.currentPage}
                    updateCurrentPage={this.updateCurrentPage}
                    movies={this.state.movies}
                    showenMovies={this.state.showenMovies}
                ></Footer>
            </div>
        );
    }

    showMovies = (genre) => {
        switch (genre) {
            case 'Action':
                {
                    const showenMovies = this.state.movies.filter((movie) => movie.genre === genre);

                    this.setState({ showenMovies });
                    this.state.currentPage = 1;
                }

                break;
            case 'Comedy': {
                const showenMovies = this.state.movies.filter((movie) => movie.genre === genre);

                this.setState({ showenMovies });
                this.state.currentPage = 1;

                break;
            }
            case 'Fantasy': {
                const showenMovies = this.state.movies.filter((movie) => movie.genre === genre);

                this.setState({ showenMovies });
                this.state.currentPage = 1;

                break;
            }
            case 'Drama': {
                const showenMovies = this.state.movies.filter((movie) => movie.genre === genre);

                this.setState({ showenMovies });
                this.state.currentPage = 1;

                break;
            }
            case 'Horror': {
                const showenMovies = this.state.movies.filter((movie) => movie.genre === genre);

                this.setState({ showenMovies });
                this.state.currentPage = 1;

                break;
            }
            case 'Crime': {
                const showenMovies = this.state.movies.filter((movie) => movie.genre === genre);

                this.setState({ showenMovies });
                this.state.currentPage = 1;

                break;
            }
            case 'Biography': {
                const showenMovies = this.state.movies.filter((movie) => movie.genre === genre);

                this.setState({ showenMovies });
                this.state.currentPage = 1;

                break;
            }
            case 'Sci-Fi': {
                const showenMovies = this.state.movies.filter((movie) => movie.genre === genre);

                this.setState({ showenMovies });
                this.state.currentPage = 1;

                break;
            }
            case 'Adventure': {
                const showenMovies = this.state.movies.filter((movie) => movie.genre === genre);

                this.setState({ showenMovies });
                this.state.currentPage = 1;

                break;
            }
            case 'Animation': {
                const showenMovies = this.state.movies.filter((movie) => movie.genre === genre);

                this.setState({ showenMovies });
                this.state.currentPage = 1;

                break;
            }
            case 'Thriller': {
                const showenMovies = this.state.movies.filter((movie) => movie.genre === genre);

                this.setState({ showenMovies });
                this.state.currentPage = 1;

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

    handleDelete = (id) => {
        const notDeleted = this.state.movies.filter((movie) => movie.id !== id);
        const showenMovies = this.state.showenMovies.filter((movie) => movie.id !== id);
        this.setState({ movies: notDeleted });
        this.setState({ showenMovies });
    };
    mainPage = () => {
        this.setState({ mainPageOn: true });
    };
    setMoviesPerPage = (ev) => {
        if (ev.key == 'Enter' && ev.target.value > 0) {
            this.setState({ moviesPerPage: ev.target.value });
        }
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
        console.log(event.target);
        event.target.reset();
    };
    updateButtonBagdes = () => {
        const action = this.state.movies.filter((movie) => movie.genre == 'Action');
        this.state.buttonBadges[0] = action.length;
        const comedy = this.state.movies.filter((movie) => movie.genre == 'Comedy');
        this.state.buttonBadges[1] = comedy.length;
        const drama = this.state.movies.filter((movie) => movie.genre == 'Drama');
        this.state.buttonBadges[2] = drama.length;
        const fantasy = this.state.movies.filter((movie) => movie.genre == 'Fantasy');
        this.state.buttonBadges[3] = fantasy.length;
        const horror = this.state.movies.filter((movie) => movie.genre == 'Horror');
        this.state.buttonBadges[4] = horror.length;
        const crime = this.state.movies.filter((movie) => movie.genre == 'Crime');
        this.state.buttonBadges[5] = crime.length;
        const biography = this.state.movies.filter((movie) => movie.genre == 'Biography');
        this.state.buttonBadges[6] = biography.length;
        const scifi = this.state.movies.filter((movie) => movie.genre == 'Sci-Fi');
        this.state.buttonBadges[7] = scifi.length;
        const adventure = this.state.movies.filter((movie) => movie.genre == 'Adventure');
        this.state.buttonBadges[8] = adventure.length;
        const animation = this.state.movies.filter((movie) => movie.genre == 'Animation');
        this.state.buttonBadges[9] = animation.length;
        const thriller = this.state.movies.filter((movie) => movie.genre == 'Thriller');
        this.state.buttonBadges[10] = thriller.length;
    };
    updateCurrentPage = (number) => {
        this.setState({ currentPage: number });
    };
}
export default MovilyMain;
