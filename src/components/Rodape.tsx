import { useNavigate } from 'react-router-dom';
import { IoPlayCircleOutline } from 'react-icons/io5';
import { useListaDeParticipantes } from '../state/hook/useListaDeParticipantes';

import './Rodape.css';
import { useSorteador } from '../state/hook/useSorteador';

const Rodape = () => {
  const participantes = useListaDeParticipantes();

  const navegarPara = useNavigate();
  const sortear = useSorteador();

  const iniciar = () => {
    sortear();
    navegarPara('/sorteio');
  };
  return (
    <footer className="rodape-configuracoes">
      <button
        className="botao"
        onClick={iniciar}
        disabled={participantes.length < 3}
      >
        <IoPlayCircleOutline size={40} /> Iniciar brincadeira!
      </button>
      <img src="/images/sacolas.png" alt="Sacolas de compras" />
    </footer>
  );
};

export default Rodape;
