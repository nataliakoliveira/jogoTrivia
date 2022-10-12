import React from 'react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux'
import App from '../App';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';


describe('Teste o componente <App.js />', () => {
  test('Testando a pagina de Games.', async () => {
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

    const nomeDaPaginaTela = screen.getByRole('heading', {
      name: /Página do game/i
    })
    expect(nomeDaPaginaTela).toBeInTheDocument();
    const imageGravatarId = screen.getByTestId('header-player-name')
    expect(imageGravatarId).toBeInTheDocument();
    const scoreId = screen.getByTestId('header-score')
    expect(scoreId).toBeInTheDocument();
    expect(pathname).toBe('/game');
    expect(gameTexto).toBeInTheDocument();
    await waitFor(() => {
      const perguntasId = screen.getByTestId('question-category');
      expect(perguntasId).toBeInTheDocument();

      const h1Timer =screen.getByRole('heading', {
        name: /0/i
      })
      expect(h1Timer).toBeInTheDocument();
      
      const timerTela =screen.getByTestId('timertest');
      expect(timerTela).toBeInTheDocument();
      const categoryId = screen.getByTestId('question-text');
      expect(categoryId).toBeInTheDocument();
      const questionId = screen.getByTestId('answer-options');
      expect(questionId).toBeInTheDocument();
      const buttonAcert = screen.getByTestId('correct-answer')
      expect(buttonAcert).toBeInTheDocument()
    }, { timeout: 10000 })

  })
})
