import React from 'react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux'
import App from '../App';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const INITIAL_STATE = {
  player: {
    email: 'weydson@weyd.com',
    name: 'Cris',
    score: 150,
    assertions: 2,
  }
};
const INITIAL_STATE2 = {
  player: {
    email: 'weydson@weyd.com',
    name: 'Cris',
    score: 150,
    assertions: 4,
  }
};
const INITIAL_STATE3 = {
  player: {
    email: 'weydson@weyd.com',
    name: 'Cris',
    score: 150,
    assertions: 3,
  }
};

describe('Teste o componente <App.js />', () => {

  test(' Verificação tela de FeedBack header-score ', () => {
    renderWithRouterAndRedux(<App />, INITIAL_STATE
      , '/feedback');
    const scoreId = screen.getByTestId('header-score');
    expect(scoreId).toBeInTheDocument();
  })


  test(' Verificação mensagem para pontuação menos que 3 ', () => {
    renderWithRouterAndRedux(<App />, INITIAL_STATE
      , '/feedback');
    const mensagAssert = screen.getByText(/could be better\.\.\./i)
    expect(mensagAssert).toBeInTheDocument();
  })

  test(' Verificação mensagem para pontuação maior que 3 ', () => {
    renderWithRouterAndRedux(<App />, INITIAL_STATE2, '/feedback');
    const mensagAssert = screen.getByText(/Well Done!/i)
    expect(mensagAssert).toBeInTheDocument();
  })

  test(' Verificação mensagem para pontuação é igual 3 ', () => {
    renderWithRouterAndRedux(<App />, INITIAL_STATE3, '/feedback');
    const mensagAssert = screen.getByText(/Well Done!/i)
    expect(mensagAssert).toBeInTheDocument();
  })

  test(' Verificação botao tela feedback play again', () => {
   renderWithRouterAndRedux(<App />, INITIAL_STATE
      , '/feedback');
    const buttonPlay = screen.getByRole('button', {
      name: /play again/i
    })
    expect(buttonPlay).toHaveTextContent(/play again/i);
    const playAgainid = screen.getByTestId('btn-play-again');
    expect(playAgainid).toBeInTheDocument();
  })


  test(' Verificação tela de FeedBack ', () => {
    const { history } = renderWithRouterAndRedux(<App />, INITIAL_STATE
      , '/feedback');
    const buttonInicial = screen.getByRole('button', {
      name: /tela inicial/i
    })
    const telaIncialId = screen.getByTestId('btn-go-home');
    expect(telaIncialId).toBeInTheDocument();
    expect(buttonInicial).toHaveTextContent(/tela inicial/i);
    userEvent.click(buttonInicial);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  })
  
  test(' Verificação tela de FeedBack rota Ranking', () => {
    const { history } = renderWithRouterAndRedux(<App />, INITIAL_STATE
      , '/feedback');
      const btnID = screen.getByTestId('btn-ranking');
      userEvent.click(btnID);
    const { pathname } = history.location;
    expect(pathname).toBe('/ranking');
  })
})





