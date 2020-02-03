import styled from 'styled-components';

import s from '../../style/variables';

const StyledAppWrapper = styled.div`
  * {
    color: ${s.colors.primaryDark};
    border: none;
  }

  h1,
  h2,
  h3 {
    font-family: 'Righteous';
  }

  h1 {
    margin: 0 ${s.spaces.normal1} ${s.spaces.huge1};
  }
  h2 {
    margin: ${s.spaces.huge1} ${s.spaces.normal1};
  }

  a,
  button,
  [type='button'],
  [type='submit'] {
    margin: 0 ${s.spaces.small1};
    /* font-family: 'Bangers'; */
    color: ${s.colors.secondaryDark};
    background-color: ${s.colors.secondaryLight};
    font-family: 'Righteous';
  }

  a {
    text-decoration: none;
  }
`;

export default StyledAppWrapper;
