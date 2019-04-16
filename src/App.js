import React, { Component } from 'react';
import './App.css';
import Buttons from './components/Buttons/Buttons';
import WhillBox from './components/WhillBox/WhillBox';

import strawberry from './assets/strawberry.png';
import banana from './assets/banana.png';
import orange from './assets/orange.png';
import monkey from './assets/monkey.png';

class App extends Component {
    state = {
        pictures: [strawberry, banana, orange, monkey],
        selected: [],
        interval: null,
        timeout: null,
        totalAmount: 0,
        stopAction: false
    }

    constructor(props) {
        super(props)
        this.generateRandomPhotos();
    }

    startDrawHandler = () => {
        let time = new Date();
        this.state.interval = setInterval(() => {
            let currentTime = new Date();

            this.generateRandomPhotos();

            this.setState({
                selected: this.state.selected, 
                interval: this.state.interval,
                stopAction: false
            });

            if (time.getTime() + 10000 < currentTime.getTime()) {
                clearInterval(this.state.interval);
                this.stopDrawHandler();
            }
        }, 50)
    }

    stopDrawHandler = () => {
        let selected = this.state.selected;
        if (selected[0] === selected[2] && selected[0] !== selected[1]) {
            this.state.totalAmount += 10;
        } else if ((selected[0] === selected[1] || selected[1] === selected[2]) && selected[0] !== selected[2]) {
            this.state.totalAmount += 20;
        } else if (selected[0] === selected[1] && selected[1] === selected[2]) {
            this.state.totalAmount += 100;
        } else {
            this.state.totalAmount = 0;
        }

        clearInterval(this.state.interval);
        clearTimeout(this.state.timeout);
        this.setState({selected: this.state.selected, totalAmount: this.state.totalAmount, stopAction: true})
        
    }

    generateRandomPhotos () {
        for (let i = 0; i < 3; i++) {
            this.state.selected[i] = Math.floor(Math.random() * this.state.pictures.length);
        }
    }

    render() {
        this.state.timeout = setTimeout(() => {
            if (this.state.interval === null) {
                this.startDrawHandler();
            }
        }, 5000)

        return (
            <div className="App">
                <WhillBox pictures={this.state.pictures} selected={this.state.selected} />
                <Buttons start={this.startDrawHandler} stop={this.stopDrawHandler} stopAction={this.state.stopAction} />
                <p>You win: <strong>{this.state.totalAmount} $</strong></p>
            </div>
        );
    }
}

export default App;
