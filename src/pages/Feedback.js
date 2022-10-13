import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends Component {
  handleClickHome = () => {
    const { history } = this.props;
    history.push('/');
  };

  mensagemDoFdb = () => {
    const magicNumber = 3;
    const { assertions } = this.props;
    if (assertions < magicNumber) {
      return 'Could be better...';
    } if (assertions >= magicNumber) {
      return 'Well Done!';
    }
  };

  render() {
    // const { assertions } = this.props;
    // const numeroMagic = 3;
    return (
      <>
        <Header />
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
      </>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  assertions: state.player.assertions,
});

export default connect(mapStateToProps)(Feedback);
