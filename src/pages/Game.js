import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import Header from '../components/Header';

class Game extends React.Component {
  state = {
    questions: [],
    loading: true,
    response: [],
    clicou: false,
    index: 0,
    tempo: 30,
  };

  async componentDidMount() {
    await this.responseApi();
    this.tempoJogo();
  }

  tempoJogo = () => {
    const segundos = 1000;
    const idInterval = setInterval(() => {
      this.setState(
        (prevState) => ({
          tempo: prevState.tempo - 1,
        }),
        () => {
          const { tempo } = this.state;
          if (tempo === 0) {
            clearInterval(idInterval);
            this.setState({
              clicou:true,
            });
          }
        },
      );
    }, segundos);
  };

  onChange = () => {
    this.setState({
      clicou: true,
    });
  };

  shuffle = (array = []) => {
    const numberRandom = 0.5;
    return array.slice().sort(() => Math.random() - numberRandom);
  };

  responseApi = async () => {
    const { history } = this.props;
    const { index } = this.state;
    const tokenLocalStorage = localStorage.getItem('token');
    const url = `https://opentdb.com/api.php?amount=5&token=${tokenLocalStorage}`;
    const data = await fetch(url);
    const response = await data.json();
    const errorCode = 3;
    if (response.response_code === errorCode) {
      history.push('/');
      return;
    }
    let randomResponse;
    randomResponse = [
      response.results[index].correct_answer,
      ...response.results[index].incorrect_answers,
    ];
    randomResponse = this.shuffle(randomResponse);
    this.setState({
      response: randomResponse,
      questions: response.results,
      loading: false,
    });
  };

  render() {
    const { response, loading, questions, clicou, index, tempo, disabled } = this.state;
    return (
      <div>
        <Header />
        <h1>{tempo}</h1>
        <h1>Página do Game</h1>
        {loading && <Loading />}
        {response.length > 0 && (
          <div>
            <h1>Perguntas aqui</h1>
            <p data-testid="question-category">{questions[index].category}</p>
            <p data-testid="question-text">{questions[index].question}</p>
            <div data-testid="answer-options">
              {response.map((elem, i) => {
                if (elem === questions[index].correct_answer) {
                  return (
                    <button
                      className={ clicou && 'green-border' }
                      key={ i }
                      type="button"
                      data-testid="correct-answer"
                      onClick={ this.onChange }
                      disabled={ clicou }
                    >
                      {elem}
                    </button>
                  );
                }
                return (
                  <button
                    className={ clicou && 'red-border' }
                    key={ i }
                    type="button"
                    data-testid={ `wrong-answer-${index}` }
                    onClick={ this.onChange }
                    disabled={ clicou }
                  >
                    {elem}
                  </button>
                );
              })}
              <button
                data-testid="btn-next"
                type="button"
                disabled={ !clicou }
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

Game.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect()(Game);
