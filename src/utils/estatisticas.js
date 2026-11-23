import { AREAS_CONHECIMENTO, buscarPerguntaPorId } from '../data/perguntas';

export function obterPerfilConhecimento(percentual) {
  if (percentual >= 90) {
    return {
      badge: 'Domínio Constitucional',
      titulo: 'Especialista Legislativo',
      corKey: 'success',
      descricao:
        'Você domina com segurança a divisão de poderes, os papéis de cada cargo eletivo e as regras do processo legislativo brasileiro.',
    };
  }
  if (percentual >= 75) {
    return {
      badge: 'Alto Desempenho',
      titulo: 'Cidadão Muito Bem Informado',
      corKey: 'primary',
      descricao:
        'Excelente base sobre o funcionamento do Estado e das instituições políticas. Pequenos ajustes pontuais te levam ao gabarito.',
    };
  }
  if (percentual >= 55) {
    return {
      badge: 'Base Intermediária',
      titulo: 'Explorador das Instituições',
      corKey: 'warning',
      descricao:
        'Você já reconhece boa parte das competências dos poderes, mas ainda há regras específicas de quóruns e atribuições que merecem revisão.',
    };
  }
  return {
    badge: 'Em Construção',
    titulo: 'Iniciante Cívico',
    corKey: 'danger',
    descricao:
      'Ótimo ponto de partida! Use o Guia dos Cargos na tela inicial e revise as áreas sinalizadas abaixo para consolidar as regras legislativas.',
  };
}

export function classificarArea(percentualAcerto) {
  if (percentualAcerto >= 80) {
    return { label: 'Domínio', status: 'success' };
  }
  if (percentualAcerto >= 60) {
    return { label: 'Bom nível', status: 'primary' };
  }
  if (percentualAcerto >= 40) {
    return { label: 'Revisar', status: 'warning' };
  }
  return { label: 'Prioridade de estudo', status: 'danger' };
}

export function calcularEstatisticasTentativa(tentativa, respostas = []) {
  const totalQuestoes = tentativa.total_questoes || respostas.length || 1;
  const totalAcertos = tentativa.total_acertos ?? 0;
  const totalErros = Math.max(0, totalQuestoes - totalAcertos);
  const percentualAcertos = Number(tentativa.percentual ?? 0);
  const percentualErros = Number((100 - percentualAcertos).toFixed(1));

  const mapaAreas = {};
  for (const area of AREAS_CONHECIMENTO) {
    mapaAreas[area.id] = {
      ...area,
      total: 0,
      acertos: 0,
      erros: 0,
      percentualAcertos: 0,
      percentualErros: 0,
    };
  }

  for (const resp of respostas) {
    const pergunta = buscarPerguntaPorId(resp.pergunta_id);
    if (!pergunta) continue;

    const areaBucket = mapaAreas[pergunta.areaId];
    if (!areaBucket) continue;

    areaBucket.total += 1;
    if (resp.acertou === 1 || resp.acertou === true) {
      areaBucket.acertos += 1;
    } else {
      areaBucket.erros += 1;
    }
  }

  const areasComDados = Object.values(mapaAreas)
    .filter((a) => a.total > 0)
    .map((a) => {
      const pAcerto = Number(((a.acertos / a.total) * 100).toFixed(0));
      const pErro = Number((100 - pAcerto).toFixed(0));
      return {
        ...a,
        percentualAcertos: pAcerto,
        percentualErros: pErro,
        classificacao: classificarArea(pAcerto),
      };
    });

  let modalidade = 'curto';
  if (totalQuestoes > 30) {
    modalidade = 'longo';
  } else if (totalQuestoes <= 15 || areasComDados.length === 1) {
    modalidade = 'area';
  }

  const areaUnica = modalidade === 'area' ? areasComDados[0] ?? null : null;

  const ordenadasMelhor = [...areasComDados].sort(
    (a, b) => b.percentualAcertos - a.percentualAcertos || b.acertos - a.acertos
  );

  const ordenadasEstudo = [...areasComDados].sort(
    (a, b) => a.percentualAcertos - b.percentualAcertos || b.erros - a.erros
  );

  const pontoForte = ordenadasMelhor[0] ?? null;
  const focoEstudo = ordenadasEstudo.find((a) => a.erros > 0) ?? null;

  const areasParaEstudar = ordenadasEstudo.filter(
    (a) => a.percentualAcertos < 70 || a.erros > 0
  );

  const perfil = obterPerfilConhecimento(percentualAcertos);

  return {
    modalidade,
    areaUnica,
    totalQuestoes,
    totalAcertos,
    totalErros,
    percentualAcertos,
    percentualErros,
    perfil,
    areas: areasComDados,
    rankingEstudo: ordenadasEstudo,
    pontoForte,
    focoEstudo,
    areasParaEstudar,
  };
}
