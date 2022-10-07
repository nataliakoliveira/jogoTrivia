import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux'
import App from '../App';


describe('Teste o componente <App.js />', () => {
  test('Verificação dos da pagina login', async () => {
    renderWithRouterAndRedux(<App /> , { initialEntries: ['/'] });
    const banner = screen.getByRole('banner');
    const inputName = screen.getByTestId('input-player-name');
    userEvent.type(inputName, 'Rejane');
    expect(inputName.value).toBe('Rejane');
    const inputEmail = screen.getByTestId('input-gravatar-email');
    userEvent.type(inputEmail, "rejane@rejane.com");
    expect(inputEmail.value).toBe('rejane@rejane.com')
    const buttonPlay = await screen.getByTestId('btn-play');
    userEvent.click(buttonPlay)
    const buttonSettings = screen.getByTestId('btn-settings');
    userEvent.click(buttonSettings)

  });
})

// describe('Teste o componente <App.js />', () => {
//   test('', () => {
//     renderWithRouterAndRedux(<App />);
//     const xablau =
//       expect(xablau).toBeInTheDocument();
//   });
// })
