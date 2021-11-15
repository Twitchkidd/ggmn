import styled from 'styled-components';
import { board } from 'src/utils/animations';
// import { darkBrown, brown, lightBlue, blue, darkBlue, ocean } from 'src/utils/colors';
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
  // background: ${props => props.quadrant === "topLeft" ? lightBlue : props.quadrant === "topRight" ? blue : props.quadrant === "bottomLeft" ? darkBlue : ocean};

const Between = styled.div`
  grid-column: ${props => props.side === 'left' ? '1 / 2' : '2 / 3'};
  grid-row: 2 / 3;

  border-left: 20px solid ${brown};
  border-right: 20px solid ${brown};
  background: ${lightBrown};
`;

const Point = styled.div`
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  &:nth-child(2n) {
    background: ${tan};
  }
  &:nth-child(2n+1) {
    background: ${veryLightBrown};
  }
  ${props => props.bottom ? null : `transform: rotate(180deg);`}
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

const BoardComponent = ({anim}) => {
  // Just needs chips ...
  return (
    <Board anim={anim}>
      <SubBoard quadrant={"topLeft"}>
        <Point />
        <Point />
        <Point />
        <Point />
        <Point />
        <Point />
      </SubBoard>
      <SubBoard quadrant={"topRight"}>
        <Point />
        <Point />
        <Point />
        <Point />
        <Point />
        <Point />
      </SubBoard>
      <SubBoard quadrant={"bottomLeft"}>
        <Point bottom />
        <Point bottom />
        <Point bottom />
        <Point bottom />
        <Point bottom />
        <Point bottom />
      </SubBoard>
      <SubBoard quadrant={"bottomRight"}>
        <Point bottom />
        <Point bottom />
        <Point bottom />
        <Point bottom />
        <Point bottom />
        <Point bottom />
      </SubBoard>
      <Between side={"left"} />
      <Between side={"right"} />
      <EndBox top />
      <EndBox />
    </Board>
  )
}

export default BoardComponent;
