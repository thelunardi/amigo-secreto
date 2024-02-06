import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import ListaParticipantes from './ListaParticipantes';
import { useListaDeParticipantes } from '../state/hook/useListaDeParticipantes';

jest.mock('../state/hook/useListaDeParticipantes', () => {
  return {
    useListaDeParticipantes: jest.fn()
  };
});

describe('uma lista vazia de participantes', () => {
  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
  });

  it('deve ser renderizada sem elementos', () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole('listItem');
    expect(itens).toHaveLength(0);
  });
});

describe('uma lista preenchida de participantes', () => {
  const participantes = ['João', 'Catarina'];

  beforeEach(() => {
    (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes);
  });

  it('deve ser exibida na tela', () => {
    render(
      <RecoilRoot>
        <ListaParticipantes />
      </RecoilRoot>
    );

    const itens = screen.queryAllByRole('listitem');
    expect(itens).toHaveLength(participantes.length);
  });
});
