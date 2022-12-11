import React, { Component } from 'react';

class SideBar extends Component {
    render() {
        return (
            <div id="siderMain">
                <div id="buttonContainer">
                    <button id="sideButton" onClick={() => this.props.showList('Action')}>
                        Action<span id="innerButton">10</span>
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Comedy')}>
                        Comedy<span id="innerButton">10</span>
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Drama')}>
                        Drama<span id="innerButton">10</span>
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Fantasy')}>
                        Fantasy<span id="innerButton">10</span>
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Horror')}>
                        Horror<span id="innerButton">10</span>
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Crime')}>
                        Crime<span id="innerButton">10</span>
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Biography')}>
                        Biography<span id="innerButton">10</span>
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Sci-Fi')}>
                        Sci-Fi<span id="innerButton">10</span>
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Adventure')}>
                        Adventure<span id="innerButton">10</span>
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Animation')}>
                        Animation<span id="innerButton">10</span>
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Thriller')}>
                        Thriller<span id="innerButton">10</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default SideBar;
