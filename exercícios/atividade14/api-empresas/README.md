# API de Gerenciamento de Projetos e Tarefas

Este projeto é uma API REST completa para gerenciar um sistema de empresas com departamentos, cargos, funcionários, projetos e tarefas. A API foi desenvolvida utilizando Node.js, Express, MongoDB Atlas, Mongoose e Yup, seguindo o padrão MVC.

## Estrutura do Projeto

```
api-empresas
├── src
│   ├── index.js                     # Ponto de entrada da aplicação
│   ├── models                        # Modelos Mongoose para as entidades
│   │   ├── DepartamentoModel.js      # Modelo para a entidade Departamento
│   │   ├── CargoModel.js             # Modelo para a entidade Cargo
│   │   ├── FuncionarioModel.js       # Modelo para a entidade Funcionário
│   │   ├── ProjetoModel.js           # Modelo para a entidade Projeto
│   │   └── TarefaModel.js            # Modelo para a entidade Tarefa
│   ├── controllers                   # Controladores para as rotas
│   │   ├── DepartamentoController.js  # Controlador para Departamento
│   │   ├── CargoController.js         # Controlador para Cargo
│   │   ├── FuncionarioController.js   # Controlador para Funcionário
│   │   ├── ProjetoController.js       # Controlador para Projeto
│   │   └── TarefaController.js        # Controlador para Tarefa
│   └── validators                    # Validações com Yup
│       ├── DepartamentoValidator.js    # Validações para Departamento
│       ├── CargoValidator.js          # Validações para Cargo
│       ├── FuncionarioValidator.js    # Validações para Funcionário
│       ├── ProjetoValidator.js        # Validações para Projeto
│       ├── TarefaValidator.js         # Validações para Tarefa
│       └── IDValidator.js             # Validações para IDs
├── .env                              # Variáveis de ambiente
├── .gitignore                        # Arquivos a serem ignorados pelo Git
├── package.json                      # Metadados do projeto e dependências
└── README.md                         # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd api-empresas
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Configure as variáveis de ambiente no arquivo `.env`:
   ```
   DB_USER=seu_usuario
   DB_PASS=sua_senha
   DB_HOST=seu_host
   DB_NAME=nome_do_banco
   ```

## Execução

Para iniciar o servidor, utilize o seguinte comando:

```
npm start
```

O servidor estará disponível em `http://localhost:3000`.

## Testes

Utilize o Postman para testar os endpoints da API. Crie uma coleção para organizar as requisições e teste as operações CRUD para cada entidade.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Faça um fork do repositório e envie suas alterações através de um pull request.

## Licença

Este projeto é de uso livre.