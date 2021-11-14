import { Link, routes } from '@redwoodjs/router';
import { MetaTags } from '@redwoodjs/web';
import styled from 'styled-components';
import * as colors from 'src/utils/colors';
import { getTextColor } from 'src/utils/getTextColor';

const Wrapper = styled.div`
  width: 80vw;
  max-width: 100vw;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-wrap: wrap;
  `;

const Block = styled.div`
  width: 180px;
  aspect-ratio: 1 / 1;
  background: ${props => props.color};
  display: grid;
  place-items: center;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.25rem;
  color: ${props => props.textColor};
`;

const ColorsPage = () => {
  console.log(colors);
  return (
    <>
      <MetaTags
        title="Colors"
        // description="Colors description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />
      <Wrapper>
        {Object.entries(colors).reverse().map((entry, i) => (
          <Block key={i} color={entry[1]}>
            <Text textColor={getTextColor(entry[1], colors.light, colors.dark)}>{entry[0]}</Text>
          </Block>
        ))}
      </Wrapper>
    </>
  );
};

export default ColorsPage;
