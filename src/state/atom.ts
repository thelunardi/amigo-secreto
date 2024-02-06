import { atom } from 'recoil';

export const listaDeParticipantes = atom<string[]>({
  key: 'listaDeParticipantes',
  default: []
});

export const erroState = atom<string>({
  key: 'erroState',
  default: ''
});

export const resultadoDoAmigoSecreto = atom<Map<string, string>>({
  key: 'resultadoDoAmigoSecreto',
  default: new Map()
});
