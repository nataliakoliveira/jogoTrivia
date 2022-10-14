import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { typeLogin } from '../redux/action/index';

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
    const { history, dispatch } = this.props;
    const { email, name } = this.state;
    const url = 'https://opentdb.com/api_token.php?command=request';
    const data = await fetch(url);
    const response = await data.json();
    const { token } = response;
    localStorage.setItem('token', token);
    dispatch(typeLogin({ email, name }));
    history.push('/game');
  };

  handleClickSettings = async (e) => {
    e.preventDefault();
    const { history } = this.props;
    history.push('/settings');
  };

  render() {
    const { name, email, isBtnDisabled } = this.state;
    return (
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
        <button
          data-testid="btn-settings"
          type="button"
          onClick={ this.handleClickSettings }
        >
          Settings
        </button>
      </form>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
