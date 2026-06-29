Raízes do Nordeste - API de Gestão de Pedidos
API RESTful desenvolvida para o projeto multidisciplinar de Análise e Desenvolvimento de Sistemas, focada na gestão de pedidos, estoque e fidelização para a rede "Raízes do Nordeste". 
O sistema prioriza a leveza, a portabilidade e a conformidade com práticas de qualidade de software (QA).


🚀 Tecnologias Utilizadas
Runtime: Node.js (v20 LTS via NVM)
Framework: Express.js
Banco de Dados: SQLite3 (Persistência leve e serverless)
Segurança: Helmet, CORS
Ambiente: Zorin OS (Base Debian/Ubuntu)
📂 Estrutura do Projeto
O projeto segue uma arquitetura modular para facilitar a manutenção e os testes:


.
├── src/
│   ├── app.js          # Configuração do Express, middlewares e rotas
│   ├── controllers/    # Lógica de negócio (Pedidos)
│   ├── models/         # Interação com o banco de dados
│   └── routes/         # Definição dos endpoints da API
├── init_db.js          # Script de migração e criação do schema
├── server.js           # Ponto de entrada (Entry Point)
├── .env                # Variáveis de ambiente
└── database.sqlite     # Arquivo de banco de dados (gerado automaticamente)
🛠️ Instalação e Execução
Clone o repositório:
bash

 

2. Instale as dependências:
```bash
    npm install
    ```

3. Inicialize o banco de dados:
```bash
    node init_db.js
    ```

4. Inicie o servidor:
```bash
    npm start
    ```
*O servidor estará rodando em `http://localhost:3000`.*

## 🧪 Testes de Endpoint

Você pode testar a API utilizando cURL ou ferramentas como Postman/Insomnia.

**Criar um novo pedido:**
```bash
curl -X POST http://localhost:3000/api/pedidos \
     -H "Content-Type: application/json" \
     -d '{
       "clienteId": 1,
       "itens": [
         { "produto": "Feijão", "quantidade": 2, "precoUnitario": 5.99 },
         { "produto": "Arroz", "quantidade": 1, "precoUnitario": 4.50 }
       ]
     }'
🛡️ Engenharia de Qualidade & Desafios Técnicos
Durante o desenvolvimento, foram aplicadas práticas de QA (Quality Assurance) para garantir a robustez do sistema:

Resolução de Caminhos (Path Resolution): Foi identificada e corrigida uma falha crítica de portabilidade onde o SQLite não localizava o banco de dados devido a caminhos relativos inconsistentes. A solução utilizou o módulo nativo path e __dirname para garantir que o banco seja sempre acessado na raiz do projeto, independentemente de onde o script seja executado.
Segurança: Implementação de middlewares para proteção contra ataques comuns (SQL Injection via prepared statements, XSS via Helmet).
Métricas: Baixo acoplamento e alta coesão através da separação de responsabilidades (MVC simplificado).
📄 Licença
Este projeto é parte de uma atividade acadêmica e está disponível para fins educacionais.
