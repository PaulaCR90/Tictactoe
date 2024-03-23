import { createTictactoe } from '../../pages/CreateTictactoe/CreateTictactoe';
import { resetButton } from '../ResetButton/ResetButton';
import { Table } from '../Table/Table';
import { TurnPad } from '../TurnPad/TurnPad';
import './Tictactoe.css';

export const printAndChange = (square, currentPlayer) => {
  console.log(`${currentPlayer} está en printAndChange`);
};

export const Tictactoe = () => {
  const gamePage = document.createElement('section');
  const title$$ = document.createElement('h3');
  title$$.textContent = 'Tictactoe';
  gamePage.appendChild(title$$);
  gamePage.appendChild(TurnPad(printAndChange));
  gamePage.appendChild(Table());
  gamePage.appendChild(resetButton(createTictactoe));
  return gamePage;
};
