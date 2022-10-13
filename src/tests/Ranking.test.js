import React from 'react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux'
import App from '../App';
import { screen } from '@testing-library/react';

describe('Teste o componente <App.js />', () => {
  test(' Verificação tela de Ranking ', () => {
    renderWithRouterAndRedux(<App />);
  })
})
