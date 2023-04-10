# Kenzie Agenda

Kenzie Agenda é uma api com o objetivo de gerenciar contatos, possuindo as funcionalidades de CRUD de usuários e clientes.

## Tabela de Conteúdos

- [Início Rápido](#3-início-rápido)
  - [Instalando Dependências](#31-instalando-dependências)
  - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
  - [Migrations](#33-migrations)
  - [Scripts](#34-scripts)
- [Endpoints](#4-endpoints)


## 3. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependencias usando:

```shell
yarn install
```

Em seguida, instale as dependencias usando o comando:

### 3.2. Variáveis de Ambiente

Crie um arquivo **.env**, copiando o formato do arquivo **.env.example**

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database.

### 3.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source
```

---

### 3.4. Scripts

Executar aplicação em ambiente de desenvolvimento:

```
yarn dev
```

## 4. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

### Índice

- [Users](#1-Users)
- [Login](#2-Login)
- [Contacs](#3-Products)

---

## 1. **Users**

[ Voltar para o topo ](#tabela-de-conteúdos)

### Endpoints

| Método | Rota                 | Descrição                                                     |
| ------ | -------------------- | ------------------------------------------------------------- | --- |
| POST   | /api/users/          | Criação de um usuário.                                        |     |
| PATCH  | /api/users/:user_id/ | Editar as informações do usuário usando seu ID como parâmetro |
| DELETE | /api/users/:user_id/ | Deletar usuário usando seu ID como parâmetro                  |

---

### 1.1. **Criação de Usuário**

### `POST /users/`

### Exemplo de Request:

```
POST /api/users
Authorization: None
Content-type: application/json
```

### Exemplo de Corpo da Requisição:

```json
{
	"email": "nome@user.com",
	"password": "senha123",
	"name":"Fulano de Tal",
	"phone": "11999999999",
	"imgURL":
}
```

Campos opcionais: imgURL.

### Exemplo de Response:

```
201 Created
```

```json
{
	"email": "cnomeoelho@user.com",
	"name": "Fulano de Tal",
	"phone": "11999999999",
	"imgURL": "http://sitedaimagem/imagem.jpg",
	"id": 4,
	"createdAt": "2023-04-10T02:20:15.208Z",
	"updatedAt": "2023-04-10T02:20:15.208Z"
}
```

O campo password não deve ser retornado, updatedAt, createdAt e id (gerado automaticamente no banco de dados) não são passados na requisição mas devem ser retornados na reposta. Caso a imagem não seja passada, será retornado uma URL Vazia

### Possíveis Erros:

| Código do Erro  | Descrição                            |
| --------------- | ------------------------------------ | --- |
| 400 Bad Request | user with this email already exists. |
| 400 Bad Request | requerid fields.                     |     |
| 400 Bad Request | invalid URL                          |     |

---

### 1.4. **Editar Usuário por ID**

### `PATCH /users/<user_id>/`

### Exemplo de Request:

```
PATCH /users/1
Authorization: Bearer token
Content-type: application/json
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| user_id   | number | Identificador único do usuário (User) |

### Corpo da Requisição:

```json
{
	"email": "nome@user.com"
}
```

Todos os campos são opcionais. Campos que não podem ser editados: id, createdAt, UpdatedAt.

### Exemplo de Response:

```
200 OK
```

```json
{
	"email": "nome@user.com",
	"name": "Coelho branco",
	"phone": "11999999999",
	"imgURL": "",
	"id": 4,
	"createdAt": "2023-04-10T02:20:15.208Z",
	"updatedAt": "2023-04-10T13:07:52.808Z"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição                                    |
| ---------------- | -------------------------------------------- |
| 401 Unauthorized | Authentication credentials were not provided |
| 403 Forbidden    | No have permission                           |
| 404 Not Found    | User not found.                              |

---

### 1.5. **Deletar Usuário por ID**

### `DELETE api/users/<user_id>`

### Exemplo de Request:

```
DELETE/api/users/1
Authorization: Bearer token
Content-type: None
```

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                             |
| --------- | ------ | ------------------------------------- |
| user_id   | string | Identificador único do usuário (User) |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
204 No content
```

```json
Vazio
```

### Possíveis Erros:

| Código do Erro   | Descrição                                    |
| ---------------- | -------------------------------------------- |
| 401 Unauthorized | Authentication credentials were not provided |
| 403 Forbidden    | No have permission                           |
| 404 Not Found    | User not found.                              |

---

## 2. **Login**

[ Voltar para o topo ](#tabela-de-conteúdos)

### Endpoints

| Método | Rota   | Descrição                                       |
| ------ | ------ | ----------------------------------------------- |
| POST   | /login | Autentica o usuário para ter acesso ao sistema. |

### `POST/login`

### Exemplo de Request:

```
POST/login
Authorization: None
Content-type: application/json
```

### Exemplo de Corpo da Requisição:

```json
{
	"email": "user@mail.com",
	"password": "User@1234"
}
```

### Exemplo de Response:

```
200 Ok
```

```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2ODExMzIwNjcsImV4cCI6MTY4MTIxODQ2Nywic3ViIjoiNCJ9.J7mbXCUqHA01ix3zQc5nmIUIRwU2KOwTzBub8vdNdhU"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição                                          |
| ---------------- | -------------------------------------------------- |
| 401 Unauthorized | No active account found with the given credentials |

---

## 3. **Products**

[ Voltar para o topo ](#tabela-de-conteúdos)

### Endpoints

| Método | Rota                    | Descrição                                                         |
| ------ | ----------------------- | ----------------------------------------------------------------- |
| GET    | contacts/users/:user_id | Lista os contatos de um usuário.                                  |
| POST   | contacts/               | Adiciona um contato                                               |
| PATCH  | contacts/:id            | Editar as informações de um contato usando seu ID como parâmetro. |
| PATCH  | contact/:id             | Deleta as informações de um contato usando seu ID como parâmetro. |

---

### 3.1. **Criação de produto**

### Exemplo de Request:

```
POST /contacts/
Authorization: Bearer token
Content-type: application/json
```

### Exemplo de Corpo da Requisição:

```json
{
	"email": "ursoacenando@contato.com",
	"name": "Urso Acenando",
	"phone": "11999999999",
	"imgURL": "https://s4.static.brasilescola.uol.com.br/img/2019/09/panda.jpg",
	"isFavorite": true
}
```

### Exemplo de Response:

```
201 Created
```

```json
{
	{
	"email": "ursoacenando@contato.com",
	"name": "Urso Acenando",
	"phone": "11999999999",
	"imgURL": "https://s4.static.brasilescola.uol.com.br/img/2019/09/panda.jpg",
	"isFavorite": true,
	"user": {
		"email": "panda@user.com",
		"name": "Panda Bebe",
		"phone": "11999999999",
		"imgURL": "",
		"id": 3,
		"createdAt": "2023-04-10T02:19:59.985Z",
		"updatedAt": "2023-04-10T02:19:59.985Z"
	},
	"id": 6,
	"createdAt": "2023-04-10T02:28:21.957Z",
	"updatedAt": "2023-04-10T02:28:21.957Z"
    }
}
```

O campo isFavorite é opcional e caso não seja passado o valor será falso.

### Possíveis Erros:

| Código do Erro   | Descrição                                          |
| ---------------- | -------------------------------------------------- |
| 400 Bad request  | This field is required. (Invalid body)             |
| 401 Unauthorized | Authentication credentials were not provided.      |
| 403 Forbiden     | You do not have permission to perform this action. |
| 404 Not Found    | User not found.                                    |

---

### 3.2. **Listando produtos**

### `GET /contacts/users/:user_id `

### Exemplo de Request:

```
GET /contacts
Authorization: Bearer token
Content-type: None
```

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
{
	"email": "flavia@user.com",
	"name": "Flavia Monteiro",
	"phone": "11999999999",
	"imgURL": "https://s2.glbimg.com/kmbgBzKPL0URISIQenPiAKo4ORI=/e.glbimg.com/og/ed/f/original/2017/08/23/5c147f01-dff6-4952-98a0-9394c88361c2.jpg",
	"id": 1,
	"createdAt": "2023-04-10T02:18:03.917Z",
	"updatedAt": "2023-04-10T02:18:03.917Z",
	"contacts": [
		{
			"email": "gatodebigode@contato.com",
			"name": "Gato de Bigode",
			"phone": "11999999999",
			"imgURL": "https://rockntech.com.br/wp-content/uploads/2014/12/gatos-famosos-na-internet_13.jpg",
			"isFavorite": true
		},
		{
			"email": "gatofashion@contato.com",
			"name": "Gato Fashion",
			"phone": "11999999999",
			"imgURL": "https://i.pinimg.com/736x/d0/ba/4c/d0ba4ca3d138077c40cb179026e19ce4.jpg",
			"isFavorite": false
		},
		{
			"email": "gatocarente@contato.com",
			"name": "Gato Carente",
			"phone": "11999999999",
			"imgURL": "",
			"isFavorite": false
		},
		{
			"email": "gatofeliz@contato.com",
			"name": "Gato Feliz",
			"phone": "11999999999",
			"imgURL": "",
			"isFavorite": false
		}
	]
}
``

### Possíveis Erros:

| Código do Erro   | Descrição                                     |
| ---------------- | --------------------------------------------- |
| 401 Unauthorized | Authentication credentials were not provided. |

---

### 3.3. **Editar contato por ID**

### `PATCH /api/contatcs/<id>`

### Exemplo de Request:

```

PATCH /contacts/2
Authorization: Bearer token
Content-type: application/json

````

### Parâmetros da Requisição:

| Parâmetro  | Tipo   | Descrição                                |
| ---------- | ------ | ---------------------------------------- |
| id         | string | Identificador único do contato           |

### Exemplo de Corpo da Requisição:

```json
{
	"phone": "11944999999"
}
````

### Exemplo de Response:

```
200 OK
```

```json
{
	"email": "valg@contacts.com",
	"name": "Gato de Bigode",
	"phone": "11944999999",
	"imgURL": "https://rockntech.com.br/wp-content/uploads/2014/12/gatos-famosos-na-internet_13.jpg",
	"isFavorite": true,
	"id": 1,
	"createdAt": "2023-04-10T02:25:16.570Z",
	"updatedAt": "2023-04-10T13:22:14.823Z"
}
```

### Possíveis Erros:

| Código do Erro   | Descrição                                          |
| ---------------- | -------------------------------------------------- |
| 401 Unauthorized | Authentication credentials were not provided.      |
| 403 Forbiden     | You do not have permission to perform this action. |
| 404 Not Found    | Not found.                                         |

---

### 3.4. **Deletar contato por ID**

### `DELETE /contacts/<product_id>/`

### Exemplo de Request:

```
DELETE /contacts/1
Authorization: None
Content-type: None
```

### Parâmetros da Requisição:

| Parâmetro  | Tipo   | Descrição                                |
| ---------- | ------ | ---------------------------------------- |
| product_id | string | Identificador único do produto (Product) |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
204 OK
```

```json
{}
```

### Possíveis Erros:

| Código do Erro | Descrição  |
| -------------- | ---------- |
| 404 Not Found  | Not found. |

---
