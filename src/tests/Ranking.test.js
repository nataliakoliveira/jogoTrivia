import React from 'react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux'
import App from '../App';
import { screen } from '@testing-library/react';

const INITIAL_STATE = {
  player: {
    email: 'weydson@weyd.com',
    name: 'Cris',
    score: 150,
    assertions: 2,
  }
};

describe('Teste o componente <App.js />', () => {
  test(' Verificação tela de Ranking ', () => {
    renderWithRouterAndRedux(<App />, INITIAL_STATE
      , '/ranking');
    const idtexto = screen.getByTestId('ranking-title')
    
  })
})
