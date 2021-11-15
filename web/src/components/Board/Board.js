import styled from 'styled-components';
import { board } from 'src/utils/animations';
import { darkBrown, brown } from 'src/utils/colors';

const Board = styled.div`
  min-width: 80vw;
  aspect-ratio: 2 / 1;
  position: absolute;
  background: ${brown};
  border: 20px solid ${darkBrown};
  border-radius: 8px;
  animation: ${board} 9s forwards;
`;

export default Board;
