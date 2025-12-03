import React, { useState, useRef, } from 'react'
import { Container, Image, ContainerItens, H1, InputLabel, Input, Button } from './styles';
import axios from 'axios'
import People from '../../assets/people.svg';
import Seta from "../../assets/arrow.svg";


function App() {


  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()


  async function addNewUser() {
    // const {data:newUser} = await axios.post("http://localhost:3001/users",{name:inputName.current.value,age:inputAge.current.value})  //(endereço do backend,dados que ele pretende receber) //colocou o apelido de newUser,sendo data
    // // setUsers([...users, { id: Math.random(), name: inputName.current.value, age: inputAge.current.value }]) //spreed operator(...users)(itens anteriores) + novo item

    // console.log(newUser)
    // setUsers([...users,newUser])

    //Recuperar usuarios:
const { data: newUser } = await axios.post("http://localhost:3001/users", {
  name: inputName.current.value,
  age: inputAge.current.value
})

setUsers([...users, newUser])

  }



  return (
    <>
      <Container>
        <Image alt="logo-imagem" src={People} />
        <ContainerItens>
          <H1>Olá!</H1>

          <InputLabel>Nome</InputLabel>
          <Input ref={inputName} placeholder="Nome" />

          <InputLabel >Idade</InputLabel>
          <Input ref={inputAge} placeholder="Idade" />
          <Button to="/usuarios" onClick={addNewUser} >Cadastrar <img alt="imagem" src={Seta} /></Button>
        </ContainerItens>
      </Container>
    </>
  );
}

export default App;


