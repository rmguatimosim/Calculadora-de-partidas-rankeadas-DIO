//função que recebe o número de vitórias e derrotas do jogador e retorna o saldo de vitórias
function calculaSaldo(win, lose){
    return win - lose;
}
//função que recebe o saldo de vitórias do jogador e retorna a string contendo o nível do jogador
function calculaNivel(saldo){
    if(saldo<=10){
        return "Ferro";
    }
    else if(saldo>10 && saldo<=20){
        return "Bronze";
    }
    else if(saldo>20 && saldo<=50){
        return "Prata";
    }
    else if(saldo>50 && saldo<=80){
        return "Ouro"; 
    }
    else if(saldo>80 && saldo<=90){
        return "Diamante";
    }
    else if(saldo>90 && saldo<=100){
        return "Lendário";
    }
    else{
        return "Imortal";      
    }
}
//função que recebe o saldo de vitórias do jogador e imprime no console a mensagem de saída com saldo de vitórias e nível do jogador.
function saidaDeDados(saldoVitorias){
    console.log("O Herói tem de saldo de *" + saldoVitorias + " vitórias* e está no nível de *" + calculaNivel(saldoVitorias) +"*")
}


saidaDeDados(calculaSaldo(130,50));
saidaDeDados(calculaSaldo(30,25));
saidaDeDados(calculaSaldo(200,80));
saidaDeDados(calculaSaldo(75,31));
saidaDeDados(calculaSaldo(17,25));

