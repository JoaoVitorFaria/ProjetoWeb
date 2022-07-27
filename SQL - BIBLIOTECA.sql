CREATE TYPE tipo_associado AS ENUM ('Grad','Posgrad','Prof');
CREATE TYPE tipo_funcionario AS ENUM ('gerente','funcionario');
CREATE TYPE tipo_reserva AS ENUM ('Iniciado','Avisado','Anulado');

CREATE TABLE IF NOT EXISTS ASSOCIADO (
  Codigo SERIAL NOT NULL,
  Nome varchar(35) NOT NULL,
  Endereco varchar(45) NOT NULL,
  Email varchar(20) NOT NULL,
  Senha varchar(20) NOT NULL,
  Status tipo_associado NOT NULL,
  PRIMARY KEY (Codigo)
);

CREATE TABLE IF NOT EXISTS EMPRESTIMO (
  Codigo SERIAL NOT NULL,
  Nro_Exemplar int NOT NULL,
  ISBN varchar(12) NOT NULL,
  Codigo_Assoc int NOT NULL,
  Data_Emp date NOT NULL,
  Data_Devol date DEFAULT NULL,
  PRIMARY KEY (Codigo),
  UNIQUE (Nro_Exemplar, ISBN),
  UNIQUE (Codigo_Assoc)
); 

CREATE TABLE IF NOT EXISTS EXEMPLAR (
  Numero int NOT NULL,
  ISBN varchar(12) NOT NULL,
  Preco float DEFAULT NULL,
  PRIMARY KEY (Numero, ISBN),
  UNIQUE (ISBN)
);

CREATE TABLE IF NOT EXISTS FUNCIONARIO (
  Codigo SERIAL NOT NULL,
  Nome varchar(35) NOT NULL,
  Funcao tipo_funcionario NOT NULL,
  Email varchar(20) NOT NULL,
  Senha varchar(20) NOT NULL,
  PRIMARY KEY (Codigo)
);

CREATE TABLE IF NOT EXISTS PUBLICACAO (
  ISBN varchar(12) NOT NULL,
  Titulo varchar(40) NOT NULL,
  Autor varchar(35) NOT NULL,
  Editora varchar(30) NOT NULL,
  PRIMARY KEY (ISBN)
);

CREATE TABLE IF NOT EXISTS RESERVA (
  Codigo SERIAL NOT NULL,
  ISBN varchar(12) NOT NULL,
  Codigo_Assoc int NOT NULL,
  Data date NOT NULL,
  Status tipo_reserva NOT NULL,
  PRIMARY KEY (Codigo),
  UNIQUE (ISBN),
  UNIQUE (Codigo_Assoc)
);

ALTER TABLE EMPRESTIMO
  ADD CONSTRAINT EMPRESTIMO_ibfk_1 FOREIGN KEY (Codigo_Assoc) REFERENCES ASSOCIADO (Codigo);

ALTER TABLE EXEMPLAR
  ADD CONSTRAINT EXEMPLAR_ibfk_1 FOREIGN KEY (ISBN) REFERENCES PUBLICACAO (ISBN);

ALTER TABLE RESERVA
  ADD CONSTRAINT RESERVA_ibfk_2 FOREIGN KEY (Codigo_Assoc) REFERENCES ASSOCIADO (Codigo),
  ADD CONSTRAINT RESERVA_ibfk_1 FOREIGN KEY (ISBN) REFERENCES PUBLICACAO (ISBN);