import { useRef, useState } from 'react';
import { useAdicionarParticipante } from '../state/hook/useAdicionarParticipante';
import { useMensagemDeErro } from '../state/hook/useMensagemDeErro';

import './Formulario.css';

const Formulario = () => {
  const [nome, setNome] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarParticipante();

  const mensagemDeErro = useMensagemDeErro();

  const adicionarParticipante = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    adicionarNaLista(nome);
    setNome('');

    inputRef.current?.focus();
  };

  return (
    <form onSubmit={event => adicionarParticipante(event)}>
      <div className="grupo-input-btn">
        <input
          ref={inputRef}
          value={nome}
          onChange={event => setNome(event.target.value)}
          type="text"
          placeholder="Insira os nomes dos participantes"
        />
        <button disabled={!nome}>Adicionar</button>
        {mensagemDeErro && <p className="alerta erro" role="alert">{mensagemDeErro}</p>}
      </div>
    </form>
  );
};

export default Formulario;
