import React, { Component } from 'react';

class ScoreKeeper extends Component {
    constructor(props) {
        super(props);
        this.state = {score : 0};
        this.singleKill = this.singleKill.bind(this);
    }

    // singleKill() {
    //     this.setState(curState => {return {score : curState.score + 1}});
    // }

    incrementScore(curState) {
        return {score : curState.score + 1};
    }

    singleKill(){
        this.setState(incrementScore);
    }

    render() {
        return (
            <div>
                <h1>Score is: {this.state.score}</h1>
                <button onClick={this.singleKill}>Single Kill</button>
            </div>
        )
    }
}

export default ScoreKeeper;