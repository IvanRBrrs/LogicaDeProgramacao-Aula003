<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/estilo.css?<?php echo mt_rand(1, 9) ?>">
    <title>Aula 003 - Logica de programação - Exercicio - 001</title>
</head>
<body>
    <div class="caixa">
        <h2>Conversor de temperatura</h2>
        </br>
        <label>Temperatura em</label>
        <select id="seleciona-temperatura1">
            <option value="0">Kelvin</option>
            <option value="1">Fahrenheit</option>
            <option value="2">Celsius</option>
        </select>
        <input type="text" name="temperatura" id="temperaturaC" maxlength="4">
        <label>para</label>
        <select id="seleciona-temperatura2">
            <option value="0">Kelvin</option>
            <option value="1">Fahrenheit</option>
            <option value="2">Celsius</option>
        </select>
        <input type="submit" onclick="calcular()" name="converter" value="converter" id="converter">
        <div id="dot">.</div>
        <div id="resultado">Resultado:</div>
    </div>    

    <script type="text/javascript" src="js/javascript.js?<?php echo mt_rand(1, 100) ?>"></script>
</body>
</html>





