// import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Board from 'src/components/Board';
import Main from 'src/components/Main';
import Title from 'src/components/Title';
import AnimationToggle from 'src/components/AnimationToggle';
import { maroon, light } from 'src/utils/colors';

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
];

const HomePage = () => {
  const [animations, setAnimations] = useState('unloaded');
  const [playerOne, setPlayerOne] = useState('Alice');
  const [playerTwo, setPlayerTwo] = useState('Daphne');
  const [colors, setColors] = useState([light, maroon]);
  const [board, setBoard] = useState(initialBoard);
  const [roll, setRoll] = useState([0, 0]);
  const [turn, setTurn] = useState(0);
  const [points, setPoints] = useState([0, 0]);
  const range = (n) => [...Array(n).keys()].map((n) => n + 1);
  const spaces = range(24);
  const handleAnimationsToggle = () => {
    setAnimations(!animations);
  };
  useEffect(() => {
    if (localStorage.getItem('anim') === null) {
      localStorage.setItem('anim', `true`);
      setAnimations('true');
    } else if (animations === 'unloaded') {
      setAnimations(localStorage.getItem('anim') === 'true');
    } else if (localStorage.getItem('anim') !== animations) {
      localStorage.setItem('anim', `${animations}`);
    }
  }, [animations])
  return (
    <>
      <MetaTags
        title="Home"
        // description="Home description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <Main>
        <Title anim={animations} />
        <Board anim={animations} board={board} colors={colors} />
        <AnimationToggle anim={animations} setAnim={handleAnimationsToggle} />
      </Main>
      {/* <p>Player 1: {playerOne} | Points: {points[0]}</p>
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
      </ul> */}
    </>
  );
};

export default HomePage;
