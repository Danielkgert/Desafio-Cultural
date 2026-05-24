export type Regiao = 'Centro-Oeste' | 'Nordeste' | 'Norte' | 'Sudeste' | 'Sul';

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
  videoId?: string;      // undefined = município sem acesso (não aderiu)
  descricao?: string;
}

export interface Estado {
  id: string;
  nome: string;
  sigla: string;
  regiao: Regiao;
  municipios: Municipio[];
}

// ─── Bandas por município (ordenadas alfabeticamente por gênero, depois por nome) ──
export const BANDAS_MOCK: Record<string, Banda[]> = {
  // ── Amazonas ──
  'manaus': [
    { id: 'b16a', nome: 'Carimbó Amazônico',   genero: 'Carimbó',         votos: 921,  municipio: 'Manaus' },
    { id: 'b16b', nome: 'Ritmo do Rio Negro',   genero: 'Carimbó',         votos: 510,  municipio: 'Manaus' },
    { id: 'b17a', nome: 'Tecnobrega da Selva',  genero: 'Tecnobrega',      votos: 1204, municipio: 'Manaus' },
    { id: 'b17b', nome: 'Eletro Amazônia',      genero: 'Tecnobrega',      votos: 788,  municipio: 'Manaus' },
  ],
  'parintins': [
    { id: 'b18a', nome: 'Toada do Bumbá',       genero: 'Toada',           votos: 2100, municipio: 'Parintins' },
    { id: 'b18b', nome: 'Caprichoso Sons',       genero: 'Toada',           votos: 1876, municipio: 'Parintins' },
  ],
  'tefe': [
    { id: 'b31a', nome: 'Miriti do Rio Negro',  genero: 'Folk Amazônico',  votos: 487,  municipio: 'Tefé' },
    { id: 'b31b', nome: 'Ribeirinho Sons',       genero: 'Folk Amazônico',  votos: 342,  municipio: 'Tefé' },
    { id: 'b31c', nome: 'Voz da Floresta',       genero: 'Música Indígena', votos: 290,  municipio: 'Tefé' },
  ],

  // ── Bahia ──
  'porto-seguro': [
    { id: 'b36a', nome: 'Axé Pataxó',           genero: 'Axé',             votos: 1450, municipio: 'Porto Seguro' },
    { id: 'b36b', nome: 'Batuque da Costa',      genero: 'Axé',             votos: 980,  municipio: 'Porto Seguro' },
    { id: 'b37a', nome: 'Forro da Descoberta',   genero: 'Forró',           votos: 988,  municipio: 'Porto Seguro' },
  ],
  'salvador': [
    { id: 'b29a', nome: 'Axé da Bahia',          genero: 'Axé',             votos: 3450, municipio: 'Salvador' },
    { id: 'b29b', nome: 'Olodum Revival',         genero: 'Axé',             votos: 2100, municipio: 'Salvador' },
    { id: 'b30a', nome: 'Samba Reggae Bahia',     genero: 'Samba Reggae',    votos: 2780, municipio: 'Salvador' },
    { id: 'b30b', nome: 'Ilê Aiyê Sons',          genero: 'Samba Reggae',    votos: 1987, municipio: 'Salvador' },
  ],

  // ── Ceará ──
  'fortaleza': [
    { id: 'b41a', nome: 'Forró Pé de Serra CE',  genero: 'Forró',           votos: 2788, municipio: 'Fortaleza' },
    { id: 'b41b', nome: 'Zabumba Cearense',       genero: 'Forró',           votos: 1654, municipio: 'Fortaleza' },
    { id: 'b42a', nome: 'Banda da Beira Mar',     genero: 'Reggae',          votos: 1543, municipio: 'Fortaleza' },
    { id: 'b43a', nome: 'Xote Cearense',          genero: 'Xote',            votos: 987,  municipio: 'Fortaleza' },
    { id: 'b43b', nome: 'Sanfona do Sertão',      genero: 'Xote',            votos: 765,  municipio: 'Fortaleza' },
  ],

  // ── Espírito Santo ──
  'vitoria': [
    { id: 'b59a', nome: 'Fado Capixaba',          genero: 'MPB',             votos: 765,  municipio: 'Vitória' },
    { id: 'b59b', nome: 'Viola do Atlântico',     genero: 'MPB',             votos: 543,  municipio: 'Vitória' },
    { id: 'b60a', nome: 'Bandinha da Ilha',        genero: 'Pop',             votos: 543,  municipio: 'Vitória' },
    { id: 'b61a', nome: 'Samba do Cais',           genero: 'Samba',           votos: 987,  municipio: 'Vitória' },
  ],

  // ── Goiás ──
  'cidade-de-goias': [
    { id: 'b49a', nome: 'Catira Goiana',           genero: 'Catira',          votos: 765,  municipio: 'Cidade de Goiás' },
    { id: 'b49b', nome: 'Dança das Espadas',       genero: 'Catira',          votos: 543,  municipio: 'Cidade de Goiás' },
    { id: 'b50a', nome: 'Viola Sertaneja GO',      genero: 'Sertanejo Raiz',  votos: 987,  municipio: 'Cidade de Goiás' },
  ],
  'goiania': [
    { id: 'b19a', nome: 'Sertanejo Universitário GO', genero: 'Sertanejo',    votos: 1677, municipio: 'Goiânia' },
    { id: 'b19b', nome: 'Rodeio Band',                genero: 'Sertanejo',    votos: 1234, municipio: 'Goiânia' },
    { id: 'b19c', nome: 'Grafite & Blues GO',          genero: 'Blues',        votos: 876,  municipio: 'Goiânia' },
  ],

  // ── Maranhão ──
  'barreirinhas': [
    { id: 'b47a', nome: 'Forró da Duna',           genero: 'Forró',           votos: 543,  municipio: 'Barreirinhas' },
    { id: 'b47b', nome: 'Batuque dos Lençóis',     genero: 'Forró',           votos: 432,  municipio: 'Barreirinhas' },
    { id: 'b48a', nome: 'Lençóis Folk',             genero: 'Folk',            votos: 678,  municipio: 'Barreirinhas' },
  ],
  'sao-luis': [
    { id: 'b44a', nome: 'Boi de Pindaré',           genero: 'Bumba-meu-boi',   votos: 3102, municipio: 'São Luís' },
    { id: 'b44b', nome: 'Boi de Maracanã',          genero: 'Bumba-meu-boi',   votos: 2654, municipio: 'São Luís' },
    { id: 'b46a', nome: 'Reggae do Nordeste',        genero: 'Reggae',          votos: 1876, municipio: 'São Luís' },
    { id: 'b46b', nome: 'Radiola Maranhense',        genero: 'Reggae',          votos: 1432, municipio: 'São Luís' },
    { id: 'b45a', nome: 'Tambor de Crioula MA',     genero: 'Tambor de Crioula', votos: 2456, municipio: 'São Luís' },
  ],

  // ── Mato Grosso do Sul ──
  'bonito': [
    { id: 'b54a', nome: 'Eco Sons Pantaneiros',    genero: 'Folk',            votos: 321,  municipio: 'Bonito' },
    { id: 'b55a', nome: 'Seresta das Águas',        genero: 'Seresta',         votos: 432,  municipio: 'Bonito' },
    { id: 'b55b', nome: 'Viola do Pantanal',        genero: 'Seresta',         votos: 310,  municipio: 'Bonito' },
  ],
  'campo-grande': [
    { id: 'b52a', nome: 'Guarani Blues',            genero: 'Blues',           votos: 876,  municipio: 'Campo Grande' },
    { id: 'b51a', nome: 'Chamamé Pantaneiro',       genero: 'Chamamé',         votos: 1234, municipio: 'Campo Grande' },
    { id: 'b51b', nome: 'Ritmo do Cerrado',         genero: 'Chamamé',         votos: 897,  municipio: 'Campo Grande' },
    { id: 'b53a', nome: 'Cururu do Pantanal',       genero: 'Cururu',          votos: 654,  municipio: 'Campo Grande' },
  ],

  // ── Minas Gerais ──
  'belo-horizonte': [
    { id: 'b14a', nome: 'Clube da Esquina Revival', genero: 'MPB',             votos: 1543, municipio: 'Belo Horizonte' },
    { id: 'b14b', nome: 'Voz de Minas',             genero: 'MPB',             votos: 987,  municipio: 'Belo Horizonte' },
    { id: 'b15a', nome: 'Metal Mineiro',            genero: 'Metal',           votos: 876,  municipio: 'Belo Horizonte' },
    { id: 'b15b', nome: 'BH Thrash',                genero: 'Metal',           votos: 654,  municipio: 'Belo Horizonte' },
  ],
  'ouro-preto': [
    { id: 'b56a', nome: 'Orquestra Barroca MG',    genero: 'Música Barroca',  votos: 876,  municipio: 'Ouro Preto' },
    { id: 'b56b', nome: 'Coral Imperial',           genero: 'Música Barroca',  votos: 654,  municipio: 'Ouro Preto' },
    { id: 'b58a', nome: 'Rock das Minas',           genero: 'Rock',            votos: 543,  municipio: 'Ouro Preto' },
    { id: 'b57a', nome: 'Seresta Imperial',         genero: 'Seresta',         votos: 432,  municipio: 'Ouro Preto' },
  ],

  // ── Pará ──
  'belem': [
    { id: 'b25a', nome: 'Carimbó Paraense',         genero: 'Carimbó',         votos: 1890, municipio: 'Belém' },
    { id: 'b25b', nome: 'Lundum do Grão-Pará',      genero: 'Carimbó',         votos: 1234, municipio: 'Belém' },
    { id: 'b26a', nome: 'Tecnobrega PA',             genero: 'Tecnobrega',      votos: 2340, municipio: 'Belém' },
    { id: 'b26b', nome: 'Brega Melody Belém',        genero: 'Tecnobrega',      votos: 1876, municipio: 'Belém' },
  ],
  'santarem': [
    { id: 'b34a', nome: 'Carimbó do Encontro',      genero: 'Carimbó',         votos: 876,  municipio: 'Santarém' },
    { id: 'b33a', nome: 'Tapajós Groove',            genero: 'MPB',             votos: 1123, municipio: 'Santarém' },
    { id: 'b33b', nome: 'Beira Rio MPB',             genero: 'MPB',             votos: 765,  municipio: 'Santarém' },
    { id: 'b35a', nome: 'Siriá Band',                genero: 'Siriá',           votos: 654,  municipio: 'Santarém' },
  ],

  // ── Paraná ──
  'curitiba': [
    { id: 'b20a', nome: 'Indie Curitibano',         genero: 'Indie',           votos: 765,  municipio: 'Curitiba' },
    { id: 'b20b', nome: 'Banda do Pinhão',          genero: 'Indie',           votos: 543,  municipio: 'Curitiba' },
    { id: 'b21a', nome: 'Jazz Sul',                  genero: 'Jazz',            votos: 543,  municipio: 'Curitiba' },
    { id: 'b21b', nome: 'Curitiba Big Band',         genero: 'Jazz',            votos: 432,  municipio: 'Curitiba' },
  ],
  'londrina': [
    { id: 'b70a', nome: 'Indie Londrina',            genero: 'Indie',           votos: 654,  municipio: 'Londrina' },
    { id: 'b71a', nome: 'Jazz Londrino',             genero: 'Jazz',            votos: 876,  municipio: 'Londrina' },
    { id: 'b70b', nome: 'Sertanejo do Norte PR',     genero: 'Sertanejo',       votos: 1543, municipio: 'Londrina' },
    { id: 'b70c', nome: 'Viola Caipira PR',          genero: 'Sertanejo',       votos: 987,  municipio: 'Londrina' },
  ],

  // ── Pernambuco ──
  'olinda': [
    { id: 'b40a', nome: 'Ciranda Pernambucana',     genero: 'Ciranda',         votos: 1345, municipio: 'Olinda' },
    { id: 'b40b', nome: 'Ciranda das Meninas',      genero: 'Ciranda',         votos: 987,  municipio: 'Olinda' },
    { id: 'b39a', nome: 'Frevo das Ladeiras',        genero: 'Frevo',           votos: 1987, municipio: 'Olinda' },
    { id: 'b39b', nome: 'Vassourinhas Band',         genero: 'Frevo',           votos: 1543, municipio: 'Olinda' },
    { id: 'b38a', nome: 'Maracatu Nação Olinda',    genero: 'Maracatu',        votos: 2234, municipio: 'Olinda' },
    { id: 'b38b', nome: 'Leão Coroado Sons',        genero: 'Maracatu',        votos: 1765, municipio: 'Olinda' },
  ],
  'recife': [
    { id: 'b27a', nome: 'Frevo Moderno',             genero: 'Frevo',           votos: 1765, municipio: 'Recife' },
    { id: 'b27b', nome: 'Spok Frevo Band',           genero: 'Frevo',           votos: 1432, municipio: 'Recife' },
    { id: 'b28a', nome: 'Maracatu Elétrico',         genero: 'Maracatu',        votos: 2100, municipio: 'Recife' },
    { id: 'b28b', nome: 'Nação Pernambuco',          genero: 'Maracatu',        votos: 1654, municipio: 'Recife' },
  ],

  // ── Rio de Janeiro ──
  'angra-dos-reis': [
    { id: 'b13a', nome: 'Axé das Ilhas',            genero: 'Axé',             votos: 788,  municipio: 'Angra dos Reis' },
    { id: 'b13b', nome: 'Baile da Ilha Grande',     genero: 'Samba',           votos: 654,  municipio: 'Angra dos Reis' },
  ],
  'niteroi': [
    { id: 'b11a', nome: 'Rock de Niterói',          genero: 'Rock',            votos: 543,  municipio: 'Niterói' },
    { id: 'b11b', nome: 'Icaraí Blues',             genero: 'Blues',           votos: 432,  municipio: 'Niterói' },
  ],
  'petropolis': [
    { id: 'b12a', nome: 'Imperial Classic',          genero: 'Música Clássica', votos: 334,  municipio: 'Petrópolis' },
    { id: 'b12b', nome: 'Câmara de Petrópolis',     genero: 'Música Clássica', votos: 287,  municipio: 'Petrópolis' },
  ],
  'rio-de-janeiro-capital': [
    { id: 'b9a',  nome: 'Bossa Nova Rio',            genero: 'Bossa Nova',      votos: 1876, municipio: 'Rio de Janeiro' },
    { id: 'b9b',  nome: 'Tom & Vinicius Tribute',   genero: 'Bossa Nova',      votos: 1432, municipio: 'Rio de Janeiro' },
    { id: 'b10a', nome: 'Funk da Pedra',             genero: 'Funk',            votos: 3210, municipio: 'Rio de Janeiro' },
    { id: 'b10b', nome: 'Baile do Rio',              genero: 'Funk',            votos: 2654, municipio: 'Rio de Janeiro' },
    { id: 'b8a',  nome: 'Pagode Carioca',            genero: 'Pagode',          votos: 2341, municipio: 'Rio de Janeiro' },
    { id: 'b8b',  nome: 'Fundo de Quintal Revival', genero: 'Pagode',          votos: 1987, municipio: 'Rio de Janeiro' },
    { id: 'b8c',  nome: 'Samba da Central',         genero: 'Samba',           votos: 2100, municipio: 'Rio de Janeiro' },
  ],

  // ── Rio Grande do Sul ──
  'caxias-do-sul': [
    { id: 'b63a', nome: 'Cantina Folk Sul',          genero: 'Folk Italiano',   votos: 876,  municipio: 'Caxias do Sul' },
    { id: 'b63b', nome: 'Tarântula Serra',           genero: 'Folk Italiano',   votos: 654,  municipio: 'Caxias do Sul' },
    { id: 'b64a', nome: 'Rock da Serra Gaúcha',      genero: 'Rock',            votos: 654,  municipio: 'Caxias do Sul' },
    { id: 'b62a', nome: 'Tarantella Gaúcha',         genero: 'Tarantella',      votos: 1102, municipio: 'Caxias do Sul' },
    { id: 'b62b', nome: 'Acordeon Serrano',          genero: 'Tarantella',      votos: 876,  municipio: 'Caxias do Sul' },
  ],
  'gramado': [
    { id: 'b66a', nome: 'Jazz das Hortênsias',       genero: 'Jazz',            votos: 765,  municipio: 'Gramado' },
    { id: 'b65a', nome: 'Tiroleses da Serra',         genero: 'Música Alemã',    votos: 987,  municipio: 'Gramado' },
    { id: 'b65b', nome: 'Bergsteiger Band',           genero: 'Música Alemã',    votos: 765,  municipio: 'Gramado' },
  ],
  'porto-alegre': [
    { id: 'b23a', nome: 'Tchê Music',                genero: 'Gauchesca',       votos: 1122, municipio: 'Porto Alegre' },
    { id: 'b23b', nome: 'Galpão dos Pampas',         genero: 'Gauchesca',       votos: 876,  municipio: 'Porto Alegre' },
    { id: 'b22a', nome: 'Gaúcho Rock',               genero: 'Rock',            votos: 987,  municipio: 'Porto Alegre' },
    { id: 'b22b', nome: 'Guaíba Metal',              genero: 'Rock',            votos: 765,  municipio: 'Porto Alegre' },
  ],

  // ── Santa Catarina ──
  'blumenau': [
    { id: 'b67a', nome: 'Banda da Oktoberfest',      genero: 'Música Alemã',    votos: 2341, municipio: 'Blumenau' },
    { id: 'b67b', nome: 'Bergkapelle Blumenau',      genero: 'Música Alemã',    votos: 1876, municipio: 'Blumenau' },
    { id: 'b68a', nome: 'Vale Europeu Band',          genero: 'Folk Alemão',     votos: 1654, municipio: 'Blumenau' },
    { id: 'b69a', nome: 'Rock Teuto-Brasileiro',      genero: 'Rock',            votos: 987,  municipio: 'Blumenau' },
  ],
  'florianopolis': [
    { id: 'b24a', nome: 'Açoriana Folk',              genero: 'Folk',            votos: 456,  municipio: 'Florianópolis' },
    { id: 'b24b', nome: 'Ilha dos Açores Band',       genero: 'Folk',            votos: 321,  municipio: 'Florianópolis' },
    { id: 'b24c', nome: 'Surfin Floripa',             genero: 'Rock',            votos: 543,  municipio: 'Florianópolis' },
  ],

  // ── São Paulo ──
  'campinas': [
    { id: 'b3a',  nome: 'Jazz Campineiro',            genero: 'Jazz',            votos: 654,  municipio: 'Campinas' },
    { id: 'b3b',  nome: 'Orquestra do Interior',      genero: 'MPB',             votos: 756,  municipio: 'Campinas' },
    { id: 'b4a',  nome: 'Punk de Campinas',           genero: 'Punk',            votos: 432,  municipio: 'Campinas' },
  ],
  'ribeirao-preto': [
    { id: 'b7a',  nome: 'Sertanejo Raiz RP',          genero: 'Sertanejo',       votos: 1102, municipio: 'Ribeirão Preto' },
    { id: 'b7b',  nome: 'Viola Caipira SP',           genero: 'Sertanejo',       votos: 876,  municipio: 'Ribeirão Preto' },
  ],
  'santos': [
    { id: 'b5a',  nome: 'Blues do Litoral',           genero: 'Blues',           votos: 621,  municipio: 'Santos' },
    { id: 'b6a',  nome: 'Reggae Porto',               genero: 'Reggae',          votos: 899,  municipio: 'Santos' },
    { id: 'b6b',  nome: 'Ondas do Atlântico',         genero: 'Reggae',          votos: 654,  municipio: 'Santos' },
  ],
  'sao-paulo': [
    { id: 'b2a',  nome: 'Jazz Paulistano',            genero: 'Jazz',            votos: 987,  municipio: 'São Paulo' },
    { id: 'b2b',  nome: 'Quarteto do Anhangabaú',    genero: 'Jazz',            votos: 765,  municipio: 'São Paulo' },
    { id: 'b1a',  nome: 'Sambas do Brás',             genero: 'Samba',           votos: 1243, municipio: 'São Paulo' },
    { id: 'b1b',  nome: 'Vai-Vai Revival',            genero: 'Samba',           votos: 987,  municipio: 'São Paulo' },
  ],
};

// ─── Estados em ordem alfabética, municípios em ordem alfabética ──────────────
export const estados: Estado[] = [
  // ── Amazonas ──
  { id: 'amazonas', nome: 'Amazonas', sigla: 'AM', regiao: 'Norte', municipios: [
    { id: 'manaus',    nome: 'Manaus',    videoId: 'YqeW9_5kURI', descricao: 'Coração da Amazônia: ópera, Festival de Parintins e cultura ribeirinha.' },
    { id: 'parintins', nome: 'Parintins', videoId: 'uelHwf8o7_U', descricao: 'Terra do Boi-Bumbá — o maior festival folclórico do Brasil.' },
    { id: 'tefe',      nome: 'Tefé',      videoId: 'rYEDA3JcQqw', descricao: 'Cultura indígena e tradições amazônicas preservadas.' },
  ]},
  // ── Bahia ──
  { id: 'bahia', nome: 'Bahia', sigla: 'BA', regiao: 'Nordeste', municipios: [
    { id: 'porto-seguro', nome: 'Porto Seguro', videoId: 'uelHwf8o7_U', descricao: 'Local do descobrimento, rica cultura histórica e natural.' },
    { id: 'salvador',     nome: 'Salvador',     videoId: 'YqeW9_5kURI', descricao: 'Primeira capital do Brasil, berço da cultura afro-brasileira.' },
  ]},
  // ── Ceará ──
  { id: 'ceara', nome: 'Ceará', sigla: 'CE', regiao: 'Nordeste', municipios: [
    { id: 'fortaleza', nome: 'Fortaleza', videoId: 'YqeW9_5kURI', descricao: 'Sol, forró e a cultura vibrante do litoral cearense.' },
  ]},
  // ── Espírito Santo ──
  { id: 'espirito-santo', nome: 'Espírito Santo', sigla: 'ES', regiao: 'Sudeste', municipios: [
    { id: 'vitoria', nome: 'Vitória', videoId: 'YqeW9_5kURI', descricao: 'Capital capixaba, ilha de história e cultura viva.' },
  ]},
  // ── Goiás ──
  { id: 'goias', nome: 'Goiás', sigla: 'GO', regiao: 'Centro-Oeste', municipios: [
    { id: 'cidade-de-goias', nome: 'Cidade de Goiás', videoId: 'uelHwf8o7_U', descricao: 'Patrimônio da Humanidade: história e tradição colonial viva.' },
    { id: 'goiania',         nome: 'Goiânia',         videoId: 'YqeW9_5kURI', descricao: 'Capital do sertanejo universitário e do grafite brasileiro.' },
  ]},
  // ── Maranhão ──
  { id: 'maranhao', nome: 'Maranhão', sigla: 'MA', regiao: 'Nordeste', municipios: [
    { id: 'barreirinhas', nome: 'Barreirinhas', videoId: '9bZkp7q19f0', descricao: 'Porta de entrada dos Lençóis Maranhenses e da cultura local.' },
    { id: 'sao-luis',     nome: 'São Luís',     videoId: 'kffacxfA7G4', descricao: 'Única capital fundada por franceses — terra do Bumba-meu-boi.' },
  ]},
  // ── Mato Grosso do Sul ──
  { id: 'mato-grosso-do-sul', nome: 'Mato Grosso do Sul', sigla: 'MS', regiao: 'Centro-Oeste', municipios: [
    { id: 'bonito',       nome: 'Bonito',       videoId: 'kffacxfA7G4', descricao: 'Ecoturismo e cultura local na Serra da Bodoquena.' },
    { id: 'campo-grande', nome: 'Campo Grande', videoId: 'rYEDA3JcQqw', descricao: 'Morena e multicultural: gastronomia e arte pantaneira.' },
  ]},
  // ── Minas Gerais ──
  { id: 'minas-gerais', nome: 'Minas Gerais', sigla: 'MG', regiao: 'Sudeste', municipios: [
    { id: 'belo-horizonte', nome: 'Belo Horizonte', videoId: 'kffacxfA7G4', descricao: 'A capital mineira celebra sua gastronomia e arte contemporânea.' },
    { id: 'ouro-preto',     nome: 'Ouro Preto',     videoId: '9bZkp7q19f0', descricao: 'Patrimônio histórico e barroco brasileiro de riqueza incomparável.' },
  ]},
  // ── Pará ──
  { id: 'para', nome: 'Pará', sigla: 'PA', regiao: 'Norte', municipios: [
    { id: 'belem',    nome: 'Belém',    videoId: 'kffacxfA7G4', descricao: 'Cidade do Círio de Nazaré e da gastronomia paraense incomparável.' },
    { id: 'santarem', nome: 'Santarém', videoId: '9bZkp7q19f0', descricao: 'Encontro das águas e diversidade cultural do Tapajós.' },
  ]},
  // ── Paraná ──
  { id: 'parana', nome: 'Paraná', sigla: 'PR', regiao: 'Sul', municipios: [
    { id: 'curitiba', nome: 'Curitiba', videoId: '9bZkp7q19f0', descricao: 'Capital ecológica com cena cultural e teatral de referência nacional.' },
    { id: 'londrina', nome: 'Londrina', videoId: 'YqeW9_5kURI', descricao: 'Capital do Norte Pioneiro e polo cultural do interior paranaense.' },
  ]},
  // ── Pernambuco ──
  { id: 'pernambuco', nome: 'Pernambuco', sigla: 'PE', regiao: 'Nordeste', municipios: [
    { id: 'olinda', nome: 'Olinda', videoId: 'kffacxfA7G4', descricao: 'Patrimônio da Humanidade: cidade histórica do frevo e maracatu.' },
    { id: 'recife', nome: 'Recife', videoId: '9bZkp7q19f0', descricao: 'Capital do frevo e do carnaval mais animado do Brasil.' },
  ]},
  // ── Rio de Janeiro ──
  { id: 'rio-de-janeiro', nome: 'Rio de Janeiro', sigla: 'RJ', regiao: 'Sudeste', municipios: [
    { id: 'angra-dos-reis',         nome: 'Angra dos Reis', videoId: 'rYEDA3JcQqw', descricao: 'Paraíso natural onde cultura e beleza se encontram.' },
    { id: 'niteroi',                nome: 'Niterói',        videoId: 'YqeW9_5kURI', descricao: 'Arte contemporânea e cultura nas margens da Baía de Guanabara.' },
    { id: 'petropolis',             nome: 'Petrópolis',     videoId: 'uelHwf8o7_U', descricao: 'A Cidade Imperial preserva sua história e tradição serrana.' },
    { id: 'rio-de-janeiro-capital', nome: 'Rio de Janeiro', videoId: '9bZkp7q19f0', descricao: 'A Cidade Maravilhosa em toda a sua exuberância cultural.' },
  ]},
  // ── Rio Grande do Sul ──
  { id: 'rio-grande-do-sul', nome: 'Rio Grande do Sul', sigla: 'RS', regiao: 'Sul', municipios: [
    { id: 'caxias-do-sul', nome: 'Caxias do Sul', videoId: 'YqeW9_5kURI', descricao: 'Terra da uva e da forte herança italiana no sul do Brasil.' },
    { id: 'gramado',       nome: 'Gramado',       videoId: 'uelHwf8o7_U', descricao: 'Cinema, Natal Luz e a encantadora cultura serrana gaúcha.' },
    { id: 'porto-alegre',  nome: 'Porto Alegre',  videoId: '9bZkp7q19f0', descricao: 'A capital gaúcha e sua vibrante cena cultural e literária.' },
  ]},
  // ── Santa Catarina ──
  { id: 'santa-catarina', nome: 'Santa Catarina', sigla: 'SC', regiao: 'Sul', municipios: [
    { id: 'blumenau',      nome: 'Blumenau',      videoId: 'kffacxfA7G4', descricao: 'Oktoberfest brasileira e a rica herança germânica catarinense.' },
    { id: 'florianopolis', nome: 'Florianópolis', videoId: 'rYEDA3JcQqw', descricao: 'A Ilha da Magia e suas manifestações culturais açorianas.' },
  ]},
  // ── São Paulo ──
  { id: 'sao-paulo', nome: 'São Paulo', sigla: 'SP', regiao: 'Sudeste', municipios: [
    { id: 'campinas',       nome: 'Campinas',       videoId: 'uelHwf8o7_U', descricao: 'Polo de inovação e rica tradição cultural no interior paulista.' },
    { id: 'ribeirao-preto', nome: 'Ribeirão Preto', videoId: 'kffacxfA7G4', descricao: 'Capital do agronegócio e da vibrante cultura caipira paulista.' },
    { id: 'santos',         nome: 'Santos',         videoId: 'rYEDA3JcQqw', descricao: 'A cidade portuária celebra sua história e patrimônio litorâneo.' },
    { id: 'sao-paulo',      nome: 'São Paulo',      videoId: 'YqeW9_5kURI', descricao: 'A maior metrópole do Brasil exibe sua diversidade cultural única.' },
    // Exemplo de município sem acesso (sem videoId):
    { id: 'sorocaba',       nome: 'Sorocaba' },
    { id: 'santo-andre',    nome: 'Santo André' },
  ]},
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
export function getEstado(id: string): Estado | undefined {
  return estados.find((e) => e.id === id);
}

export function getMunicipio(estadoId: string, municipioId: string): Municipio | undefined {
  return getEstado(estadoId)?.municipios.find((m) => m.id === municipioId);
}

// Retorna estados ordenados por nome (já estão, mas garante via sort)
export function getEstadosOrdenados(): Estado[] {
  return [...estados].sort((a, b) =>
    a.nome.localeCompare(b.nome, 'pt-BR')
  );
}

// Retorna municípios ordenados por letra inicial
export function getMunicipiosAgrupados(estadoId: string): Record<string, Municipio[]> {
  const estado = getEstado(estadoId);
  if (!estado) return {};
  const sorted = [...estado.municipios].sort((a, b) =>
    a.nome.localeCompare(b.nome, 'pt-BR')
  );
  return sorted.reduce<Record<string, Municipio[]>>((acc, m) => {
    const letra = m.nome[0].toUpperCase();
    if (!acc[letra]) acc[letra] = [];
    acc[letra].push(m);
    return acc;
  }, {});
}

// Retorna bandas agrupadas por gênero (ordem alfabética), gêneros também em ordem alfabética
export function getBandasPorGenero(municipioId: string): Record<string, Banda[]> {
  const bandas = BANDAS_MOCK[municipioId] || [];
  const grouped = bandas.reduce<Record<string, Banda[]>>((acc, b) => {
    if (!acc[b.genero]) acc[b.genero] = [];
    acc[b.genero].push(b);
    return acc;
  }, {});
  // Ordenar bandas dentro de cada gênero por nome
  Object.keys(grouped).forEach(g => {
    grouped[g].sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
  });
  return grouped;
}

// Regiões em ordem alfabética
export const regioes: Regiao[] = ['Centro-Oeste', 'Nordeste', 'Norte', 'Sudeste', 'Sul'];

export const regiaoLabel: Record<Regiao, string> = {
  'Centro-Oeste': 'Centro-Oeste',
  Nordeste:       'Nordeste',
  Norte:          'Norte',
  Sudeste:        'Sudeste',
  Sul:            'Sul',
};

export function regiaoToSlug(r: Regiao): string {
  const map: Record<Regiao, string> = {
    'Centro-Oeste': 'centro-oeste',
    'Nordeste':     'nordeste',
    'Norte':        'norte',
    'Sudeste':      'sudeste',
    'Sul':          'sul',
  };
  return map[r];
}
