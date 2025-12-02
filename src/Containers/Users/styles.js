import styled from 'styled-components';
import Background from "../../assets/background.svg";
import Seta from "../../assets/arrow.svg"

export const Container = styled.div`
    background: url(${Background});
    background-size: cover;

    display:flex;
    flex-direction: column;
    align-items: center;
    gap:40px;
    height: 100vh;
`;

export const Image = styled.img`
    margin-top:30px;

`;

export const ContainerItens = styled.div`
    background: linear-gradient(57.44deg,);
    border-radius:61px 61px 0px 0px ;
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    height: 100vh;
    backdrop-filter: blur(45px);//deixa o fundo mais embaçado

`;

export const H1 = styled.h1`
    color:white;
    font-style: normal;
    font-weight: bold;
    font-size: 34px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 80px;
`;

export const Button = styled.button`
    background: transparent;
    color: white;
    cursor: pointer;
    border:1px solid #FFFFFF;
    width: 342px;
    height:74px ;
    border-radius: 14px;

    background: url(${Seta});
    display: flex;
    align-items: center;
    justify-content: center;
    gap:20px;
    margin-top: 120px;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    } 
    img{
        transform: rotateY(180deg); //abri uma tag img para poder girar a seta, não tudo o que esta escrito.
    }

`;
export const User = styled.li`
    display:flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(255,255,255,255,0.25);
    box-shadow: 0px 4px 4px tgba(0,0,0,0.25);
    border-radius: 14px;
    width: 342px;
    height:58px ;
    outline: none;
    border:none;
    color:white;

p{
    /*pois ele esta dentro do User */
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
    background:none;
    border:none;
    cursor: pointer;
    margin-top:20px;

}

`