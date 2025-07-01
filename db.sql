-- Criação do esquema e uso do mesmo
CREATE DATABASE IF NOT EXISTS api_ideas;
SHOW DATABASES;
USE api_ideas;


-- Criação da tabela de usuários
START TRANSACTION;
CREATE TABLE IF NOT EXISTS Users (
    UserID INT PRIMARY KEY,
    UserName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL
);

-- Criação da tabela de categorias de ideias
CREATE TABLE IF NOT EXISTS IdeaCategories (
    CategoryID INT PRIMARY KEY,
    CategoryName VARCHAR(50) NOT NULL
);

-- Criação da tabela de status de ideias
CREATE TABLE IF NOT EXISTS IdeaStatus (
    StatusID INT PRIMARY KEY,
    StatusName VARCHAR(50) NOT NULL
);

-- Criação da tabela de ideias
CREATE TABLE IF NOT EXISTS Ideas (
    IdeaID INT PRIMARY KEY,
    Title VARCHAR(100),
    Description TEXT,
    CreatedDate DATE,
    UserID INT,
    CategoryID INT,
    StatusID INT
    
);
COMMIT;

-- Inserção de dados
START TRANSACTION;
-- Inserção de dados na tabela Users

INSERT IGNORE INTO Users (UserID, UserName, Email)
VALUES
    (1, 'John Doe', 'john.doe@example.com'),
    (2, 'Jane Smith', 'jane.smith@example.com'),
    (3, 'Robert Johnson', 'robert.johnson@example.com');


-- Inserção de dados na tabela IdeaCategories
INSERT IGNORE INTO IdeaCategories (CategoryID, CategoryName)
VALUES
    (1, 'Tecnologia'),
    (2, 'Negócios'),
    (3, 'Criatividade');

-- Inserção de dados na tabela IdeaStatus
INSERT IGNORE INTO IdeaStatus (StatusID, StatusName)
VALUES
    (1, 'Em Desenvolvimento'),
    (2, 'Implementada'),
    (3, 'Arquivada');

-- Inserção de dados na tabela Ideas
INSERT IGNORE INTO Ideas (IdeaID, Title, Description, CreatedDate, UserID, CategoryID, StatusID)
VALUES
    (1, 'App de Gestão de Ideias', 'Desenvolver uma aplicação móvel para capturar e organizar ideias', '2024-02-15', 1, 1, 1),
    (2, 'Plataforma de Crowdfunding', 'Criar uma plataforma para financiamento coletivo de projetos inovadores', '2024-01-30', 2, 2, 1),
    (3, 'Sistema de IA para Análise de Dados', 'Desenvolver um sistema de inteligência artificial para análise preditiva', '2024-02-10', 3, 1, 1),
    (4, 'Marketplace de Serviços Criativos', 'Plataforma para conectar artistas e clientes', '2024-02-20', 1, 2, 1),
    (5, 'App de Gamificação para Fitness', 'Aplicação que transforma exercícios em jogos', '2024-01-31', 2, 1, 1),
    (6, 'Sistema de Gestão de Energia Verde', 'Monitoramento inteligente de consumo de energia renovável', '2024-02-05', 1, 1, 1),
    (7, 'Plataforma de Educação Online', 'Sistema de cursos interativos com realidade virtual', '2024-02-18', 1, 3, 1),
    (8, 'App de Conectividade Social', 'Rede social focada em interesses específicos', '2024-02-03', 2, 2, 1),
    (9, 'Sistema de Automação Residencial', 'Controle inteligente de dispositivos domésticos', '2024-02-08', 3, 1, 1),
    (10, 'Plataforma de Mentoria', 'Conectar mentores experientes com iniciantes', '2024-02-01', 2, 2, 1),
    (11, 'App de Gestão de Projetos', 'Ferramenta colaborativa para equipes remotas', '2024-02-25', 1, 1, 1),
    (12, 'Sistema de Reciclagem Inteligente', 'IoT para otimizar processos de reciclagem', '2024-02-12', 2, 1, 1),
    (13, 'Plataforma de Micro-investimentos', 'Permitir investimentos pequenos em startups', '2024-02-06', 3, 2, 1),
    (14, 'App de Saúde Mental', 'Ferramentas digitais para bem-estar psicológico', '2024-02-28', 1, 3, 1),
    (15, 'Sistema de Logística Verde', 'Otimização de rotas para reduzir emissões', '2024-02-15', 1, 1, 1),
    (16, 'Plataforma de Freelancers', 'Marketplace para serviços profissionais', '2024-02-14', 1, 2, 1),
    (17, 'App de Aprendizado de Idiomas', 'Método inovador com IA para aprender idiomas', '2024-02-07', 2, 3, 1),
    (18, 'Sistema de Agricultura Inteligente', 'IoT para otimizar produção agrícola', '2024-02-22', 3, 1, 1),
    (19, 'Plataforma de Eventos Virtuais', 'Experiências imersivas online', '2024-02-17', 1, 3, 1),
    (20, 'App de Gestão Financeira', 'Ferramenta inteligente para controle de gastos', '2024-02-11', 2, 2, 1),
    (21, 'Sistema de Segurança Residencial', 'Monitoramento inteligente com IA', '2024-02-23', 3, 1, 1),
    (22, 'Plataforma de Compartilhamento', 'Sistema de compartilhamento de recursos', '2024-02-04', 3, 2, 1),
    (23, 'App de Produtividade', 'Ferramenta para otimizar fluxo de trabalho', '2024-02-09', 1, 1, 1),
    (24, 'Sistema de Turismo Sustentável', 'Plataforma para viagens eco-friendly', '2024-02-19', 2, 2, 1),
    (25, 'App de Networking Profissional', 'Conectar profissionais por interesses', '2024-02-26', 3, 2, 1),
    (26, 'Sistema de Monitoramento Ambiental', 'IoT para monitorar qualidade do ar', '2024-02-13', 2, 1, 1),
    (27, 'Plataforma de Cursos Personalizados', 'Educação adaptativa com IA', '2024-02-16', 1, 3, 1),
    (28, 'App de Gestão de Tempo', 'Ferramenta para otimizar rotina diária', '2024-02-21', 2, 2, 1),
    (29, 'Sistema de Telemedicina', 'Plataforma para consultas médicas online', '2024-02-24', 3, 1, 1),
    (30, 'App de Criatividade', 'Ferramentas para estimular inovação', '2024-02-27', 1, 3, 1);
COMMIT;

