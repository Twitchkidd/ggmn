import styled, { keyframes } from 'styled-components';
import { dark, light } from '../../utils/colors';

/*
 *
 * The animation can start taking into account that it's a child element of a
 * parent with perspecive set.
 *
 * The title should drop through the back of the screen and arresto momentum.
 *
 */

const splashAnim = keyframes`
  0% { transform: translateZ(1600px); }
  100% { transform: translateZ(0px); }
`;

const Wrapper = styled.div`
	display: grid;
	place-items: center;

	min-width: 80vw;
	max-width: 100vw;
	aspect-ratio: 3 / 1;
	background: ${light};

	color: ${dark};
	text-align: center;

	animation: ${splashAnim} 2s 1;
	border-radius: 2rem;
`;

const Title = () => (
	<Wrapper>
		<h1>Backgammon!</h1>
	</Wrapper>
);

export default Title;
