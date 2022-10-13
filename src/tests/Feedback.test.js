import React from 'react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux'
import App from '../App';
import { screen, waitFor } from '@testing-library/react';

describe('Teste o componente <App.js />', () => {
  test(' Verificação tela de FeedBack ', () => {
    const { history } = renderWithRouterAndRedux(<App /> , {},'/feedback');

    const scoreId = screen.getByTestId('header-score');
    expect(scoreId).toBeInTheDocument();

    const buttonPlay = screen.getByRole('button', {
      name: /play again/i
    })
    expect(buttonPlay).toBe();
    const playAgainid = screen.getByTestId('btn-play-again');
    expect(playAgainid).toBeInTheDocument();


    const buttonInicial = screen.getByRole('button', {
      name: /tela inicial/i
    })
    expect(buttonInicial).toBe();
    const telaIncialId = screen.getByTestId('btn-go-home');
    expect(telaIncialId).toBeInTheDocument();
  })
})
