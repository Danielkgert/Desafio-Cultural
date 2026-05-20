# 🎤 Desafio Cultural

Site oficial do **Desafio Cultural** — explore a riqueza cultural do Brasil por estado e município, assistindo vídeos do canal no YouTube.

## Stack

- **Next.js 14** — App Router, rotas dinâmicas
- **TypeScript** — tipagem completa
- **Tailwind CSS** — estilização com paleta preto & ouro
- **AOS** — animações ao fazer scroll

## Como rodar

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## Estrutura de rotas

| Rota | Página |
|---|---|
| `/` | Seleção de estado |
| `/[estado]` | Municípios do estado |
| `/[estado]/[municipio]` | Vídeo do município |

Exemplos:
- `/sao-paulo`
- `/sao-paulo/campinas`
- `/bahia/salvador`

## Substituir os vídeos (dados mocados)

Edite o arquivo `src/data/mockData.ts`.

Para cada município, altere o campo `videoId` com o ID do vídeo do canal:

```
https://www.youtube.com/watch?v=VIDEO_ID_AQUI
                                ^^^^^^^^^^^^^^^^
                                use este valor
```

Exemplo:
```ts
{
  id: 'salvador',
  nome: 'Salvador',
  videoId: 'SEU_VIDEO_ID_AQUI',   // ← altere aqui
  descricao: 'Descrição do vídeo.',
}
```

## Adicionar novos estados/municípios

No mesmo arquivo `src/data/mockData.ts`, adicione ao array `estados`:

```ts
{
  id: 'nome-do-estado',     // slug (sem espaços/acentos)
  nome: 'Nome do Estado',
  sigla: 'XX',
  regiao: 'Nordeste',       // Norte | Nordeste | Centro-Oeste | Sudeste | Sul
  municipios: [
    {
      id: 'nome-municipio', // slug
      nome: 'Nome do Município',
      videoId: 'ID_DO_VIDEO',
      descricao: 'Descrição.',
    },
  ],
},
```

## Build para produção

```bash
npm run build
npm start
```

---

Desenvolvido para o projeto **Desafio Cultural** 🇧🇷
