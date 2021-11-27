
function calcular (){
    let select1 = parseInt(document.getElementById('seleciona-temperatura1').value);
    let select2 = parseInt(document.getElementById('seleciona-temperatura2').value);
    let temperaturaC = document.getElementById('temperaturaC').value; 
    let formulaCK = parseInt(temperaturaC) + 273;
    let formulaCF = (parseInt(temperaturaC) * 1.8) + 32;
    let formulaKF = parseInt(temperaturaC) - 459.67;
    let formulaKC = parseInt(temperaturaC) - 273.15;
    let formulaFK = parseInt(temperaturaC) + 255.92;
    let formulaFC = parseInt(temperaturaC) - 17.22;
    let resultado = document.getElementById('resultado');

    // if(select1 === 0 || select2 === 0){
    //     let nome = 'Kelvin';
    // }else if(select1 === 1 || select2 === 1){
    //     let nome = 'ºFahrenheit';
    // }else if(select1 === 2 || select2 === 2){
    //     let nome = 'ºCelsius';
    // }

    if(select1 === 0 && select2 === 0 || select1 == 1 && select2 == 1 || select1 == 2 && select2 == 2){
        switch(select1 || select2){
            case 0:
                resultado.innerHTML = (`A temperatura em Kelvin é ${temperaturaC}`)
            break;
            case 1:
                resultado.innerHTML = (`A temperatura em Fahrenheit é ${temperaturaC}`)
            break;
            case 2:
                resultado.innerHTML = (`A temperatura em Celsius é ${temperaturaC}`)
            break;
            
        } 
       
    } else if(select1 === 0 && select2 === 1){
        let formulaKF = temperaturaC - 459.67;
        resultado.innerHTML = (`${temperaturaC} Kelvin em Fahrenheit é ${formulaKF}Fahrenheit`)
    } else if(select1 === 0 && select2 === 2){
        let formulaKC = temperaturaC - 273.15;
        resultado.innerHTML = (`${temperaturaC} Kelvin em Celsius é ${formulaKC}ºC`)
    } else if(select1 === 2 && select2 === 0){
        let formulaCK = parseInt(temperaturaC) + 273;
        resultado.innerHTML = (`${temperaturaC}º Celsius em Kelvin é ${formulaCK}`)
    } else if(select1 === 2 && select2 === 1){
        let formulaCF = (parseInt(temperaturaC) * 1.8) + 32;
        resultado.innerHTML = (`${temperaturaC}º Celsius em Kelvin é ${formulaCF}`)
    } else if(select1 === 1 && select2 === 0){
        let formulaFK = parseInt(temperaturaC) + 255.92;
        resultado.innerHTML = (`${temperaturaC}º Celsius em Kelvin é ${formulaFK}`)
    } else if(select1 === 1 && select2 === 2){
        let formulaFC = parseInt(temperaturaC) - 17.22;
        resultado.innerHTML = (`${temperaturaC} Fahrenheit em Celsius é ${formulaFC}ºC`)
    }
};




// if(select1 === 0 && select2 === 0 || select1 == 1 && select2 == 1 || select1 == 2 && select2 == 2){
//     if(select1 === 0 && select2 === 0 || select1 == 1 && select2 == 1 || select1 == 2 && select2 == 2){
//         resultado.innerHTML = (`A temperatura em é ${temperaturaC}`)
//     }
// };


    // resultado.innerHTML = (`${temperaturaC}ºC em Kelvin é ${formulaK}K`)
    // }else if(select1 == 1){
    //     resultado.innerHTML = (`${temperaturaC}ºC em Fahrenheit é ${formulaF}ºF`)
    // }
    // resultado.innerHTML =` A temperatura ${temperaturaC}ºC em Fahrenheit é ${formulaF} `;
    


    // switch(select1){
    //     case 0: 
    //         resultado.innerHTML = (`${temperaturaC}ºC em Kelvin é ${formulaK}K`);
    //     break;
    //     case 1:
    //         resultado.innerHTML = (`${temperaturaC}ºC em Fahrenheit é ${formulaF}ºF`);
    //     break;
    //     case 2:
    //         resultado.innerHTML = (`${temperaturaC}ºC em Fahrenheit é ${formulaF}ºF`);
    //     break;
    //     default:
    //         resultado.innerHTML = ('erro')
    //     break;    
    // }





















// function calcular (){
//     let select = document.getElementById('seleciona-temperatura').value;
    
    
//     // console.log(select);


//     let temperatura = document.getElementById('temperatura').value;  
//     let resultado = document.getElementById('resultado');
//     let calculo = (temperatura * 1.8) + 32;

//     resultado.innerHTML =` A temperatura ${temperatura}ºC em Fahrenheit é ${calculo} `;
// };











































// // Definir variavel caixa //
// let caixa = document.getElementById('caixa');
// // Adicionar eventos com mouse na variavel caixa //
// caixa.addEventListener('click', clicar);
// caixa.addEventListener('mouseenter', entrar);
// caixa.addEventListener('mouseout', sair);

// // Criar funçao da variavel clicar // innerHtml o = sobreescreve e += adiciona o texto ao lado //
// function clicar (){
//     caixa.innerHTML = 'voce clicou';
//     caixa.style.background = 'red';
//     caixa.style.color = 'white';
// }

// // Criar funçao da variavel entrar (Ativa quando o mouse passar dentro da Div) //
// function entrar (){
//     caixa.innerHTML = 'Voce Entrou';
//     caixa.style.background = 'yellow';
//     caixa.style.color = 'black';
// }

// // Criar funçao da variavel sair (Ativa quando tirar o mouse de dentro da Div) //
// function sair (){
//     caixa.innerHTML = 'Passe o mouse';
//     caixa.style.background = 'green';
//     caixa.style.color = 'white';
//     caixa.style.fontWeight = '900';
// }

// // Pegar a data do computador //
// let agora = new Date();
// // Pegar dia da semana em valores numericos //
// let diaSemana = agora.getDay();
// // Pegar o Id da Div //
// let data = document.getElementById('data');

// // switch(diaSemana){
// //     case 0:
// //         console.log('Domingo');
// //         data.innerHTML = 'Domingo';
// //         data.style.background = ' gray';
// //     break;
// //     case 1:
// //         console.log('Segunda');
// //         data.innerHTML = 'Segunda';
// //         data.style.background = ' yellow';
// //     break;
// //     case 2:
// //         console.log('Terça');
// //         data.innerHTML = 'Terça';
// //         data.style.background = ' red';
// //     break;
// //     case 3:
// //         console.log('Quarta');
// //         data.innerHTML = 'Quarta';
// //         data.style.background = ' blue';
// //     break;
// //     case 4:
// //         console.log('Quinta');
// //         data.innerHTML = 'Quinta';
// //         data.style.background = ' pink';
// //     break;
// //     case 5:
// //         console.log('Sexta');
// //         data.innerHTML = 'Sexta';
// //         data.style.background = ' gold';
// //     break;
// //     case 6:
// //         console.log('Sabado');
// //         data.innerHTML = 'Sabado';
// //         data.style.background = ' darkblue';
// //     break;
// //     default:
// //         console.log('Dia invalido');
// //     break;
// // }

// if(diaSemana == 0){
//     data.innerHTML = ('Domingo');
//     data.style.background = ('black');
// } else if(diaSemana == 1){
//     data.innerHTML = ('Segunda');
//     data.style.background = ('blue');
// } else if(diaSemana == 2){
//     data.innerHTML = ('Terça');
//     data.style.background = ('red');
// } else if(diaSemana == 3){
//     data.innerHTML = ('Quarta');
//     data.style.background = ('yellow');
// } else if(diaSemana == 4){
//     data.innerHTML = ('Quinta');
//     data.style.background = ('gray');
// } else if(diaSemana == 5){
//     data.innerHTML = ('Sexta');
//     data.style.background = ('green');
// } else if(diaSemana == 6){
//     data.innerHTML = ('Sabado');
//     data.style.background = ('gold');
// } else{
//     data.innerHTML = ('Data invalida');
//     data.style.background = ('white');
//     data.style.color = ('black');
// }

// //

// let numero = document.getElementById('contador');
// let contador = 0;

// while(contador < 300){
//     contador ++;
//     console.log(contador);
//     numero.innerHTML = (contador);
// }
















