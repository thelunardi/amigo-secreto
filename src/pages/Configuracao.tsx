import React from 'react';
import Formulario from '../components/Formulario';
import ListaParticipantes from '../components/ListaParticipantes';
import Rodape from '../components/Rodape';
import Card from '../components/Card';

const Configuracao = () => {
  return (
    <Card>
      <section>
        <Formulario />
        <ListaParticipantes />
        <Rodape />
      </section>
    </Card>
  );
};

export default Configuracao;
