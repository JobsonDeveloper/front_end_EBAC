function Animal(tipo, idade, tamanho) {
    this.tipo = tipo;
    this.idade = idade;
    this.tamanho = tamanho;

    this.comer = function () {
        console.log("Comendo");
    }
}

function Gato(tipo, idade, tamanho) {
    Animal.call(this, tipo, idade, tamanho);

    // Getters
    this.getTipo = function () {
        return tipo;
    }

    this.getIdade = function () {
        return idade;
    }

    this.getTamanho = function () {
        return tamanho;
    }

    // Setters
    this.setTipo = function (tipo) {
        tipo = tipo;
    }

    this.setIdade = function (idade) {
        idade = idade;
    }

    this.setTamanho = function (tamanho) {
        tamanho = tamanho;
    }
}

function Cachorro(tipo, idade, tamanho) {
    Animal.call(this, tipo, idade, tamanho);

    // Getters
    this.getTipo = function () {
        return tipo;
    }

    this.getIdade = function () {
        return idade;
    }

    this.getTamanho = function () {
        return tamanho;
    }

    // Setters
    this.setTipo = function (tipo) {
        tipo = tipo;
    }

    this.setIdade = function (idade) {
        idade = idade;
    }

    this.setTamanho = function (tamanho) {
        tamanho = tamanho;
    }
}

const albert = new Gato("Felino", 2, "30cm");
const filomena = new Gato("Felino", 5, "34cm");
const neguinho = new Cachorro("Canino", 10, "1,32m");
const serjao = new Cachorro("Canino", 7, "1m");

console.log(albert);