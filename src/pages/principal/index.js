import React, { useState } from 'react';
import PageDefault from '../../components/PageDefault';
import { Link } from 'react-router-dom';



function Principal() {
    const nomeDaprincipal = useState('PRINCIPAL');

    return (
        <PageDefault>
            <h1>MENU {nomeDaprincipal}</h1>
            <p>
                <Link to="/cadastro/categoria">
                    Cadastrar Categoria
        </Link>
            </p>
            <Link to="/cadastro/video">
                Cadastrar video
        </Link>
            <p>
                <Link to="/">
                    Ir para home
        </Link>
            </p>
        </PageDefault>
    )

}

export default Principal;