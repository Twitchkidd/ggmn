import styled from 'styled-components';
import { title, chaos } from 'src/utils/animations';
import { dark, light, darkRed } from 'src/utils/colors';

/*
 *
 * The animation can start taking into account that it's a child element of a
 * parent with perspecive set.
 *
 */

const Wrapper = styled.div`
	display: grid;
	place-items: center;

  /* position: absolute; */
  position: relative;
	min-width: 80vw;
	max-width: 100vw;
	aspect-ratio: 3 / 1;
	background: ${light};

	color: ${dark};
	text-align: center;

	animation-name: ${title};
  animation-duration: ${props => props.anim ? '7s' : '0s' };
  animation-direction: forwards;
  animation-fill-mode: forwards;
	border-radius: 2rem;

  h1 {
    font-size: 6rem;
  }

  h1::before {
    content: 'Chaos';
    position: absolute;
    display: block;
    left: -36px;
    top: -16px;
    color: ${darkRed};
    font-size: 8rem;
    opacity: 0;
    animation-name: ${chaos};
    animation-direction: forwards;
    animation-fill-mode: forwards;
    animation-duration: ${props => props.anim ? '3s' : '0s'};
  }
`;

const Title = ({anim}) => (
	<Wrapper anim={anim}>
		<h1>Backgammon!</h1>
	</Wrapper>
);

export default Title;
