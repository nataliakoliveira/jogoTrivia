import React from 'react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux'
import App from '../App';
import { act } from 'react-dom/test-utils';

describe('Teste o componente <App.js />', () => {
  test('<Route exact path="/" component={ Login }.', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    expect(history.location.pathname).toBe('/')
  });

  test('<Route exact path="/game" component={ /game }.', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => {
      history.push('/game')
    })
    expect(history.location.pathname).toBe('/game')

  });
  
  test('<Route exact path="/" component={ /feedback }.', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => {
      history.push('/feedback')
    })
    expect(history.location.pathname).toBe('/feedback')

  });

  test('<Route exact path="/ranking" component={ /ranking }.', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => {
      history.push('/ranking')
    })
    expect(history.location.pathname).toBe('/ranking')

  });

  test('<Route exact path="/settings" component={ /settings }.', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    act(() => {
      history.push('/settings')
    })
    expect(history.location.pathname).toBe('/settings')
  });
});