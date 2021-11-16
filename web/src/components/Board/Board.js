import styled from 'styled-components';
import { board } from 'src/utils/animations';
import { darkBrown, brown, lightBrown, veryLightBrown, tan } from 'src/utils/colors';

const SubBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  /* gap: 8px; */

  grid-column: ${props => props.quadrant === "topLeft" || props.quadrant === "bottomLeft" ? '1 / 2' : '2 / 3'};
  grid-row: ${props => props.quadrant === "topLeft" || props.quadrant === "topRight" ? '1 / 2' : '3 / 4'};

  border-right: 20px solid ${brown};
  border-left: 20px solid ${brown};
  ${props => props.quadrant === "topLeft" || props.quadrant === "topRight" ? `border-top: 20px solid ${brown};` : `border-bottom: 20px solid ${brown};`}
  background: ${lightBrown};
  `;

const Between = styled.div`
  grid-column: ${props => props.side === 'left' ? '1 / 2' : '2 / 3'};
  grid-row: 2 / 3;

  border-left: 20px solid ${brown};
  border-right: 20px solid ${brown};
  background: ${lightBrown};
`;

const PointWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-end;

position: relative;

padding-bottom: 1px;

${props => props.bottom ? null : `transform: rotate(180deg);`}
`;

const Point = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  background: ${props => props.even ? tan : veryLightBrown};
  z-index: 2;
`;

const Chip = styled.div`
  width: 3.8vw;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  display: inline-block;
  background: ${(props) => props.color};
  z-index: 3;
`;

const EndBox = styled.div`
  border-right: 24px solid ${brown};
  border-left: 8px solid ${brown};
  border-top: ${props => props.top ? `36px solid ${brown}` : `12px solid ${brown}`};
  border-bottom: ${props => props.top ? `12px solid ${brown}` : `36px solid ${brown}`};
  grid-column: 3 / 4;
  grid-row: ${props => props.top ? '1 / 2' : '3 / 4'};
  background: ${darkBrown};
`;

const Board = styled.div`
  display: grid;
  grid-template-columns: 7.5fr 7.5fr 2fr;
  grid-template-rows: 6fr 1fr 6fr;

  position: absolute;

  min-width: 70vw;
  aspect-ratio: 3 / 2;
  background: ${brown};
  border: 20px solid ${darkBrown};

  animation-name: ${board};
  animation-direction: forwards;
  animation-fill-mode: forwards;
  animation-duration: ${props => props.anim ? '8s' : '0s'};

  border-radius: 8px;
`;

const BoardComponent = ({anim, board, colors}) => {
  const quadrants = ["bottomRight","bottomLeft","topLeft","topRight"];
  const range6 = [...Array(6).keys()].map(n=>n+1);
  return (
    <Board anim={anim}>
      {quadrants.map((q, i) => (
        <SubBoard key={q} quadrant={q}>{range6.map((n) => (
              <PointWrapper key={i <= 1 ? ((i + 1) * 6) - n + 1 : (i * 6) + n} bottom={i <= 1}><Point even={n % 2 === 0} />{(() => {
                const w = board[0][i <= 1 ? ((i + 1) * 6) - n + 1 : (i * 6) + n];
                const r = board[1][i <= 1 ? ((i + 1) * 6) - n + 1 : (i * 6) + n];
                if (w) {
                  return Array(w).fill().map((x, i) => <Chip key={i} color={colors[0]} />)
                } else if (r) {
                  return Array(r).fill().map((x, i) => <Chip key={i} color={colors[1]} />)
                } else {
                  return null;
                }
              })()}</PointWrapper>
            ))
          }</SubBoard>
      ))}
      <Between side={"left"} />
      <Between side={"right"} />
      <EndBox top />
      <EndBox />
    </Board>
  )
}

export default BoardComponent;
