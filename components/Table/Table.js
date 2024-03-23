import { printAndChange } from '../Tictactoe/Tictactoe';

export const Table = () => {
  const table = document.createElement('div');
  table.className = 'table';
  for (let i = 0; i < 9; i++) {
    const square = document.createElement('div');
    square.className = 'cell';
    square.dataset.index = i;
    square.addEventListener('click', () => printAndChange(square, callback));
    table.appendChild(square);
  }
  return table;
};
