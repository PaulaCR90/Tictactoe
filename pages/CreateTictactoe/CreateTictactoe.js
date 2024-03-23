import { Tictactoe } from '../../components/Tictactoe/Tictactoe.js';

export const createTictactoe = () => {
  const article = document.querySelector('.articleContainer');
  const game = Tictactoe();
  article.innerHTML = '';
  article.appendChild(game);
};
