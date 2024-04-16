var refinoInicial = 13;
var refinoFinal = 14;
var refinoAtual = refinoInicial;
var bsb = 0;
var tentativas = 1000;
var bsbTentativas = [];
var media;
var mediana;
var moda;

for(; tentativas > 0; tentativas--){

    while(refinoAtual < refinoFinal){

        if(refinoAtual == 15){
            if(Math.random() <= 0.14){
                refinoAtual++;
            } else{
                refinoAtual--;
            }
        }

        if(refinoAtual == 14){
            if(Math.random() <= 0.14){
                refinoAtual++;
            } else{
                refinoAtual--;
            }
        }

        if(refinoAtual == 13){
            if(Math.random() <= 0.15){
                refinoAtual++;
            }
            bsb += 22;
        }

        if(refinoAtual == 12){
            if(Math.random() <= 0.15){
                refinoAtual++;
            } else{
                refinoAtual--;
            }
        }

        if(refinoAtual == 11){
            if(Math.random() <= 0.18){
                refinoAtual++;
            }
            bsb++;
        }
    }

    bsbTentativas.push(bsb);
    refinoAtual = refinoInicial;
    bsb = 0;
}

bsbTentativas.sort(compareNumbers);

media = mediaArray(bsbTentativas);

mediana = medianaArray(bsbTentativas);

moda = modaArray(bsbTentativas);

console.log("Média: ", media);
console.log("Mediana: ", mediana);
console.log("Moda: ", moda);
console.log("Maior Gasto: ", Math.max(...bsbTentativas));

function compareNumbers(a, b) {
    return a - b;
}

function mediaArray(valores){
    var soma = 0;
    for(i in valores){
        soma += valores[i];
    }
    return soma/valores.length;
}

function medianaArray(valores){
    return valores[Math.floor(valores.length/2)];
}

/*function modaArray(valores){
    const repeticoes = new Map();

    for(i in valores){
        if(repeticoes.has(valores[i])){
            repeticoes.set(valores[i], repeticoes.get(valores[i]++))
        } else{
            repeticoes.set(valores[i], 1);
        }
    }


}*/

function modaArray(valores){
    var repeticoes = {}
    var maximo = 0;
    var resultado;

    valores.forEach(valor => {
        repeticoes[valor] = (repeticoes[valor] || 0) + 1;
        if(repeticoes[valor] > maximo){
            maximo = repeticoes[valor];
            resultado = valor;
            return;
        }
    });
    return resultado;
}