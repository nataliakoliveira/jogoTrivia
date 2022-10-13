import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import Header from '../components/Header';
import { typeScore } from '../redux/action';

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
              clicou: true,
            });
          }
        },
      );
    }, segundos);
  };

  dispatchScore = (score) => {
    const { dispatch } = this.props;
    dispatch(typeScore(score));
  };

  calculatePoints = () => {
    const { questions, index, tempo } = this.state;
    const difficultyPoints = { easy: 1, medium: 2, hard: 3 };
    const basePoints = 10;
    const { difficulty } = questions[index];
    if (difficulty === 'hard') {
      const score = basePoints + (difficultyPoints.hard * tempo);
      this.dispatchScore(score);
    } else if (difficulty === 'medium') {
      const score = basePoints + (difficultyPoints.medium * tempo);
      this.dispatchScore(score);
    } else {
      const score = basePoints + (difficultyPoints.easy * tempo);
      this.dispatchScore(score);
    }
  };

  handleAnswersClick = ({ target }) => {
    this.setState({ clicou: true }, () => {
      if (target.id === 'correct-answer') {
        this.calculatePoints();
      }
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
      this.tempoJogo();
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

  novaAns = () => {
    const { index } = this.state;
    const { history } = this.props;
    this.setState({ clicou: false });
    this.tempoJogo();
    this.addAns();
    console.log(tempoJogo());
    const ultimaAns = 4;
    if (index <= ultimaAns) history.push('/feedback');
  };

  addAns = () => {
    this.setState(
      (state) => ({ index: state.index + 1 }),
      () => this.responseApi(),
    );
  };

  render() {
    const { response, loading, questions, clicou, index, tempo } = this.state;
    return (
      <div>
        <Header />
        <h1 data-testid="timertest">{tempo}</h1>
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
                      id="correct-answer"
                      data-testid="correct-answer"
                      onClick={ this.handleAnswersClick }
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
                    onClick={ this.handleAnswersClick }
                    disabled={ clicou }
                  >
                    {elem}
                  </button>
                );
              })}
              { this.addAns && (
                <button
                  data-testid="btn-next"
                  type="button"
                  onClick={ this.novaAns }
                >
                  Next
                </button>) }
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
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Game);
