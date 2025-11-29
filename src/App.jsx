import React, { useState, useRef } from 'react'
import { Container, Image, ContainerItens, H1, InputLabel, Input, Button, User } from './styles';
import axios from 'axios'
import People from './assets/people.svg';
import Seta from "./assets/arrow.svg";
import Lixeira from './assets/trash.svg'


function App() {


  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  //React Hook 

  async function addNewUser() {
    // const {data:newUser} = await axios.post("http://localhost:3001/users",{name:inputName.current.value,age:inputAge.current.value})  //(endereço do backend,dados que ele pretende receber) //colocou o apelido de newUser,sendo data
    // // setUsers([...users, { id: Math.random(), name: inputName.current.value, age: inputAge.current.value }]) //spreed operator(...users)(itens anteriores) + novo item

    // console.log(newUser)
    // setUsers([...users,newUser])

    //Recuperar usuarios:
    const {data:newUsers} = await axios.get("http://localhost:3001/users")
    setUsers(newUsers)
  }

    function deleteUser(userId){
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
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
          <Button onClick={addNewUser} >Cadastrar <img alt="imagem" src={Seta} /></Button>
          <ul>
            {users.map((user) => (
              <User key={user.id}>
                <p>{user.name}</p> <p> {user.age}</p>
                <button onClick={() => deleteUser(user.id)} ><img src={Lixeira} alt="lixeira" /></button>
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


