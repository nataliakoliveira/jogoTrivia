import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

class Feedback extends Component {
  handleClickHome = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <>
        <Header />
        <div data-testid="feedback-text">
          {/* 'se o numero de acerto for igual ou maior que 3 ele retorna a mensagem Well Done!'

          "se o numero de acerto for menor que 3 retorna a mensagem Could be better.." */}
        </div>
        <button
          data-testid="btn-play-again"
          type="button"
          onClick={ this.handleClickHome }
        >
          Play Again
        </button>
      </>
    );
  }
}

Feedback.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Feedback;
