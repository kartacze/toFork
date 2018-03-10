import React from 'react';

import {LayoutWrap, HeaderBox, BodyBox} from './Styled';

const MainLayout = ({children}) => (
  <LayoutWrap>
    <HeaderBox>
      <div> header </div>
    </HeaderBox>

    <BodyBox>
      {children}
      <div>Here we are in box layout</div>
    </BodyBox>
  </LayoutWrap>
);

export default MainLayout;
