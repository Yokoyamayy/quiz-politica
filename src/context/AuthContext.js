import { createContext, useContext, useEffect, useState } from 'react';
import {
  atualizarUsuario,
  autenticarUsuario,
  cadastrarUsuario,
  excluirUsuarioLogicamente,
  initDatabase,
} from '../database/db';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [dbPronto, setDbPronto] = useState(false);
  const [erroDb, setErroDb] = useState(null);

  useEffect(() => {
    let ativo = true;

    async function prepararBanco() {
      try {
        await initDatabase();
        if (ativo) setDbPronto(true);
      } catch (erro) {
        console.error('Erro ao inicializar SQLite:', erro);
        if (ativo) {
          setErroDb('Não foi possível inicializar o banco de dados local.');
        }
      }
    }

    prepararBanco();

    return () => {
      ativo = false;
    };
  }, []);

  async function entrar({ login, senha }) {
    const dadosUsuario = await autenticarUsuario({ login, senha });
    setUsuario(dadosUsuario);
    return dadosUsuario;
  }

  async function cadastrar({ nome, login, senha }) {
    const novoUsuario = await cadastrarUsuario({ nome, login, senha });
    setUsuario(novoUsuario);
    return novoUsuario;
  }

  async function atualizarCadastro({ nome, login, senha }) {
    if (!usuario) return null;
    const atualizado = await atualizarUsuario({
      id: usuario.id,
      nome,
      login,
      senha,
    });
    setUsuario(atualizado);
    return atualizado;
  }

  async function excluirConta() {
    if (!usuario) return;
    await excluirUsuarioLogicamente(usuario.id);
    setUsuario(null);
  }

  function sair() {
    setUsuario(null);
  }

  return (
    <AuthContext.Provider
      value={{
        usuario,
        dbPronto,
        erroDb,
        entrar,
        cadastrar,
        atualizarCadastro,
        excluirConta,
        sair,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider.');
  }
  return ctx;
}
