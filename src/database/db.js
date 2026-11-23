import * as SQLite from 'expo-sqlite';
import { buscarPerguntaPorId } from '../data/perguntas';

let dbPromise = null;

async function getDb() {
  if (!dbPromise) {
    dbPromise = SQLite.openDatabaseAsync('quiz_politica.db');
  }
  return dbPromise;
}

export async function initDatabase() {
  const db = await getDb();

  await db.execAsync(`
    PRAGMA foreign_keys = ON;

    CREATE TABLE IF NOT EXISTS usuarios (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      login TEXT NOT NULL UNIQUE,
      senha TEXT NOT NULL,
      excluido INTEGER NOT NULL DEFAULT 0,
      criado_em TEXT NOT NULL,
      excluido_em TEXT
    );

    CREATE TABLE IF NOT EXISTS tentativas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      usuario_id INTEGER NOT NULL,
      data_hora TEXT NOT NULL,
      total_questoes INTEGER NOT NULL,
      total_acertos INTEGER NOT NULL,
      percentual REAL NOT NULL,
      FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    );

    CREATE TABLE IF NOT EXISTS respostas_tentativa (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      tentativa_id INTEGER NOT NULL,
      ordem_exibicao INTEGER NOT NULL,
      pergunta_id INTEGER NOT NULL,
      resposta_usuario TEXT NOT NULL,
      resposta_correta TEXT NOT NULL,
      acertou INTEGER NOT NULL,
      FOREIGN KEY (tentativa_id) REFERENCES tentativas(id)
    );

    CREATE TABLE IF NOT EXISTS quiz_em_andamento (
      usuario_id INTEGER PRIMARY KEY,
      perguntas_ids TEXT NOT NULL,
      respostas_json TEXT NOT NULL,
      iniciado_em TEXT NOT NULL,
      FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
    );
  `);
}

function normalizarLogin(login) {
  return login.trim().toLowerCase();
}

export async function cadastrarUsuario({ nome, login, senha }) {
  const db = await getDb();
  const nomeLimpo = nome.trim();
  const loginLimpo = normalizarLogin(login);

  const existente = await db.getFirstAsync(
    'SELECT id, excluido FROM usuarios WHERE login = ?',
    [loginLimpo]
  );

  if (existente) {
    if (existente.excluido === 1) {
      throw new Error(
        'Este login pertence a uma conta excluída e não pode mais ser utilizado.'
      );
    }
    throw new Error('Este login já está em uso. Escolha outro.');
  }

  const criadoEm = new Date().toISOString();
  const result = await db.runAsync(
    'INSERT INTO usuarios (nome, login, senha, excluido, criado_em) VALUES (?, ?, ?, 0, ?)',
    [nomeLimpo, loginLimpo, senha, criadoEm]
  );

  return {
    id: result.lastInsertRowId,
    nome: nomeLimpo,
    login: loginLimpo,
  };
}

export async function autenticarUsuario({ login, senha }) {
  const db = await getDb();
  const loginLimpo = normalizarLogin(login);

  const usuario = await db.getFirstAsync(
    'SELECT id, nome, login, senha, excluido FROM usuarios WHERE login = ?',
    [loginLimpo]
  );

  if (!usuario || usuario.senha !== senha) {
    throw new Error('Login ou senha inválidos.');
  }

  if (usuario.excluido === 1) {
    throw new Error(
      'Esta conta foi excluída e não pode mais ser utilizada para acesso.'
    );
  }

  return {
    id: usuario.id,
    nome: usuario.nome,
    login: usuario.login,
  };
}

export async function atualizarUsuario({ id, nome, login, senha }) {
  const db = await getDb();
  const nomeLimpo = nome.trim();
  const loginLimpo = normalizarLogin(login);

  const conflito = await db.getFirstAsync(
    'SELECT id, excluido FROM usuarios WHERE login = ? AND id != ?',
    [loginLimpo, id]
  );

  if (conflito) {
    if (conflito.excluido === 1) {
      throw new Error(
        'Este login pertence a uma conta excluída e não pode mais ser utilizado.'
      );
    }
    throw new Error('Este login já está sendo usado por outro usuário.');
  }

  if (senha && senha.trim().length > 0) {
    await db.runAsync(
      'UPDATE usuarios SET nome = ?, login = ?, senha = ? WHERE id = ? AND excluido = 0',
      [nomeLimpo, loginLimpo, senha, id]
    );
  } else {
    await db.runAsync(
      'UPDATE usuarios SET nome = ?, login = ? WHERE id = ? AND excluido = 0',
      [nomeLimpo, loginLimpo, id]
    );
  }

  return {
    id,
    nome: nomeLimpo,
    login: loginLimpo,
  };
}

export async function excluirUsuarioLogicamente(id) {
  const db = await getDb();
  const excluidoEm = new Date().toISOString();

  await db.runAsync(
    'UPDATE usuarios SET excluido = 1, excluido_em = ? WHERE id = ?',
    [excluidoEm, id]
  );
}

export async function salvarRascunhoQuiz({ usuarioId, perguntasIds, respostas }) {
  const db = await getDb();
  const iniciadoEm = new Date().toISOString();

  await db.runAsync(
    `INSERT OR REPLACE INTO quiz_em_andamento (usuario_id, perguntas_ids, respostas_json, iniciado_em)
     VALUES (?, ?, ?, ?)`,
    [
      usuarioId,
      JSON.stringify(perguntasIds),
      JSON.stringify(respostas),
      iniciadoEm,
    ]
  );
}

export async function limparRascunhoQuiz(usuarioId) {
  const db = await getDb();
  await db.runAsync('DELETE FROM quiz_em_andamento WHERE usuario_id = ?', [
    usuarioId,
  ]);
}

export async function salvarTentativa({ usuarioId, respostas }) {
  const db = await getDb();
  const totalQuestoes = respostas.length;
  const totalAcertos = respostas.filter((r) => r.acertou).length;
  const percentual = Number(((totalAcertos / totalQuestoes) * 100).toFixed(1));
  const dataHora = new Date().toISOString();

  let tentativaId = null;

  await db.withTransactionAsync(async () => {
    const resTentativa = await db.runAsync(
      `INSERT INTO tentativas (usuario_id, data_hora, total_questoes, total_acertos, percentual)
       VALUES (?, ?, ?, ?, ?)`,
      [usuarioId, dataHora, totalQuestoes, totalAcertos, percentual]
    );

    tentativaId = resTentativa.lastInsertRowId;

    for (const item of respostas) {
      await db.runAsync(
        `INSERT INTO respostas_tentativa
          (tentativa_id, ordem_exibicao, pergunta_id, resposta_usuario, resposta_correta, acertou)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [
          tentativaId,
          item.ordemExibicao,
          item.perguntaId,
          item.respostaUsuario,
          item.respostaCorreta,
          item.acertou ? 1 : 0,
        ]
      );
    }

    await db.runAsync('DELETE FROM quiz_em_andamento WHERE usuario_id = ?', [
      usuarioId,
    ]);
  });

  return {
    id: tentativaId,
    data_hora: dataHora,
    total_questoes: totalQuestoes,
    total_acertos: totalAcertos,
    percentual,
  };
}

export async function finalizarRascunhoPendente(usuarioId) {
  const db = await getDb();
  const rascunho = await db.getFirstAsync(
    'SELECT perguntas_ids, respostas_json FROM quiz_em_andamento WHERE usuario_id = ?',
    [usuarioId]
  );

  if (!rascunho) return null;

  const perguntasIds = JSON.parse(rascunho.perguntas_ids);
  const respostasSalvas = JSON.parse(rascunho.respostas_json);

  const listaRespostas = perguntasIds
    .map((perguntaId, idx) => {
      const pergunta = buscarPerguntaPorId(perguntaId);
      if (!pergunta) return null;

      const respostaUsuario = respostasSalvas[perguntaId] ?? 'SEM_RESPOSTA';
      return {
        ordemExibicao: idx + 1,
        perguntaId: pergunta.id,
        respostaUsuario,
        respostaCorreta: pergunta.correta,
        acertou: respostaUsuario === pergunta.correta,
      };
    })
    .filter(Boolean);

  if (listaRespostas.length === 0) {
    await limparRascunhoQuiz(usuarioId);
    return null;
  }

  return salvarTentativa({ usuarioId, respostas: listaRespostas });
}

export async function listarHistoricoUsuario(usuarioId) {
  const db = await getDb();
  return db.getAllAsync(
    `SELECT id, data_hora, total_questoes, total_acertos, percentual
     FROM tentativas
     WHERE usuario_id = ?
     ORDER BY id DESC`,
    [usuarioId]
  );
}

export async function buscarRespostasTentativa(tentativaId) {
  const db = await getDb();
  return db.getAllAsync(
    `SELECT id, ordem_exibicao, pergunta_id, resposta_usuario, resposta_correta, acertou
     FROM respostas_tentativa
     WHERE tentativa_id = ?
     ORDER BY ordem_exibicao ASC`,
    [tentativaId]
  );
}

export async function buscarErrosTentativa(tentativaId) {
  const db = await getDb();
  return db.getAllAsync(
    `SELECT id, ordem_exibicao, pergunta_id, resposta_usuario, resposta_correta
     FROM respostas_tentativa
     WHERE tentativa_id = ? AND acertou = 0
     ORDER BY ordem_exibicao ASC`,
    [tentativaId]
  );
}
