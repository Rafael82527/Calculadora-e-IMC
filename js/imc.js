$("#calcular").click(function (){
    //recebendo dados da interface
    let p = parseFloat($("#peso").val());
    let a = parseFloat($("#altura").val());

    if (isNaN(p) || isNaN(a)) {
        alert("Por favor, insira valores válidos!");
        return;
    }

    //chamando a função calcular
    let resultado = calcular(p, a);

    //mostrando na interface
    
    $("#resultado").html("considerando seu peso de " + p + "kg e altura de " + a + "m, seu IMC é: " + resultado);
});

function limpar(){
    $("#p").val("");
    $("#a").val("");
    $("#p").focus();
    $("input[name='operacao']").prop("checked", false);
    $("#resultado").html("Resultado: ");
}

//função onde calcula o resultado do IMC
function calcular(p, a){
    let resultado = 0;

        resultado = p / (a * a);

    return resultado;
}