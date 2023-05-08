import styled from 'styled-components';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export const BoldText = styled.span`
font-weight: bold;
color: white;
`;

export const HeaderDiv = styled.div`
  width: 100%;
  background-color: #0270AE;
  align-itens: center;
  display: flex;
`;

export const HeaderImg = styled.img`
  margin-left: 2%;
  margin-top: 2%;
  margin-bottom: 2%;
  width: 15%;
  height: 15%;
`;

export const MeuForm = styled(Form.Control)`
margin-left: 2%;
margin-top: 2%;
background-color: white;
border-color: black;
border-radius: 14px;
padding: 10px;
font-size: 16px;
`;

export const MeuButton = styled(Button)`
  margin-left: 1%;
  background-color: #007bff;
  border-color: #007bff;
  color: #fff;
  border-radius: 14px;
  padding: 10px 20px;
  font-size: 16px;

  &:hover {
    background-color: #0069d9;
    border-color: #0062cc;
  }

  &:active {
    background-color: #0062cc;
    border-color: #005cbf;
  }
`;

