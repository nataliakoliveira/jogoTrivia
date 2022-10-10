import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Perguntas from '../components/Perguntas';

class Game extends React.Component {
  async componentDidMount() {
    await this.handleClick();
  }

  handleClick = async () => {
    const { history } = this.props;
    const tokenLocalStorage = localStorage.getItem('token');
    const url = `https://opentdb.com/api.php?amount=5&token=${tokenLocalStorage}`;
    const data = await fetch(url);
    const response = await data.json();
    const errorCode = 3;
    if (response.response_code === errorCode) history.push('/');
  };

  render() {
    return (
      <div>
        <Header />
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
