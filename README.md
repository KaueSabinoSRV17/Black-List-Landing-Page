# Black-List-Landing-Page

Landing Page para a banda de Rock Alternativo BlackList

## Contribuindo

Para desenvolver no projeto seria necessário:

- Node 14+
- Arquivo .env com as credenciais do Firebase (ver em #Firebase)

Depois de clonar, rode `npm i` na raiz do projeto e tudo deve dar certo. Para rodar a página em localhost:5173, rode `npm run dev`

## Casos de Uso

- Apresentar os integrantes (Nome, Bio e Foto).
- Ter um Formulário para contato (apenas Nome, Telefone Whatsapp e Email. Ao dar Submit, cada integrante recebe um email).

## Firebase

O projeto usa Firebase para guardar os dados dos integrantes da banda. Para que a página suba sem erros, é necessário ter um arquivo .env no seguinte modelo:

```env
VITE_API_KEY =
VITE_AUTH_DOMAIN =
VITE_PROJECT_ID =
VITE_STORAGE_BUCKET =
VITE_MESSAGING_SENDER_ID =
VITE_APP_ID =
VITE_MEASUREMENT_ID =
```
