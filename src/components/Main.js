import React from 'react'
import styled from 'styled-components';

function Main() {
  return (
    <Wrapper>
      <Sht>main component for Home page</Sht>
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div`

`;

const Sht = styled.div`
background-color: black;
color: white;
text-align: center;
font-size: 30px;
`;