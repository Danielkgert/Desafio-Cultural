// ─── Mock Data ─────────────────────────────────────────────────────────────
// Substitua os videoId pelos IDs reais do canal do YouTube do Desafio Cultural.
// Formato: https://www.youtube.com/watch?v=VIDEO_ID  →  use apenas o VIDEO_ID

export type Regiao = 'Norte' | 'Nordeste' | 'Centro-Oeste' | 'Sudeste' | 'Sul';

export interface Municipio {
  id: string;
  nome: string;
  videoId: string;
  descricao: string;
}

export interface Estado {
  id: string;
  nome: string;
  sigla: string;
  regiao: Regiao;
  municipios: Municipio[];
}

export const estados: Estado[] = [
  // ── SUDESTE ────────────────────────────────────────────────────────────────
  {
    id: 'sao-paulo',
    nome: 'São Paulo',
    sigla: 'SP',
    regiao: 'Sudeste',
    municipios: [
      {
        id: 'sao-paulo-capital',
        nome: 'São Paulo',
        videoId: 'YqeW9_5kURI',
        descricao: 'A maior metrópole do Brasil exibe sua diversidade cultural única.',
      },
      {
        id: 'campinas',
        nome: 'Campinas',
        videoId: 'uelHwf8o7_U',
        descricao: 'Polo de inovação e rica tradição cultural no interior paulista.',
      },
      {
        id: 'santos',
        nome: 'Santos',
        videoId: 'rYEDA3JcQqw',
        descricao: 'A cidade portuária celebra sua história e patrimônio litorâneo.',
      },
      {
        id: 'ribeirao-preto',
        nome: 'Ribeirão Preto',
        videoId: 'kffacxfA7G4',
        descricao: 'Capital do agronegócio e da vibrante cultura caipira paulista.',
      },
    ],
  },
  {
    id: 'rio-de-janeiro',
    nome: 'Rio de Janeiro',
    sigla: 'RJ',
    regiao: 'Sudeste',
    municipios: [
      {
        id: 'rio-de-janeiro-capital',
        nome: 'Rio de Janeiro',
        videoId: '9bZkp7q19f0',
        descricao: 'A Cidade Maravilhosa em toda a sua exuberância cultural.',
      },
      {
        id: 'niteroi',
        nome: 'Niterói',
        videoId: 'YqeW9_5kURI',
        descricao: 'Arte contemporânea e cultura nas margens da Baía de Guanabara.',
      },
      {
        id: 'petropolis',
        nome: 'Petrópolis',
        videoId: 'uelHwf8o7_U',
        descricao: 'A Cidade Imperial preserva sua história e tradição serrana.',
      },
      {
        id: 'angra-dos-reis',
        nome: 'Angra dos Reis',
        videoId: 'rYEDA3JcQqw',
        descricao: 'Paraíso natural onde cultura e beleza se encontram.',
      },
    ],
  },
  {
    id: 'minas-gerais',
    nome: 'Minas Gerais',
    sigla: 'MG',
    regiao: 'Sudeste',
    municipios: [
      {
        id: 'belo-horizonte',
        nome: 'Belo Horizonte',
        videoId: 'kffacxfA7G4',
        descricao: 'A capital mineira celebra sua gastronomia e arte contemporânea.',
      },
      {
        id: 'ouro-preto',
        nome: 'Ouro Preto',
        videoId: '9bZkp7q19f0',
        descricao: 'Patrimônio da Humanidade: berço do Barroco e da identidade mineira.',
      },
      {
        id: 'diamantina',
        nome: 'Diamantina',
        videoId: 'YqeW9_5kURI',
        descricao: 'Cidade histórica no coração da Serra do Espinhaço.',
      },
    ],
  },
  {
    id: 'espirito-santo',
    nome: 'Espírito Santo',
    sigla: 'ES',
    regiao: 'Sudeste',
    municipios: [
      {
        id: 'vitoria',
        nome: 'Vitória',
        videoId: 'uelHwf8o7_U',
        descricao: 'Capital capixaba com rica mistura de culturas e tradições.',
      },
      {
        id: 'vila-velha',
        nome: 'Vila Velha',
        videoId: 'rYEDA3JcQqw',
        descricao: 'Primeira cidade do Brasil exibe sua herança histórica.',
      },
    ],
  },

  // ── NORDESTE ───────────────────────────────────────────────────────────────
  {
    id: 'bahia',
    nome: 'Bahia',
    sigla: 'BA',
    regiao: 'Nordeste',
    municipios: [
      {
        id: 'salvador',
        nome: 'Salvador',
        videoId: 'kffacxfA7G4',
        descricao: 'Berço da cultura afro-brasileira, do Axé e do Carnaval.',
      },
      {
        id: 'feira-de-santana',
        nome: 'Feira de Santana',
        videoId: '9bZkp7q19f0',
        descricao: 'Tradição e modernidade no coração sertanejo da Bahia.',
      },
      {
        id: 'ilheus',
        nome: 'Ilhéus',
        videoId: 'YqeW9_5kURI',
        descricao: 'Terra de Jorge Amado e do cacau: cultura e literatura.',
      },
      {
        id: 'lencois',
        nome: 'Lençóis',
        videoId: 'uelHwf8o7_U',
        descricao: 'Porta da Chapada Diamantina e sua cultura garimpeira.',
      },
    ],
  },
  {
    id: 'pernambuco',
    nome: 'Pernambuco',
    sigla: 'PE',
    regiao: 'Nordeste',
    municipios: [
      {
        id: 'recife',
        nome: 'Recife',
        videoId: 'rYEDA3JcQqw',
        descricao: 'A Veneza brasileira e o coração vibrante do frevo pernambucano.',
      },
      {
        id: 'olinda',
        nome: 'Olinda',
        videoId: 'kffacxfA7G4',
        descricao: 'Patrimônio Histórico da Humanidade e capital do maracatu.',
      },
      {
        id: 'caruaru',
        nome: 'Caruaru',
        videoId: '9bZkp7q19f0',
        descricao: 'Capital do Forró e da arte popular nordestina.',
      },
    ],
  },
  {
    id: 'ceara',
    nome: 'Ceará',
    sigla: 'CE',
    regiao: 'Nordeste',
    municipios: [
      {
        id: 'fortaleza',
        nome: 'Fortaleza',
        videoId: 'YqeW9_5kURI',
        descricao: 'Praias, literatura de cordel e a alma do Ceará cultural.',
      },
      {
        id: 'juazeiro-do-norte',
        nome: 'Juazeiro do Norte',
        videoId: 'uelHwf8o7_U',
        descricao: 'Devoção, artesanato e cultura popular no Cariri.',
      },
      {
        id: 'sobral',
        nome: 'Sobral',
        videoId: 'rYEDA3JcQqw',
        descricao: 'Arte, religião e história no norte cearense.',
      },
    ],
  },
  {
    id: 'maranhao',
    nome: 'Maranhão',
    sigla: 'MA',
    regiao: 'Nordeste',
    municipios: [
      {
        id: 'sao-luis',
        nome: 'São Luís',
        videoId: 'kffacxfA7G4',
        descricao: 'Única capital brasileira fundada por franceses — terra do Bumba-meu-boi.',
      },
      {
        id: 'barreirinhas',
        nome: 'Barreirinhas',
        videoId: '9bZkp7q19f0',
        descricao: 'Porta de entrada dos Lençóis Maranhenses e da cultura local.',
      },
    ],
  },

  // ── NORTE ──────────────────────────────────────────────────────────────────
  {
    id: 'amazonas',
    nome: 'Amazonas',
    sigla: 'AM',
    regiao: 'Norte',
    municipios: [
      {
        id: 'manaus',
        nome: 'Manaus',
        videoId: 'YqeW9_5kURI',
        descricao: 'Coração da Amazônia: ópera, Festival de Parintins e cultura ribeirinha.',
      },
      {
        id: 'parintins',
        nome: 'Parintins',
        videoId: 'uelHwf8o7_U',
        descricao: 'Terra do Boi-Bumbá — o maior festival folclórico do Brasil.',
      },
      {
        id: 'tefe',
        nome: 'Tefé',
        videoId: 'rYEDA3JcQqw',
        descricao: 'Cultura indígena e tradições amazônicas preservadas.',
      },
    ],
  },
  {
    id: 'para',
    nome: 'Pará',
    sigla: 'PA',
    regiao: 'Norte',
    municipios: [
      {
        id: 'belem',
        nome: 'Belém',
        videoId: 'kffacxfA7G4',
        descricao: 'Cidade do Círio de Nazaré e da gastronomia paraense incomparável.',
      },
      {
        id: 'santarem',
        nome: 'Santarém',
        videoId: '9bZkp7q19f0',
        descricao: 'Encontro das águas e diversidade cultural do Tapajós.',
      },
    ],
  },

  // ── CENTRO-OESTE ───────────────────────────────────────────────────────────
  {
    id: 'goias',
    nome: 'Goiás',
    sigla: 'GO',
    regiao: 'Centro-Oeste',
    municipios: [
      {
        id: 'goiania',
        nome: 'Goiânia',
        videoId: 'YqeW9_5kURI',
        descricao: 'Capital do sertanejo universitário e do grafite brasileiro.',
      },
      {
        id: 'cidade-de-goias',
        nome: 'Cidade de Goiás',
        videoId: 'uelHwf8o7_U',
        descricao: 'Patrimônio da Humanidade: história e tradição colonial viva.',
      },
    ],
  },
  {
    id: 'mato-grosso-do-sul',
    nome: 'Mato Grosso do Sul',
    sigla: 'MS',
    regiao: 'Centro-Oeste',
    municipios: [
      {
        id: 'campo-grande',
        nome: 'Campo Grande',
        videoId: 'rYEDA3JcQqw',
        descricao: 'Morena e multicultural: gastronomia e arte pantaneira.',
      },
      {
        id: 'bonito',
        nome: 'Bonito',
        videoId: 'kffacxfA7G4',
        descricao: 'Ecoturismo e cultura local na Serra da Bodoquena.',
      },
    ],
  },

  // ── SUL ────────────────────────────────────────────────────────────────────
  {
    id: 'rio-grande-do-sul',
    nome: 'Rio Grande do Sul',
    sigla: 'RS',
    regiao: 'Sul',
    municipios: [
      {
        id: 'porto-alegre',
        nome: 'Porto Alegre',
        videoId: '9bZkp7q19f0',
        descricao: 'A capital gaúcha e sua vibrante cena cultural e literária.',
      },
      {
        id: 'caxias-do-sul',
        nome: 'Caxias do Sul',
        videoId: 'YqeW9_5kURI',
        descricao: 'Terra da uva e da forte herança italiana no sul do Brasil.',
      },
      {
        id: 'gramado',
        nome: 'Gramado',
        videoId: 'uelHwf8o7_U',
        descricao: 'Cinema, Natal Luz e a encantadora cultura serrana gaúcha.',
      },
    ],
  },
  {
    id: 'santa-catarina',
    nome: 'Santa Catarina',
    sigla: 'SC',
    regiao: 'Sul',
    municipios: [
      {
        id: 'florianopolis',
        nome: 'Florianópolis',
        videoId: 'rYEDA3JcQqw',
        descricao: 'A Ilha da Magia e suas manifestações culturais açorianas.',
      },
      {
        id: 'blumenau',
        nome: 'Blumenau',
        videoId: 'kffacxfA7G4',
        descricao: 'Oktoberfest brasileira e a rica herança germânica catarinense.',
      },
    ],
  },
  {
    id: 'parana',
    nome: 'Paraná',
    sigla: 'PR',
    regiao: 'Sul',
    municipios: [
      {
        id: 'curitiba',
        nome: 'Curitiba',
        videoId: '9bZkp7q19f0',
        descricao: 'Capital ecológica com cena cultural e teatral de referência nacional.',
      },
      {
        id: 'londrina',
        nome: 'Londrina',
        videoId: 'YqeW9_5kURI',
        descricao: 'Capital do Norte Pioneiro e polo cultural do interior paranaense.',
      },
    ],
  },
];

// ── Helpers ──────────────────────────────────────────────────────────────────

export function getEstado(id: string): Estado | undefined {
  return estados.find((e) => e.id === id);
}

export function getMunicipio(
  estadoId: string,
  municipioId: string,
): Municipio | undefined {
  return getEstado(estadoId)?.municipios.find((m) => m.id === municipioId);
}

export const regiaoGradients: Record<Regiao, string> = {
  Norte:         'from-emerald-900/40',
  Nordeste:      'from-amber-900/40',
  'Centro-Oeste': 'from-lime-900/40',
  Sudeste:       'from-sky-900/40',
  Sul:           'from-violet-900/40',
};

export const regiaoLabel: Record<Regiao, string> = {
  Norte:         '🌿 Norte',
  Nordeste:      '☀️ Nordeste',
  'Centro-Oeste': '🌾 Centro-Oeste',
  Sudeste:       '🏙️ Sudeste',
  Sul:           '❄️ Sul',
};
