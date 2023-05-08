import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { HeaderDiv, HeaderImg, MeuForm, MeuButton, BoldText } from "../styles/HeaderStyles.js";
import HeaderImage from "../imgs/logo_topo_home.png";
import { setValorFormRedux } from '../redux/actions.js';
import { useState } from 'react';

function HomePage() {
    const dispatch = useDispatch();
    const [valorForm, setValorForm] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(setValorFormRedux(valorForm));
    }

    const handleChange = (event) => {
        setValorForm(event.target.value)
        setValorFormRedux(event.target.value);
    }

    return (
        <div>
            <HeaderDiv>
                <HeaderImg src={HeaderImage} alt="Descrição da imagem" />
            </HeaderDiv>
            <div>
                <MeuForm type="text" placeholder="Usuário" value={valorForm} onChange={handleChange} />
                <MeuButton variant="primary" onClick={handleSubmit}>
                    <Link style={{ textDecoration: 'none' }} to={`/userpage?valor=${valorForm}`}> <BoldText>Pesquisar</BoldText> </Link>
                </MeuButton>
            </div>
        </div >
    );
}

export default HomePage;
