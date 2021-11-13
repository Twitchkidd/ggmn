import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const initialBoard = [
  [
    0, // Bar
    0, // 1
    0, // 2
    0, // 3
    0, // 4
    0, // 5
    5, // 6
    0, // 7
    3, // 8
    0, // 9
    0, // 10
    0, // 11
    0, // 12
    5, // 13
    0, // 14
    0, // 15
    0, // 16
    0, // 17
    0, // 18
    0, // 19
    0, // 20
    0, // 21
    0, // 22
    0, // 23
    2, // 24
    0, // Out
  ],
  [
    0, // Bar
    2, // 1
    0, // 2
    0, // 3
    0, // 4
    0, // 5
    0, // 6
    0, // 7
    0, // 8
    0, // 9
    0, // 10
    0, // 11
    5, // 12
    0, // 13
    0, // 14
    0, // 15
    0, // 16
    3, // 17
    0, // 18
    5, // 19
    0, // 20
    0, // 21
    0, // 22
    0, // 23
    0, // 24
    0, // Out
  ],
]

const Chip = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: inline-block;
  background: ${props => props.color};
`;

const HomePage = () => {
  const [playerOne, setPlayerOne] = useState('Alice');
  const [playerTwo, setPlayerTwo] = useState('Daphne');
  const [colors, setColors] = useState(['white', 'red']);
  const [board, setBoard] = useState(initialBoard);
  const [roll, setRoll] = useState([0, 0]);
  const [turn, setTurn] = useState(0);
  const [points, setPoints] = useState([0, 0]);
  const range = n => [...Array(n).keys()].map(n => n + 1);
  const spaces = range(24);
  return (
    <>
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <h1>Backgammon</h1>
      <p>Player 1: {playerOne} | Points: {points[0]}</p>
      <p>Player 2: {playerTwo} | Points: {points[1]}</p>
      <ul>
        {
          spaces.map(space => {
            if (board[0][space]) { return <li key={space}>{space}: {range(board[0][space]).map(x => <Chip key={x} color={colors[0]} />)}</li>}
            else if (board[1][space]) { return <li key={space}>{space}: {range(board[1][space]).map(x => <Chip key={x} color={colors[1]} />)}</li>}
            else { return <li key={space}>{space}: 0</li>}
          })
        }
        <li>Bar: 0</li>
      </ul>
    </>
  );
};

export default HomePage;
