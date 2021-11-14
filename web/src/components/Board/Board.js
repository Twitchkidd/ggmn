import styled, { keyframes } from 'styled-components';
import { darkBrown, brown } from 'src/utils/colors';

const dropInAnim = keyframes`
  from { transform: translateZ(1200px); }
  50% { transform: translateZ(1200px); }
  to { transform: translateZ(0px); }
`;

const Board = styled.div`
  min-width: 80vw;
  aspect-ratio: 2 / 1;
  position: absolute;
  background: ${brown};
  border: 20px solid ${darkBrown};
  border-radius: 8px;
  animation-name: ${dropInAnim};
  animation-duration: 3s;
  animation-direction: forwards;
`;

export default Board;
