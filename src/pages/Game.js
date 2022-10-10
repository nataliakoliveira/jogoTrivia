import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Perguntas from '../components/Perguntas';

class Game extends React.Component {
  componentDidMount() {
    this.handleClick();
  }

  handleClick = async () => {
    const { history } = this.props;
    const tokenLocalStorage = localStorage.getItem('token');
    const url2 = `https://opentdb.com/api.php?amount=5&token=${tokenLocalStorage}`;
    const data2 = await fetch(url2);
    const response2 = await data2.json();
    const { results } = response2;
    return !results.length && history.push('/');
  };

  render() {
    return (
      <div>
        <Header />
        <button
          type="button"
          onClick={ this.handleClick }
        >
          ChamadaTokenLocalStorage

        </button>
        <h1>Página do Game</h1>
        <Perguntas />
      </div>
    );
  }
}

Game.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Game;
