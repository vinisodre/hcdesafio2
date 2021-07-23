import React from 'react';
import * as S from './styled';

function Home() {
  return (
    <>
      <S.canva>
        <div className="header"><h1>Seja bem-vindo à nossa Página de Cadastro</h1></div> 
        <S.card>
        <h2>Escolha a sua opção</h2>
          <S.btnBox>
            <S.button>Cliente</S.button>
            <S.button>Produto</S.button>
          </S.btnBox>
        </S.card>
      </S.canva>
  
    </>
  );
}

export default Home;