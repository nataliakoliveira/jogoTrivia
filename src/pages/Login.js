import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
/* import { typeApi } from '../Redux/action/index'; */

class Login extends Component {
  state = {
    email: '',
    name: '',
    isBtnDisabled: true,
  };

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.verifyBtn());
  };

  // referencia de regex com daniellegazarini aula esquenta.
  verifyBtn = () => {
    const { email, name } = this.state;
    const numeroMagic = 2;
    const regex = /\S+@\S+\.\S+/;
    const verifyEmail = regex.test(email);
    const verifyName = name.length > numeroMagic;
    const btnState = verifyEmail && verifyName;
    if (btnState) {
      this.setState({
        isBtnDisabled: false,
      });
    } else {
      this.setState({
        isBtnDisabled: true,
      });
    }
  };

  handleClick = async (e) => {
    e.preventDefault();
    const { history } = this.props;
    const url = 'https://opentdb.com/api_token.php?command=request';
    const data = await fetch(url);
    const response = await data.json();
    const { token } = response;
    localStorage.setItem('token', token);
    history.push('/game');
    console.log(token);
  };

  render() {
    const { name, email, isBtnDisabled } = this.state;
    return (
      <>
        <h1>estou aqui Login</h1>
        <form>
          <input
            data-testid="input-player-name"
            type="text"
            value={ name }
            name="name"
            placeholder="Digite seu Nome"
            onChange={ this.handleInput }
          />
          <input
            data-testid="input-gravatar-email"
            placeholder="Digite seu Email"
            type="text"
            value={ email }
            name="email"
            onChange={ this.handleInput }
            required
          />
          <button
            data-testid="btn-play"
            type="submit"
            disabled={ isBtnDisabled }
            onClick={ this.handleClick }
          >
            Play
          </button>
        </form>
      </>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

/* mapStateToProps = (state) => ({ ...state }); */

export default connect()(Login);