export const CARGOS_POLITICOS = [
  {
    id: 'vereador',
    areaId: 'municipios',
    nome: 'Vereador',
    esfera: 'Municipal',
    poder: 'Legislativo',
    casa: 'Câmara Municipal',
    mandato: '4 anos',
    reeleicao: 'Sem limite de reeleições',
    sistemaEleitoral: 'Proporcional',
    idadeMinima: '18 anos',
    posse: '1º de janeiro',
    icone: 'people-outline',
    cor: '#0F766E',
    corSuave: '#CCFBF1',
    corEscuraSuave: '#134E4A',
    resumo:
      'Representa os moradores da cidade na Câmara Municipal, cria leis de interesse local e fiscaliza as contas e ações do Prefeito.',
    comoFunciona:
      'O Vereador atua diretamente nas questões mais próximas do cotidiano do cidadão. Ele participa de sessões plenárias e comissões para debater e votar projetos de lei municipais, analisa o orçamento da cidade e acompanha se a Prefeitura está aplicando bem os recursos públicos.',
    atribuicoes: [
      'Elaborar, discutir e votar leis de interesse local, como plano diretor, zoneamento urbano e código de posturas.',
      'Votar o orçamento anual do município (LOA), a Lei de Diretrizes Orçamentárias (LDO) e o Plano Plurianual (PPA).',
      'Fiscalizar o Prefeito e a administração municipal, inclusive julgando as contas anuais com auxílio do Tribunal de Contas.',
      'Propor indicações e requerimentos de melhorias em bairros, transporte coletivo, iluminação e limpeza urbana.',
    ],
    exemplosPraticos: [
      'Aprovar regras de horário de funcionamento do comércio ou políticas locais de arborização.',
      'Instaurar uma CPI municipal para investigar suspeitas de irregularidades em contratos da Prefeitura.',
      'Rejeitar ou aprovar o parecer do órgão de contas sobre as contas do Prefeito (exige dois terços para derrubar o parecer).',
    ],
    freiosEContrapesos:
      'Fiscaliza o Prefeito e pode abrir processo de cassação por infrações político-administrativas; seus projetos de lei passam pela sanção ou veto do Prefeito.',
  },
  {
    id: 'prefeito',
    areaId: 'municipios',
    nome: 'Prefeito',
    esfera: 'Municipal',
    poder: 'Executivo',
    casa: 'Prefeitura Municipal',
    mandato: '4 anos',
    reeleicao: 'Até 1 reeleição consecutiva',
    sistemaEleitoral: 'Majoritário (2º turno em cidades com mais de 200 mil eleitores)',
    idadeMinima: '21 anos',
    posse: '1º de janeiro',
    icone: 'business-outline',
    cor: '#0369A1',
    corSuave: '#E0F2FE',
    corEscuraSuave: '#0C4A6E',
    resumo:
      'Chefe do Poder Executivo do município. Administra a cidade, gerencia serviços públicos essenciais e executa o orçamento municipal.',
    comoFunciona:
      'O Prefeito comanda a Prefeitura e nomeia os secretários municipais (Saúde, Educação, Obras, Transporte, etc.). Cabe a ele transformar o orçamento aprovado pela Câmara em serviços concretos para a população, além de sancionar ou vetar leis aprovadas pelos vereadores.',
    atribuicoes: [
      'Administrar serviços públicos locais: creches, ensino fundamental, postos de saúde (UBS), transporte coletivo e coleta de lixo.',
      'Elaborar e enviar à Câmara Municipal as propostas de orçamento (PPA, LDO e LOA) e arrecadar tributos municipais (IPTU, ISS, ITBI).',
      'Sancionar, promulgar e regulamentar leis municipais, ou vetar projetos aprovados pela Câmara.',
      'Executar obras urbanas, manter vias públicas, parques, iluminação e ordenamento territorial.',
    ],
    exemplosPraticos: [
      'Decidir a construção de uma nova creche ou reforma de uma unidade básica de saúde.',
      'Definir o reajuste da tarifa de ônibus municipal e fiscalizar as empresas concessionárias.',
      'Emitir decretos municipais para organizar serviços públicos e planos de contingência em chuvas fortes.',
    ],
    freiosEContrapesos:
      'É fiscalizado pela Câmara Municipal, pelo Tribunal de Contas e pelo Ministério Público; não pode gastar fora do orçamento aprovado pelo Legislativo.',
  },
  {
    id: 'deputado-estadual',
    areaId: 'estadual',
    nome: 'Deputado Estadual',
    esfera: 'Estadual / DF',
    poder: 'Legislativo',
    casa: 'Assembleia Legislativa (ou CLDF)',
    mandato: '4 anos',
    reeleicao: 'Sem limite de reeleições',
    sistemaEleitoral: 'Proporcional',
    idadeMinima: '21 anos',
    posse: '1º de fevereiro',
    icone: 'document-text-outline',
    cor: '#4338CA',
    corSuave: '#E0E7FF',
    corEscuraSuave: '#312E81',
    resumo:
      'Legisla sobre assuntos de competência do Estado, aprova o orçamento estadual e fiscaliza o Governador e as secretarias estaduais.',
    comoFunciona:
      'Os Deputados Estaduais (e Distritais, no Distrito Federal) compõem a Assembleia Legislativa. Eles criam leis estaduais em temas que não são exclusivos da União nem restritos aos municípios, fixam subsídios do Executivo estadual e acompanham a gestão do Governador.',
    atribuicoes: [
      'Elaborar e votar leis estaduais (como regras sobre ICMS, IPVA, proteção ambiental estadual e criação de regiões metropolitanas).',
      'Fiscalizar o Governador, convocar secretários de Estado para prestar esclarecimentos e criar CPIs estaduais.',
      'Aprovar o orçamento anual do Estado e julgar as contas do Governador com auxílio do Tribunal de Contas do Estado.',
      'Propor e votar a lei que fixa os subsídios do Governador, Vice-Governador e Secretários de Estado.',
    ],
    exemplosPraticos: [
      'Aprovar leis de incentivo à cultura, ao esporte ou à preservação de bacias hidrográficas do Estado.',
      'Votar a criação de uma região metropolitana por meio de lei complementar estadual.',
      'Avaliar pedidos de empréstimo do governo estadual e fiscalizar hospitais e escolas estaduais.',
    ],
    freiosEContrapesos:
      'Controla os atos do Governador e possui teto de subsídio limitado a 75% do valor pago aos Deputados Federais; perde o mandato em caso de infidelidade partidária sem justa causa.',
  },
  {
    id: 'governador',
    areaId: 'estadual',
    nome: 'Governador',
    esfera: 'Estadual / DF',
    poder: 'Executivo',
    casa: 'Governo do Estado',
    mandato: '4 anos',
    reeleicao: 'Até 1 reeleição consecutiva',
    sistemaEleitoral: 'Majoritário (com 2º turno se ninguém superar 50% dos votos válidos)',
    idadeMinima: '30 anos',
    posse: '6 de janeiro',
    icone: 'shield-checkmark-outline',
    cor: '#1D4ED8',
    corSuave: '#DBEAFE',
    corEscuraSuave: '#1E3A8A',
    resumo:
      'Chefe do Poder Executivo do Estado ou do Distrito Federal. Comanda a segurança pública estadual, ensino médio, rodovias e hospitais estaduais.',
    comoFunciona:
      'O Governador representa o Estado política e administrativamente, nomeia secretários estaduais e coordena políticas públicas regionais. Com a Emenda Constitucional nº 111/2021, sua posse passa a ocorrer em 6 de janeiro. Ele também responde pela gestão das polícias Civil, Militar e Penal.',
    atribuicoes: [
      'Comandar a segurança pública estadual (Polícia Militar, Polícia Civil, Corpo de Bombeiros e Polícia Penal).',
      'Gerir a rede estadual de ensino (especialmente ensino médio), hospitais regionais, estradas estaduais e saneamento.',
      'Sancionar ou vetar leis aprovadas pela Assembleia Legislativa e propor o orçamento estadual.',
      'Arrecadar impostos estaduais (ICMS, IPVA, ITCMD) e gerenciar serviços locais de gás canalizado.',
    ],
    exemplosPraticos: [
      'Ampliar o efetivo policial, abrir concursos estaduais e investir em viaturas e delegacias.',
      'Negociar obras de metrô, trens metropolitanos e duplicação de rodovias estaduais.',
      'Perde o mandato caso assuma outro cargo ou função na administração pública (salvo posse por concurso público).',
    ],
    freiosEContrapesos:
      'É fiscalizado pela Assembleia Legislativa e pelo Tribunal de Contas do Estado; presta contas anuais e depende do Legislativo para aprovar leis e orçamento.',
  },
  {
    id: 'deputado-federal',
    areaId: 'congresso_partidos',
    nome: 'Deputado Federal',
    esfera: 'Federal',
    poder: 'Legislativo',
    casa: 'Câmara dos Deputados (Congresso Nacional)',
    mandato: '4 anos',
    reeleicao: 'Sem limite de reeleições',
    sistemaEleitoral: 'Proporcional (513 cadeiras distribuídas conforme a população)',
    idadeMinima: '21 anos',
    posse: '1º de fevereiro',
    icone: 'library-outline',
    cor: '#7C3AED',
    corSuave: '#EDE9FE',
    corEscuraSuave: '#4C1D95',
    resumo:
      'Representa o povo brasileiro na Câmara dos Deputados. Propõe e vota leis federais, emendas constitucionais e fiscaliza o Governo Federal.',
    comoFunciona:
      'Os 513 Deputados Federais representam a população de cada Estado e do DF de forma proporcional (mínimo de 8 e máximo de 70 por unidade federativa). A Câmara geralmente é a Casa iniciadora dos projetos de lei apresentados pelo Presidente da República, pelo STF e por iniciativa popular.',
    atribuicoes: [
      'Propor, debater e votar leis nacionais (direito penal, civil, trabalhista, tributário, eleitoral) e Propostas de Emenda à Constituição (PECs).',
      'Autorizar, por dois terços de seus membros, a instauração de processo contra o Presidente, Vice-Presidente e Ministros de Estado.',
      'Proceder à tomada de contas do Presidente da República quando não apresentadas ao Congresso em até 60 dias.',
      'Integrar comissões temáticas, propor emendas ao Orçamento da União e criar CPIs (com apoio de 1/3 dos deputados).',
    ],
    exemplosPraticos: [
      'Votar reformas tributárias, alterações no Código Penal ou leis de proteção de dados válidas para todo o país.',
      'Analisar primeiro as Medidas Provisórias editadas pelo Presidente da República.',
      'Convocar Ministros de Estado para prestar esclarecimentos sobre gastos ou políticas federais.',
    ],
    freiosEContrapesos:
      'Atua em sistema bicameral com o Senado Federal: projetos aprovados na Câmara são revisados pelos senadores antes de irem à sanção presidencial.',
  },
  {
    id: 'senador',
    areaId: 'federalismo',
    nome: 'Senador',
    esfera: 'Federal',
    poder: 'Legislativo',
    casa: 'Senado Federal (Congresso Nacional)',
    mandato: '8 anos',
    reeleicao: 'Sem limite de reeleições',
    sistemaEleitoral: 'Majoritário (3 por Estado e DF, renovados 1/3 e 2/3 a cada 4 anos)',
    idadeMinima: '35 anos',
    posse: '1º de fevereiro',
    icone: 'scale-outline',
    cor: '#B45309',
    corSuave: '#FEF3C7',
    corEscuraSuave: '#78350F',
    resumo:
      'Representa os Estados e o Distrito Federal no Congresso Nacional. Revisa leis federais, sabatina autoridades e julga crimes de responsabilidade.',
    comoFunciona:
      'O Senado Federal é composto por 81 senadores — exatamente 3 por Estado e pelo DF, garantindo equilíbrio federativo independentemente do tamanho da população. Além de legislar e revisar projetos da Câmara, o Senado possui competências privativas estratégicas de controle institucional.',
    atribuicoes: [
      'Processar e julgar o Presidente, Vice-Presidente, Ministros do STF e o Procurador-Geral da República nos crimes de responsabilidade.',
      'Aprovar previamente, por voto secreto após arguição pública (sabatina), a escolha de Ministros do STF, diretores do Banco Central e embaixadores.',
      'Fixar limites globais para a dívida consolidada da União, dos Estados, do DF e dos Municípios.',
      'Suspender a execução, no todo ou em parte, de lei declarada inconstitucional por decisão definitiva do STF.',
    ],
    exemplosPraticos: [
      'Realizar sabatina de um indicado à vaga de Ministro do Supremo Tribunal Federal antes da nomeação.',
      'Revisar e alterar projetos de lei vindos da Câmara dos Deputados, equilibrando interesses regionais.',
      'Autorizar operações financeiras externas de interesse da União, dos Estados e dos Municípios.',
    ],
    freiosEContrapesos:
      'Equilibra a representação dos Estados menores frente aos mais populosos e funciona como tribunal político em processos de impeachment.',
  },
  {
    id: 'presidente',
    areaId: 'presidencia_processo',
    nome: 'Presidente da República',
    esfera: 'Federal',
    poder: 'Executivo',
    casa: 'Presidência da República (Palácio do Planalto)',
    mandato: '4 anos',
    reeleicao: 'Até 1 reeleição consecutiva',
    sistemaEleitoral: 'Majoritário (com 2º turno se nenhum candidato atingir mais de 50%)',
    idadeMinima: '35 anos (brasileiro nato)',
    posse: '5 de janeiro',
    icone: 'flag-outline',
    cor: '#15803D',
    corSuave: '#DCFCE7',
    corEscuraSuave: '#14532D',
    resumo:
      'Chefe de Estado e Chefe de Governo do Brasil. Dirige a administração federal, comanda as Forças Armadas e representa o país no exterior.',
    comoFunciona:
      'O Presidente acumula as funções de Chefe de Estado (relações diplomáticas e defesa nacional) e Chefe de Governo (condução das políticas públicas e economia federal). Com a Emenda Constitucional nº 111/2021, sua posse passa a ocorrer em 5 de janeiro. Pode editar Medidas Provisórias em casos de relevância e urgência.',
    atribuicoes: [
      'Nomear e exonerar Ministros de Estado e exercer a direção superior da administração pública federal.',
      'Sancionar, promulgar e publicar leis, ou vetar projetos do Congresso no prazo de 15 dias úteis.',
      'Editar Medidas Provisórias com força de lei, submetendo-as imediatamente ao Congresso Nacional.',
      'Exercer o comando supremo das Forças Armadas, manter relações com Estados estrangeiros e celebrar tratados internacionais (sujeitos ao Congresso).',
    ],
    exemplosPraticos: [
      'Enviar ao Congresso o projeto do Orçamento Geral da União e definir políticas nacionais de saúde, educação e infraestrutura.',
      'Indicar nomes para o Supremo Tribunal Federal e para a presidência do Banco Central (que dependem de aprovação do Senado).',
      'Decretar intervenção federal, estado de defesa ou estado de sítio, respeitando os limites e controles constitucionais.',
    ],
    freiosEContrapesos:
      'Seus vetos podem ser derrubados por maioria absoluta do Congresso; MPs perdem validade se não forem aprovadas em até 120 dias; responde por crimes comuns no STF e por crimes de responsabilidade no Senado.',
  },
];

export function buscarCargoPorId(id) {
  return CARGOS_POLITICOS.find((c) => c.id === id) ?? null;
}
