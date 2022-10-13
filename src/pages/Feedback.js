import React, { Component } from 'react';
import Header from '../components/Header';

class Feedback extends Component {
  handleClickHome = async (e) => {
    e.preventDefault();
    const { history } = this.props;
    history.push('/');
  };

  render() {
    return (
      <>
        <Header />
        <div data-testid="feedback-text">
          {}
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
