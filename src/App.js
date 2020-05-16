import React, { useState, useEffect } from 'react';
import Timeline from './Timeline/Timeline';
import styled from 'styled-components';


const AppWrapper = styled.div`
  width: 100%;
  height: 100px;
  padding: 32px;
`;

function App() {
  const status = [{
    description: "Pau",
    checked: true
  }, {
    description: "no",
    checked: true
  }, {
    description: "cu",
    checked: false
  }, {
    description: "de",
    checked: false
  }, {
    description: "quem",
    checked: false
  }, {
    description: "ta",
    checked: false
  }, {
    description: "lendo",
    checked: false
  }];

  const [checkedStatus, setCheckedStatus] = useState();
  const [lastCheckedStatus, setLastCheckedStatus] = useState();

  useEffect(() => {
    setTimeout(() => {
      setLastCheckedStatus(0);
      setCheckedStatus(2);
    }, 10);
  }, []);

  return (
    <AppWrapper>
      <Timeline
        status={status}
        checkedStatusIndex={checkedStatus}
        lastStatusIndex={lastCheckedStatus}
        timelineHeight={"32px"} />

      <button onClick={() => {
        setLastCheckedStatus(checkedStatus);
        setCheckedStatus(checkedStatus + 1);
      }}>+</button>

    </AppWrapper>
  );
}

export default App;
