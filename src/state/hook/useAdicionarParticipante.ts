import { useRecoilValue, useSetRecoilState } from 'recoil';
import { erroState, listaDeParticipantes } from '../atom';

export const useAdicionarParticipante = () => {
  const setLista = useSetRecoilState(listaDeParticipantes);
  const lista = useRecoilValue(listaDeParticipantes);
  const setErro = useSetRecoilState(erroState);
  return (nomeDoParticipante: string) => {
    if (lista.includes(nomeDoParticipante)) {
      setErro('Nomes duplicados não são permitidos!');
      setTimeout(() => {
        setErro('');
      }, 3000);
      return;
    }
    return setLista(listaAtual => [...listaAtual, nomeDoParticipante]);
  };
};
