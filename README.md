# 🚀 API de Usuários e Pedidos

API REST desenvolvida em Node.js para cadastro de usuários e pedidos.


## 🧰 Tecnologias

* Node.js (Express)
* MongoDB
* bcrypt
* JWT (JSON Web Token)
* dotenv


## ⚙️ Instalação

```bash
git clone <URL_DO_REPOSITORIO>
cd nome-do-projeto
npm install
```

## 🔐 Configuração

Crie um arquivo `.env`:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/desafio-api
JWT_SECRET=sua_chave_secreta
```


## ▶️ Execução

```bash
npm run dev
```

ou

```bash
npm start
```


## 🔑 Autenticação

Após o login, utilize o token:

```http
Authorization: Bearer SEU_TOKEN
```

# 📡 Endpoints

## 👤 Usuários

### Criar usuário

**POST** `/users`

```json
{
  "cpf": "12345678900",
  "rg": "1234567",
  "nome": "Tiago",
  "idade": 25,
  "email": "tiago@email.com",
  "login": "tiago",
  "senha": "123456"
}
```

---

### Login

**POST** `/auth/login`

```json
{
  "login": "tiago",
  "senha": "123456"
}
```

**Resposta:**

```json
{
  "token": "jwt_token"
}
```

### Listar usuários ativos

**GET** `/users`

**Resposta:**

```json
[
  {
    "usuarioId": "ID",
    "nome": "Tiago",
    "login": "tiago"
  }
]
```

### Listar usuários inativos

**GET** `/users/inactive`

```json
[
  {
    "_id": "69ea9072188cf9193a807583",
    "nome": "Julio Moraes",
    "idade": 29,
    "email": "julio@teste.com",
    "login": "Julio"
  }
]
```

### Atualizar usuário

**PUT** `/users/:id`

```json
{
  "nome": "Novo Nome",
  "idade": 26
}
```

### Inativar usuário

**DELETE** `/users/:id`

```json
{
  "message": "Usuário desativado"
}
```

## 🛒 Pedidos

### Criar pedido

**POST** `/orders`

```json
{
  "usuarioId": "ID_DO_USUARIO",
  "descricao": "mouse gamer"
}
```

### Listar todos os pedidos

**GET** `/orders`

**Resposta:**

```json
[
  {
    "usuarioId": "ID_DO_USUARIO",
    "descricao": "mouse gamer"
  }
]
```

### Listar pedidos por usuário

**GET** `/orders/user/:id`

## 🧠 Regras

* Senha criptografada com bcrypt
* Autenticação com JWT
* Usuários inativos não podem logar
* Listagens retornam apenas dados necessários

## 📁 Estrutura

```bash
src/
 ├── controllers/
 ├── middlewares/
 ├── services/
 ├── models/
 ├── routes/
 └── app.js
```

## 👨‍💻 Autor

Tiago dos Santos
