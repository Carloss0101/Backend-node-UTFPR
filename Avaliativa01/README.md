# Atividade Avaliativa — Node.js + Sequelize

## Instalação

Clone o repositório:

```bash
git clone https://github.com/Carloss0101/Backend-node-UTFPR
```

Entre na pasta do projeto:

```bash
cd Backend-node-UTFPR/Avaliativa01
```

Instale as dependências:

```bash
npm install
```

## Configuração do banco de dados

Configure as credenciais de conexão com o MySql no arquivo config/db.js.

Verifique se o banco de dados foi criado antes de executar a aplicação.

## Executando o projeto

Inicie a aplicação utilizando o Nodemon:

```bash
npm run dev
```


## Testes

Para facilitar os testes das rotas, execute o seguinte comando SQL para inserir alguns registros na tabela `Pessoas`:

```sql
INSERT INTO "Pessoas" (nome, idade, descricao) VALUES
('Ana Silva', 22, 'Estudante de Engenharia de Software'),
('Carlos Eduardo', 25, 'Desenvolvedor Full Stack'),
('Joao Pedro', 19, 'Estudante universitario'),
('Mariana Costa', 30, 'Analista de sistemas'),
('Ana Paula', 17, 'Estudante do ensino medio'),
('Felipe Rodrigues', 28, 'Desenvolvedor backend'),
('Juliana Alves', 35, 'Gerente de projetos'),
('Gabriel Santos', 21, 'Estudante de computacao'),
('Fernanda Oliveira', 26, 'Designer de interfaces'),
('Lucas Martins', 40, 'Administrador de empresas');
```

Os registros podem ser utilizados para testar a listagem, os filtros, a ordenação e a paginação da API.