import React from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';

class Perguntas extends React.Component {
  state = {
    response: {},
    loading: true,
  };

  async componentDidMount() {
    await this.handleClick();
  }

  handleClick = async () => {
    const tokenLocalStorage = localStorage.getItem('token');
    const url = `https://opentdb.com/api.php?amount=5&token=${tokenLocalStorage}`;
    const data = await fetch(url);
    const response = await data.json();
    this.setState({ response }, () => {
      this.setState({ loading: false });
    });
  };

  render() {
    const { response, loading } = this.state;
    console.log(response);
    return (
      loading ? <Loading /> : (
        <div>
          <h1>
            Perguntas aqui
          </h1>
          <p data-testid="question-category">{response.results[0].category}</p>
          <p data-testid="question-text">{response.results[0].question}</p>
          <div data-testid="answer-options">
            <button
              type="button"
              data-testid="correct-answer"
            >
              {response.results[0].correct_answer}
            </button>
            <button
              type="button"
              data-testid={ `wrong-answer-${0}` }
            >
              {response.results[0].incorrect_answers}
            </button>
          </div>
        </div>
      )

    );
  }
}

export default connect()(Perguntas);
