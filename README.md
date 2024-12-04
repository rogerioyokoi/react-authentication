# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

--------

# Módulo de Autenticação - Front-End

## Funcionalidades

### 1. **Tela de Login**
- [ ] Criar campos de entrada:
  - [ ] E-mail/Usuário
  - [ ] Senha
- [ ] Criar botão de login.
- [ ] Adicionar links:
  - [ ] "Esqueceu a senha?"
  - [ ] "Criar conta"
- [ ] Implementar validação de formulário:
  - [ ] Verificar se os campos não estão vazios.
  - [ ] Verificar se o e-mail é válido.
  - [ ] Verificar se a senha atende aos critérios de segurança.

### 2. **Tela de Cadastro**
- [ ] Criar campos de entrada:
  - [ ] E-mail
  - [ ] Nome de Usuário
  - [ ] Senha
  - [ ] Confirmar Senha
- [ ] Criar botão de cadastro.
- [ ] Implementar validação de formulário:
  - [ ] Verificar se os campos não estão vazios.
  - [ ] Verificar se o e-mail já está registrado.
  - [ ] Verificar se as senhas coincidem.
  - [ ] Verificar se a senha atende aos critérios de segurança.

### 3. **Tela de Recuperação de Senha**
- [ ] Criar campo de e-mail para recuperação.
- [ ] Criar botão de envio para recuperar senha.
- [ ] Exibir instruções claras após envio.

### 4. **Validação de Autenticação (Token)**
- [ ] Armazenar token de autenticação (JWT ou outro) no navegador.
- [ ] Verificar o token ao carregar a aplicação.
- [ ] Implementar renovação de token (se necessário).
- [ ] Redirecionar usuário caso o token seja inválido ou expirado.

### 5. **Logout**
- [ ] Implementar função de logout para remover o token de autenticação.
- [ ] Redirecionar para a tela de login após logout.

### 6. **Gestão de Sessão**
- [ ] Manter sessão do usuário enquanto o token for válido.
- [ ] Notificar o usuário caso a sessão expire.
- [ ] Implementar autenticação persistente entre recargas de página.

### 7. **Exibição de Erros**
- [ ] Exibir mensagens de erro claras:
  - [ ] E-mail ou senha incorretos.
  - [ ] E-mail já registrado.
  - [ ] Senha fraca ou incompatível.
- [ ] Implementar feedback visual (bordas vermelhas, ícones de erro).

### 8. **Redirecionamento Condicional**
- [ ] Redirecionar após login:
  - [ ] Página inicial ou dashboard.
- [ ] Redirecionar usuários não autenticados para login quando tentarem acessar páginas restritas.

### 9. **Proteção de Rotas**
- [ ] Criar componente `PrivateRoute` para proteger páginas restritas.
- [ ] Redirecionar para a tela de login se o usuário não estiver autenticado.

### 10. **Feedback de Sucesso**
- [ ] Exibir mensagem de boas-vindas após login bem-sucedido.
- [ ] Exibir mensagem de confirmação após cadastro bem-sucedido.
- [ ] Enviar e-mail de confirmação de cadastro (se aplicável).

---

## Fluxo de Trabalho

1. **Login**
   - [ ] O usuário preenche o formulário de login (e-mail/usuário e senha).
   - [ ] Se as credenciais estiverem corretas, o token de autenticação é armazenado.
   - [ ] Caso contrário, exibir erro.

2. **Cadastro**
   - [ ] O usuário preenche o formulário de cadastro (e-mail, nome de usuário, senha).
   - [ ] Se o e-mail já existir ou as senhas não coincidirem, exibir erro.
   - [ ] Se o cadastro for bem-sucedido, redirecionar ou enviar e-mail de confirmação.

3. **Recuperação de Senha**
   - [ ] O usuário insere o e-mail e recebe instruções para redefinir a senha.

4. **Logout**
   - [ ] O usuário clica em "Logout", removendo o token e redirecionando para login.

5. **Proteção de Rota**
   - [ ] Páginas restritas devem ser protegidas e redirecionar para login se o usuário não estiver autenticado.

---

## Estrutura do Projeto

### Componentes
- [ ] `LoginForm`
- [ ] `RegisterForm`
- [ ] `PasswordRecoveryForm`
- [ ] `PrivateRoute`
- [ ] `AuthContext`

### Utils
- [ ] `authAPI`: Funções para interagir com APIs de autenticação.
- [ ] `authHelpers`: Funções para manipulação de tokens.

### Páginas
- [ ] `LoginPage`
- [ ] `RegisterPage`
- [ ] `DashboardPage` (página protegida)
- [ ] `HomePage` (página pública)
