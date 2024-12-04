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

---

# Funcionalidades Avançadas para o Módulo de Autenticação

## 1. Validação Avançada de Senha
- [ ] **Política de Senha Forte**:
  - [ ] Exigir que a senha tenha pelo menos uma letra maiúscula, um número e um caractere especial.
  - [ ] Exibir um indicador de força de senha durante o cadastro e atualização de senha.
  
- [ ] **Verificação de Senha vs. E-mail**:
  - [ ] Garantir que a senha não seja similar ao e-mail ou nome do usuário.
  
## 2. Autenticação de Múltiplos Fatores (2FA)
- [ ] Implementar autenticação de múltiplos fatores, com envio de código por e-mail ou SMS após o login.
- [ ] Oferecer configuração de 2FA no painel do usuário.
- [ ] Garantir que o código de 2FA tenha um tempo de expiração e limitação de tentativas.

## 3. Autenticação via Redes Sociais (OAuth)
- [ ] Implementar login via provedores de autenticação externa (Google, Facebook, GitHub, etc.) usando OAuth.
- [ ] Permitir ao usuário conectar e desconectar suas contas de redes sociais.

## 4. Login e Cadastro com Recuperação de Estado
- [ ] **Recuperação Automática de Estado**:
  - [ ] Após um erro de login ou recuperação, lembrar os campos preenchidos para que o usuário não precise refazer todo o processo.
  
- [ ] **Salvar Sessão de Forma Transparente**:
  - [ ] Salvar o estado do login do usuário localmente (com JWT ou cookies) para que o login persista mesmo após a recarga da página, mantendo uma experiência de usuário fluida.
  
## 5. Gerenciamento de Sessões e Expiração
- [ ] **Expiração de Sessão Automática**:
  - [ ] Implementar a expiração do token de autenticação após um período inativo (ex: 15 minutos) e exigir novo login ou renovação do token.
  
- [ ] **Avisos de Sessão**:
  - [ ] Exibir um aviso de "Sua sessão está prestes a expirar" e permitir ao usuário renovar a sessão.
  
- [ ] **Múltiplos Dispositivos**:
  - [ ] Permitir que o usuário se autentique em múltiplos dispositivos e ofereça a opção de visualizar ou terminar sessões ativas de outros dispositivos.

## 6. Recuperação de Conta
- [ ] **Redefinição de Senha por E-mail Seguro**:
  - [ ] Enviar um link de redefinição de senha por e-mail com validade limitada (ex: 24 horas).
  
- [ ] **Verificação de Identidade Adicional**:
  - [ ] Implementar uma verificação adicional de identidade (como responder a uma pergunta de segurança) durante o processo de recuperação de conta.

## 7. Interface de Usuário Melhorada
- [ ] **Feedback Visual e Animações**:
  - [ ] Melhorar o feedback do formulário de login/cadastro com animações e transições suaves (ex: animações ao focar nos campos ou ao mostrar erros).
  
- [ ] **Progressão Durante o Login**:
  - [ ] Mostrar uma tela de progresso ou carregamento durante o processo de login e cadastro, para manter o usuário informado.

## 8. Gestão de Perfil de Usuário
- [ ] **Editar Perfil**:
  - [ ] Permitir que o usuário edite informações do perfil, como nome, foto e configurações de conta (ex: preferências de idioma).
  
- [ ] **Alteração de Senha**:
  - [ ] Criar uma interface onde o usuário possa alterar sua senha com confirmação da senha antiga.

## 9. Monitoramento e Logs de Segurança
- [ ] **Monitoramento de Tentativas de Login**:
  - [ ] Monitorar tentativas de login falhas e implementar limitações de tentativas para evitar ataques de força bruta.
  
- [ ] **Alertas de Login Suspeito**:
  - [ ] Enviar notificações ou e-mails de alerta quando um login suspeito ocorrer, como login de um novo dispositivo ou localização geográfica.

## 10. Suporte a Idiomas
- [ ] **Suporte a Múltiplos Idiomas**:
  - [ ] Implementar internacionalização (i18n) para suportar diferentes idiomas na interface de autenticação.

## 11. Teste de Acessibilidade
- [ ] **Tornar os Formulários Acessíveis**:
  - [ ] Garantir que os formulários de autenticação sejam acessíveis, com rótulos apropriados, suporte a leitores de tela e navegação por teclado.

## 12. Design Responsivo
- [ ] **Interface Mobile-Friendly**:
  - [ ] Garantir que as telas de login, cadastro e recuperação de senha sejam responsivas e funcionem bem em dispositivos móveis.
  
- [ ] **Design de Tela de Login no Modal**:
  - [ ] Permitir que a tela de login/cadastro apareça em um modal ou pop-up, sem redirecionamento de página.

---

## Fluxo de Trabalho Aprofundado

1. **Login com 2FA**:
   - [ ] O usuário preenche o formulário de login.
   - [ ] Após validação, se 2FA estiver habilitado, um código é enviado por e-mail/SMS.
   - [ ] O usuário insere o código para concluir o login.

2. **Cadastro com Políticas de Senha**:
   - [ ] O usuário cria uma conta fornecendo e-mail, nome de usuário e senha forte.
   - [ ] Após cadastro, se necessário, o usuário pode ativar 2FA.

3. **Recuperação de Senha com Redefinição**:
   - [ ] O usuário solicita recuperação de senha e recebe um link seguro.
   - [ ] Após redefinir a senha, ele pode ser redirecionado para o login.

4. **Segurança de Sessão com Expiração**:
   - [ ] O usuário recebe um aviso de expiração de sessão e pode escolher renovar.
   - [ ] Após o tempo limite de inatividade, o token expira e o usuário é desconectado.

5. **Gerenciamento de Perfil**:
   - [ ] O usuário pode editar seu perfil e alterar a senha diretamente na aplicação.

---

## Arquitetura e Componentes Avançados

### Componentes
- [ ] `TwoFactorAuthForm`: Formulário de 2FA para entrada do código.
- [ ] `ProfileSettings`: Interface para alterar configurações de perfil.
- [ ] `PasswordStrengthMeter`: Medidor de força de senha.
- [ ] `LoginAttemptMonitor`: Componente para monitorar tentativas de login falhas.

### Utils
- [ ] `sessionManager`: Funções para gerenciar a expiração e renovação de sessão.
- [ ] `passwordValidator`: Função para validar a complexidade da senha.
- [ ] `twoFactorAuth`: Funções para gerar e validar códigos de 2FA.

