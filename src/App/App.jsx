import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Timeline from '../Timeline/Timeline';
import {
  AppWrapper, FormInput, FormButton, NextStatusButton, FormWrapper, TimelineWrapper
} from './Styles';

import { ThemeProvider } from 'styled-components';
import { AppTheme } from '../app-theme';



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
  const [statusList, setStatusList] = useState(status);
  const { register, handleSubmit, reset } = useForm();

  function adicionarNovoStatus(newStatus) {
    const newStatusList = [...statusList];
    newStatusList.push(newStatus);
    setStatusList(newStatusList);
    reset();
  }


  useEffect(() => {
    setTimeout(() => {
      setCheckedStatus(2);
    }, 10);
  }, []);

  return (
    <ThemeProvider theme={AppTheme}>
      <AppWrapper>

        <Timeline
          status={statusList}
          checkedStatusIndex={checkedStatus}
          milestoneSize={"32px"}
          lineSize={"68px"} />

        <FormWrapper>
          <form onSubmit={handleSubmit(adicionarNovoStatus)}>
            <FormInput type="text" name="description" ref={register({ required: true })} placeholder="Insira o nome de um novo status" />
            <FormButton type="submit">Adicionar</FormButton>
          </form>

          <NextStatusButton type="button" onClick={() => setCheckedStatus(checkedStatus + 1)}>Proximo status</NextStatusButton>
        </FormWrapper>


      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
