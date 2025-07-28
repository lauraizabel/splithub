# 💸 Desafio Técnico — API de Gestão de Despesas Compartilhadas (Sênior Node.js + TypeScript)

Este desafio tem como objetivo avaliar sua capacidade de construir uma API robusta e escalável com Node.js e TypeScript, utilizando boas práticas de arquitetura, domínio e organização.

---

## 🧠 Contexto

Sua missão é criar uma API que permita gerenciar **despesas compartilhadas em grupos**, similar ao Splitwise.

Usuários podem criar grupos, adicionar membros e registrar despesas indicando quem pagou e como o valor será dividido.

O sistema deve calcular automaticamente o saldo de cada membro dentro do grupo, indicando quem deve quanto a quem.

---

## ⏱ Duração sugerida

- Até 6 horas (não precisa ser contínuas)
- Envio via repositório GitHub

---

## 🎯 Funcionalidades obrigatórias

### 🧾 1. Cadastro de Grupos
- Um grupo deve ter um nome e ser vinculado a um usuário criador.
- Deve permitir adicionar/remover membros.

### 💳 2. Registro de Despesas Compartilhadas
- Uma despesa deve conter:
  - Descrição
  - Valor total
  - Data
  - Pagador (quem pagou)
  - Participantes (quem divide a conta)
  - Proporção (por valor ou igualitário)
- A despesa deve atualizar o saldo do grupo automaticamente.

### 📊 3. Resumo de Saldo por Grupo
**GET `/groups/:id/balance`**
- Retorna quanto cada membro pagou, quanto deveria pagar, e quem deve para quem.
- Exemplo:
```json
{
  "settlements": [
    { "from": "João", "to": "Maria", "amount": 35.50 },
    { "from": "Carlos", "to": "João", "amount": 12.00 }
  ]
}
```

### ✅ 4. Quitação de Dívidas
- Um usuário pode quitar parte ou toda a dívida com outro.
- O histórico deve ser mantido.

---

## 📌 Regras de Negócio

- Um grupo pode ter até 10 membros.
- O criador do grupo pode transferir a “propriedade” do grupo.
- Usuários não podem ser duplicados em um mesmo grupo.
- Despesas devem ser registradas apenas por membros do grupo.
- O sistema deve evitar dívidas circulares e inconsistências.

---

## 🛠 Requisitos Técnicos

- Node.js 18+ com TypeScript
- Framework: Express.js ou Fastify
- Banco: PostgreSQL ou SQLite (via Prisma ou TypeORM)
- Arquitetura modular (Clean, DDD, ou Onion)
- Separação de camadas (Controller, Service, Domain, Infra)
- Eventos internos para lógica assíncrona (ex: EventEmitter ou pub/sub)
- DTOs e validação com Zod ou equivalente
- Middlewares para autenticação (token fake ou JWT simples)
- Logger estruturado com contexto de request (reqId)
- Testes com Jest ou Vitest (unitários e integração)
- Documentação mínima no README
- Exceções e erros padronizados

---

## 🎁 Diferenciais (Extras)

- [ ] Caching no resumo de saldo (TTL de 10s)
- [ ] CI com GitHub Actions
- [ ] Docker + docker-compose (PostgreSQL)
- [ ] Swagger com `express-openapi-validator` ou `fastify-swagger`
- [ ] Multitenancy ou RBAC simples
- [ ] Pagamentos parciais e histórico de liquidações
- [ ] Suporte a múltiplas moedas (com conversão estática)

---

## ✅ Avaliação

| Critério                        | Peso |
|-------------------------------|------|
| Arquitetura e organização      | 3    |
| Clareza e legibilidade         | 2    |
| Modelagem de domínio           | 2    |
| Validações e segurança         | 2    |
| Testes e cobertura             | 2    |
| Observabilidade (logs, erros)  | 1    |
| Escalabilidade e modularidade  | 1    |
| Documentação e DX              | 1    |

---

## 📂 Estrutura sugerida

```
src/
├── modules/
│   ├── groups/
│   │   ├── controllers
│   │   ├── services
│   │   ├── entities
│   │   ├── dtos
│   │   └── events
│   ├── expenses/
│   └── users/
├── shared/
│   ├── infra/
│   │   └── http, db, auth
│   ├── utils/
│   └── errors/
```

---

## ▶️ Instruções para executar

```bash
# instalar dependências
npm install

# configurar .env com DB_URL

# rodar migrações
npx prisma migrate dev

# iniciar o servidor
npm run dev
```

---

## 🧪 Testes

```bash
# testes unitários e integração
npm run test
```

---

## 🚀 Entrega

- Suba no GitHub
- Inclua no README:
  - Como rodar local
  - Como rodar testes
  - O que foi feito / O que ficou pendente
  - Quais decisões técnicas você tomou e por quê

---

Boa sorte! Queremos ver código limpo, decisões conscientes e domínio técnico.
