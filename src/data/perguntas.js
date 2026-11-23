export const AREAS_CONHECIMENTO = [
  {
    id: 'estadual',
    nome: 'Executivo e Legislativo Estadual',
    nomeCurto: 'Âmbito Estadual',
    icone: 'shield-checkmark-outline',
    cor: '#2563EB',
    descricao:
      'Regras sobre Governadores, Vice-Governadores, Deputados Estaduais e Assembleias Legislativas.',
    dicaEstudo:
      'Revise os artigos 27 e 28 da Constituição Federal: mandato, data de posse (6 de janeiro), subsídios e fidelidade partidária.',
    cargoRelacionadoId: 'governador',
  },
  {
    id: 'congresso_partidos',
    nome: 'Congresso Nacional e Regras Partidárias',
    nomeCurto: 'Congresso e Partidos',
    icone: 'library-outline',
    cor: '#7C3AED',
    descricao:
      'Funcionamento do Congresso Nacional, cláusula de desempenho, fundo partidário e financiamento de campanhas.',
    dicaEstudo:
      'Estude o art. 17 da Constituição (cláusula de barreira, cotas de gênero e raça) e os arts. 48 e 49 sobre competências do Congresso.',
    cargoRelacionadoId: 'deputado-federal',
  },
  {
    id: 'federalismo',
    nome: 'Federalismo e Competências dos Entes',
    nomeCurto: 'Federalismo',
    icone: 'git-network-outline',
    cor: '#0891B2',
    descricao:
      'Divisão de atribuições exclusivas, privativas, comuns e concorrentes entre União, Estados e Distrito Federal.',
    dicaEstudo:
      'Diferencie o que é exclusivo da União (arts. 21 e 22), comum a todos os entes (art. 23) e concorrente (art. 24).',
    cargoRelacionadoId: 'senador',
  },
  {
    id: 'municipios',
    nome: 'Municípios, Prefeitos e Vereadores',
    nomeCurto: 'Âmbito Municipal',
    icone: 'business-outline',
    cor: '#0F766E',
    descricao:
      'Autonomia municipal, Lei Orgânica, atribuições de Prefeitos e Vereadores e controle externo local.',
    dicaEstudo:
      'Foque nos arts. 29 a 31 da Constituição: competências de interesse local, limite de vereadores, 2º turno municipal e contas do Prefeito.',
    cargoRelacionadoId: 'prefeito',
  },
  {
    id: 'presidencia_processo',
    nome: 'Presidência, Senado e Processo Legislativo',
    nomeCurto: 'Processo Legislativo',
    icone: 'scale-outline',
    cor: '#D97706',
    descricao:
      'Atribuições da Presidência da República, Senado, Câmara dos Deputados, vetos, CPIs, PECs e Medidas Provisórias.',
    dicaEstudo:
      'Revise os arts. 51, 52, 59 a 69 e 84 da Constituição: tramitação de leis, prazos de veto, MPs, quóruns e impeachment.',
    cargoRelacionadoId: 'presidente',
  },
];

export function buscarAreaPorId(areaId) {
  return AREAS_CONHECIMENTO.find((a) => a.id === areaId) ?? null;
}

export const PERGUNTAS = [

  {
    id: 1,
    areaId: 'estadual',
    categoria: 'Executivo e Legislativo Estadual',
    enunciado: 'Qual é a duração do mandato de um Governador de Estado?',
    alternativas: {
      A: '2 anos',
      B: '4 anos',
      C: '5 anos',
      D: '8 anos',
    },
    correta: 'B',
    explicacao:
      'Pelo art. 28 da Constituição Federal, a eleição do Governador e do Vice-Governador de Estado ocorre para mandato de 4 anos, permitida uma reeleição consecutiva.',
  },
  {
    id: 2,
    areaId: 'estadual',
    categoria: 'Executivo e Legislativo Estadual',
    enunciado:
      'Em que data ocorre a posse do Governador e do Vice-Governador de Estado?',
    alternativas: {
      A: '1º de janeiro',
      B: '5 de janeiro',
      C: '6 de janeiro',
      D: '15 de janeiro',
    },
    correta: 'C',
    explicacao:
      'A Emenda Constitucional nº 111/2021 alterou o art. 28 da Constituição para definir a posse dos Governadores em 6 de janeiro (enquanto o Presidente toma posse em 5 de janeiro).',
  },
  {
    id: 3,
    areaId: 'estadual',
    categoria: 'Executivo e Legislativo Estadual',
    enunciado:
      'De quem é a iniciativa da lei que fixa os subsídios do Governador, do Vice-Governador e dos Secretários de Estado?',
    alternativas: {
      A: 'Do Congresso Nacional',
      B: 'Da Assembleia Legislativa',
      C: 'Do próprio Governador',
      D: 'Do Tribunal de Justiça',
    },
    correta: 'B',
    explicacao:
      'Conforme o art. 28, § 2º, da Constituição, os subsídios do Governador, Vice-Governador e Secretários de Estado são fixados por lei de iniciativa da Assembleia Legislativa.',
  },
  {
    id: 4,
    areaId: 'estadual',
    categoria: 'Executivo e Legislativo Estadual',
    enunciado:
      'O que acontece com o Governador que assumir outro cargo ou função na administração pública (ressalvada posse por concurso público)?',
    alternativas: {
      A: 'Recebe advertência formal',
      B: 'Acumula os cargos temporariamente',
      C: 'Perde o mandato',
      D: 'Tem o subsídio reduzido pela metade',
    },
    correta: 'C',
    explicacao:
      'O art. 28, § 1º, determina expressamente que perderá o mandato o Governador que assumir outro cargo ou função na administração pública direta ou indireta, ressalvada a posse em virtude de concurso público.',
  },
  {
    id: 5,
    areaId: 'estadual',
    categoria: 'Executivo e Legislativo Estadual',
    enunciado: 'Qual é a duração do mandato dos Deputados Estaduais?',
    alternativas: {
      A: '2 anos',
      B: '4 anos',
      C: '6 anos',
      D: '8 anos',
    },
    correta: 'B',
    explicacao:
      'De acordo com o art. 27, § 1º, da Constituição Federal, o mandato dos Deputados Estaduais é de 4 anos, sem limite de reeleições.',
  },
  {
    id: 6,
    areaId: 'estadual',
    categoria: 'Executivo e Legislativo Estadual',
    enunciado:
      'Qual é o teto do subsídio dos Deputados Estaduais em relação ao estabelecido em espécie para os Deputados Federais?',
    alternativas: {
      A: '50%',
      B: '60%',
      C: '75%',
      D: '90%',
    },
    correta: 'C',
    explicacao:
      'O art. 27, § 2º, estabelece que o subsídio dos Deputados Estaduais é fixado por lei de iniciativa da Assembleia Legislativa na razão de, no máximo, 75% do valor pago aos Deputados Federais.',
  },
  {
    id: 7,
    areaId: 'estadual',
    categoria: 'Executivo e Legislativo Estadual',
    enunciado:
      'A quem compete dispor sobre o regimento interno, a polícia e os serviços administrativos da secretaria da Assembleia Legislativa?',
    alternativas: {
      A: 'Ao Governador do Estado',
      B: 'À própria Assembleia Legislativa',
      C: 'À Câmara dos Deputados',
      D: 'Ao Tribunal de Contas do Estado',
    },
    correta: 'B',
    explicacao:
      'Pelo princípio da separação de poderes e pelo art. 27, § 3º, compete à própria Assembleia Legislativa dispor sobre seu regimento interno, polícia e serviços administrativos.',
  },
  {
    id: 8,
    areaId: 'estadual',
    categoria: 'Executivo e Legislativo Estadual',
    enunciado:
      'O que ocorre, em regra, com Deputados Federais ou Estaduais que se desligarem do partido pelo qual foram eleitos, sem anuência partidária nem justa causa prevista em lei?',
    alternativas: {
      A: 'Mantêm o cargo normalmente',
      B: 'Ficam suspensos por 90 dias',
      C: 'Perdem o mandato',
      D: 'Pagam multa e permanecem no mandato',
    },
    correta: 'C',
    explicacao:
      'Conforme o art. 17, § 6º, da Constituição (EC 111/2021), parlamentares eleitos pelo sistema proporcional que se desligarem do partido sem anuência ou justa causa perdem o mandato por infidelidade partidária.',
  },
  {
    id: 9,
    areaId: 'congresso_partidos',
    categoria: 'Congresso Nacional e Regras Partidárias',
    enunciado:
      'Pelo critério de eleitos, um partido precisa eleger ao menos quantos Deputados Federais (em no mínimo um terço das unidades da Federação) para ter direito ao fundo partidário e ao tempo gratuito de rádio e TV?',
    alternativas: {
      A: '10 Deputados Federais',
      B: '15 Deputados Federais',
      C: '20 Deputados Federais',
      D: '30 Deputados Federais',
    },
    correta: 'B',
    explicacao:
      'Pela regra permanente da cláusula de desempenho no art. 17, § 3º, II, o partido precisa eleger pelo menos 15 Deputados Federais distribuídos em ao menos um terço das unidades da Federação (ou atingir 3% dos votos válidos nacionais).',
  },
  {
    id: 10,
    areaId: 'congresso_partidos',
    categoria: 'Congresso Nacional e Regras Partidárias',
    enunciado:
      'Qual é o percentual mínimo dos recursos do fundo partidário que os partidos devem aplicar em programas de promoção da participação política das mulheres?',
    alternativas: {
      A: '3%',
      B: '5%',
      C: '15%',
      D: '30%',
    },
    correta: 'B',
    explicacao:
      'A Constituição (art. 17, § 7º, incluído pela EC 117/2022) obriga os partidos a aplicar no mínimo 5% dos recursos do fundo partidário na criação e manutenção de programas de promoção da participação política das mulheres.',
  },
  {
    id: 11,
    areaId: 'congresso_partidos',
    categoria: 'Congresso Nacional e Regras Partidárias',
    enunciado:
      'Qual percentual dos recursos do Fundo Especial de Financiamento de Campanha e do fundo partidário destinados a campanhas deve ser aplicado obrigatoriamente em candidaturas de pessoas pretas e pardas?',
    alternativas: {
      A: '10%',
      B: '20%',
      C: '30%',
      D: '50%',
    },
    correta: 'C',
    explicacao:
      'A Emenda Constitucional nº 133/2024 estabeleceu o piso constitucional de 30% dos recursos do FEFC e do fundo partidário destinados a campanhas para candidaturas de pessoas pretas e pardas.',
  },
  {
    id: 12,
    areaId: 'congresso_partidos',
    categoria: 'Congresso Nacional e Regras Partidárias',
    enunciado:
      'Além da aprovação da população via plebiscito, qual instituição precisa aprovar por lei complementar a incorporação, subdivisão ou desmembramento de Estados?',
    alternativas: {
      A: 'O Tribunal Superior Eleitoral',
      B: 'O Congresso Nacional',
      C: 'As Câmaras Municipais',
      D: 'O Tribunal de Contas da União',
    },
    correta: 'B',
    explicacao:
      'Segundo o art. 18, § 3º, da Constituição, os Estados podem incorporar-se, subdividir-se ou desmembrar-se mediante plebiscito da população diretamente interessada e aprovação do Congresso Nacional por lei complementar.',
  },
  {
    id: 13,
    areaId: 'congresso_partidos',
    categoria: 'Congresso Nacional e Regras Partidárias',
    enunciado:
      'Toda atividade nuclear em território nacional só é admitida para fins pacíficos e mediante aprovação de qual instituição?',
    alternativas: {
      A: 'Da Assembleia Legislativa local',
      B: 'Do Congresso Nacional',
      C: 'Da Câmara Municipal',
      D: 'Do Supremo Tribunal Federal',
    },
    correta: 'B',
    explicacao:
      'O art. 21, XXIII, alínea "a", determina que toda atividade nuclear em território nacional somente será admitida para fins pacíficos e mediante aprovação do Congresso Nacional.',
  },
  {
    id: 14,
    areaId: 'congresso_partidos',
    categoria: 'Congresso Nacional e Regras Partidárias',
    enunciado:
      'A qual instituição devem ser submetidas as contas do Governo de um Território Federal, com parecer prévio do Tribunal de Contas da União?',
    alternativas: {
      A: 'Ao Congresso Nacional',
      B: 'À Assembleia Legislativa do Estado vizinho',
      C: 'Ao Supremo Tribunal Federal',
      D: 'À Câmara Legislativa do Distrito Federal',
    },
    correta: 'A',
    explicacao:
      'Pelo art. 33, § 2º, da Constituição Federal, as contas do Governo do Território serão submetidas ao Congresso Nacional, com parecer prévio do Tribunal de Contas da União.',
  },
  {
    id: 15,
    areaId: 'federalismo',
    categoria: 'Federalismo e Competências dos Entes',
    enunciado: 'A qual ente federativo compete emitir moeda?',
    alternativas: {
      A: 'Aos Estados',
      B: 'À União',
      C: 'Aos Municípios',
      D: 'Ao Distrito Federal',
    },
    correta: 'B',
    explicacao:
      'Pelo art. 21, VII, e art. 164 da Constituição, compete exclusivamente à União emitir moeda, atribuição exercida por meio do Banco Central.',
  },
  {
    id: 16,
    areaId: 'federalismo',
    categoria: 'Federalismo e Competências dos Entes',
    enunciado:
      'A qual ente compete manter relações com Estados estrangeiros, declarar a guerra e celebrar a paz?',
    alternativas: {
      A: 'À União',
      B: 'Aos Estados fronteiriços',
      C: 'Ao Distrito Federal',
      D: 'Aos Municípios',
    },
    correta: 'A',
    explicacao:
      'O art. 21, incisos I e II, atribui exclusivamente à União manter relações com Estados estrangeiros, participar de organizações internacionais, declarar a guerra e celebrar a paz.',
  },
  {
    id: 17,
    areaId: 'federalismo',
    categoria: 'Federalismo e Competências dos Entes',
    enunciado:
      'A qual ente compete privativamente legislar sobre direito civil, penal, eleitoral e do trabalho?',
    alternativas: {
      A: 'Aos Estados',
      B: 'Aos Municípios',
      C: 'À União',
      D: 'Ao Distrito Federal',
    },
    correta: 'C',
    explicacao:
      'O art. 22, I, da Constituição estabelece que compete privativamente à União legislar sobre direito civil, comercial, penal, processual, eleitoral, agrário, marítimo, aeronáutico, espacial e do trabalho.',
  },
  {
    id: 18,
    areaId: 'federalismo',
    categoria: 'Federalismo e Competências dos Entes',
    enunciado:
      'A qual ente compete manter o serviço postal e o correio aéreo nacional?',
    alternativas: {
      A: 'Aos Estados',
      B: 'À União',
      C: 'Aos Municípios',
      D: 'À União e aos Municípios conjuntamente',
    },
    correta: 'B',
    explicacao:
      'De acordo com o art. 21, X, da Constituição Federal, manter o serviço postal e o correio aéreo nacional é competência exclusiva da União.',
  },
  {
    id: 19,
    areaId: 'federalismo',
    categoria: 'Federalismo e Competências dos Entes',
    enunciado:
      'A qual ente cabe explorar diretamente, ou mediante concessão, os serviços locais de gás canalizado?',
    alternativas: {
      A: 'À União',
      B: 'Aos Municípios',
      C: 'Aos Estados',
      D: 'Ao Congresso Nacional',
    },
    correta: 'C',
    explicacao:
      'Conforme o art. 25, § 2º, cabe aos Estados explorar diretamente, ou mediante concessão, os serviços locais de gás canalizado, vedada a edição de medida provisória para sua regulamentação.',
  },
  {
    id: 20,
    areaId: 'federalismo',
    categoria: 'Federalismo e Competências dos Entes',
    enunciado:
      'Qual ente pode instituir regiões metropolitanas, aglomerações urbanas e microrregiões por meio de lei complementar?',
    alternativas: {
      A: 'Os Municípios',
      B: 'A União',
      C: 'Os Estados',
      D: 'O Distrito Federal',
    },
    correta: 'C',
    explicacao:
      'O art. 25, § 3º, autoriza os Estados a instituírem, mediante lei complementar, regiões metropolitanas, aglomerações urbanas e microrregiões constituídas por agrupamentos de municípios limítrofes.',
  },
  {
    id: 21,
    areaId: 'federalismo',
    categoria: 'Federalismo e Competências dos Entes',
    enunciado:
      'No âmbito da legislação concorrente (como direito tributário, educação e meio ambiente), a competência da União limita-se a:',
    alternativas: {
      A: 'Estabelecer normas gerais',
      B: 'Legislar exclusivamente para Municípios',
      C: 'Impedir os Estados de legislar sobre o tema',
      D: 'Editar apenas decretos locais',
    },
    correta: 'A',
    explicacao:
      'Segundo o art. 24, § 1º, no âmbito da legislação concorrente, a União estabelece normas gerais, enquanto Estados e DF exercem competência suplementar.',
  },
  {
    id: 22,
    areaId: 'federalismo',
    categoria: 'Federalismo e Competências dos Entes',
    enunciado:
      'Proteger o meio ambiente, combater a poluição e preservar as florestas, a fauna e a flora é competência:',
    alternativas: {
      A: 'Exclusiva da União',
      B: 'Privativa dos Estados',
      C: 'Exclusiva dos Municípios',
      D: 'Comum da União, dos Estados, do Distrito Federal e dos Municípios',
    },
    correta: 'D',
    explicacao:
      'Os incisos VI e VII do art. 23 definem que a proteção ambiental e a preservação das florestas, da fauna e da flora são competências administrativas comuns de todos os entes federativos.',
  },
  {
    id: 23,
    areaId: 'municipios',
    categoria: 'Municípios, Prefeitos e Vereadores',
    enunciado:
      'A qual ente compete legislar sobre assuntos de interesse local e organizar o transporte coletivo?',
    alternativas: {
      A: 'À União',
      B: 'Aos Estados',
      C: 'Aos Municípios',
      D: 'Ao Congresso Nacional',
    },
    correta: 'C',
    explicacao:
      'O art. 30, incisos I e V, atribui aos Municípios legislar sobre assuntos de interesse local e organizar os serviços públicos locais, incluído o transporte coletivo.',
  },
  {
    id: 24,
    areaId: 'federalismo',
    categoria: 'Federalismo e Competências dos Entes',
    enunciado: 'Quais competências legislativas são atribuídas ao Distrito Federal?',
    alternativas: {
      A: 'Apenas as dos Municípios',
      B: 'Apenas as dos Estados',
      C: 'As reservadas aos Estados e aos Municípios',
      D: 'As privativas da União',
    },
    correta: 'C',
    explicacao:
      'Como o Distrito Federal não pode ser dividido em municípios, o art. 32, § 1º, atribui a ele as competências legislativas reservadas aos Estados e aos Municípios.',
  },
  {
    id: 25,
    areaId: 'municipios',
    categoria: 'Municípios, Prefeitos e Vereadores',
    enunciado:
      'No controle externo municipal, qual quórum da Câmara Municipal é necessário para que deixe de prevalecer o parecer prévio do órgão de contas sobre as contas anuais do Prefeito?',
    alternativas: {
      A: 'Maioria simples',
      B: 'Maioria absoluta',
      C: 'Dois terços dos membros',
      D: 'Unanimidade dos membros',
    },
    correta: 'C',
    explicacao:
      'Pelo art. 31, § 2º, o parecer prévio emitido pelo órgão competente sobre as contas do Prefeito só deixará de prevalecer por decisão de dois terços dos membros da Câmara Municipal.',
  },
  {
    id: 26,
    areaId: 'presidencia_processo',
    categoria: 'Presidência, Senado e Processo Legislativo',
    enunciado:
      'Qual das atribuições abaixo compete privativamente ao Presidente da República?',
    alternativas: {
      A: 'Julgar os Ministros do Supremo Tribunal Federal nos crimes de responsabilidade',
      B: 'Exercer o comando supremo das Forças Armadas e editar medidas provisórias com força de lei',
      C: 'Suspender a execução de lei declarada inconstitucional pelo Supremo Tribunal Federal',
      D: 'Fixar os subsídios dos Deputados Federais e dos Senadores',
    },
    correta: 'B',
    explicacao:
      'Pelo art. 84, XIII e XXVI, da Constituição, o comando supremo das Forças Armadas e a edição de medidas provisórias competem privativamente ao Presidente da República.',
  },
  {
    id: 27,
    areaId: 'presidencia_processo',
    categoria: 'Presidência, Senado e Processo Legislativo',
    enunciado:
      'Qual é o prazo que o Presidente da República possui para vetar, total ou parcialmente, um projeto de lei aprovado pelo Congresso Nacional?',
    alternativas: {
      A: '5 dias úteis',
      B: '10 dias úteis',
      C: '15 dias úteis',
      D: '30 dias úteis',
    },
    correta: 'C',
    explicacao:
      'Conforme o art. 66, § 1º, o Presidente tem 15 dias úteis contados do recebimento para vetar o projeto; o silêncio após esse prazo importa sanção tácita.',
  },
  {
    id: 28,
    areaId: 'presidencia_processo',
    categoria: 'Presidência, Senado e Processo Legislativo',
    enunciado:
      'A qual instituição compete privativamente autorizar, por dois terços de seus membros, a instauração de processo contra o Presidente da República?',
    alternativas: {
      A: 'À Câmara dos Deputados',
      B: 'Ao Senado Federal',
      C: 'Ao Supremo Tribunal Federal',
      D: 'Ao Tribunal de Contas da União',
    },
    correta: 'A',
    explicacao:
      'O art. 51, I, estabelece que compete privativamente à Câmara dos Deputados autorizar, por dois terços de seus membros, a instauração de processo contra o Presidente, o Vice-Presidente e Ministros de Estado.',
  },
  {
    id: 29,
    areaId: 'presidencia_processo',
    categoria: 'Presidência, Senado e Processo Legislativo',
    enunciado: 'Qual das seguintes competências é privativa do Senado Federal?',
    alternativas: {
      A: 'Iniciar a votação das medidas provisórias editadas pelo Presidente da República',
      B: 'Proceder à tomada de contas do Presidente quando não apresentadas no prazo',
      C: 'Processar e julgar o Presidente da República nos crimes de responsabilidade',
      D: 'Sancionar, promulgar e fazer publicar as leis ordinárias',
    },
    correta: 'C',
    explicacao:
      'Pelo art. 52, I, cabe privativamente ao Senado Federal processar e julgar o Presidente e o Vice-Presidente da República nos crimes de responsabilidade.',
  },
  {
    id: 30,
    areaId: 'presidencia_processo',
    categoria: 'Presidência, Senado e Processo Legislativo',
    enunciado:
      'Para que Deputados Federais ou Senadores criem uma Comissão Parlamentar de Inquérito (CPI) em sua respectiva Casa, é necessário requerimento de, no mínimo:',
    alternativas: {
      A: 'Um décimo de seus membros',
      B: 'Um terço de seus membros',
      C: 'Maioria absoluta de seus membros',
      D: 'Dois terços de seus membros',
    },
    correta: 'B',
    explicacao:
      'O art. 58, § 3º, exige requerimento de 1/3 dos membros da Câmara ou do Senado (ou de ambas, em CPMI), fato determinado e prazo certo para criar uma CPI.',
  },

  {
    id: 31,
    areaId: 'estadual',
    categoria: 'Executivo e Legislativo Estadual',
    enunciado:
      'Qual é a idade mínima exigida pela Constituição Federal para concorrer ao cargo de Governador de Estado?',
    alternativas: {
      A: '21 anos',
      B: '25 anos',
      C: '30 anos',
      D: '35 anos',
    },
    correta: 'C',
    explicacao:
      'O art. 14, § 3º, VI, alínea "b", exige idade mínima de 30 anos para Governador e Vice-Governador de Estado e do Distrito Federal.',
  },
  {
    id: 32,
    areaId: 'estadual',
    categoria: 'Executivo e Legislativo Estadual',
    enunciado:
      'Qual é a idade mínima exigida para se candidatar ao cargo de Deputado Estadual ou Deputado Distrital?',
    alternativas: {
      A: '18 anos',
      B: '21 anos',
      C: '25 anos',
      D: '30 anos',
    },
    correta: 'B',
    explicacao:
      'Conforme o art. 14, § 3º, VI, alínea "c", a idade mínima é de 21 anos para Deputado Federal, Deputado Estadual ou Distrital, Prefeito e Vice-Prefeito.',
  },
  {
    id: 33,
    areaId: 'estadual',
    categoria: 'Executivo e Legislativo Estadual',
    enunciado:
      'Qual órgão do Poder Judiciário tem competência originária para julgar Governadores de Estado nos crimes comuns?',
    alternativas: {
      A: 'O Tribunal de Justiça do respectivo Estado',
      B: 'O Superior Tribunal de Justiça (STJ)',
      C: 'O Tribunal Regional Federal',
      D: 'A Assembleia Legislativa',
    },
    correta: 'B',
    explicacao:
      'Segundo o art. 105, I, alínea "a", da Constituição Federal, compete ao Superior Tribunal de Justiça (STJ) processar e julgar originariamente os Governadores nos crimes comuns.',
  },
  {
    id: 34,
    areaId: 'estadual',
    categoria: 'Executivo e Legislativo Estadual',
    enunciado:
      'Por qual sistema eleitoral são eleitos os Deputados Estaduais nas Assembleias Legislativas?',
    alternativas: {
      A: 'Sistema majoritário simples',
      B: 'Sistema majoritário em dois turnos',
      C: 'Sistema proporcional',
      D: 'Indicação do Governador',
    },
    correta: 'C',
    explicacao:
      'Assim como Deputados Federais e Vereadores, os Deputados Estaduais são eleitos pelo sistema proporcional, que distribui cadeiras conforme o quociente eleitoral e partidário.',
  },
  {
    id: 35,
    areaId: 'congresso_partidos',
    categoria: 'Congresso Nacional e Regras Partidárias',
    enunciado:
      'Segundo o art. 45, § 1º, da Constituição Federal, qual é o número mínimo e máximo de Deputados Federais por Estado e pelo Distrito Federal?',
    alternativas: {
      A: 'Mínimo de 3 e máximo de 50',
      B: 'Mínimo de 8 e máximo de 70',
      C: 'Mínimo de 10 e máximo de 80',
      D: 'Número fixo de 15 por Estado',
    },
    correta: 'B',
    explicacao:
      'O art. 45, § 1º, determina que nenhuma unidade da Federação terá menos de 8 nem mais de 70 Deputados Federais, respeitada a proporcionalidade populacional.',
  },
  {
    id: 36,
    areaId: 'congresso_partidos',
    categoria: 'Congresso Nacional e Regras Partidárias',
    enunciado:
      'Quantos Senadores cada Estado e o Distrito Federal elegem para o Senado Federal?',
    alternativas: {
      A: '2 Senadores',
      B: '3 Senadores',
      C: '4 Senadores',
      D: 'Proporcional à população do Estado',
    },
    correta: 'B',
    explicacao:
      'Pelo art. 46, § 1º, cada Estado e o Distrito Federal elegem 3 Senadores, com mandato de 8 anos, garantindo paridade federativa (total de 81 Senadores).',
  },
  {
    id: 37,
    areaId: 'congresso_partidos',
    categoria: 'Congresso Nacional e Regras Partidárias',
    enunciado:
      'Como ocorre a renovação das cadeiras do Senado Federal a cada eleição geral (de 4 em 4 anos)?',
    alternativas: {
      A: 'Renovação integral (100% das cadeiras)',
      B: 'Metade das cadeiras a cada 4 anos',
      C: 'Alternadamente, por um terço e dois terços',
      D: 'Um quarto das cadeiras a cada 2 anos',
    },
    correta: 'C',
    explicacao:
      'Conforme o art. 46, § 2º, a representação de cada Estado e do DF no Senado é renovada de 4 em 4 anos, alternadamente, por um e dois terços.',
  },
  {
    id: 38,
    areaId: 'congresso_partidos',
    categoria: 'Congresso Nacional e Regras Partidárias',
    enunciado:
      'A quem compete exercer o controle externo das contas da União com o auxílio do Tribunal de Contas da União (TCU)?',
    alternativas: {
      A: 'Ao Supremo Tribunal Federal',
      B: 'Ao Congresso Nacional',
      C: 'Ao Ministério da Fazenda',
      D: 'À Controladoria-Geral da União',
    },
    correta: 'B',
    explicacao:
      'O art. 71 da Constituição estabelece que o controle externo, a cargo do Congresso Nacional, será exercido com o auxílio do Tribunal de Contas da União.',
  },
  {
    id: 39,
    areaId: 'congresso_partidos',
    categoria: 'Congresso Nacional e Regras Partidárias',
    enunciado:
      'Sobre os partidos políticos no Brasil, o que a Constituição Federal proíbe expressamente?',
    alternativas: {
      A: 'Recebimento de recursos financeiros de entidade ou governo estrangeiros',
      B: 'Fusão ou incorporação de partidos políticos',
      C: 'Criação de estatuto interno próprio',
      D: 'Participação em eleições municipais',
    },
    correta: 'A',
    explicacao:
      'O art. 17, II, proíbe expressamente o recebimento de recursos financeiros de entidade ou governo estrangeiros ou de subordinação a estes, bem como a utilização de organização paramilitar.',
  },
  {
    id: 40,
    areaId: 'congresso_partidos',
    categoria: 'Congresso Nacional e Regras Partidárias',
    enunciado:
      'Qual instituição tem competência exclusiva para autorizar referendo e convocar plebiscito em âmbito nacional?',
    alternativas: {
      A: 'O Presidente da República',
      B: 'O Tribunal Superior Eleitoral',
      C: 'O Congresso Nacional',
      D: 'O Supremo Tribunal Federal',
    },
    correta: 'C',
    explicacao:
      'Pelo art. 49, XV, da Constituição, é competência exclusiva do Congresso Nacional autorizar referendo e convocar plebiscito.',
  },
  {
    id: 41,
    areaId: 'federalismo',
    categoria: 'Federalismo e Competências dos Entes',
    enunciado:
      'A qual ente federativo compete instituir e cobrar o Imposto sobre Propriedade de Veículos Automotores (IPVA)?',
    alternativas: {
      A: 'À União',
      B: 'Aos Estados e ao Distrito Federal',
      C: 'Aos Municípios',
      D: 'Exclusivamente à Receita Federal',
    },
    correta: 'B',
    explicacao:
      'Segundo o art. 155, III, da Constituição, compete aos Estados e ao Distrito Federal instituir o IPVA (além do ICMS e do ITCMD).',
  },
  {
    id: 42,
    areaId: 'federalismo',
    categoria: 'Federalismo e Competências dos Entes',
    enunciado:
      'Na legislação concorrente, o que acontece se não existir lei federal sobre normas gerais de determinado assunto?',
    alternativas: {
      A: 'Os Estados ficam proibidos de legislar até a União agir',
      B: 'Os Estados exercem competência legislativa plena para atender a suas peculiaridades',
      C: 'Os Municípios assumem a competência exclusiva',
      D: 'O STF edita a lei provisoriamente',
    },
    correta: 'B',
    explicacao:
      'O art. 24, § 3º, prevê que, inexistindo lei federal sobre normas gerais, os Estados exercerão competência legislativa plena; sobrevindo lei federal, suspende-se a eficácia da lei estadual apenas no que lhe for contrário.',
  },
  {
    id: 43,
    areaId: 'federalismo',
    categoria: 'Federalismo e Competências dos Entes',
    enunciado:
      'A organização e manutenção das polícias Civil, Penal, Militar e do Corpo de Bombeiros Militar do Distrito Federal competem a qual ente?',
    alternativas: {
      A: 'Exclusivamente ao Distrito Federal',
      B: 'À União',
      C: 'Ao Estado de Goiás',
      D: 'Aos Municípios do entorno',
    },
    correta: 'B',
    explicacao:
      'Pelo art. 21, XIV, da Constituição Federal, compete à União organizar e manter a polícia civil, a polícia penal, a polícia militar e o corpo de bombeiros militar do Distrito Federal.',
  },
  {
    id: 44,
    areaId: 'municipios',
    categoria: 'Municípios, Prefeitos e Vereadores',
    enunciado: 'Qual é o nome da norma fundamental que rege a organização de um Município?',
    alternativas: {
      A: 'Constituição Municipal',
      B: 'Lei Orgânica',
      C: 'Regimento Federativo',
      D: 'Código Civil Local',
    },
    correta: 'B',
    explicacao:
      'Conforme o art. 29 da Constituição Federal, o Município reger-se-á por Lei Orgânica, votada em dois turnos pela Câmara Municipal e aprovada por dois terços de seus membros.',
  },
  {
    id: 45,
    areaId: 'municipios',
    categoria: 'Municípios, Prefeitos e Vereadores',
    enunciado:
      'Em quais Municípios brasileiros pode haver segundo turno nas eleições para Prefeito?',
    alternativas: {
      A: 'Em todos os Municípios do país',
      B: 'Apenas nas capitais de Estado',
      C: 'Nos Municípios com mais de 200 mil eleitores',
      D: 'Nos Municípios com mais de 500 mil habitantes',
    },
    correta: 'C',
    explicacao:
      'O art. 29, II, determina que o segundo turno nas eleições municipais ocorre apenas em Municípios com mais de 200 mil eleitores, caso nenhum candidato alcance maioria absoluta no 1º turno.',
  },
  {
    id: 46,
    areaId: 'municipios',
    categoria: 'Municípios, Prefeitos e Vereadores',
    enunciado:
      'Qual é a idade mínima exigida pela Constituição para se candidatar ao cargo de Vereador?',
    alternativas: {
      A: '16 anos',
      B: '18 anos',
      C: '21 anos',
      D: '25 anos',
    },
    correta: 'B',
    explicacao:
      'Segundo o art. 14, § 3º, VI, alínea "d", 18 anos é a idade mínima para concorrer ao cargo de Vereador — a menor entre todos os cargos eletivos.',
  },
  {
    id: 47,
    areaId: 'municipios',
    categoria: 'Municípios, Prefeitos e Vereadores',
    enunciado:
      'Qual imposto abaixo é de competência dos Municípios (e do Distrito Federal)?',
    alternativas: {
      A: 'Imposto de Renda (IR)',
      B: 'Imposto sobre Propriedade Predial e Territorial Urbana (IPTU)',
      C: 'Imposto sobre Circulação de Mercadorias e Serviços (ICMS)',
      D: 'Imposto sobre Produtos Industrializados (IPI)',
    },
    correta: 'B',
    explicacao:
      'Pelo art. 156, I, da Constituição (e art. 147 para o DF), compete aos Municípios instituir o IPTU (além de ITBI e ISS).',
  },
  {
    id: 48,
    areaId: 'municipios',
    categoria: 'Municípios, Prefeitos e Vereadores',
    enunciado:
      'Qual é o quórum exigido na Câmara Municipal para aprovar a Lei Orgânica do Município (ou emendas a ela)?',
    alternativas: {
      A: 'Maioria simples em turno único',
      B: 'Maioria absoluta em turno único',
      C: 'Dois terços dos membros, em dois turnos com interstício mínimo de 10 dias',
      D: 'Unanimidade dos vereadores presentes',
    },
    correta: 'C',
    explicacao:
      'O art. 29 exige votação em dois turnos, com intervalo mínimo de 10 dias, e aprovação por dois terços dos membros da Câmara Municipal, que a promulga.',
  },
  {
    id: 49,
    areaId: 'municipios',
    categoria: 'Municípios, Prefeitos e Vereadores',
    enunciado:
      'O número máximo de Vereadores de uma Câmara Municipal é definido pela Constituição com base em qual critério?',
    alternativas: {
      A: 'A arrecadação tributária da cidade',
      B: 'A extensão territorial em quilômetros quadrados',
      C: 'A população do Município',
      D: 'O número de bairros cadastrados',
    },
    correta: 'C',
    explicacao:
      'O art. 29, IV, fixa faixas populacionais para o limite máximo de vereadores, variando de 9 (até 15 mil habitantes) até 55 (mais de 8 milhões de habitantes).',
  },
  {
    id: 50,
    areaId: 'municipios',
    categoria: 'Municípios, Prefeitos e Vereadores',
    enunciado:
      'Segundo o art. 29, III, da Constituição Federal, em que data ocorre a posse do Prefeito e do Vice-Prefeito?',
    alternativas: {
      A: '1º de janeiro do ano seguinte à eleição',
      B: '5 de janeiro do ano seguinte à eleição',
      C: '6 de janeiro do ano seguinte à eleição',
      D: '1º de fevereiro do ano seguinte à eleição',
    },
    correta: 'A',
    explicacao:
      'Pelo art. 29, III, da Constituição, a posse do Prefeito e do Vice-Prefeito permanece em 1º de janeiro do ano subsequente ao da eleição (a mudança da EC 111/2021 atingiu apenas Presidente e Governadores).',
  },
  {
    id: 51,
    areaId: 'municipios',
    categoria: 'Municípios, Prefeitos e Vereadores',
    enunciado:
      'Para qual tipo de cidade a Constituição torna obrigatório o Plano Diretor aprovado pela Câmara Municipal?',
    alternativas: {
      A: 'Cidades com mais de 5 mil habitantes',
      B: 'Cidades com mais de 20 mil habitantes',
      C: 'Apenas capitais estaduais',
      D: 'Cidades com mais de 100 mil habitantes',
    },
    correta: 'B',
    explicacao:
      'De acordo com o art. 182, § 1º, da Constituição, o Plano Diretor é o instrumento básico da política de desenvolvimento urbano e é obrigatório para cidades com mais de 20 mil habitantes.',
  },
  {
    id: 52,
    areaId: 'presidencia_processo',
    categoria: 'Presidência, Senado e Processo Legislativo',
    enunciado:
      'Em que data ocorre a posse do Presidente e do Vice-Presidente da República segundo a redação vigente da Constituição (EC nº 111/2021)?',
    alternativas: {
      A: '1º de janeiro',
      B: '5 de janeiro',
      C: '6 de janeiro',
      D: '1º de fevereiro',
    },
    correta: 'B',
    explicacao:
      'A EC nº 111/2021 alterou o art. 82 da Constituição para estabelecer que o mandato presidencial se inicia em 5 de janeiro do ano seguinte ao da eleição.',
  },
  {
    id: 53,
    areaId: 'presidencia_processo',
    categoria: 'Presidência, Senado e Processo Legislativo',
    enunciado:
      'Desconsiderando a suspensão durante o recesso parlamentar, qual é o prazo máximo total de vigência de uma Medida Provisória (incluindo sua única prorrogação) caso não seja convertida em lei?',
    alternativas: {
      A: '30 dias',
      B: '60 dias',
      C: '90 dias',
      D: '120 dias',
    },
    correta: 'D',
    explicacao:
      'Segundo o art. 62, §§ 3º, 4º e 7º, a Medida Provisória vigora por 60 dias, prorrogáveis uma única vez por igual período (total de 120 dias), ficando esse prazo suspenso durante os períodos de recesso do Congresso Nacional.',
  },
  {
    id: 54,
    areaId: 'presidencia_processo',
    categoria: 'Presidência, Senado e Processo Legislativo',
    enunciado:
      'Qual quórum é necessário para aprovar uma Proposta de Emenda à Constituição (PEC) no Congresso Nacional?',
    alternativas: {
      A: 'Maioria simples em turno único nas duas Casas',
      B: 'Maioria absoluta em turno único nas duas Casas',
      C: 'Três quintos dos membros de cada Casa, em dois turnos de votação',
      D: 'Dois terços em sessão conjunta única',
    },
    correta: 'C',
    explicacao:
      'O art. 60, § 2º, exige que a PEC seja discutida e votada em cada Casa do Congresso em dois turnos, considerando-se aprovada se obtiver, em ambos, três quintos dos votos dos respectivos membros.',
  },
  {
    id: 55,
    areaId: 'presidencia_processo',
    categoria: 'Presidência, Senado e Processo Legislativo',
    enunciado:
      'Para derrubar (rejeitar) um veto do Presidente da República, qual votação é exigida no Congresso Nacional?',
    alternativas: {
      A: 'Maioria simples dos presentes',
      B: 'Maioria absoluta dos Deputados e dos Senadores, em sessão conjunta',
      C: 'Dois terços apenas do Senado Federal',
      D: 'Três quintos em votação secreta',
    },
    correta: 'B',
    explicacao:
      'Pelo art. 66, § 4º (com redação da EC nº 76/2013, que aboliu o voto secreto), o veto presidencial é apreciado em sessão conjunta em até 30 dias e só pode ser rejeitado por maioria absoluta dos Deputados e Senadores.',
  },
  {
    id: 56,
    areaId: 'presidencia_processo',
    categoria: 'Presidência, Senado e Processo Legislativo',
    enunciado:
      'Qual é a diferença principal de aprovação entre uma Lei Ordinária e uma Lei Complementar?',
    alternativas: {
      A: 'A Lei Complementar exige maioria absoluta; a Lei Ordinária exige maioria simples (relativa)',
      B: 'A Lei Complementar não precisa de sanção presidencial',
      C: 'A Lei Ordinária exige três quintos dos votos',
      D: 'A Lei Complementar só pode ser votada pelo Senado',
    },
    correta: 'A',
    explicacao:
      'Conforme os arts. 47 e 69 da Constituição, leis ordinárias são aprovadas por maioria simples (dos presentes), enquanto leis complementares exigem maioria absoluta (mais da metade do total de membros da Casa).',
  },
  {
    id: 57,
    areaId: 'presidencia_processo',
    categoria: 'Presidência, Senado e Processo Legislativo',
    enunciado:
      'Qual é a linha sucessória imediata da Presidência da República em caso de impedimento ou vacância simultânea do Presidente e do Vice-Presidente?',
    alternativas: {
      A: 'Presidente do Senado, Presidente da Câmara e Presidente do STF',
      B: 'Presidente da Câmara dos Deputados, Presidente do Senado Federal e Presidente do STF',
      C: 'Presidente do STF, Presidente do Senado e Ministro da Defesa',
      D: 'Presidente da Câmara, Procurador-Geral da República e Presidente do Senado',
    },
    correta: 'B',
    explicacao:
      'O art. 80 define a ordem exata de chamamento ao exercício da Presidência: Presidente da Câmara dos Deputados, depois o do Senado Federal e, em seguida, o do Supremo Tribunal Federal.',
  },
  {
    id: 58,
    areaId: 'presidencia_processo',
    categoria: 'Presidência, Senado e Processo Legislativo',
    enunciado:
      'Qual instituição é responsável por sabatinar e aprovar previamente a indicação de um Ministro do Supremo Tribunal Federal feita pelo Presidente?',
    alternativas: {
      A: 'A Câmara dos Deputados',
      B: 'O Senado Federal',
      C: 'O Conselho Nacional de Justiça',
      D: 'O próprio Supremo Tribunal Federal',
    },
    correta: 'B',
    explicacao:
      'Segundo os arts. 52, III, "a", e 101, parágrafo único, os Ministros do STF são nomeados pelo Presidente da República depois de aprovada a escolha pela maioria absoluta do Senado Federal.',
  },
  {
    id: 59,
    areaId: 'presidencia_processo',
    categoria: 'Presidência, Senado e Processo Legislativo',
    enunciado:
      'Sobre qual assunto é expressamente proibida a edição de Medida Provisória pelo Presidente da República?',
    alternativas: {
      A: 'Criação de programas sociais emergenciais',
      B: 'Direito penal, processual penal e direito eleitoral',
      C: 'Abertura de crédito extraordinário para calamidade pública',
      D: 'Reorganização de órgãos da administração federal',
    },
    correta: 'B',
    explicacao:
      'O art. 62, § 1º, I, veda a edição de Medidas Provisórias sobre nacionalidade, cidadania, direitos políticos, partidos políticos, direito eleitoral, direito penal, processual penal e processual civil.',
  },
  {
    id: 60,
    areaId: 'presidencia_processo',
    categoria: 'Presidência, Senado e Processo Legislativo',
    enunciado:
      'O que são as "cláusulas pétreas" previstas no art. 60, § 4º, da Constituição Federal?',
    alternativas: {
      A: 'Leis municipais que não podem ser alteradas por vereadores',
      B: 'Núcleos constitucionais que não podem ser abolidos nem por Emenda Constitucional, como o voto direto, secreto, universal e periódico e a separação dos Poderes',
      C: 'Projetos de lei que tramitam em regime de urgência no Senado',
      D: 'Decretos presidenciais com validade indeterminada',
    },
    correta: 'B',
    explicacao:
      'O art. 60, § 4º, protege contra abolição: a forma federativa de Estado, o voto direto, secreto, universal e periódico, a separação dos Poderes e os direitos e garantias individuais.',
  },

  {
    id: 61,
    areaId: 'estadual',
    categoria: 'Executivo e Legislativo Estadual',
    enunciado:
      'Como é calculado o número de Deputados Estaduais na Assembleia Legislativa de cada Estado?',
    alternativas: {
      A: 'Número fixo de 40 deputados para todos os Estados',
      B: 'Corresponde ao triplo da representação do Estado na Câmara dos Deputados (e, atingido 36, acrescido de tantos quantos forem os Deputados Federais acima de 12)',
      C: 'Metade do número de vereadores da capital do Estado',
      D: 'Definido livremente por decreto do Governador',
    },
    correta: 'B',
    explicacao:
      'O art. 27 da Constituição define exatamente essa fórmula proporcional vinculada à bancada do Estado na Câmara dos Deputados.',
  },
  {
    id: 62,
    areaId: 'estadual',
    categoria: 'Executivo e Legislativo Estadual',
    enunciado:
      'Quantas reeleições consecutivas a Constituição permite para o cargo de Governador de Estado?',
    alternativas: {
      A: 'Nenhuma reeleição é permitida',
      B: 'Uma única reeleição para o período subsequente',
      C: 'Duas reeleições consecutivas',
      D: 'Reeleições ilimitadas',
    },
    correta: 'B',
    explicacao:
      'Pelo art. 14, § 5º, o Presidente da República, os Governadores de Estado e do DF e os Prefeitos podem ser reeleitos para um único período subsequente.',
  },
  {
    id: 63,
    areaId: 'estadual',
    categoria: 'Executivo e Legislativo Estadual',
    enunciado:
      'Qual órgão auxilia a Assembleia Legislativa na fiscalização contábil, financeira e orçamentária do Governo Estadual?',
    alternativas: {
      A: 'O Tribunal de Contas do Estado (TCE)',
      B: 'A Receita Federal do Brasil',
      C: 'O Superior Tribunal Eleitoral',
      D: 'O Banco Central',
    },
    correta: 'A',
    explicacao:
      'Por simetria ao art. 75 da Constituição Federal, o controle externo estadual é exercido pela Assembleia Legislativa com o auxílio do Tribunal de Contas do Estado.',
  },
  {
    id: 64,
    areaId: 'estadual',
    categoria: 'Executivo e Legislativo Estadual',
    enunciado:
      'Como é chamado o órgão do Poder Legislativo do Distrito Federal?',
    alternativas: {
      A: 'Assembleia Distrital',
      B: 'Câmara Legislativa do Distrito Federal (CLDF)',
      C: 'Senado Distrital',
      D: 'Conselho Municipal de Brasília',
    },
    correta: 'B',
    explicacao:
      'De acordo com o art. 32, caput e § 3º, da Constituição, o Poder Legislativo do Distrito Federal é exercido pela Câmara Legislativa, composta por Deputados Distritais.',
  },
  {
    id: 65,
    areaId: 'estadual',
    categoria: 'Executivo e Legislativo Estadual',
    enunciado:
      'Os Deputados Estaduais possuem imunidade parlamentar por suas opiniões, palavras e votos?',
    alternativas: {
      A: 'Não, apenas Deputados Federais e Senadores têm imunidade',
      B: 'Sim, aplicam-se a eles as regras constitucionais sobre imunidades, sistema eleitoral e perda de mandato',
      C: 'Apenas se autorizada pelo Governador',
      D: 'Somente durante o período eleitoral',
    },
    correta: 'B',
    explicacao:
      'O art. 27, § 1º, estende aos Deputados Estaduais as regras da Constituição sobre sistema eleitoral, inviolabilidade, imunidades, remuneração, perda de mandato e impedimentos.',
  },
  {
    id: 66,
    areaId: 'estadual',
    categoria: 'Executivo e Legislativo Estadual',
    enunciado:
      'Na eleição para Governador de Estado, qual é o critério constitucional para um candidato vencer já no primeiro turno?',
    alternativas: {
      A: 'Obter mais de 40% dos votos válidos',
      B: 'Obter maioria absoluta dos votos válidos (mais de 50%), excluídos brancos e nulos',
      C: 'Obter pelo menos dois terços do total de eleitores inscritos',
      D: 'Ficar em primeiro lugar com qualquer percentual',
    },
    correta: 'B',
    explicacao:
      'Pelo art. 28 combinado com o art. 77, § 2º, vence no 1º turno o candidato que alcançar maioria absoluta dos votos válidos, não computados os brancos e os nulos.',
  },

  {
    id: 67,
    areaId: 'congresso_partidos',
    categoria: 'Congresso Nacional e Regras Partidárias',
    enunciado:
      'Segundo o art. 45, § 1º, da Constituição Federal, por qual instrumento normativo é fixado o número total de Deputados Federais e a representação proporcional de cada Estado e do Distrito Federal?',
    alternativas: {
      A: 'Por decreto do Presidente da República',
      B: 'Por resolução do Tribunal Superior Eleitoral',
      C: 'Por lei complementar',
      D: 'Por medida provisória',
    },
    correta: 'C',
    explicacao:
      'O art. 45, § 1º, da Constituição determina que o número total de Deputados, bem como a representação por Estado e pelo Distrito Federal, é estabelecido por lei complementar, proporcionalmente à população.',
  },
  {
    id: 68,
    areaId: 'congresso_partidos',
    categoria: 'Congresso Nacional e Regras Partidárias',
    enunciado:
      'Quem preside a Mesa do Congresso Nacional nas sessões conjuntas da Câmara e do Senado?',
    alternativas: {
      A: 'O Presidente da Câmara dos Deputados',
      B: 'O Presidente do Senado Federal',
      C: 'O Presidente do Supremo Tribunal Federal',
      D: 'O Vice-Presidente da República',
    },
    correta: 'B',
    explicacao:
      'Conforme o art. 57, § 5º, da Constituição Federal, a Mesa do Congresso Nacional é presidida pelo Presidente do Senado Federal.',
  },
  {
    id: 69,
    areaId: 'congresso_partidos',
    categoria: 'Congresso Nacional e Regras Partidárias',
    enunciado:
      'O que a Constituição Federal exige para que os partidos políticos possam formar coligações nas eleições?',
    alternativas: {
      A: 'Coligações são permitidas em todas as eleições proporcionais e majoritárias',
      B: 'Coligações são permitidas nas eleições majoritárias, sendo vedadas nas eleições proporcionais',
      C: 'Coligações são proibidas em qualquer tipo de eleição',
      D: 'Coligações dependem de autorização do Presidente da República',
    },
    correta: 'B',
    explicacao:
      'A EC nº 97/2017 alterou o art. 17, § 1º, proibindo coligações nas eleições proporcionais (Deputados e Vereadores), mantendo-as apenas nas majoritárias (Prefeito, Governador, Senador e Presidente).',
  },
  {
    id: 70,
    areaId: 'congresso_partidos',
    categoria: 'Congresso Nacional e Regras Partidárias',
    enunciado:
      'Qual é o mandato da Mesa Diretora (como a Presidência) da Câmara dos Deputados e do Senado Federal?',
    alternativas: {
      A: '1 ano, permitida reeleição ilimitada',
      B: '2 anos, vedada a recondução para o mesmo cargo na eleição imediatamente subsequente',
      C: '4 anos, coincidente com toda a legislatura',
      D: '8 anos no Senado e 4 anos na Câmara',
    },
    correta: 'B',
    explicacao:
      'Segundo o art. 57, § 4º, da Constituição, o mandato das Mesas da Câmara e do Senado é de 2 anos, vedada a recondução para o mesmo cargo na eleição imediatamente subsequente (vedação que o STF delimita dentro da mesma legislatura).',
  },
  {
    id: 71,
    areaId: 'congresso_partidos',
    categoria: 'Congresso Nacional e Regras Partidárias',
    enunciado:
      'Em qual data se reúne anualmente o Congresso Nacional em Brasília para iniciar a sessão legislativa ordinária?',
    alternativas: {
      A: '1º de janeiro',
      B: '15 de janeiro',
      C: '2 de fevereiro',
      D: '1º de março',
    },
    correta: 'C',
    explicacao:
      'Pelo art. 57 da Constituição, o Congresso Nacional reúne-se anualmente na Capital Federal de 2 de fevereiro a 17 de julho e de 1º de agosto a 22 de dezembro.',
  },
  {
    id: 72,
    areaId: 'congresso_partidos',
    categoria: 'Congresso Nacional e Regras Partidárias',
    enunciado:
      'O que ocorre quando um partido político não atinge a cláusula de desempenho nas eleições para a Câmara dos Deputados?',
    alternativas: {
      A: 'O partido é automaticamente extinto e seus eleitos perdem o mandato',
      B: 'O partido perde o acesso ao fundo partidário e ao tempo gratuito de rádio e TV, mas seus parlamentares eleitos mantêm o mandato (podendo se filiar a outro partido sem perder a vaga)',
      C: 'Os votos do partido são transferidos ao partido mais votado',
      D: 'O partido fica impedido de disputar eleições municipais por 8 anos',
    },
    correta: 'B',
    explicacao:
      'Conforme o art. 17, §§ 3º e 5º, o partido continua existindo sem acesso ao fundo partidário e à propaganda gratuita, e o eleito mantém o mandato, podendo se filiar a outro partido que tenha atingido a cláusula de desempenho.',
  },

  {
    id: 73,
    areaId: 'federalismo',
    categoria: 'Federalismo e Competências dos Entes',
    enunciado:
      'Quais são os entes autônomos que compõem a organização político-administrativa da República Federativa do Brasil?',
    alternativas: {
      A: 'Apenas União e Estados',
      B: 'União, Estados, Distrito Federal e Municípios',
      C: 'União, Estados e Territórios apenas',
      D: 'Executivo, Legislativo e Judiciário',
    },
    correta: 'B',
    explicacao:
      'O art. 18 da Constituição Federal estabelece que a organização político-administrativa compreende a União, os Estados, o Distrito Federal e os Municípios, todos autônomos.',
  },
  {
    id: 74,
    areaId: 'federalismo',
    categoria: 'Federalismo e Competências dos Entes',
    enunciado:
      'A qual ente federativo compete privativamente legislar sobre trânsito e transporte?',
    alternativas: {
      A: 'Aos Municípios',
      B: 'Aos Estados',
      C: 'À União',
      D: 'Ao Distrito Federal',
    },
    correta: 'C',
    explicacao:
      'O art. 22, XI, da Constituição determina que legislar sobre trânsito e transporte (como o Código de Trânsito Brasileiro) é competência privativa da União.',
  },
  {
    id: 75,
    areaId: 'federalismo',
    categoria: 'Federalismo e Competências dos Entes',
    enunciado:
      'Cuidar da saúde e assistência pública, bem como da proteção e garantia das pessoas com deficiência, é competência:',
    alternativas: {
      A: 'Exclusiva da União',
      B: 'Exclusiva dos Municípios',
      C: 'Comum da União, dos Estados, do Distrito Federal e dos Municípios',
      D: 'Privativa do Senado Federal',
    },
    correta: 'C',
    explicacao:
      'O art. 23, II, inclui saúde, assistência pública e proteção às pessoas com deficiência entre as competências administrativas comuns de todos os entes federativos.',
  },
  {
    id: 76,
    areaId: 'federalismo',
    categoria: 'Federalismo e Competências dos Entes',
    enunciado:
      'No federalismo brasileiro, como é chamada a competência reservada aos Estados para tudo aquilo que a Constituição não lhes vedar?',
    alternativas: {
      A: 'Competência exclusiva',
      B: 'Competência remanescente (ou residual)',
      C: 'Competência delegada',
      D: 'Competência extraordinária',
    },
    correta: 'B',
    explicacao:
      'Segundo o art. 25, § 1º, são reservadas aos Estados as competências que não lhes sejam vedadas pela Constituição — técnica conhecida como competência remanescente ou residual.',
  },
  {
    id: 77,
    areaId: 'federalismo',
    categoria: 'Federalismo e Competências dos Entes',
    enunciado:
      'A Constituição Federal permite que um Estado brasileiro se separe da Federação (direito de secessão)?',
    alternativas: {
      A: 'Sim, mediante plebiscito estadual',
      B: 'Sim, se aprovado pela Assembleia Legislativa por dois terços',
      C: 'Não, a República Federativa do Brasil é formada pela união indissolúvel dos entes federativos',
      D: 'Sim, desde que autorizado pelo STF',
    },
    correta: 'C',
    explicacao:
      'O art. 1º da Constituição define a República Federativa do Brasil como a união indissolúvel dos Estados, Municípios e do DF, sendo a forma federativa cláusula pétrea.',
  },
  {
    id: 78,
    areaId: 'federalismo',
    categoria: 'Federalismo e Competências dos Entes',
    enunciado:
      'A qual ente compete legislar sobre o sistema monetário, medidas, títulos e garantias dos metais?',
    alternativas: {
      A: 'À União, privativamente',
      B: 'Aos Estados, concorrentemente',
      C: 'Aos Municípios, por interesse local',
      D: 'Ao Banco Central, por decreto',
    },
    correta: 'A',
    explicacao:
      'O art. 22, VI, reserva privativamente à União legislar sobre o sistema monetário e de medidas, títulos e garantias dos metais.',
  },

  {
    id: 79,
    areaId: 'municipios',
    categoria: 'Municípios, Prefeitos e Vereadores',
    enunciado:
      'Qual é a idade mínima exigida pela Constituição para concorrer ao cargo de Prefeito ou Vice-Prefeito?',
    alternativas: {
      A: '18 anos',
      B: '21 anos',
      C: '30 anos',
      D: '35 anos',
    },
    correta: 'B',
    explicacao:
      'Conforme o art. 14, § 3º, VI, "c", a idade mínima para Prefeito e Vice-Prefeito é de 21 anos (enquanto para Vereador é 18 anos).',
  },
  {
    id: 80,
    areaId: 'municipios',
    categoria: 'Municípios, Prefeitos e Vereadores',
    enunciado:
      'Onde vale a inviolabilidade (imunidade material) dos Vereadores por suas opiniões, palavras e votos no exercício do mandato?',
    alternativas: {
      A: 'Em todo o território nacional',
      B: 'Apenas na circunscrição do respectivo Município',
      C: 'Em todo o Estado ao qual o Município pertence',
      D: 'Vereadores não possuem imunidade material',
    },
    correta: 'B',
    explicacao:
      'O art. 29, VIII, garante a inviolabilidade dos Vereadores por suas opiniões, palavras e votos no exercício do mandato e na circunscrição do Município.',
  },
  {
    id: 81,
    areaId: 'municipios',
    categoria: 'Municípios, Prefeitos e Vereadores',
    enunciado:
      'Qual órgão do Poder Judiciário julga o Prefeito Municipal pela prática de crimes comuns estaduais?',
    alternativas: {
      A: 'O Juiz de Direito da comarca local',
      B: 'O Tribunal de Justiça do Estado',
      C: 'O Supremo Tribunal Federal',
      D: 'A Câmara Municipal',
    },
    correta: 'B',
    explicacao:
      'O art. 29, X, assegura o julgamento do Prefeito perante o Tribunal de Justiça do Estado (salvo crimes federais ou eleitorais, julgados pelo TRF ou TRE).',
  },
  {
    id: 82,
    areaId: 'municipios',
    categoria: 'Municípios, Prefeitos e Vereadores',
    enunciado:
      'Por quanto tempo as contas anuais dos Municípios devem ficar à disposição de qualquer contribuinte para exame e apreciação?',
    alternativas: {
      A: '15 dias por ano',
      B: '30 dias por ano',
      C: '60 dias por ano',
      D: '90 dias por ano',
    },
    correta: 'C',
    explicacao:
      'Pelo art. 31, § 3º, da Constituição, as contas dos Municípios ficarão, durante 60 dias, anualmente, à disposição de qualquer contribuinte para exame e questionamento de legitimidade.',
  },
  {
    id: 83,
    areaId: 'municipios',
    categoria: 'Municípios, Prefeitos e Vereadores',
    enunciado:
      'A Constituição Federal permite a criação de novos Tribunais de Contas Municipais (órgãos exclusivos de um único município)?',
    alternativas: {
      A: 'Sim, em qualquer cidade com mais de 200 mil habitantes',
      B: 'Não, é vedada a criação de novos Tribunais, Conselhos ou órgãos de Contas Municipais',
      C: 'Sim, desde que aprovado pela Câmara Municipal',
      D: 'Sim, mediante autorização do Governador',
    },
    correta: 'B',
    explicacao:
      'O art. 31, § 4º, proíbe a criação de novos Tribunais, Conselhos ou órgãos de Contas Municipais (permanecendo apenas os dois que já existiam antes de 1988: São Paulo e Rio de Janeiro).',
  },
  {
    id: 84,
    areaId: 'municipios',
    categoria: 'Municípios, Prefeitos e Vereadores',
    enunciado:
      'Qual porcentagem mínima da receita resultante de impostos os Municípios devem aplicar anualmente na manutenção e desenvolvimento do ensino?',
    alternativas: {
      A: '10%',
      B: '15%',
      C: '18%',
      D: '25%',
    },
    correta: 'D',
    explicacao:
      'O art. 212 da Constituição exige que Estados, DF e Municípios apliquem no mínimo 25% da receita resultante de impostos, compreendida a proveniente de transferências, na manutenção e desenvolvimento do ensino (a União aplica no mínimo 18%).',
  },
  {
    id: 85,
    areaId: 'municipios',
    categoria: 'Municípios, Prefeitos e Vereadores',
    enunciado:
      'O que é necessário, segundo o art. 29, XIII, para apresentar um projeto de lei de iniciativa popular em um Município?',
    alternativas: {
      A: 'Assinatura de pelo menos 1% do eleitorado do país',
      B: 'Manifestação de, pelo menos, 5% do eleitorado do Município, da cidade ou de bairros',
      C: 'Assinatura de 100 moradores do bairro',
      D: 'Autorização prévia do Prefeito',
    },
    correta: 'B',
    explicacao:
      'O art. 29, XIII, assegura a iniciativa popular de projetos de lei de interesse específico do Município, da cidade ou de bairros, por meio da manifestação de pelo menos 5% do eleitorado.',
  },
  {
    id: 86,
    areaId: 'municipios',
    categoria: 'Municípios, Prefeitos e Vereadores',
    enunciado:
      'Qual serviço abaixo está expressamente entre as competências dos Municípios previstas no art. 30 da Constituição?',
    alternativas: {
      A: 'Manter a Polícia Federal e o controle de fronteiras',
      B: 'Manter programas de educação infantil e de ensino fundamental, com cooperação técnica e financeira da União e do Estado',
      C: 'Emitir passaportes e regular comércio exterior',
      D: 'Julgar ações trabalhistas locais',
    },
    correta: 'B',
    explicacao:
      'O art. 30, VI, incumbe aos Municípios manter, com a cooperação técnica e financeira da União e do Estado, programas de educação infantil e de ensino fundamental.',
  },

  {
    id: 87,
    areaId: 'presidencia_processo',
    categoria: 'Presidência, Senado e Processo Legislativo',
    enunciado:
      'Qual é a idade mínima e a condição de nacionalidade exigidas para o cargo de Presidente e Vice-Presidente da República?',
    alternativas: {
      A: '30 anos, brasileiro nato ou naturalizado',
      B: '35 anos, obrigatoriamente brasileiro nato',
      C: '35 anos, brasileiro nato ou naturalizado',
      D: '40 anos, obrigatoriamente brasileiro nato',
    },
    correta: 'B',
    explicacao:
      'Pelo art. 12, § 3º, I, e art. 14, § 3º, VI, "a", o cargo de Presidente e Vice-Presidente da República é privativo de brasileiro nato com idade mínima de 35 anos.',
  },
  {
    id: 88,
    areaId: 'presidencia_processo',
    categoria: 'Presidência, Senado e Processo Legislativo',
    enunciado:
      'Qual é o requisito popular exigido pela Constituição para apresentar um projeto de lei federal de iniciativa popular à Câmara dos Deputados?',
    alternativas: {
      A: 'Subscrição de no mínimo 1% do eleitorado nacional, distribuído por pelo menos 5 Estados, com não menos de 0,3% dos eleitores de cada um deles',
      B: 'Subscrição de 5% do eleitorado de qualquer Estado',
      C: 'Apenas 50 mil assinaturas em abaixo-assinado digital',
      D: 'Aprovação prévia do Senado Federal',
    },
    correta: 'A',
    explicacao:
      'O art. 61, § 2º, define exatamente esse critério: mínimo de 1% do eleitorado nacional, distribuído em ao menos 5 Estados, com pelo menos 0,3% dos eleitores em cada um.',
  },
  {
    id: 89,
    areaId: 'presidencia_processo',
    categoria: 'Presidência, Senado e Processo Legislativo',
    enunciado:
      'Qual é a idade mínima exigida pela Constituição Federal para concorrer ao cargo de Senador?',
    alternativas: {
      A: '21 anos',
      B: '25 anos',
      C: '30 anos',
      D: '35 anos',
    },
    correta: 'D',
    explicacao:
      'O art. 14, § 3º, VI, "a", exige idade mínima de 35 anos para Presidente, Vice-Presidente da República e Senador.',
  },
  {
    id: 90,
    areaId: 'presidencia_processo',
    categoria: 'Presidência, Senado e Processo Legislativo',
    enunciado:
      'Se o Presidente da República não se manifestar (nem sancionar nem vetar) dentro do prazo de 15 dias úteis após receber um projeto de lei aprovado pelo Congresso, o que acontece?',
    alternativas: {
      A: 'O projeto é automaticamente arquivado',
      B: 'O projeto volta para nova votação na Câmara',
      C: 'O silêncio do Presidente importa sanção (sanção tácita)',
      D: 'O projeto é submetido a plebiscito popular',
    },
    correta: 'C',
    explicacao:
      'Conforme o art. 66, § 3º, decorrido o prazo de 15 dias úteis, o silêncio do Presidente da República importa sanção (chamada de sanção tácita).',
  },
];

export const MODALIDADES_QUIZ = {
  curto: {
    id: 'curto',
    titulo: 'Quiz Curto',
    subtitulo: 'Essencial Variado',
    quantidade: 30,
    tempoEstimado: '~10 min',
    descricao:
      '30 questões variadas para testar rapidamente seus conhecimentos.',
  },
  longo: {
    id: 'longo',
    titulo: 'Quiz Longo',
    subtitulo: 'Imersão Completa',
    quantidade: 60,
    tempoEstimado: '~20 min',
    descricao:
      '60 questões variadas para testar profundamente seus conhecimentos.',
  },
};

export const QUANTIDADE_MINI_QUIZ_AREA = 10;

export function buscarPerguntaPorId(id) {
  return PERGUNTAS.find((p) => p.id === id) ?? null;
}

function embaralharLista(lista) {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

export function embaralharPerguntas(modalidade = 'curto', areaId = null) {
  if (modalidade === 'area' && areaId) {
    const daArea = PERGUNTAS.filter((p) => p.areaId === areaId);
    return embaralharLista(daArea).slice(0, QUANTIDADE_MINI_QUIZ_AREA);
  }

  const porArea = modalidade === 'longo' ? 12 : 6;
  const selecionadas = [];

  for (const area of AREAS_CONHECIMENTO) {
    const daArea = PERGUNTAS.filter((p) => p.areaId === area.id);
    selecionadas.push(...embaralharLista(daArea).slice(0, porArea));
  }

  return embaralharLista(selecionadas);
}
