import { act, fireEvent, render, screen } from '@testing-library/react';
import Formulario from './Formulario';
import { RecoilRoot } from 'recoil';

describe('comportamento do Formulario.tsx', () => {
  test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    // encontrar o input no DOM
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    // encontrar o botão
    const botao = screen.getByRole('button');
    // garantir que o input esteja no documento
    expect(input).toBeInTheDocument();
    // garantir que o botão esteja deasbilitado
    expect(botao).toBeDisabled();
  });

  test('adicionar um participante caso exista um nome preenchido', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    // encontrar o input no DOM
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    // encontrar o botão
    const botao = screen.getByRole('button');

    // inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: 'João'
      }
    });
    // clicar no botão de submeter
    fireEvent.click(botao);
    // garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus();
    expect(input).toHaveValue('');
  });

  test('nomes duplicados não podem ser adicionados na lista', () => {
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    // encontrar o input no DOM
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    // encontrar o botão
    const botao = screen.getByRole('button');

    // inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: 'João'
      }
    });
    // clicar no botão de submeter
    fireEvent.click(botao);
    // inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: 'João'
      }
    });
    // clicar no botão de submeter
    fireEvent.click(botao);

    const mensagemDeErro = screen.getByRole('alert');

    expect(mensagemDeErro.textContent).toBe(
      'Nomes duplicados não são permitidos!'
    );
  });

  test('a mensagem deve sumir após os timers', () => {
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario />
      </RecoilRoot>
    );
    // encontrar o input no DOM
    const input = screen.getByPlaceholderText(
      'Insira os nomes dos participantes'
    );
    // encontrar o botão
    const botao = screen.getByRole('button');

    // inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: 'João'
      }
    });
    // clicar no botão de submeter
    fireEvent.click(botao);
    // inserir um valor no input
    fireEvent.change(input, {
      target: {
        value: 'João'
      }
    });
    // clicar no botão de submeter
    fireEvent.click(botao);

    let mensagemDeErro = screen.queryByRole('alert');
    expect(mensagemDeErro).toBeInTheDocument();

    // espera N segundos
    act(() => {
      jest.runAllTimers();
    });

    mensagemDeErro = screen.queryByRole('alert');
    expect(mensagemDeErro).toBeNull();
  });
});
