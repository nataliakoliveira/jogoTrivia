import React from 'react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux'
import App from '../App';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const INITIAL_STATE = {
  player: {
    email: 'weydson@gmail.com',
    name: 'Cristiano',
    score: 150,
    assertions: 2,
  }
};

describe('Teste o componente <App.js />', () => {
  test('Testando a pagina de Games.', () => {
    renderWithRouterAndRedux(<App />, INITIAL_STATE, "/");
    const inputName = screen.getByTestId('input-player-name');
    userEvent.type(inputName, 'Cristiano');
    expect(inputName.value).toBe('Cristiano');
    const inputEmail = screen.getByTestId('input-gravatar-email');
    userEvent.type(inputEmail, "weydson@gmail.com");
    expect(inputEmail.value).toBe('weydson@gmail.com');
    const buttonPlay = screen.getByTestId('btn-play');
    userEvent.click(buttonPlay)
  })

  test('Verificação dos da pagina Settings', () => {
    renderWithRouterAndRedux(<App />, INITIAL_STATE, "/");
    const inputName = screen.getByTestId('input-player-name');
    userEvent.type(inputName, 'Cristiano');
    expect(inputName.value).toBe('Cristiano');
    const inputEmail = screen.getByTestId('input-gravatar-email');
    userEvent.type(inputEmail, "weydson@gmail.com");
    expect(inputEmail.value).toBe('weydson@gmail.com')

    const buttonPlay = screen.getByTestId('btn-play');
    userEvent.click(buttonPlay)
    const buttonSettings = screen.getByTestId('btn-settings');
    userEvent.click(buttonSettings);
  });
})
