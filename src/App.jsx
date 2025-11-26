import React, { useState } from 'react'
import { Container, Image, ContainerItens, H1, InputLabel, Input, Button, User  } from './styles';
import People from './assets/people.svg';
import Seta from "./assets/arrow.svg";
import Lixeira from './assets/trash.svg'


function App() {


    const [users, setUsers] = useState([])
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    function addNewUser(){
      setUsers([...users,{id:Math.random(),name,age}]) //spreed operator(...users)(itens anteriores) + novo item


      console.log(users)
    }

    function changeInputName(event) {
      setName(event.target.value)

    }

        function changeInputAge(event) {
      setAge(event.target.value)

    }
  return (
    <>
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input onChange={changeInputName} placeholder="Nome" />

        <InputLabel >Idade</InputLabel>
        <Input onChange={changeInputAge} placeholder="Idade" />
        <Button onClick={addNewUser} >Cadastrar <img alt="imagem" src={Seta}/></Button>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p> {user.age}</p>
              <button><img src={Lixeira} alt="lixeira"/></button>
            </User>
          ))
          }
        </ul>
      </ContainerItens>
    </Container>
    </>
  );
}

export default App;


