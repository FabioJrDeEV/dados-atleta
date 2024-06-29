class Atletas {
    constructor(nome, idade, peso, altura, notas){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }
    calcularCategoria(){
        if(this.idade >=9 && this.idade <= 11){
            return `Infantil`
        }else if(this.idade >= 12 && this.idade <= 13){
            return `Juvenil`
        }else if(this.idade >= 14 && this.idade <= 15){
            return `Intermediário`
        }else if(this.idade >= 16 && this.idade <=30){
            return `Adulto`
        }else{
            return `Sem categoria`
        }
    }
    calcularIMC(){
        let pesoIMC = this.peso / (this.altura * this.altura)
        return pesoIMC
    }
    calcularMediaValida(){
        let notasArr = this.notas.sort(function(a, b){
            return a - b
        })
        let notasCorte = notasArr.slice(1, notasArr.length - 1)
        let soma = 0
        notasCorte.forEach(function(nota){
            soma = soma + nota
            return soma
        })
        let media = soma / notasCorte.length
        return media
    
    }
    obtemNomeAtleta(){
        return this.nome
    }
    obtemIdadeAtleta(){
        return this.idade
    }
    obtemPesoAtleta(){
        return this.peso
    }
    obtemNotasAtleta(notasArr){
        notasArr = this.notas.sort(function(a, b){
            return a - b
        })
        return notasArr
    }
    obtemCategoria(){
        return this.calcularCategoria()
    }
    obtemIMC(){
        return this.calcularIMC()
    }
    obtemMediaValida(){
        return this.calcularMediaValida()
    }
    obtemAltura(){
        return this.altura
    }
}
const atleta = new Atletas("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88])
console.log(`
    Nome: ${atleta.obtemNomeAtleta()}
    Idade: ${atleta.obtemIdadeAtleta()}
    Peso: ${atleta.obtemPesoAtleta()}
    Altura: ${atleta.obtemAltura()}
    Categoria: ${atleta.calcularCategoria()}
    IMC: ${atleta.obtemIMC()}
    Média Válida: ${atleta.obtemMediaValida()}
`)