var array = [0,1]; //para programação dinâmica da questão 2

function Q1(){

    console.log("Questão 1:");
    let INDICE = 13, SOMA = 0, K = 0;

    while (K < INDICE){
        K = K + 1;
        SOMA = SOMA + K;
    }

    document.getElementById("q1").innerText = SOMA;
    console.log(SOMA);

}

function Q2(){

    console.log("Questão 2:");

    let entrada = document.getElementById("Q2").value;
    console.log(entrada);
    if(entrada){
        let n = parseInt(entrada);
        let resposta = fibonacci(n);

        document.getElementById("q2").innerText = resposta;
        console.log(resposta);
    } else {
        console.log("Digite um valor válido");
        document.getElementById("q2").innerText = "Digite um valor válido";
    }

    document.getElementById("Q2").innerText = "";

}

function fibonacci(n){

    let i = 0;
    while(true){

        if (i === array.length)
            array.push(array[i-1]+array[i-2]);

        if (array[i] === n) return ("Pertence a sequência");

        if (array[i] > n) return ("Não pertenece a sequência");

        i+=1;
    }

}

function Q3(){

    console.log("Questão 3:");

    let a = "a) 9 (aumentando de 2 em 2)";
    let b = "b) 128 (potências de 2)";
    let c = "c) 49 (quadrados perfeitos)";
    let d = "d) 100 (as variaçoes estão aumentando com fator de 8)";
    let e = "e) 13 (fibonacci)";
    let f = "f) 200 (números que iniciam com a letra d)";

    console.log(a);
    document.getElementById("a").innerText = a;
    console.log(b);
    document.getElementById("b").innerText = b;
    console.log(c);
    document.getElementById("c").innerText = c;
    console.log(d);
    document.getElementById("d").innerText = d;
    console.log(e);
    document.getElementById("e").innerText = e;
    console.log(f);
    document.getElementById("f").innerText = f;

}

function Q4(){
    console.log("Questão 4:");
    let resposta = "A questão está mal escrita (não sei se foi de propósito para ser uma pegadinha). No momento exato que se cruzam ambos vão estar a mesma distância de Ribeirão. Se for o instante logo após se cruzarem, o caminhão estará mais perto de Ribeirão porque apesar do carro ser mais rápido e não parar no pedágio, ele está apenas se distanciando. Até daria para dizer onde eles se encontrariam, porém falta informação sobre onde os pedágios se encontram";
    console.log(resposta);
    document.getElementById("q4").innerText = resposta;
}

function Q5(){

    console.log("Questão 5");
    let string = document.getElementById("Q5").value;

    let resposta = reverse(string);

    console.log(resposta);
    document.getElementById("q5").innerText = string + " -> " + resposta;
    document.getElementById("Q5").value = "";

}

function reverse(string){

    let reversedString = "";
    for(let i=string.length-1; i>=0; i--){
        reversedString += string[i];
    }
    return reversedString;
}