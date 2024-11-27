/* CRIAÇÃO DO BANCO DE DADOS PARA O CENÁRIO DE E-COMERCE */
create database ecommerce;
use ecommerce;

/* Criar tabela cliente */
create table client(
	idClient int primary key auto_increment,
    fname varchar(10),
    minit char(3),
    lName varchar(45),
    cpf char(11) not null,
    address varchar(64),
    constraint unique_cpf_client unique(cpf)
);


/* Criar tabela produto */
-- size = dimenção do produto
create table product(
	idProduct int primary key auto_increment,
    pName varchar(10) not null,
    classificationKids bool default false,
    category enum('Eletrônico','Vestimenta','Brinquedos','Alimentos','Móveis') not null,
    avaliation float default 0,
    size varchar(10)
);


/* Criar tabela pedido */
create table orderr(
	idOrder int primary key auto_increment
);
