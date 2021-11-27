
function calcular (){
    let select1 = parseInt(document.getElementById('seleciona-temperatura1').value);
    let select2 = parseInt(document.getElementById('seleciona-temperatura2').value);
    let temperaturaC = document.getElementById('temperaturaC').value; 
    let resultado = document.getElementById('resultado');

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














    















