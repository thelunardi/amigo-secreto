import { useState } from 'react';
import { FaDiceFive } from 'react-icons/fa';
import { useListaDeParticipantes } from '../state/hook/useListaDeParticipantes';
import { useResultadoSorteio } from '../state/hook/useResultadoSorteio';
import Card from '../components/Card';

import './Sorteio.css';

const Sorteio = () => {
  const [participanteDaVez, setParticipanteDaVez] = useState('');
  const [amigoSecreto, setAmigoSecreto] = useState('');
  const participantes = useListaDeParticipantes();
  const resultado = useResultadoSorteio();

  const sortear = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!);
    }
  };
  return (
    <Card>
      <section className="sorteio">
        <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={event => sortear(event)}>
          <select
            required
            name="participanteDaVez"
            id="participanteDaVez"
            placeholder="Selecione o seu nome"
            value={participanteDaVez}
            onChange={event => setParticipanteDaVez(event.target.value)}
          >
            <option>Selecione seu nome</option>
            {participantes.map(participante =>
              <option key={participante}>
                {participante}
              </option>
            )}
          </select>
          <p>Clique em sortear para ver quem é seu amigo secreto!</p>
          <button className="botao-sortear">
            <div className="botao-sortear-texto">
              <FaDiceFive size={40} /> Sortear!
            </div>
          </button>
        </form>
        {amigoSecreto &&
          <p className="resultado" role="alert">
            {amigoSecreto}
          </p>}
        <footer className="sorteio">
          <img
            src="/images/aviao.png"
            className="aviao"
            alt="Um desenho de um avião de papel"
          />
        </footer>
      </section>
    </Card>
  );
};

export default Sorteio;
