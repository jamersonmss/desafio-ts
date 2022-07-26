// Como podemos melhorar o esse código usando TS? 

enum Trabalho {
    Desenvolvedor,
    Consultor,
    Motorista,
    Vendedora
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Trabalho
}

let pessoa1: Humano = {
    nome: "Carlos",
    idade: 29,
    profissao: Trabalho.Consultor
};

let pessoa2: Humano = {
    nome: "Rodrigo",
    idade: 25,
    profissao: Trabalho.Desenvolvedor
};

let pessoa3: Humano = {
    nome: "Beatriz",
    idade: 21,
    profissao: Trabalho.Vendedora
};

let pessoa4: Humano = {
    nome: "Arnaldo",
    idade: 35,
    profissao: Trabalho.Motorista
};