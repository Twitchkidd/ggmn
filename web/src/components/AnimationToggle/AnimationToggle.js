import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 90%;
  left: 90%;
`;

const AnimationToggle = ({anim, setAnim}) => (
  <Wrapper>
    <span style={{color: "#fefefe"}}>Animations</span>
    <input type='checkbox' name='animations' checked={anim} value='animation' onChange={setAnim}/>
  </Wrapper>
)

export default AnimationToggle;
