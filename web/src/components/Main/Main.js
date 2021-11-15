import styled from 'styled-components';
import { light, dark } from 'src/utils/colors';

const Main = styled.main`
	display: grid;
	place-items: center;

	position: relative;

	width: 100vw;
	height: 100vh;
  margin: 0;
  padding: 0;
	background: ${dark};

	color: ${light};

	perspective: 400px;
`;

export default Main;
