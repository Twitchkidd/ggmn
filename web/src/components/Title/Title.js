import styled, { keyframes } from 'styled-components';
import { dark, light } from 'src/utils/colors';

/*
 *
 * The animation can start taking into account that it's a child element of a
 * parent with perspecive set.
 *
 * The title should drop through the back of the screen and arresto momentum.
 *
 */

const splashAnim = keyframes`
  from { transform: translateZ(1200px); }
  50% { transform: translateZ(0px) translateX(0px) translateY(0px); }
  to { transform: translateX(-45%) translateY(-110%) scale(0.25); }
`;

const Wrapper = styled.div`
	display: grid;
	place-items: center;

  position: absolute;
	min-width: 80vw;
	max-width: 100vw;
	aspect-ratio: 3 / 1;
	background: ${light};

	color: ${dark};
	text-align: center;

	animation: ${splashAnim} 2s forwards;
	border-radius: 2rem;

  h1 {
    font-size: 6rem;
  }
`;

const Title = () => (
	<Wrapper>
		<h1>Backgammon!</h1>
	</Wrapper>
);

export default Title;
