import React, { Component } from 'react';

class SideBar extends Component {
    render() {
        return (
            <div id="siderMain">
                <div id="buttonContainer">
                    <button id="sideButton" onClick={() => this.props.showList('Action')}>
                        Action<span id="innerButton">{this.props.buttonBadges[0]}</span>
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Comedy')}>
                        Comedy<span id="innerButton">{this.props.buttonBadges[1]}</span>
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Drama')}>
                        Drama<span id="innerButton">{this.props.buttonBadges[2]}</span>
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Fantasy')}>
                        Fantasy<span id="innerButton">{this.props.buttonBadges[3]}</span>
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Horror')}>
                        Horror<span id="innerButton">{this.props.buttonBadges[4]}</span>
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Crime')}>
                        Crime<span id="innerButton">{this.props.buttonBadges[5]}</span>
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Biography')}>
                        Biography<span id="innerButton">{this.props.buttonBadges[6]}</span>
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Sci-Fi')}>
                        Sci-Fi<span id="innerButton">{this.props.buttonBadges[7]}</span>
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Adventure')}>
                        Adventure<span id="innerButton">{this.props.buttonBadges[8]}</span>
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Animation')}>
                        Animation<span id="innerButton">{this.props.buttonBadges[9]}</span>
                    </button>
                    <button id="sideButton" onClick={() => this.props.showList('Thriller')}>
                        Thriller<span id="innerButton">{this.props.buttonBadges[10]}</span>
                    </button>
                </div>
            </div>
        );
    }
}

export default SideBar;
