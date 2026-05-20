export type Regiao = 'Norte' | 'Nordeste' | 'Centro-Oeste' | 'Sudeste' | 'Sul';

export interface Banda {
  id: string;
  nome: string;
  genero: string;
  votos: number;
  municipio: string;
}

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

export const BANDAS_MOCK: Record<string, Banda[]> = {
  'sao-paulo': [
    { id: 'b1', nome: 'Sambas do Brás', genero: 'Samba', votos: 1243, municipio: 'São Paulo' },
    { id: 'b2', nome: 'Jazz Paulistano', genero: 'Jazz', votos: 987, municipio: 'São Paulo' },
  ],
  'campinas': [
    { id: 'b3', nome: 'Orquestra do Interior', genero: 'MPB', votos: 756, municipio: 'Campinas' },
    { id: 'b4', nome: 'Punk de Campinas', genero: 'Punk', votos: 432, municipio: 'Campinas' },
  ],
  'santos': [
    { id: 'b5', nome: 'Blues do Litoral', genero: 'Blues', votos: 621, municipio: 'Santos' },
    { id: 'b6', nome: 'Reggae Porto', genero: 'Reggae', votos: 899, municipio: 'Santos' },
  ],
  'ribeirao-preto': [
    { id: 'b7', nome: 'Sertanejo Raiz', genero: 'Sertanejo', votos: 1102, municipio: 'Ribeirão Preto' },
  ],
  'rio-de-janeiro-capital': [
    { id: 'b8',  nome: 'Pagode Carioca',  genero: 'Pagode',    votos: 2341, municipio: 'Rio de Janeiro' },
    { id: 'b9',  nome: 'Bossa Nova Rio',  genero: 'Bossa Nova', votos: 1876, municipio: 'Rio de Janeiro' },
    { id: 'b10', nome: 'Funk da Pedra',   genero: 'Funk',       votos: 3210, municipio: 'Rio de Janeiro' },
  ],
  'niteroi':      [{ id: 'b11', nome: 'Rock de Niterói',   genero: 'Rock',     votos: 543,  municipio: 'Niterói' }],
  'petropolis':   [{ id: 'b12', nome: 'Imperial Classic',  genero: 'Clássica', votos: 334,  municipio: 'Petrópolis' }],
  'angra-dos-reis':[{ id: 'b13', nome: 'Axé das Ilhas',   genero: 'Axé',      votos: 788,  municipio: 'Angra dos Reis' }],
  'belo-horizonte':[
    { id: 'b14', nome: 'Clube da Esquina Revival', genero: 'MPB',   votos: 1543, municipio: 'Belo Horizonte' },
    { id: 'b15', nome: 'Metal Mineiro',            genero: 'Metal', votos: 876,  municipio: 'Belo Horizonte' },
  ],
  'manaus': [
    { id: 'b16', nome: 'Carimbó Amazônico',    genero: 'Carimbó',    votos: 921,  municipio: 'Manaus' },
    { id: 'b17', nome: 'Tecnobrega da Selva',  genero: 'Tecnobrega', votos: 1204, municipio: 'Manaus' },
  ],
  'parintins':  [{ id: 'b18', nome: 'Toada do Bumbá',          genero: 'Toada',      votos: 2100, municipio: 'Parintins' }],
  'goiania':    [{ id: 'b19', nome: 'Sertanejo Universitário GO', genero: 'Sertanejo', votos: 1677, municipio: 'Goiânia' }],
  'curitiba': [
    { id: 'b20', nome: 'Indie Curitibano', genero: 'Indie', votos: 765, municipio: 'Curitiba' },
    { id: 'b21', nome: 'Jazz Sul',         genero: 'Jazz',  votos: 543, municipio: 'Curitiba' },
  ],
  'porto-alegre': [
    { id: 'b22', nome: 'Gaúcho Rock', genero: 'Rock',      votos: 987,  municipio: 'Porto Alegre' },
    { id: 'b23', nome: 'Tchê Music',  genero: 'Gauchesca', votos: 1122, municipio: 'Porto Alegre' },
  ],
  'florianopolis': [{ id: 'b24', nome: 'Açoriana Folk', genero: 'Folk', votos: 456, municipio: 'Florianópolis' }],
  'belem': [
    { id: 'b25', nome: 'Carimbó Paraense', genero: 'Carimbó',    votos: 1890, municipio: 'Belém' },
    { id: 'b26', nome: 'Tecnobrega PA',    genero: 'Tecnobrega', votos: 2340, municipio: 'Belém' },
  ],
  'recife': [
    { id: 'b27', nome: 'Frevo Moderno',    genero: 'Frevo',    votos: 1765, municipio: 'Recife' },
    { id: 'b28', nome: 'Maracatu Elétrico',genero: 'Maracatu', votos: 2100, municipio: 'Recife' },
  ],
  'salvador': [
    { id: 'b29', nome: 'Axé da Bahia', genero: 'Axé',         votos: 3450, municipio: 'Salvador' },
    { id: 'b30', nome: 'Samba Reggae', genero: 'Samba Reggae', votos: 2780, municipio: 'Salvador' },
  ],

  // ── Novos municípios ──────────────────────────────────────────────────────

  'tefe': [
    { id: 'b31', nome: 'Miriti do Rio Negro',   genero: 'Música Indígena', votos: 487,  municipio: 'Tefé' },
    { id: 'b32', nome: 'Ribeirinho Sons',        genero: 'Folk Amazônico',  votos: 342,  municipio: 'Tefé' },
  ],

  'santarem': [
    { id: 'b33', nome: 'Tapajós Groove',         genero: 'MPB',             votos: 1123, municipio: 'Santarém' },
    { id: 'b34', nome: 'Carimbó do Encontro',    genero: 'Carimbó',         votos: 876,  municipio: 'Santarém' },
    { id: 'b35', nome: 'Siriá Band',             genero: 'Siriá',           votos: 654,  municipio: 'Santarém' },
  ],

  'porto-seguro': [
    { id: 'b36', nome: 'Axé Pataxó',            genero: 'Axé',             votos: 1450, municipio: 'Porto Seguro' },
    { id: 'b37', nome: 'Forro da Descoberta',    genero: 'Forró',           votos: 988,  municipio: 'Porto Seguro' },
  ],

  'olinda': [
    { id: 'b38', nome: 'Maracatu Nação Olinda',  genero: 'Maracatu',        votos: 2234, municipio: 'Olinda' },
    { id: 'b39', nome: 'Frevo das Ladeiras',     genero: 'Frevo',           votos: 1987, municipio: 'Olinda' },
    { id: 'b40', nome: 'Ciranda Pernambucana',   genero: 'Ciranda',         votos: 1345, municipio: 'Olinda' },
  ],

  'fortaleza': [
    { id: 'b41', nome: 'Forró Pé de Serra CE',   genero: 'Forró',           votos: 2788, municipio: 'Fortaleza' },
    { id: 'b42', nome: 'Banda da Beira Mar',      genero: 'Reggae',          votos: 1543, municipio: 'Fortaleza' },
    { id: 'b43', nome: 'Xote Cearense',           genero: 'Xote',            votos: 987,  municipio: 'Fortaleza' },
  ],

  'sao-luis': [
    { id: 'b44', nome: 'Boi de Pindaré',          genero: 'Bumba-meu-boi',   votos: 3102, municipio: 'São Luís' },
    { id: 'b45', nome: 'Tambor de Crioula MA',    genero: 'Tambor de Crioula', votos: 2456, municipio: 'São Luís' },
    { id: 'b46', nome: 'Reggae do Nordeste',       genero: 'Reggae',          votos: 1876, municipio: 'São Luís' },
  ],

  'barreirinhas': [
    { id: 'b47', nome: 'Lençóis Folk',            genero: 'Folk',            votos: 678,  municipio: 'Barreirinhas' },
    { id: 'b48', nome: 'Forró da Duna',            genero: 'Forró',           votos: 543,  municipio: 'Barreirinhas' },
  ],

  'cidade-de-goias': [
    { id: 'b49', nome: 'Catira Goiana',            genero: 'Catira',          votos: 765,  municipio: 'Cidade de Goiás' },
    { id: 'b50', nome: 'Viola Sertaneja GO',       genero: 'Sertanejo Raiz',  votos: 987,  municipio: 'Cidade de Goiás' },
  ],

  'campo-grande': [
    { id: 'b51', nome: 'Chamamé Pantaneiro',       genero: 'Chamamé',         votos: 1234, municipio: 'Campo Grande' },
    { id: 'b52', nome: 'Guarani Blues',            genero: 'Blues',           votos: 876,  municipio: 'Campo Grande' },
    { id: 'b53', nome: 'Cururu do Pantanal',       genero: 'Cururu',          votos: 654,  municipio: 'Campo Grande' },
  ],

  'bonito': [
    { id: 'b54', nome: 'Seresta das Águas',        genero: 'Seresta',         votos: 432,  municipio: 'Bonito' },
    { id: 'b55', nome: 'Eco Sons Pantaneiros',     genero: 'Folk',            votos: 321,  municipio: 'Bonito' },
  ],

  'ouro-preto': [
    { id: 'b56', nome: 'Orquestra Barroca MG',    genero: 'Música Barroca',  votos: 876,  municipio: 'Ouro Preto' },
    { id: 'b57', nome: 'Seresta Imperial',          genero: 'Seresta',         votos: 654,  municipio: 'Ouro Preto' },
    { id: 'b58', nome: 'Rock das Minas',            genero: 'Rock',            votos: 543,  municipio: 'Ouro Preto' },
  ],

  'vitoria': [
    { id: 'b59', nome: 'Fado Capixaba',            genero: 'MPB',             votos: 765,  municipio: 'Vitória' },
    { id: 'b60', nome: 'Bandinha da Ilha',          genero: 'Pop',             votos: 543,  municipio: 'Vitória' },
    { id: 'b61', nome: 'Samba do Cais',            genero: 'Samba',           votos: 987,  municipio: 'Vitória' },
  ],

  'caxias-do-sul': [
    { id: 'b62', nome: 'Tarantella Gaúcha',        genero: 'Tarantella',      votos: 1102, municipio: 'Caxias do Sul' },
    { id: 'b63', nome: 'Cantina Folk Sul',          genero: 'Folk Italiano',   votos: 876,  municipio: 'Caxias do Sul' },
    { id: 'b64', nome: 'Rock da Serra Gaúcha',      genero: 'Rock',            votos: 654,  municipio: 'Caxias do Sul' },
  ],

  'gramado': [
    { id: 'b65', nome: 'Tiroleses da Serra',        genero: 'Música Alemã',    votos: 987,  municipio: 'Gramado' },
    { id: 'b66', nome: 'Jazz das Hortênsias',       genero: 'Jazz',            votos: 765,  municipio: 'Gramado' },
  ],

  'blumenau': [
    { id: 'b67', nome: 'Banda da Oktoberfest',      genero: 'Música Alemã',    votos: 2341, municipio: 'Blumenau' },
    { id: 'b68', nome: 'Vale Europeu Band',          genero: 'Folk Alemão',     votos: 1654, municipio: 'Blumenau' },
    { id: 'b69', nome: 'Rock Teuto-Brasileiro',      genero: 'Rock',            votos: 987,  municipio: 'Blumenau' },
  ],

  'londrina': [
    { id: 'b70', nome: 'Sertanejo do Norte PR',     genero: 'Sertanejo',       votos: 1543, municipio: 'Londrina' },
    { id: 'b71', nome: 'Jazz Londrino',              genero: 'Jazz',            votos: 876,  municipio: 'Londrina' },
    { id: 'b72', nome: 'Indie Londrina',             genero: 'Indie',           votos: 654,  municipio: 'Londrina' },
  ],
};

export const estados: Estado[] = [
  { id: 'sao-paulo', nome: 'São Paulo', sigla: 'SP', regiao: 'Sudeste', municipios: [
    { id: 'sao-paulo',      nome: 'São Paulo',      videoId: 'YqeW9_5kURI', descricao: 'A maior metrópole do Brasil exibe sua diversidade cultural única.' },
    { id: 'campinas',       nome: 'Campinas',       videoId: 'uelHwf8o7_U', descricao: 'Polo de inovação e rica tradição cultural no interior paulista.' },
    { id: 'santos',         nome: 'Santos',         videoId: 'rYEDA3JcQqw', descricao: 'A cidade portuária celebra sua história e patrimônio litorâneo.' },
    { id: 'ribeirao-preto', nome: 'Ribeirão Preto', videoId: 'kffacxfA7G4', descricao: 'Capital do agronegócio e da vibrante cultura caipira paulista.' },
  ]},
  { id: 'rio-de-janeiro', nome: 'Rio de Janeiro', sigla: 'RJ', regiao: 'Sudeste', municipios: [
    { id: 'rio-de-janeiro-capital', nome: 'Rio de Janeiro', videoId: '9bZkp7q19f0', descricao: 'A Cidade Maravilhosa em toda a sua exuberância cultural.' },
    { id: 'niteroi',        nome: 'Niterói',        videoId: 'YqeW9_5kURI', descricao: 'Arte contemporânea e cultura nas margens da Baía de Guanabara.' },
    { id: 'petropolis',     nome: 'Petrópolis',     videoId: 'uelHwf8o7_U', descricao: 'A Cidade Imperial preserva sua história e tradição serrana.' },
    { id: 'angra-dos-reis', nome: 'Angra dos Reis', videoId: 'rYEDA3JcQqw', descricao: 'Paraíso natural onde cultura e beleza se encontram.' },
  ]},
  { id: 'minas-gerais', nome: 'Minas Gerais', sigla: 'MG', regiao: 'Sudeste', municipios: [
    { id: 'belo-horizonte', nome: 'Belo Horizonte', videoId: 'kffacxfA7G4', descricao: 'A capital mineira celebra sua gastronomia e arte contemporânea.' },
    { id: 'ouro-preto',     nome: 'Ouro Preto',     videoId: '9bZkp7q19f0', descricao: 'Patrimônio histórico e barroco brasileiro de riqueza incomparável.' },
  ]},
  { id: 'espirito-santo', nome: 'Espírito Santo', sigla: 'ES', regiao: 'Sudeste', municipios: [
    { id: 'vitoria', nome: 'Vitória', videoId: 'YqeW9_5kURI', descricao: 'Capital capixaba, ilha de história e cultura viva.' },
  ]},
  { id: 'bahia', nome: 'Bahia', sigla: 'BA', regiao: 'Nordeste', municipios: [
    { id: 'salvador',       nome: 'Salvador',       videoId: 'YqeW9_5kURI', descricao: 'Primeira capital do Brasil, berço da cultura afro-brasileira.' },
    { id: 'porto-seguro',   nome: 'Porto Seguro',   videoId: 'uelHwf8o7_U', descricao: 'Local do descobrimento, rica cultura histórica e natural.' },
  ]},
  { id: 'pernambuco', nome: 'Pernambuco', sigla: 'PE', regiao: 'Nordeste', municipios: [
    { id: 'recife',    nome: 'Recife',    videoId: '9bZkp7q19f0', descricao: 'Capital do frevo e do carnaval mais animado do Brasil.' },
    { id: 'olinda',    nome: 'Olinda',    videoId: 'kffacxfA7G4', descricao: 'Patrimônio da Humanidade: cidade histórica do frevo e maracatu.' },
  ]},
  { id: 'ceara', nome: 'Ceará', sigla: 'CE', regiao: 'Nordeste', municipios: [
    { id: 'fortaleza', nome: 'Fortaleza', videoId: 'YqeW9_5kURI', descricao: 'Sol, forró e a cultura vibrante do litoral cearense.' },
  ]},
  { id: 'maranhao', nome: 'Maranhão', sigla: 'MA', regiao: 'Nordeste', municipios: [
    { id: 'sao-luis',      nome: 'São Luís',      videoId: 'kffacxfA7G4', descricao: 'Única capital fundada por franceses — terra do Bumba-meu-boi.' },
    { id: 'barreirinhas',  nome: 'Barreirinhas',  videoId: '9bZkp7q19f0', descricao: 'Porta de entrada dos Lençóis Maranhenses e da cultura local.' },
  ]},
  { id: 'amazonas', nome: 'Amazonas', sigla: 'AM', regiao: 'Norte', municipios: [
    { id: 'manaus',    nome: 'Manaus',    videoId: 'YqeW9_5kURI', descricao: 'Coração da Amazônia: ópera, Festival de Parintins e cultura ribeirinha.' },
    { id: 'parintins', nome: 'Parintins', videoId: 'uelHwf8o7_U', descricao: 'Terra do Boi-Bumbá — o maior festival folclórico do Brasil.' },
    { id: 'tefe',      nome: 'Tefé',      videoId: 'rYEDA3JcQqw', descricao: 'Cultura indígena e tradições amazônicas preservadas.' },
  ]},
  { id: 'para', nome: 'Pará', sigla: 'PA', regiao: 'Norte', municipios: [
    { id: 'belem',    nome: 'Belém',    videoId: 'kffacxfA7G4', descricao: 'Cidade do Círio de Nazaré e da gastronomia paraense incomparável.' },
    { id: 'santarem', nome: 'Santarém', videoId: '9bZkp7q19f0', descricao: 'Encontro das águas e diversidade cultural do Tapajós.' },
  ]},
  { id: 'goias', nome: 'Goiás', sigla: 'GO', regiao: 'Centro-Oeste', municipios: [
    { id: 'goiania',        nome: 'Goiânia',        videoId: 'YqeW9_5kURI', descricao: 'Capital do sertanejo universitário e do grafite brasileiro.' },
    { id: 'cidade-de-goias', nome: 'Cidade de Goiás', videoId: 'uelHwf8o7_U', descricao: 'Patrimônio da Humanidade: história e tradição colonial viva.' },
  ]},
  { id: 'mato-grosso-do-sul', nome: 'Mato Grosso do Sul', sigla: 'MS', regiao: 'Centro-Oeste', municipios: [
    { id: 'campo-grande', nome: 'Campo Grande', videoId: 'rYEDA3JcQqw', descricao: 'Morena e multicultural: gastronomia e arte pantaneira.' },
    { id: 'bonito',       nome: 'Bonito',       videoId: 'kffacxfA7G4', descricao: 'Ecoturismo e cultura local na Serra da Bodoquena.' },
  ]},
  { id: 'rio-grande-do-sul', nome: 'Rio Grande do Sul', sigla: 'RS', regiao: 'Sul', municipios: [
    { id: 'porto-alegre',  nome: 'Porto Alegre',  videoId: '9bZkp7q19f0', descricao: 'A capital gaúcha e sua vibrante cena cultural e literária.' },
    { id: 'caxias-do-sul', nome: 'Caxias do Sul', videoId: 'YqeW9_5kURI', descricao: 'Terra da uva e da forte herança italiana no sul do Brasil.' },
    { id: 'gramado',       nome: 'Gramado',       videoId: 'uelHwf8o7_U', descricao: 'Cinema, Natal Luz e a encantadora cultura serrana gaúcha.' },
  ]},
  { id: 'santa-catarina', nome: 'Santa Catarina', sigla: 'SC', regiao: 'Sul', municipios: [
    { id: 'florianopolis', nome: 'Florianópolis', videoId: 'rYEDA3JcQqw', descricao: 'A Ilha da Magia e suas manifestações culturais açorianas.' },
    { id: 'blumenau',      nome: 'Blumenau',      videoId: 'kffacxfA7G4', descricao: 'Oktoberfest brasileira e a rica herança germânica catarinense.' },
  ]},
  { id: 'parana', nome: 'Paraná', sigla: 'PR', regiao: 'Sul', municipios: [
    { id: 'curitiba', nome: 'Curitiba', videoId: '9bZkp7q19f0', descricao: 'Capital ecológica com cena cultural e teatral de referência nacional.' },
    { id: 'londrina', nome: 'Londrina', videoId: 'YqeW9_5kURI', descricao: 'Capital do Norte Pioneiro e polo cultural do interior paranaense.' },
  ]},
];

export function getEstado(id: string): Estado | undefined {
  return estados.find((e) => e.id === id);
}

export function getMunicipio(estadoId: string, municipioId: string): Municipio | undefined {
  return getEstado(estadoId)?.municipios.find((m) => m.id === municipioId);
}

export const regiaoGradients: Record<Regiao, string> = {
  Norte:          'from-emerald-900/40',
  Nordeste:       'from-amber-900/40',
  'Centro-Oeste': 'from-lime-900/40',
  Sudeste:        'from-sky-900/40',
  Sul:            'from-violet-900/40',
};

export const regiaoLabel: Record<Regiao, string> = {
  Norte:          'Norte',
  Nordeste:       'Nordeste',
  'Centro-Oeste': 'Centro-Oeste',
  Sudeste:        'Sudeste',
  Sul:            'Sul',
};
