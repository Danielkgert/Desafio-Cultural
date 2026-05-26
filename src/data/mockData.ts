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
  videoId?: string;
  descricao?: string;
}

export interface Estado {
  id: string;
  nome: string;
  sigla: string;
  regiao: Regiao;
  municipios: Municipio[];
}

// ─── Bandas mock ─────────────────────────────────────────────────────────────
export const BANDAS_MOCK: Record<string, Banda[]> = {
  'manaus':                [{ id:'b16a', nome:'Carimbó Amazônico',       genero:'Carimbó',         votos:921,  municipio:'Manaus' },{ id:'b17a', nome:'Tecnobrega da Selva',   genero:'Tecnobrega',      votos:1204, municipio:'Manaus' }],
  'parintins':             [{ id:'b18a', nome:'Toada do Bumbá',          genero:'Toada',           votos:2100, municipio:'Parintins' },{ id:'b18b', nome:'Caprichoso Sons',      genero:'Toada',           votos:1876, municipio:'Parintins' }],
  'tefe':                  [{ id:'b31a', nome:'Miriti do Rio Negro',      genero:'Folk Amazônico',  votos:487,  municipio:'Tefé' },{ id:'b31c', nome:'Voz da Floresta',      genero:'Música Indígena', votos:290,  municipio:'Tefé' }],
  'porto-seguro':          [{ id:'b36a', nome:'Axé Pataxó',              genero:'Axé',             votos:1450, municipio:'Porto Seguro' },{ id:'b37a', nome:'Forró da Descoberta',  genero:'Forró',           votos:988,  municipio:'Porto Seguro' }],
  'salvador':              [{ id:'b29a', nome:'Axé da Bahia',            genero:'Axé',             votos:3450, municipio:'Salvador' },{ id:'b30a', nome:'Samba Reggae Bahia',   genero:'Samba Reggae',    votos:2780, municipio:'Salvador' }],
  'fortaleza':             [{ id:'b41a', nome:'Forró Pé de Serra CE',    genero:'Forró',           votos:2788, municipio:'Fortaleza' },{ id:'b42a', nome:'Banda da Beira Mar',   genero:'Reggae',          votos:1543, municipio:'Fortaleza' }],
  'vitoria':               [{ id:'b59a', nome:'Fado Capixaba',           genero:'MPB',             votos:765,  municipio:'Vitória' },{ id:'b61a', nome:'Samba do Cais',        genero:'Samba',           votos:987,  municipio:'Vitória' }],
  'cidade-de-goias':       [{ id:'b49a', nome:'Catira Goiana',           genero:'Catira',          votos:765,  municipio:'Cidade de Goiás' }],
  'goiania':               [{ id:'b19a', nome:'Sertanejo Universitário', genero:'Sertanejo',       votos:1677, municipio:'Goiânia' },{ id:'b19c', nome:'Grafite & Blues GO',   genero:'Blues',           votos:876,  municipio:'Goiânia' }],
  'barreirinhas':          [{ id:'b47a', nome:'Forró da Duna',           genero:'Forró',           votos:543,  municipio:'Barreirinhas' },{ id:'b48a', nome:'Lençóis Folk',        genero:'Folk',            votos:678,  municipio:'Barreirinhas' }],
  'sao-luis':              [{ id:'b44a', nome:'Boi de Pindaré',          genero:'Bumba-meu-boi',   votos:3102, municipio:'São Luís' },{ id:'b46a', nome:'Reggae do Nordeste',   genero:'Reggae',          votos:1876, municipio:'São Luís' }],
  'bonito':                [{ id:'b54a', nome:'Eco Sons Pantaneiros',    genero:'Folk',            votos:321,  municipio:'Bonito' },{ id:'b55a', nome:'Seresta das Águas',    genero:'Seresta',         votos:432,  municipio:'Bonito' }],
  'campo-grande':          [{ id:'b51a', nome:'Chamamé Pantaneiro',      genero:'Chamamé',         votos:1234, municipio:'Campo Grande' },{ id:'b52a', nome:'Guarani Blues',       genero:'Blues',           votos:876,  municipio:'Campo Grande' }],
  'cuiaba':                [{ id:'b90a', nome:'Siriri do Cerrado',       genero:'Siriri',          votos:876,  municipio:'Cuiabá' },{ id:'b90b', nome:'Cururu Pantaneiro',   genero:'Cururu',          votos:654,  municipio:'Cuiabá' }],
  'belo-horizonte':        [{ id:'b14a', nome:'Clube da Esquina Revival',genero:'MPB',             votos:1543, municipio:'Belo Horizonte' },{ id:'b15a', nome:'Metal Mineiro',       genero:'Metal',           votos:876,  municipio:'Belo Horizonte' }],
  'ouro-preto':            [{ id:'b56a', nome:'Orquestra Barroca MG',   genero:'Música Barroca',  votos:876,  municipio:'Ouro Preto' },{ id:'b57a', nome:'Seresta Imperial',    genero:'Seresta',         votos:432,  municipio:'Ouro Preto' }],
  'belem':                 [{ id:'b25a', nome:'Carimbó Paraense',        genero:'Carimbó',         votos:1890, municipio:'Belém' },{ id:'b26a', nome:'Tecnobrega PA',         genero:'Tecnobrega',      votos:2340, municipio:'Belém' }],
  'santarem':              [{ id:'b34a', nome:'Carimbó do Encontro',     genero:'Carimbó',         votos:876,  municipio:'Santarém' },{ id:'b33a', nome:'Tapajós Groove',       genero:'MPB',             votos:1123, municipio:'Santarém' }],
  'curitiba':              [{ id:'b20a', nome:'Indie Curitibano',        genero:'Indie',           votos:765,  municipio:'Curitiba' },{ id:'b21a', nome:'Jazz Sul',             genero:'Jazz',            votos:543,  municipio:'Curitiba' }],
  'londrina':              [{ id:'b70b', nome:'Sertanejo do Norte PR',   genero:'Sertanejo',       votos:1543, municipio:'Londrina' },{ id:'b71a', nome:'Jazz Londrino',        genero:'Jazz',            votos:876,  municipio:'Londrina' }],
  'olinda':                [{ id:'b38a', nome:'Maracatu Nação Olinda',   genero:'Maracatu',        votos:2234, municipio:'Olinda' },{ id:'b39a', nome:'Frevo das Ladeiras',   genero:'Frevo',           votos:1987, municipio:'Olinda' }],
  'recife':                [{ id:'b27a', nome:'Frevo Moderno',           genero:'Frevo',           votos:1765, municipio:'Recife' },{ id:'b28a', nome:'Maracatu Elétrico',    genero:'Maracatu',        votos:2100, municipio:'Recife' }],
  'angra-dos-reis':        [{ id:'b13a', nome:'Axé das Ilhas',           genero:'Axé',             votos:788,  municipio:'Angra dos Reis' }],
  'niteroi':               [{ id:'b11a', nome:'Rock de Niterói',         genero:'Rock',            votos:543,  municipio:'Niterói' }],
  'petropolis':            [{ id:'b12a', nome:'Imperial Classic',        genero:'Música Clássica', votos:334,  municipio:'Petrópolis' }],
  'rio-de-janeiro-capital':[{ id:'b10a', nome:'Funk da Pedra',           genero:'Funk',            votos:3210, municipio:'Rio de Janeiro' },{ id:'b8a',  nome:'Pagode Carioca',       genero:'Pagode',          votos:2341, municipio:'Rio de Janeiro' },{ id:'b9a',  nome:'Bossa Nova Rio',       genero:'Bossa Nova',      votos:1876, municipio:'Rio de Janeiro' }],
  'caxias-do-sul':         [{ id:'b62a', nome:'Tarantella Gaúcha',       genero:'Tarantella',      votos:1102, municipio:'Caxias do Sul' },{ id:'b63a', nome:'Cantina Folk Sul',     genero:'Folk Italiano',   votos:876,  municipio:'Caxias do Sul' }],
  'gramado':               [{ id:'b65a', nome:'Tiroleses da Serra',      genero:'Música Alemã',    votos:987,  municipio:'Gramado' },{ id:'b66a', nome:'Jazz das Hortênsias',  genero:'Jazz',            votos:765,  municipio:'Gramado' }],
  'porto-alegre':          [{ id:'b23a', nome:'Tchê Music',              genero:'Gauchesca',       votos:1122, municipio:'Porto Alegre' },{ id:'b22a', nome:'Gaúcho Rock',          genero:'Rock',            votos:987,  municipio:'Porto Alegre' }],
  'blumenau':              [{ id:'b67a', nome:'Banda da Oktoberfest',    genero:'Música Alemã',    votos:2341, municipio:'Blumenau' },{ id:'b68a', nome:'Vale Europeu Band',     genero:'Folk Alemão',     votos:1654, municipio:'Blumenau' }],
  'florianopolis':         [{ id:'b24a', nome:'Açoriana Folk',           genero:'Folk',            votos:456,  municipio:'Florianópolis' },{ id:'b24c', nome:'Surfin Floripa',      genero:'Rock',            votos:543,  municipio:'Florianópolis' }],
  'campinas':              [{ id:'b3a',  nome:'Jazz Campineiro',         genero:'Jazz',            votos:654,  municipio:'Campinas' },{ id:'b3b',  nome:'Orquestra do Interior', genero:'MPB',             votos:756,  municipio:'Campinas' }],
  'ribeirao-preto':        [{ id:'b7a',  nome:'Sertanejo Raiz RP',       genero:'Sertanejo',       votos:1102, municipio:'Ribeirão Preto' }],
  'santos':                [{ id:'b5a',  nome:'Blues do Litoral',        genero:'Blues',           votos:621,  municipio:'Santos' },{ id:'b6a',  nome:'Reggae Porto',          genero:'Reggae',          votos:899,  municipio:'Santos' }],
  'sao-paulo':             [{ id:'b2a',  nome:'Jazz Paulistano',         genero:'Jazz',            votos:987,  municipio:'São Paulo' },{ id:'b1a',  nome:'Sambas do Brás',        genero:'Samba',           votos:1243, municipio:'São Paulo' }],
  'natal':                 [{ id:'c1a',  nome:'Forró Natalense',         genero:'Forró',           votos:876,  municipio:'Natal' }],
  'mossoro':               [{ id:'c2a',  nome:'Baião do Mossoró',        genero:'Baião',           votos:543,  municipio:'Mossoró' }],
  'joao-pessoa':           [{ id:'c3a',  nome:'Frevo Paraibano',         genero:'Frevo',           votos:765,  municipio:'João Pessoa' }],
  'campina-grande':        [{ id:'c4a',  nome:'Quadrilha Nordestina',    genero:'Quadrilha',       votos:1234, municipio:'Campina Grande' }],
  'aracaju':               [{ id:'c5a',  nome:'Forró Sergipano',         genero:'Forró',           votos:654,  municipio:'Aracaju' }],
  'maceio':                [{ id:'c6a',  nome:'Xangô Alagoano',          genero:'Xangô',           votos:543,  municipio:'Maceió' }],
  'teresina':              [{ id:'c7a',  nome:'Bumba Piauiense',         genero:'Bumba-meu-boi',   votos:765,  municipio:'Teresina' }],
  'macapa':                [{ id:'c8a',  nome:'Marabaixo do Amapá',      genero:'Marabaixo',       votos:432,  municipio:'Macapá' }],
  'porto-velho':           [{ id:'c9a',  nome:'Carimbó Rondoniense',     genero:'Carimbó',         votos:321,  municipio:'Porto Velho' }],
  'rio-branco':            [{ id:'c10a', nome:'Seringueiro Blues',       genero:'Blues',           votos:298,  municipio:'Rio Branco' }],
  'boa-vista':             [{ id:'c11a', nome:'Parixara Roraimense',      genero:'Parixara',        votos:387,  municipio:'Boa Vista' }],
  'palmas':                [{ id:'c12a', nome:'Catira Tocantinense',      genero:'Catira',          votos:456,  municipio:'Palmas' }],
  'brasilia':              [{ id:'c13a', nome:'MPB da Capital',           genero:'MPB',             votos:1543, municipio:'Brasília' },{ id:'c13b', nome:'Rock Candango',         genero:'Rock',            votos:987,  municipio:'Brasília' }],
};

// ─── 26 Estados — todos, em ordem alfabética ─────────────────────────────────
export const estados: Estado[] = [
  { id:'acre',           nome:'Acre',              sigla:'AC', regiao:'Norte',       municipios:[
    { id:'rio-branco',   nome:'Rio Branco',   videoId:'YqeW9_5kURI', descricao:'Capital do Acre, coração da cultura seringueira amazônica.' },
    { id:'cruzeiro-do-sul', nome:'Cruzeiro do Sul' },
    { id:'brasileia', nome:'Brasileia' },
    { id:'sena-madureira', nome:'Sena Madureira' },
    { id:'tarauaca', nome:'Tarauacá' }
  ]},
  { id:'alagoas',        nome:'Alagoas',           sigla:'AL', regiao:'Nordeste',    municipios:[
    { id:'maceio',       nome:'Maceió',       videoId:'uelHwf8o7_U', descricao:'Praias cristalinas e rica tradição cultural alagoana.' },
    { id:'penedo',       nome:'Penedo' },
    { id:'palmeira-dos-indios', nome:'Palmeira dos Índios' },
    { id:'arapiraca', nome:'Arapiraca' },
    { id:'uniao-dos-palmares', nome:'União dos Palmares' }
  ]},
  { id:'amapa',          nome:'Amapá',             sigla:'AP', regiao:'Norte',       municipios:[
    { id:'macapa',       nome:'Macapá',       videoId:'rYEDA3JcQqw', descricao:'Cidade cruzada pela linha do Equador e palco do Marabaixo.' },
    { id:'laranjal-do-jari', nome:'Laranjal do Jari' },
    { id:'santana', nome:'Santana' },
    { id:'oiapoque', nome:'Oiapoque' }
  ]},
  { id:'amazonas',       nome:'Amazonas',          sigla:'AM', regiao:'Norte',       municipios:[
    { id:'manaus',       nome:'Manaus',       videoId:'YqeW9_5kURI', descricao:'Coração da Amazônia: ópera, Festival de Parintins e cultura ribeirinha.' },
    { id:'parintins',    nome:'Parintins',    videoId:'uelHwf8o7_U', descricao:'Terra do Boi-Bumbá — o maior festival folclórico do Brasil.' },
    { id:'tefe',         nome:'Tefé',         videoId:'rYEDA3JcQqw', descricao:'Cultura indígena e tradições amazônicas preservadas.' },
    { id:'itacoatiara',  nome:'Itacoatiara' },
    { id:'tabatinga',    nome:'Tabatinga' },
    { id:'coari', nome:'Coari' },
    { id:'humaitá', nome:'Humaitá' },
    { id:'tonantins', nome:'Tonantins' }
  ]},
  { id:'bahia',          nome:'Bahia',             sigla:'BA', regiao:'Nordeste',    municipios:[
    { id:'feira-de-santana', nome:'Feira de Santana' },
    { id:'ilheus',       nome:'Ilhéus' },
    { id:'porto-seguro', nome:'Porto Seguro', videoId:'uelHwf8o7_U', descricao:'Local do descobrimento, rica cultura histórica e natural.' },
    { id:'salvador',     nome:'Salvador',     videoId:'YqeW9_5kURI', descricao:'Primeira capital do Brasil, berço da cultura afro-brasileira.' },
    { id:'vitoria-da-conquista', nome:'Vitória da Conquista' },
    { id:'barreiras', nome:'Barreiras' },
    { id:'camacari', nome:'Camaçari' },
    { id:'juazeiro', nome:'Juazeiro' },
    { id:'teixeira-de-freitas', nome:'Teixeira de Freitas' }
  ]},
  { id:'ceara',          nome:'Ceará',             sigla:'CE', regiao:'Nordeste',    municipios:[
    { id:'fortaleza',    nome:'Fortaleza',    videoId:'YqeW9_5kURI', descricao:'Sol, forró e a cultura vibrante do litoral cearense.' },
    { id:'juazeiro-do-norte', nome:'Juazeiro do Norte' },
    { id:'sobral',       nome:'Sobral' },
    { id:'caucaia', nome:'Caucaia' },
    { id:'crato', nome:'Crato' },
    { id:'maracanau', nome:'Maracanaú' }
  ]},
  { id:'distrito-federal', nome:'Distrito Federal', sigla:'DF', regiao:'Centro-Oeste', municipios:[
    { id:'brasilia',     nome:'Brasília',     videoId:'9bZkp7q19f0', descricao:'Capital do Brasil, centro político e cultural da nação.' },
    { id:'ceilandia', nome:'Ceilândia' },
    { id:'taguatinga', nome:'Taguatinga' },
    { id:'samambaia', nome:'Samambaia' }
  ]},
  { id:'espirito-santo', nome:'Espírito Santo',    sigla:'ES', regiao:'Sudeste',     municipios:[
    { id:'cachoeiro-de-itapemirim', nome:'Cachoeiro de Itapemirim' },
    { id:'vitoria',      nome:'Vitória',      videoId:'YqeW9_5kURI', descricao:'Capital capixaba, ilha de história e cultura viva.' },
    { id:'vila-velha',   nome:'Vila Velha' },
    { id:'colatina', nome:'Colatina' },
    { id:'linhares', nome:'Linhares' },
    { id:'serra', nome:'Serra' }
  ]},
  { id:'goias',          nome:'Goiás',             sigla:'GO', regiao:'Centro-Oeste', municipios:[
    { id:'anapolis',     nome:'Anápolis' },
    { id:'cidade-de-goias', nome:'Cidade de Goiás', videoId:'uelHwf8o7_U', descricao:'Patrimônio da Humanidade: história e tradição colonial viva.' },
    { id:'goiania',      nome:'Goiânia',      videoId:'YqeW9_5kURI', descricao:'Capital do sertanejo universitário e do grafite brasileiro.' },
    { id:'rio-verde',    nome:'Rio Verde' },
    { id:'aparecida-de-goiania', nome:'Aparecida de Goiânia' },
    { id:'caldas-novas', nome:'Caldas Novas' },
    { id:'jatai', nome:'Jataí' }
  ]},
  { id:'maranhao',       nome:'Maranhão',          sigla:'MA', regiao:'Nordeste',    municipios:[
    { id:'barreirinhas', nome:'Barreirinhas', videoId:'9bZkp7q19f0', descricao:'Porta de entrada dos Lençóis Maranhenses e da cultura local.' },
    { id:'imperatriz',   nome:'Imperatriz' },
    { id:'sao-luis',     nome:'São Luís',     videoId:'kffacxfA7G4', descricao:'Única capital fundada por franceses — terra do Bumba-meu-boi.' },
    { id:'caxias', nome:'Caxias' },
    { id:'timon', nome:'Timon' }
  ]},
  { id:'mato-grosso',    nome:'Mato Grosso',       sigla:'MT', regiao:'Centro-Oeste', municipios:[
    { id:'cuiaba',       nome:'Cuiabá',       videoId:'rYEDA3JcQqw', descricao:'Coração do Brasil: Siriri, Cururu e a cultura do pantanal.' },
    { id:'rondonopolis', nome:'Rondonópolis' },
    { id:'sinop',        nome:'Sinop' },
    { id:'varzea-grande', nome:'Várzea Grande' },
    { id:'caceres', nome:'Cáceres' },
    { id:'alta-floresta', nome:'Alta Floresta' }
  ]},
  { id:'mato-grosso-do-sul', nome:'Mato Grosso do Sul', sigla:'MS', regiao:'Centro-Oeste', municipios:[
    { id:'bonito',       nome:'Bonito',       videoId:'kffacxfA7G4', descricao:'Ecoturismo e cultura local na Serra da Bodoquena.' },
    { id:'campo-grande', nome:'Campo Grande', videoId:'rYEDA3JcQqw', descricao:'Morena e multicultural: gastronomia e arte pantaneira.' },
    { id:'corumba',      nome:'Corumbá' },
    { id:'dourados',     nome:'Dourados' },
    { id:'tres-lagoas', nome:'Três Lagoas' },
    { id:'ponta-pora', nome:'Ponta Porã' }
  ]},
  { id:'minas-gerais',   nome:'Minas Gerais',      sigla:'MG', regiao:'Sudeste',     municipios:[
    { id:'belo-horizonte', nome:'Belo Horizonte', videoId:'kffacxfA7G4', descricao:'A capital mineira celebra sua gastronomia e arte contemporânea.' },
    { id:'diamantina',   nome:'Diamantina' },
    { id:'juiz-de-fora', nome:'Juiz de Fora' },
    { id:'montes-claros', nome:'Montes Claros' },
    { id:'ouro-preto',   nome:'Ouro Preto',   videoId:'9bZkp7q19f0', descricao:'Patrimônio histórico e barroco brasileiro de riqueza incomparável.' },
    { id:'uberlandia',   nome:'Uberlândia' },
    { id:'betim', nome:'Betim' },
    { id:'contagem', nome:'Contagem' },
    { id:'governador-valadares', nome:'Governador Valadares' },
    { id:'ipatinga', nome:'Ipatinga' }
  ]},
  { id:'para',           nome:'Pará',              sigla:'PA', regiao:'Norte',       municipios:[
    { id:'belem',        nome:'Belém',        videoId:'kffacxfA7G4', descricao:'Cidade do Círio de Nazaré e da gastronomia paraense incomparável.' },
    { id:'maraba',       nome:'Marabá' },
    { id:'santarem',     nome:'Santarém',     videoId:'9bZkp7q19f0', descricao:'Encontro das águas e diversidade cultural do Tapajós.' },
    { id:'altamira', nome:'Altamira' },
    { id:'castanhal', nome:'Castanhal' }
  ]},
  { id:'paraiba',        nome:'Paraíba',           sigla:'PB', regiao:'Nordeste',    municipios:[
    { id:'campina-grande', nome:'Campina Grande', videoId:'YqeW9_5kURI', descricao:'Capital do forró e do maior São João do mundo.' },
    { id:'joao-pessoa',  nome:'João Pessoa',  videoId:'uelHwf8o7_U', descricao:'A cidade mais oriental das Américas, berço do frevo paraibano.' },
    { id:'patos',        nome:'Patos' },
    { id:'santa-rita', nome:'Santa Rita' },
    { id:'bayeux', nome:'Bayeux' }
  ]},
  { id:'parana',         nome:'Paraná',            sigla:'PR', regiao:'Sul',         municipios:[
    { id:'curitiba',     nome:'Curitiba',     videoId:'9bZkp7q19f0', descricao:'Capital ecológica com cena cultural e teatral de referência nacional.' },
    { id:'foz-do-iguacu', nome:'Foz do Iguaçu' },
    { id:'londrina',     nome:'Londrina',     videoId:'YqeW9_5kURI', descricao:'Capital do Norte Pioneiro e polo cultural do interior paranaense.' },
    { id:'maringa',      nome:'Maringá' },
    { id:'ponta-grossa', nome:'Ponta Grossa' },
    { id:'cascavel', nome:'Cascavel' },
    { id:'paranagua', nome:'Paranaguá' },
    { id:'sao-jose-dos-pinhais', nome:'São José dos Pinhais' }
  ]},
  { id:'pernambuco',     nome:'Pernambuco',        sigla:'PE', regiao:'Nordeste',    municipios:[
    { id:'caruaru',      nome:'Caruaru' },
    { id:'olinda',       nome:'Olinda',       videoId:'kffacxfA7G4', descricao:'Patrimônio da Humanidade: cidade histórica do frevo e maracatu.' },
    { id:'petrolina',    nome:'Petrolina' },
    { id:'recife',       nome:'Recife',       videoId:'9bZkp7q19f0', descricao:'Capital do frevo e do carnaval mais animado do Brasil.' },
    { id:'jaboatao', nome:'Jaboatão dos Guararapes' },
    { id:'paulista', nome:'Paulista' }
  ]},
  { id:'piaui',          nome:'Piauí',             sigla:'PI', regiao:'Nordeste',    municipios:[
    { id:'parnaiba',     nome:'Parnaíba' },
    { id:'picos',        nome:'Picos' },
    { id:'teresina',     nome:'Teresina',     videoId:'rYEDA3JcQqw', descricao:'A capital mais quente do Brasil e berço do Bumba-meu-boi piauiense.' },
    { id:'floriano', nome:'Floriano' }
  ]},
  { id:'rio-de-janeiro', nome:'Rio de Janeiro',    sigla:'RJ', regiao:'Sudeste',     municipios:[
    { id:'angra-dos-reis', nome:'Angra dos Reis', videoId:'rYEDA3JcQqw', descricao:'Paraíso natural onde cultura e beleza se encontram.' },
    { id:'cabo-frio',    nome:'Cabo Frio' },
    { id:'nova-friburgo', nome:'Nova Friburgo' },
    { id:'niteroi',      nome:'Niterói',      videoId:'YqeW9_5kURI', descricao:'Arte contemporânea e cultura nas margens da Baía de Guanabara.' },
    { id:'petropolis',   nome:'Petrópolis',   videoId:'uelHwf8o7_U', descricao:'A Cidade Imperial preserva sua história e tradição serrana.' },
    { id:'rio-de-janeiro-capital', nome:'Rio de Janeiro', videoId:'9bZkp7q19f0', descricao:'A Cidade Maravilhosa em toda a sua exuberância cultural.' },
    { id:'volta-redonda', nome:'Volta Redonda' },
    { id:'duque-de-caxias', nome:'Duque de Caxias' },
    { id:'nova-iguacu', nome:'Nova Iguaçu' },
    { id:'sao-goncalo', nome:'São Gonçalo' }
  ]},
  { id:'rio-grande-do-norte', nome:'Rio Grande do Norte', sigla:'RN', regiao:'Nordeste', municipios:[
    { id:'mossoro',      nome:'Mossoró',      videoId:'kffacxfA7G4', descricao:'Terra da Chica da Silva e do baião nordestino.' },
    { id:'natal',        nome:'Natal',        videoId:'YqeW9_5kURI', descricao:'A Cidade do Sol e sua vibrante cultura potiguar.' },
    { id:'parnamirim',   nome:'Parnamirim' },
    { id:'caico', nome:'Caicó' }
  ]},
  { id:'rio-grande-do-sul', nome:'Rio Grande do Sul', sigla:'RS', regiao:'Sul',      municipios:[
    { id:'caxias-do-sul', nome:'Caxias do Sul', videoId:'YqeW9_5kURI', descricao:'Terra da uva e da forte herança italiana no sul do Brasil.' },
    { id:'gramado',      nome:'Gramado',      videoId:'uelHwf8o7_U', descricao:'Cinema, Natal Luz e a encantadora cultura serrana gaúcha.' },
    { id:'pelotas',      nome:'Pelotas' },
    { id:'porto-alegre', nome:'Porto Alegre', videoId:'9bZkp7q19f0', descricao:'A capital gaúcha e sua vibrante cena cultural e literária.' },
    { id:'santa-maria',  nome:'Santa Maria' },
    { id:'canoas', nome:'Canoas' },
    { id:'novo-hamburgo', nome:'Novo Hamburgo' },
    { id:'sao-leopoldo', nome:'São Leopoldo' }
  ]},
  { id:'rondonia',       nome:'Rondônia',          sigla:'RO', regiao:'Norte',       municipios:[
    { id:'ji-parana',    nome:'Ji-Paraná' },
    { id:'porto-velho',  nome:'Porto Velho',  videoId:'kffacxfA7G4', descricao:'Capital da Amazônia Sul-Ocidental e palco da cultura ribeirinha.' },
    { id:'ariquemes', nome:'Ariquemes' },
    { id:'cacoal', nome:'Cacoal' }
  ]},
  { id:'roraima',        nome:'Roraima',           sigla:'RR', regiao:'Norte',       municipios:[
    { id:'boa-vista',    nome:'Boa Vista',    videoId:'9bZkp7q19f0', descricao:'A capital mais ao norte do Brasil e sua rica cultura indígena.' },
    { id:'caracarai',    nome:'Caracaraí' },
    { id:'rorainopolis', nome:'Rorainópolis' }
  ]},
  { id:'santa-catarina', nome:'Santa Catarina',    sigla:'SC', regiao:'Sul',         municipios:[
    { id:'blumenau',     nome:'Blumenau',     videoId:'kffacxfA7G4', descricao:'Oktoberfest brasileira e a rica herança germânica catarinense.' },
    { id:'chapeco',      nome:'Chapecó' },
    { id:'criciuma',     nome:'Criciúma' },
    { id:'florianopolis', nome:'Florianópolis', videoId:'rYEDA3JcQqw', descricao:'A Ilha da Magia e suas manifestações culturais açorianas.' },
    { id:'joinville',    nome:'Joinville' },
    { id:'balneario-camboriu', nome:'Balneário Camboriú' },
    { id:'itajai', nome:'Itajaí' },
    { id:'lages', nome:'Lages' },
    { id:'sao-jose', nome:'São José' }
  ]},
  { id:'sao-paulo',      nome:'São Paulo',         sigla:'SP', regiao:'Sudeste',     municipios:[
    { id:'campinas',     nome:'Campinas',     videoId:'uelHwf8o7_U', descricao:'Polo de inovação e rica tradição cultural no interior paulista.' },
    { id:'guarulhos',    nome:'Guarulhos' },
    { id:'ribeirao-preto', nome:'Ribeirão Preto', videoId:'kffacxfA7G4', descricao:'Capital do agronegócio e da vibrante cultura caipira paulista.' },
    { id:'santo-andre',  nome:'Santo André' },
    { id:'santos',       nome:'Santos',       videoId:'rYEDA3JcQqw', descricao:'A cidade portuária celebra sua história e patrimônio litorâneo.' },
    { id:'sao-bernardo-do-campo', nome:'São Bernardo do Campo' },
    { id:'sao-jose-dos-campos', nome:'São José dos Campos' },
    { id:'sao-paulo',    nome:'São Paulo',    videoId:'YqeW9_5kURI', descricao:'A maior metrópole do Brasil exibe sua diversidade cultural única.' },
    { id:'sorocaba',     nome:'Sorocaba' },
    { id:'bauru', nome:'Bauru' },
    { id:'mogi-das-cruzes', nome:'Mogi das Cruzes' },
    { id:'osasco', nome:'Osasco' },
    { id:'piracicaba', nome:'Piracicaba' },
    { id:'sao-jose-do-rio-preto', nome:'São José do Rio Preto' }
  ]},
  { id:'sergipe',        nome:'Sergipe',           sigla:'SE', regiao:'Nordeste',    municipios:[
    { id:'aracaju',      nome:'Aracaju',      videoId:'YqeW9_5kURI', descricao:'A menor capital do Brasil e seu rico patrimônio cultural sergipano.' },
    { id:'lagarto',      nome:'Lagarto' },
    { id:'estancia', nome:'Estância' },
    { id:'itabaiana', nome:'Itabaiana' }
  ]},
  { id:'tocantins',      nome:'Tocantins',         sigla:'TO', regiao:'Norte',       municipios:[
    { id:'araguaina',    nome:'Araguaína' },
    { id:'palmas',       nome:'Palmas',       videoId:'uelHwf8o7_U', descricao:'A mais jovem capital do Brasil e sua identidade cultural em formação.' },
    { id:'gurupi', nome:'Gurupi' },
    { id:'porto-nacional', nome:'Porto Nacional' }
  ]},
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
export function getEstado(id: string): Estado | undefined {
  return estados.find(e => e.id === id);
}

export function getMunicipio(estadoId: string, municipioId: string): Municipio | undefined {
  return getEstado(estadoId)?.municipios.find(m => m.id === municipioId);
}

export function getEstadosOrdenados(): Estado[] {
  return [...estados].sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
}

export function getMunicipiosAgrupados(estadoId: string): Record<string, Municipio[]> {
  const estado = getEstado(estadoId);
  if (!estado) return {};
  const sorted = [...estado.municipios]
    .filter((m): m is Municipio => Boolean(m && m.nome && m.nome.length > 0))
    .sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
  return sorted.reduce<Record<string, Municipio[]>>((acc, m) => {
    const letra = m.nome[0].toUpperCase();
    if (!acc[letra]) acc[letra] = [];
    acc[letra].push(m);
    return acc;
  }, {});
}

export function getBandasPorGenero(municipioId: string): Record<string, Banda[]> {
  const bandas = BANDAS_MOCK[municipioId] || [];
  const grouped = bandas.reduce<Record<string, Banda[]>>((acc, b) => {
    if (!acc[b.genero]) acc[b.genero] = [];
    acc[b.genero].push(b);
    return acc;
  }, {});
  Object.keys(grouped).forEach(g => {
    grouped[g].sort((a, b) => a.nome.localeCompare(b.nome, 'pt-BR'));
  });
  return grouped;
}

export const regioes: Regiao[] = ['Centro-Oeste', 'Nordeste', 'Norte', 'Sudeste', 'Sul'];

export const regiaoLabel: Record<Regiao, string> = {
  'Centro-Oeste': 'Centro-Oeste',
  Nordeste: 'Nordeste',
  Norte: 'Norte',
  Sudeste: 'Sudeste',
  Sul: 'Sul',
};

export function regiaoToSlug(r: Regiao): string {
  const map: Record<Regiao, string> = {
    'Centro-Oeste': 'centro-oeste',
    Nordeste: 'nordeste',
    Norte: 'norte',
    Sudeste: 'sudeste',
    Sul: 'sul',
  };
  return map[r];
}
