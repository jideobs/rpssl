import './App.css';
import React from 'react';
import PropTypes from 'prop-types';
import { getChoices, getRandomChoice, play } from './actions';
import Choice from './components/choice';
import Loading from './components/loading';
import ScoreBoard from './components/scoreBoard';

class App extends React.Component {
  static propTypes = {
    choices: PropTypes.array,
  }

  state = {
    choices: [],
    scores: [],
    playerChoice: {},
    computerChoice: {},
    showLoading: false,
  };

  componentDidMount() {
    this.setState({
      showLoading: true,
    });

    getChoices()
      .then((response) => {
        this.setState({
          choices: response,
          showLoading: false,
        });
      },
      (error) => {
        this.setState({
          showLoading: false,
        });

        alert('Unable to fetch choices for playing.');
      });
  }

  getPlayMessage = (result, playerChoice, computerChoice) => {
    let message = `You tie, you both played ${playerChoice.name} and ${computerChoice.name}`;
    if (result === 'win') {
      message = `You win, you played ${playerChoice.name} which beats ${computerChoice.name}`;
    } else if (result === 'lose') {
      message = `You lose, computer played ${computerChoice.name} which beats ${playerChoice.name}`;
    }

    return message;
  }

  addScore = (result) => {
    this.state.scores.unshift(result);
    
    if (this.state.scores.length === 10) {
      this.state.scores.pop();
    }
  }

  resetScore = () => {
    let confirmed = window.confirm('Are you sure you want to reset the score?');
    if (confirmed) {
      this.setState({
        scores: [],
      });
    }
  }

  playChoice = (choice) => {
    this.setState({
      playerChoice: choice,
      showLoading: true,
    });

    play(choice.id)
      .then((response) => {
        let computerChoice = this.state.choices.filter((choice) => choice.id === response.computer)[0];
        this.addScore(response);
        this.setState({
          computerChoice,
          showLoading: false,
          scores: this.state.scores,
        });

        alert(this.getPlayMessage(response.results, this.state.playerChoice, computerChoice));
      },
      (error) => {
        this.setState({
          showLoading: false,
        });

        alert('Play service is not available at the moment. Try again.');
      });
  }

  playRandomChoice = () => {
    this.setState({
      showLoading: true,
    });

    getRandomChoice()
      .then((response) => {
        this.playChoice(response);
        this.setState({
          showLoading: false,
        });
      },
      (error) => {
        this.setState({
          showLoading: false,
        });
        alert('Unable to get random choice.');
      });
  }

  render() {
    return (
      <div className="App d-flex w-100 h-100 mx-auto flex-column">
        <header className="App-header mb-auto">
          <ScoreBoard scores={this.state.scores} resetScoreFn={this.resetScore} />
        </header>
        <div className="play-area">
          <div className={`play ${this.state.computerChoice.name}`}></div>
          <div className={`play ${this.state.playerChoice.name}`}></div>
        </div>
        <div className="mt-auto d-flex justify-content-around">
          {this.state.choices.map((choice, _) => {
            return <Choice 
                      data={choice}
                      key={choice.id} 
                      playChoice={this.playChoice} />
          })}
        </div>
        <div className="choice random-choice d-flex align-items-center justify-content-center" onClick={this.playRandomChoice}>
          <i className="bi bi-shuffle" style={{fontSize: "1.5rem"}}></i>
        </div>
        <Loading show={this.state.showLoading} />
      </div>
    );
  }
}

export default App;
