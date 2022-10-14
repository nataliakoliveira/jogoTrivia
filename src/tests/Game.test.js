import React from 'react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux'
import App from '../App';
import { screen, waitFor } from '@testing-library/react';

const INITIAL_STATE = {
  player: {
    email: 'weydson@gmail.com',
    name: 'Cristiano',
    score: 150,
    assertions: 2,
  }
};

describe('Teste o componente <App.js />', () => {
  test('Testando a pagina de Game.', async () => {
    const { history } = renderWithRouterAndRedux(<App />, INITIAL_STATE, "/game");
    await waitFor(() => {
      const gameTexto = screen.getByText('Página do Game')
      expect(gameTexto).toHaveTextContent(/Página do Game/i);
      const { pathname } = history.location;
      expect(pathname).toBe('/game');
    }, { timeout: 1000 })
  });

  test('Testando a pagina de Game.', async () => {
    renderWithRouterAndRedux(<App />, INITIAL_STATE, '/game');

    await waitFor(() => {
      const nomeDaPaginaTela = screen.getByRole('heading', {
        name: /Página do game/i
      })
      expect(nomeDaPaginaTela).toHaveTextContent(/Página do game/i);
      const imageGravatarId = screen.getByTestId('header-player-name')
      expect(imageGravatarId).toBeInTheDocument();
      const scoreId = screen.getByTestId('header-score')
      expect(scoreId).toBeInTheDocument();
    }, { timeout: 1000 })
  });

  test('Testando a pagina de Game tempo.', () => {
    renderWithRouterAndRedux(<App />, INITIAL_STATE, '/game');
    const idtime = screen.getByTestId("timertest")
    expect(idtime).toBeInTheDocument();
    const timerTela = screen.getByTestId('timertest');
    expect(timerTela).toBeInTheDocument();
  });

  test('Testando a pagina de Game tempo.', () => {
    renderWithRouterAndRedux(<App />, INITIAL_STATE, '/game');
    
  });


})
