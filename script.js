var num = 11;
var bsb = 0;
var tentativas;
var bsbTentativas = [];
var soma = 0;
var media;

for(tentativas = 100000; tentativas > 0; tentativas--){
    while(num < 14){
        if(num == 11){
            if(Math.random() <= 0.18){
                num++;
            }
            bsb++;
        }

        if(num == 12){
            if(Math.random() <= 0.15){
                num++;
            } else{
                num--;
            }
        }

        if(num == 13){
            if(Math.random() <= 0.15){
                num++;
            }
            bsb += 22;
        }

        /*if(num == 14){
            if(Math.random() <= 0.14){
                num++;
            } else{
                num--;
            }
        }*/
    }
    bsbTentativas.push(bsb);
    num = 11;
    bsb = 0;
}

for(var i = bsbTentativas.length; i > 0; i--){
    soma += bsbTentativas[i-1];
}
media = soma / bsbTentativas.length;

console.log("gasto em bsb por tentativa: ", bsbTentativas);
console.log("gasto médio: ", media);
console.log("maior gasto: ", Math.max(...bsbTentativas));
