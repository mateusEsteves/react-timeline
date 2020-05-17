import React, { useState, useEffect } from 'react';
import Timeline from './Timeline/Timeline';
import styled from 'styled-components';

import { ThemeProvider } from 'styled-components';
import { AppTheme } from './app-theme';

const AppWrapper = styled.div`
  padding: 32px;
  width: 100px;
  height: 100vh;
  
  @media ${props => props.theme.media.desktop} {
    width: 100%;
    height: 100px;
  }
`;

function App() {
  const status = [{
    description: 'pau'
  }, {
    description: 'no'
  }, {
    description: 'cu'
  }, {
    description: 'de'
  }, {
    description: 'quem'
  }, {
    description: 'ta'
  }, {
    description: 'lendo'
  }];

  const [checkedStatus, setCheckedStatus] = useState();

  useEffect(() => {
    setTimeout(() => {
      setCheckedStatus(2);
    }, 10);
  }, []);

  return (
    <ThemeProvider theme={AppTheme}>
      <AppWrapper>

        <Timeline
          status={status}
          checkedStatusIndex={checkedStatus}
          milestoneSize={"32px"}
          lineSize={"68px"} />

        {/* <button onClick={() => setCheckedStatus(checkedStatus + 1)}>+</button> */}

      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
