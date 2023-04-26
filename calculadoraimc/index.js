const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if(valorIMC < 18.5){
            classificacao = 'Abaixo do peso';
        }if(valorIMC < 25){
            classificacao = 'Peso normal';
        }if(valorIMC < 30){
            classificacao = 'Pré-obesidade';
        }if(valorIMC < 35){
            classificacao = 'Obesidade Grau 1'
        }if(valorIMC < 40 ){
            classificacao = 'Obesidade Grau 2'
        }else{
            classificacao = 'Obesidade Grau 3'
        }

        resultado.textContent = `Olá ${nome} após analisar seus dados o resultado do seu IMC é ${valorIMC} e você está ${classificacao}`;
    }
    else{
        resultado.textContent = 'Preencha todos os campos!'
    }
}

calcular.addEventListener('click', imc);
