import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends Component {
  handleClickHome = () => {
    const { history } = this.props;
    history.push('/');
  };

  handleClickRanking = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  mensagemDoFdb = () => {
    const magicNumber = 3;
    const { assertions } = this.props;
    return (assertions >= magicNumber) ? 'Well Done!' : 'Could be better...';
  };

  render() {
    const { score, assertions } = this.props;
    return (
      <>
        <Header />
        <div className="resultados">
          RESULTADOS
          <p data-testid="feedback-total-score">{ score }</p>
          <p data-testid="feedback-total-question">{ assertions }</p>
        </div>
        <div data-testid="feedback-text">
          <p>{this.mensagemDoFdb()}</p>
        </div>
        <button
          data-testid="btn-play-again"
          type="button"
          onClick={ this.handleClickHome }
        >
          Play Again
        </button>
        <button
          data-testid="btn-go-home"
          type="button"
          onClick={ this.handleClickHome }
        >
          Tela inicial
        </button>

        <button
          data-testid="btn-ranking"
          type="button"
          onClick={ this.handleClickRanking }
        >
          Ranking
        </button>
      </>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  score: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
  score: state.player.score,
});

export default connect(mapStateToProps)(Feedback);
