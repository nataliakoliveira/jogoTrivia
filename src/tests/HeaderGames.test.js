import React from 'react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux'
import App from '../App';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('Teste o componente <App.js />', () => {
  test('Testando caminho login a headers e  o HeadersGames.', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const inputName = screen.getByTestId('input-player-name');
    userEvent.type(inputName, 'Rejane');
    expect(inputName.value).toBe('Rejane');

    const inputEmail = screen.getByTestId('input-gravatar-email');
    userEvent.type(inputEmail, "rejane@rejane.com");
    expect(inputEmail.value).toBe('rejane@rejane.com');

    const buttonPlay = screen.getByTestId('btn-play');
    userEvent.click(buttonPlay)

    const nameTela = screen.getByText(/rejan/i)
    expect(nameTela).toBeInTheDocument();
    const pontosTela = screen.getByText(/pontos:0/i)
    expect(pontosTela).toBeInTheDocument();
    const nomeDaPaginaTela = screen.getByRole('heading', {
      name: /Página do game/i
    })
    expect(nomeDaPaginaTela).toBeInTheDocument();
    const imageGravatarId = screen.getByTestId('header-player-name')
    expect(imageGravatarId).toBeInTheDocument();
    const scoreId = screen.getByTestId('header-score')
    expect(scoreId).toBeInTheDocument();
    const gameTexto = screen.getByText('Página do Game')
    const { pathname } = history.location;
    expect(pathname).toBe('/game');
    expect(gameTexto).toBeInTheDocument();

  });
})