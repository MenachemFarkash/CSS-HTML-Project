import React, { Component } from 'react';

class SideBar extends Component {
    render() {
        return (
            <div id="siderMain">
                <div id="buttonContainer">
                    <button id="sideButton" onClick={() => this.props.showList('Action')}>
                        Action
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Comedy')}>
                        Comedy
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Drama')}>
                        Drama
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Fantasy')}>
                        Fantasy
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Horror')}>
                        Horror
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Crime')}>
                        Crime
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Biography')}>
                        Biography
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Sci-Fi')}>
                        Sci-Fi
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Adventure')}>
                        Adventure
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Animation')}>
                        Animation
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Thriller')}>
                        Thriller
                    </button>
                </div>
            </div>
        );
    }
}

export default SideBar;
