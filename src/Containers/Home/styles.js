import styled from 'styled-components';
import Background from "../../assets/back1.svg";
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

export const InputLabel = styled.p`
    color:white;
    letter-spacing: -0.408px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

`;

export const Input = styled.input`
    background: rgba(255,255,255,255,0.25);
    box-shadow: 0px 4px 4px tgba(0,0,0,0.25);
    border-radius: 14px;
    width: 342px;
    height:58px ;
    border:none;
    outline: none;
    padding-left: 25px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 34px;
    color:black;
`;

export const Button = styled.button`
    background: black;
    color: white;
    cursor: pointer;
    border:none;
    width: 342px;
    height:74px ;
    border-radius: 14px;
    margin-top: 70px;

    background: url(${Seta});
    display: flex;
    align-items: center;
    justify-content: center;
    gap:20px;

    &:hover{
        opacity: 0.8;
    }
    &:active{
        opacity: 0.5;
    } 

`;
