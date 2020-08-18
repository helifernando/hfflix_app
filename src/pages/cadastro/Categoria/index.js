import React, { useState} from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';



function CadastroCategoria() {
  const nomeDaCategoria= useState('Filmes');
  
  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <Link to="/">
        Ir para home
        </Link>
    </PageDefault>
  )

}

export default CadastroCategoria;