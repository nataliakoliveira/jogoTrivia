import React from 'react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux'
import App from '../App';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('Teste o componente <App.js />', () => {
  test('Verificação dos da pagina Login e pagina Gamer', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const inputName = screen.getByTestId('input-player-name');
    userEvent.type(inputName, 'Rejane');
    expect(inputName.value).toBe('Rejane');
    const inputEmail = screen.getByTestId('input-gravatar-email');
    userEvent.type(inputEmail, "rejane@rejane.com");
    expect(inputEmail.value).toBe('rejane@rejane.com');
    const buttonPlay = screen.getByTestId('btn-play');
    userEvent.click(buttonPlay)
    const gameTexto = await screen.findByText('Página do Game')
    const { pathname } = history.location;
    expect(pathname).toBe('/game');
    expect(gameTexto).toBeInTheDocument();
  });
})

describe('Teste o componente <App.js />', () => {
  test('Verificação dos da pagina Settings', () => {
    renderWithRouterAndRedux(<App />);
    const inputName = screen.getByTestId('input-player-name');
    userEvent.type(inputName, 'Rejane');
    expect(inputName.value).toBe('Rejane');

    const inputEmail = screen.getByTestId('input-gravatar-email');
    userEvent.type(inputEmail, "rejane@rejane.com");
    expect(inputEmail.value).toBe('rejane@rejane.com');

    const buttonPlay = screen.getByTestId('btn-play');
    userEvent.click(buttonPlay)
    const buttonSettings = screen.getByTestId('btn-settings');
    userEvent.click(buttonSettings);

  });
})
