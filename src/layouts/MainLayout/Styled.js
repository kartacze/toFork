import React from 'react';
import styled from 'styled-components';

export const LayoutWrap = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 50px 1fr;
`;

export const HeaderBox = styled.div`
  height: 100%;
`;

export const BodyBox = styled.div`
  max-width: 900px; 
  justify-self: center;
  min-height: 100%;
`;

export const FooterBox = styled.footer`

`;
