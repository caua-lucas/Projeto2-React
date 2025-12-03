import React, { useState,  useEffect } from 'react'
import { Container, Image, ContainerItens, H1, Button, User } from './styles';
import axios from 'axios'
import Avatar from '../../assets/avatar.svg';
import Seta from "../../assets/arrow.svg";
import Lixeira from '../../assets/trash.svg'


function Users() {


  const [users, setUsers] = useState([])



  //React Hook - useEffect(causa um efeito colateral):
  useEffect(() => {
    async function fetchUsers(){
    const { data: newUsers } = await axios.get("http://localhost:3001/users")
    setUsers(newUsers)
    }
    fetchUsers()
  }, [])  /*(uma função anonima useEffect(()=> {},[])) O useEffect é chamado: Qunado minha aplicação inicia(A pagina carregou, useEffect é chamado!) e Quando um estado que esta no array de dependencia do useEffect é alterado. NÃO ACEITA O ASYNC ,SENDO NECESSARIO CRIAR UMA FUNÇÃO.*/

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }


  return (
    <>
      <Container>
        <Image alt="logo-imagem" src={Avatar} />
        <ContainerItens>
          <H1>Usuários</H1>

          <ul>
            {users.map((user) => (
              <User key={user.id}>
                <p>{user.name}</p> <p> {user.age}</p>
                <button onClick={() => deleteUser(user.id)} ><img src={Lixeira} alt="lixeira" /></button>
              </User>
            ))
            }
          </ul>
        <Button to="/" >Voltar<img alt="seta" src={Seta} /></Button>
        </ContainerItens>
      </Container>
    </>
  );
}

export default Users;


