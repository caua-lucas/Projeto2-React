import { useState } from 'react'
import { Container, Image, ContainerItens, H1, InputLabel, Input, Button } from './styles';
import People from './assets/people.svg';
import Seta from "./assets/arrow.svg";


function App() {
  return (
    <>
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade" />
        <Button>Cadastrar <img alt="imagem" src={Seta}/></Button>
      </ContainerItens>
    </Container>
    </>
  );
}

export default App;


