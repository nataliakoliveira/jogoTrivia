import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import Header from '../components/Header';

class Game extends React.Component {
  state = {
    questions: [],
    loading: true,
    response: [],
  };

  async componentDidMount() {
    await this.responseApi();
  }

  shuffle = (array = []) => {
    const numberRandom = 0.5;
    return array.slice().sort(() => Math.random() - numberRandom);
  };

  responseApi = async () => {
    const { history } = this.props;
    const tokenLocalStorage = localStorage.getItem('token');
    const url = `https://opentdb.com/api.php?amount=5&token=${tokenLocalStorage}`;
    const data = await fetch(url);
    const response = await data.json();
    console.log(response, this.props);
    const errorCode = 3;
    if (response.response_code === errorCode) history.push('/');
    let randomResponse;
    randomResponse = [
      response.results[0].correct_answer, ...response.results[0].incorrect_answers];
    randomResponse = this.shuffle(randomResponse);
    this.setState({
      response: randomResponse,
      questions: response.results,
      loading: false,
    });
  };

  render() {
    const { response, loading, questions } = this.state;
    return (
      <div>
        <Header />
        <h1>Página do Game</h1>
        {loading && <Loading />}
        {
          response.length > 0 && (
            <div>
              <h1>
                Perguntas aqui
              </h1>
              <p data-testid="question-category">{questions[0].category}</p>
              <p data-testid="question-text">{questions[0].question}</p>
              <div data-testid="answer-options">
                {response.map((elem, i) => {
                  if (elem === questions[0].correct_answer) {
                    return (
                      <button
                        key={ i }
                        type="button"
                        data-testid="correct-answer"
                      >
                        {elem}
                      </button>
                    );
                  }
                  return (
                    <button
                      key={ i }
                      type="button"
                      data-testid={ `wrong-answer-${0}` }
                    >
                      {elem}
                    </button>
                  );
                })}
              </div>
            </div>
          )
        }
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
